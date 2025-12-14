// src/components/Dropdown.tsx
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

    // 🔁 Update button width to fit its text (responsive to selection)
    const updateButtonWidth = useCallback(() => {
        if (!buttonRef.current) return;

        // Force intrinsic sizing: temporarily remove fixed width
        const btn = buttonRef.current;
        const originalWidth = btn.style.width;
        btn.style.width = "fit-content";
        const intrinsicWidth = btn.getBoundingClientRect().width;
        btn.style.width = originalWidth || "";

        // Set min-width so it never shrinks below intrinsic size
        // (but allow growth if selected text is longer)
        btn.style.minWidth = `${intrinsicWidth}px`;
    }, []);

    // 📏 Compute dropdown width = max(button width, widest option width)
    const updateDropdownWidth = useCallback(() => {
        if (!buttonRef.current || !popoverRef.current) return;

        const btnWidth = buttonRef.current.getBoundingClientRect().width;

        // Create temp container to measure max option width
        const temp = document.createElement("div");
        Object.assign(temp.style, {
            position: "fixed",
            visibility: "hidden",
            whiteSpace: "nowrap",
            font: getComputedStyle(buttonRef.current).font,
            fontSize: getComputedStyle(buttonRef.current).fontSize,
            fontFamily: getComputedStyle(buttonRef.current).fontFamily,
            padding: "0", // we'll add option padding separately
        });

        // Clone option style to get padding
        const sampleOption = document.createElement("button");
        sampleOption.className = "dropdown-option";
        sampleOption.textContent = "M";
        temp.appendChild(sampleOption);
        document.body.appendChild(temp);
        const optionStyle = getComputedStyle(sampleOption);
        const horizPad =
            parseFloat(optionStyle.paddingLeft) +
            parseFloat(optionStyle.paddingRight);
        document.body.removeChild(temp);

        // Now measure option texts
        let maxOptionWidth = 0;
        choices.forEach((choice) => {
            const span = document.createElement("span");
            span.textContent = choice;
            Object.assign(span.style, {
                font: optionStyle.font,
                fontSize: optionStyle.fontSize,
                fontFamily: optionStyle.fontFamily,
                whiteSpace: "nowrap",
            });
            temp.appendChild(span);
            document.body.appendChild(temp);
            maxOptionWidth = Math.max(
                maxOptionWidth,
                span.getBoundingClientRect().width
            );
            document.body.removeChild(temp);
        });

        const requiredWidth = Math.max(btnWidth, maxOptionWidth + horizPad);
        popoverRef.current.style.width = `${requiredWidth}px`;
    }, [choices]);

    // 🔄 Run on mount & when selected value changes
    useEffect(() => {
        updateButtonWidth();
    }, [selectedValue, updateButtonWidth]);

    // 🕵️ Watch for popover open/close
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
                onClick={updateButtonWidth} // ensure up-to-date on click
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
