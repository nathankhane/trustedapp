import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { HeroHeader } from '../layout/header';

// Mock usePathname hook
jest.mock('next/navigation', () => ({
    usePathname: jest.fn(),
}));

// Mock framer-motion
jest.mock('framer-motion', () => ({
    motion: {
        div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    },
}));

// Mock i18n
jest.mock('@/lib/i18n', () => ({
    t: (key: string) => {
        const translations: Record<string, string> = {
            'nav.solution': 'Solution',
            'nav.pricing': 'Pricing',
            'nav.team': 'Team',
            'nav.requestAccess': 'Request Access',
        };
        return translations[key] || key;
    },
}));

describe('HeroHeader', () => {
    beforeEach(() => {
        // Reset window.scrollY
        Object.defineProperty(window, 'scrollY', {
            writable: true,
            value: 0,
        });
    });

    it('renders Solution navigation link', () => {
        const { usePathname } = require('next/navigation');
        usePathname.mockReturnValue('/');

        render(<HeroHeader />);

        // Use getAllByText since there are mobile and desktop nav items
        expect(screen.getAllByText('Solution').length).toBeGreaterThanOrEqual(1);
    });

    it('highlights Solution link when on solution page', () => {
        const { usePathname } = require('next/navigation');
        usePathname.mockReturnValue('/solution');

        render(<HeroHeader />);

        // Check the first instance (desktop nav)
        const solutionLinks = screen.getAllByText('Solution');
        const solutionLink = solutionLinks[0].closest('a');
        expect(solutionLink).toHaveClass('text-foreground');
        expect(solutionLink).toHaveClass('bg-muted/20');
    });

    it('does not highlight Solution link when on other pages', () => {
        const { usePathname } = require('next/navigation');
        usePathname.mockReturnValue('/pricing');

        render(<HeroHeader />);

        // Check the first instance (desktop nav)
        const solutionLinks = screen.getAllByText('Solution');
        const solutionLink = solutionLinks[0].closest('a');
        expect(solutionLink).toHaveClass('text-muted-foreground');
        expect(solutionLink).not.toHaveClass('bg-muted/20');
    });

    it('has correct href for Solution link', () => {
        const { usePathname } = require('next/navigation');
        usePathname.mockReturnValue('/');

        render(<HeroHeader />);

        const solutionLinks = screen.getAllByText('Solution');
        const solutionLink = solutionLinks[0].closest('a');
        expect(solutionLink).toHaveAttribute('href', '/solution');
    });

    it('maintains core navigation links', () => {
        const { usePathname } = require('next/navigation');
        usePathname.mockReturnValue('/');

        render(<HeroHeader />);

        // Check that V2 nav items exist (may be multiple due to responsive design)
        expect(screen.getAllByText('Solution').length).toBeGreaterThanOrEqual(1);
        expect(screen.getAllByText('Pricing').length).toBeGreaterThanOrEqual(1);
        expect(screen.getAllByText('Team').length).toBeGreaterThanOrEqual(1);
        expect(screen.getAllByText('Request Access').length).toBeGreaterThanOrEqual(1);
    });

    it('renders mobile menu trigger', () => {
        const { usePathname } = require('next/navigation');
        usePathname.mockReturnValue('/');

        render(<HeroHeader />);

        // Look for the hamburger menu button
        const menuButton = screen.getByRole('button');
        expect(menuButton).toBeInTheDocument();
        expect(menuButton).toHaveClass('lg:hidden'); // Should be hidden on desktop
    });
}); 