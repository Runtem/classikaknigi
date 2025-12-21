import React, { useRef, useState, useEffect, useCallback } from "react";

interface DropdownOptionProps {
    title?: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

interface DropdownProps {
    choices: string[];
    defaultText?: string;
    onChoiceSelect?: (choice: string) => void;
    className?: string;
}

export function DropdownOption({
    title = "Example",
    onClick,
}: DropdownOptionProps) {
    return (
        <button onClick={onClick} className="dropdown-option" role="option">
            {title}
        </button>
    );
}

export default function Dropdown({
    choices,
    defaultText = "Pick an option...",
    onChoiceSelect,
    className = "",
}: DropdownProps) {
    const [selectedValue, setSelectedValue] = useState(defaultText);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const popoverRef = useRef<HTMLDivElement>(null);
    const isPopoverOpen = useRef(false);

    const updateDropdownWidth = useCallback(() => {
        if (!buttonRef.current || !popoverRef.current) return;

        const btn = buttonRef.current;
        const popover = popoverRef.current;

        // --- Measure button intrinsic width ---
        const originalWidth = btn.style.width;
        btn.style.width = "fit-content";
        const intrinsicBtnWidth = btn.getBoundingClientRect().width;
        btn.style.width = originalWidth || "";

        // --- Measure widest option ---
        let maxOptionWidth = 0;
        const temp = document.createElement("span");
        Object.assign(temp.style, {
            position: "fixed",
            visibility: "hidden",
            whiteSpace: "nowrap",
            font: getComputedStyle(btn).font,
            fontSize: getComputedStyle(btn).fontSize,
            fontFamily: getComputedStyle(btn).fontFamily,
        });
        document.body.appendChild(temp);

        choices.forEach((choice) => {
            temp.textContent = choice;
            maxOptionWidth = Math.max(
                maxOptionWidth,
                temp.getBoundingClientRect().width
            );
        });

        document.body.removeChild(temp);

        // --- Include horizontal padding from dropdown-option ---
        const firstOption = popover.querySelector(".dropdown-option");
        let horizPad = 0;
        if (firstOption) {
            const optionStyle = getComputedStyle(firstOption);
            horizPad =
                parseFloat(optionStyle.paddingLeft) +
                parseFloat(optionStyle.paddingRight);
        }

        const finalWidth = Math.max(
            intrinsicBtnWidth,
            maxOptionWidth + horizPad
        );

        // --- Apply width to button and dropdown ---
        btn.style.minWidth = `${finalWidth}px`;
        popover.style.width = `${finalWidth}px`;
    }, [choices]);

    useEffect(() => {
        updateDropdownWidth();
    }, [selectedValue, updateDropdownWidth]);

    useEffect(() => {
        const popover = popoverRef.current;
        if (!popover) return;

        const observer = new MutationObserver(() => {
            const isOpen = popover.matches(":popover-open");
            if (isOpen && !isPopoverOpen.current) {
                isPopoverOpen.current = true;
                requestAnimationFrame(() => {
                    updateDropdownWidth();
                });
            } else if (!isOpen && isPopoverOpen.current) {
                isPopoverOpen.current = false;
            }
        });

        observer.observe(popover.parentElement!, {
            attributes: true,
            attributeFilter: ["popover"],
        });

        return () => observer.disconnect();
    }, [updateDropdownWidth]);

    return (
        <div className={`base-dropdown ${className}`}>
            <button
                ref={buttonRef}
                className="dropdown-button"
                popoverTarget="dropdown-choices"
                data-anchor="dropdown"
                type="button"
                aria-haspopup="listbox"
                aria-expanded={isPopoverOpen.current}
                onClick={updateDropdownWidth}
            >
                <p className="dropdown-title">{selectedValue}</p>
                <img
                    src="/icons/arrow-down.png"
                    alt=""
                    width={24}
                    height={24}
                    className="dropdown-arrow"
                />
            </button>

            <div
                ref={popoverRef}
                id="dropdown-choices"
                popover="auto"
                className="dropdown-choices"
                role="listbox"
                style={{ position: "fixed", zIndex: 1000 }}
            >
                {choices.map((choice) => (
                    <DropdownOption
                        key={choice}
                        title={choice}
                        onClick={(e) => {
                            e.stopPropagation();
                            setSelectedValue(choice);
                            onChoiceSelect?.(choice);
                            popoverRef.current?.hidePopover?.();
                        }}
                    />
                ))}
            </div>
        </div>
    );
}
