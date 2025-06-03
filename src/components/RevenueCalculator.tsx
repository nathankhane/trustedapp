"use client";
import { useCalculatorStore } from '@/store/calculator-store';
import Toggle from './RevenueCalculator/Toggle';
import SimpleMode from './RevenueCalculator/SimpleMode';
import AdvancedMode from './RevenueCalculator/AdvancedMode';
import ResultCard from './RevenueCalculator/ResultCard';

export default function RevenueCalculator() {
    const { mode } = useCalculatorStore();

    return (
        <div className="w-full max-w-7xl mx-auto">
            <Toggle />

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                {/* Left side - Controls */}
                <div className="space-y-8">
                    {mode === 'simple' ? <SimpleMode /> : <AdvancedMode />}
                </div>

                {/* Right side - Results */}
                <div className="lg:static">
                    <ResultCard />
                </div>
            </div>
        </div>
    );
} 