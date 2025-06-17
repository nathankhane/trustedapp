"use client";

import { cn } from "@/lib/utils";

export interface PillOption<T extends string = string> {
    value: T;
    label: string;
    disabled?: boolean;
}

export interface PillToggleProps<T extends string = string> {
    options: PillOption<T>[];
    active: T;
    onActiveChange: (value: T) => void;
    className?: string;
    size?: "sm" | "md" | "lg";
    disabled?: boolean;
}

const sizeVariants = {
    sm: "px-4 py-1.5 text-xs",
    md: "px-6 py-2 text-sm",
    lg: "px-8 py-3 text-base",
};

/**
 * Standard pill-style toggle component for multi-option selection.
 * 
 * Use this component for:
 * - Mode switching (Simple/Advanced)
 * - Persona selection (Expert/Provider)
 * - View toggles (List/Grid)
 * - Tab navigation with 2-4 options
 * 
 * For binary on/off states, use the Switch component instead.
 * 
 * @example
 * ```tsx
 * <PillToggle
 *   options={[
 *     { value: "simple", label: "Simple" },
 *     { value: "advanced", label: "Advanced" }
 *   ]}
 *   active={mode}
 *   onActiveChange={setMode}
 * />
 * ```
 */
export function PillToggle<T extends string = string>({
    options,
    active,
    onActiveChange,
    className,
    size = "md",
    disabled = false,
}: PillToggleProps<T>) {
    return (
        <div
            className={cn(
                "inline-flex rounded-full bg-gray-100 dark:bg-gray-800 p-1",
                disabled && "opacity-50 cursor-not-allowed",
                className
            )}
            role="tablist"
        >
            {options.map((option) => {
                const isActive = active === option.value;
                const isDisabled = disabled || option.disabled;

                return (
                    <button
                        key={option.value}
                        onClick={() => !isDisabled && onActiveChange(option.value)}
                        disabled={isDisabled}
                        className={cn(
                            "font-medium rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
                            sizeVariants[size],
                            isActive
                                ? "bg-white dark:bg-gray-900 shadow-sm text-gray-900 dark:text-white"
                                : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white",
                            isDisabled && "cursor-not-allowed hover:text-gray-600 dark:hover:text-gray-400"
                        )}
                        aria-selected={isActive}
                        aria-disabled={isDisabled}
                        role="tab"
                        tabIndex={isActive ? 0 : -1}
                    >
                        {option.label}
                    </button>
                );
            })}
        </div>
    );
}

// Export default for easier importing
export default PillToggle; 