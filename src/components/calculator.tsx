"use client";
import React from 'react';
import { useCalculatorStore } from '@/store/calculator-store';
import Toggle from './RevenueCalculator/Toggle';
import SimpleMode from './RevenueCalculator/SimpleMode';
import AdvancedMode from './RevenueCalculator/AdvancedMode';
import ResultCard from './RevenueCalculator/ResultCard';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { t } from '@/lib/i18n';

export default function RevenueCalculator() {
    const { mode } = useCalculatorStore();
    const [contentSharingEnabled, setContentSharingEnabled] = React.useState(false);

    // Store toggle state in localStorage
    React.useEffect(() => {
        const stored = localStorage.getItem('trustedapp-content-sharing');
        if (stored) {
            setContentSharingEnabled(JSON.parse(stored));
        }
    }, []);

    const handleContentSharingToggle = (enabled: boolean) => {
        setContentSharingEnabled(enabled);
        localStorage.setItem('trustedapp-content-sharing', JSON.stringify(enabled));
    };

    return (
        <div className="w-full max-w-7xl mx-auto">
            <Toggle />

            {/* Content Sharing Toggle */}
            <div className="flex items-center justify-center gap-3 mb-8 p-4 bg-card/50 rounded-xl border border-border/30">
                <Label htmlFor="content-sharing" className="text-sm font-medium">
                    {t('calculator.contentSharing')}
                </Label>
                <Switch
                    id="content-sharing"
                    checked={contentSharingEnabled}
                    onCheckedChange={handleContentSharingToggle}
                />
            </div>

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