import { render, screen, fireEvent } from '@testing-library/react';
import { useRouter, useSearchParams } from 'next/navigation';
import HeroTabs from '../HeroTabs';

// Mock next/navigation
jest.mock('next/navigation', () => ({
    useRouter: jest.fn(),
    useSearchParams: jest.fn(),
}));

describe('HeroTabs', () => {
    const mockRouter = {
        replace: jest.fn(),
    };

    beforeEach(() => {
        (useRouter as jest.Mock).mockReturnValue(mockRouter);
        (useSearchParams as jest.Mock).mockReturnValue(new URLSearchParams());
    });

    it('renders with provider as default persona', () => {
        render(<HeroTabs />);

        expect(screen.getByText('Book insights from users who live in your product.')).toBeInTheDocument();
        expect(screen.getByText('Start as Provider')).toBeInTheDocument();
    });

    it('switches to expert persona when expert tab is clicked', () => {
        render(<HeroTabs />);

        const expertTab = screen.getByRole('tab', { name: 'Expert' });
        fireEvent.click(expertTab);

        expect(screen.getByText('Turn expertise into recurring revenue.')).toBeInTheDocument();
        expect(screen.getByText('Sign up as Expert')).toBeInTheDocument();
        expect(mockRouter.replace).toHaveBeenCalledWith('/?persona=expert', { scroll: false });
    });

    it('initializes with expert persona when URL param is set', () => {
        (useSearchParams as jest.Mock).mockReturnValue(new URLSearchParams('?persona=expert'));

        render(<HeroTabs />);

        expect(screen.getByText('Turn expertise into recurring revenue.')).toBeInTheDocument();
        expect(screen.getByText('Sign up as Expert')).toBeInTheDocument();
    });
}); 