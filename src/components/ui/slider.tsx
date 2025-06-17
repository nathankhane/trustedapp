import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "@/lib/utils";

type SliderProps = React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> & {
    value?: number[];
    defaultValue?: number[];
    onValueChange?: (value: number[]) => void;
};

export const Slider = React.forwardRef<React.ElementRef<typeof SliderPrimitive.Root>, SliderProps>(
    ({ className, value, defaultValue, onValueChange, min = 0, max = 100, step = 1, ...props }, ref) => (
        <SliderPrimitive.Root
            ref={ref}
            className={cn(
                "relative flex w-full touch-none select-none items-center h-6",
                className
            )}
            min={min}
            max={max}
            step={step}
            value={value}
            defaultValue={defaultValue}
            onValueChange={onValueChange}
            {...props}
        >
            <SliderPrimitive.Track className="bg-muted relative grow rounded-full h-2">
                <SliderPrimitive.Range className="absolute h-full rounded-full bg-blue-500" />
            </SliderPrimitive.Track>
            <SliderPrimitive.Thumb className="block w-5 h-5 bg-blue-600 border-2 border-white rounded-full shadow transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400" />
        </SliderPrimitive.Root>
    )
);
Slider.displayName = "Slider"; 