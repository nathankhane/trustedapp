"use client";
import { useCalculatorStore } from '@/store/calculator-store';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

export default function Toggle() {
    const { mode, setMode } = useCalculatorStore();

    return (
        <div className="flex items-center justify-center space-x-4 mb-8">
            <Label
                htmlFor="mode-toggle"
                className={`text-sm font-medium transition-colors ${mode === 'simple' ? 'text-foreground' : 'text-muted-foreground'
                    }`}
            >
                Simple
            </Label>
            <Switch
                id="mode-toggle"
                checked={mode === 'advanced'}
                onCheckedChange={(checked: boolean) => setMode(checked ? 'advanced' : 'simple')}
                className="data-[state=checked]:bg-primary"
            />
            <Label
                htmlFor="mode-toggle"
                className={`text-sm font-medium transition-colors ${mode === 'advanced' ? 'text-foreground' : 'text-muted-foreground'
                    }`}
            >
                Advanced
            </Label>
        </div>
    );
} 