"use client";
import { useCalculatorStore } from '@/store/calculator-store';
import { PillToggle } from '@/components/ui/pill-toggle';

const MODE_OPTIONS = [
    { value: "simple" as const, label: "Simple" },
    { value: "advanced" as const, label: "Advanced" },
];

export default function Toggle() {
    const { mode, setMode } = useCalculatorStore();

    return (
        <div className="flex items-center justify-center mb-8">
            <PillToggle
                options={MODE_OPTIONS}
                active={mode}
                onActiveChange={setMode}
            />
        </div>
    );
} 