import React from "react";

interface RoleLayoutProps {
    children: React.ReactNode;
}

export default function RoleLayout({
    children,
}: RoleLayoutProps) {
    return (
        <div className="min-h-screen">
            {children}
        </div>
    );
} 