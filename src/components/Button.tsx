// Button.tsx
import React from 'react';

// Base primitive button that supports children
interface BaseButtonProps {
    colorClass?: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    children?: React.ReactNode;
    className?: string;
}

export function BaseButton({
    colorClass = 'red',
    onClick,
    className = '',
    children,
}: BaseButtonProps) {
    return (
        <button
            className={`button button-${colorClass} ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}


// Higher-level button with icon + label (does NOT use children)
interface ButtonProps {
    buttonIcon?: string;
    buttonLabel?: string;
    colorClass?: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Button({
    buttonIcon,
    buttonLabel = '',
    colorClass = 'red',
    onClick,
}: ButtonProps) {
    return (
        <BaseButton colorClass={colorClass} onClick={onClick}>
            {buttonIcon && (
                <img src={buttonIcon} alt="" width={40} height={40} />
            )}
            {buttonLabel}
        </BaseButton>
    );
}