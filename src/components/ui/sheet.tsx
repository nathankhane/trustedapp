"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface SheetProps {
    children: React.ReactNode
}

interface SheetTriggerProps {
    children: React.ReactNode
    className?: string
}

interface SheetContentProps {
    children: React.ReactNode
    side?: "left" | "right" | "top" | "bottom"
    className?: string
}

const SheetContext = React.createContext<{
    open: boolean
    setOpen: (open: boolean) => void
} | null>(null)

export function Sheet({ children }: SheetProps) {
    const [open, setOpen] = React.useState(false)

    return (
        <SheetContext.Provider value={{ open, setOpen }}>
            {children}
            {open && (
                <div
                    className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
                    onClick={() => setOpen(false)}
                />
            )}
        </SheetContext.Provider>
    )
}

export function SheetTrigger({ children, className }: SheetTriggerProps) {
    const context = React.useContext(SheetContext)
    if (!context) throw new Error("SheetTrigger must be used within Sheet")

    return (
        <button
            className={className}
            onClick={() => context.setOpen(true)}
        >
            {children}
        </button>
    )
}

export function SheetContent({ children, side = "right", className }: SheetContentProps) {
    const context = React.useContext(SheetContext)
    if (!context) throw new Error("SheetContent must be used within Sheet")

    if (!context.open) return null

    const sideClasses = {
        left: "left-0 top-0 h-full w-3/4 max-w-sm translate-x-0",
        right: "right-0 top-0 h-full w-3/4 max-w-sm translate-x-0",
        top: "left-0 top-0 w-full h-3/4 max-h-sm translate-y-0",
        bottom: "left-0 bottom-0 w-full h-3/4 max-h-sm translate-y-0",
    }

    return (
        <div
            className={cn(
                "fixed z-50 bg-background shadow-lg transition-transform duration-300 ease-in-out",
                sideClasses[side],
                className
            )}
        >
            {children}
        </div>
    )
} 