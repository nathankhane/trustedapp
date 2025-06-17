import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { HeroHeader } from '../header';

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

describe('HeroHeader', () => {
    beforeEach(() => {
        // Reset window.scrollY
        Object.defineProperty(window, 'scrollY', {
            writable: true,
            value: 0,
        });
    });

    it('renders How it Works navigation link', () => {
        const { usePathname } = require('next/navigation');
        usePathname.mockReturnValue('/');

        render(<HeroHeader />);

        // Use getAllByText since there are mobile and desktop nav items
        expect(screen.getAllByText('How it Works').length).toBeGreaterThanOrEqual(1);
    });

    it('highlights How it Works link when on solution page', () => {
        const { usePathname } = require('next/navigation');
        usePathname.mockReturnValue('/solution');

        render(<HeroHeader />);

        // Check the first instance (desktop nav)
        const howItWorksLinks = screen.getAllByText('How it Works');
        const howItWorksLink = howItWorksLinks[0].closest('a');
        expect(howItWorksLink).toHaveClass('text-foreground');
        expect(howItWorksLink).toHaveClass('bg-muted');
    });

    it('does not highlight How it Works link when on other pages', () => {
        const { usePathname } = require('next/navigation');
        usePathname.mockReturnValue('/pricing');

        render(<HeroHeader />);

        // Check the first instance (desktop nav)
        const howItWorksLinks = screen.getAllByText('How it Works');
        const howItWorksLink = howItWorksLinks[0].closest('a');
        expect(howItWorksLink).toHaveClass('text-muted-foreground');
        expect(howItWorksLink).not.toHaveClass('bg-muted');
    });

    it('has correct href for How it Works link', () => {
        const { usePathname } = require('next/navigation');
        usePathname.mockReturnValue('/');

        render(<HeroHeader />);

        const howItWorksLinks = screen.getAllByText('How it Works');
        const howItWorksLink = howItWorksLinks[0].closest('a');
        expect(howItWorksLink).toHaveAttribute('href', '/solution');
    });

    it('no longer shows Solution link', () => {
        const { usePathname } = require('next/navigation');
        usePathname.mockReturnValue('/');

        render(<HeroHeader />);

        expect(screen.queryByText('Solution')).not.toBeInTheDocument();
    });

    it('maintains other navigation links', () => {
        const { usePathname } = require('next/navigation');
        usePathname.mockReturnValue('/');

        render(<HeroHeader />);

        // Check that other nav items exist (may be multiple due to responsive design)
        expect(screen.getAllByText('Team').length).toBeGreaterThanOrEqual(1);
        expect(screen.getAllByText('Pricing').length).toBeGreaterThanOrEqual(1);
        expect(screen.getAllByText('Testimonials').length).toBeGreaterThanOrEqual(1);
        expect(screen.getAllByText('Experts').length).toBeGreaterThanOrEqual(1);
        expect(screen.getAllByText('Providers').length).toBeGreaterThanOrEqual(1);
    });
}); 