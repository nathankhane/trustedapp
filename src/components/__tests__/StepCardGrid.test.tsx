import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { StepCardGrid } from '../StepCardGrid';

// Mock framer-motion to avoid issues with animations in tests
jest.mock('framer-motion', () => ({
    motion: {
        div: ({ children, whileInView, ...props }: any) => <div {...props}>{children}</div>,
        section: ({ children, whileInView, ...props }: any) => <section {...props}>{children}</section>,
    },
}));

describe('StepCardGrid', () => {
    describe('Experts only mode', () => {
        it('renders 4 expert cards', () => {
            render(<StepCardGrid role="experts" />);

            expect(screen.getByText('Apply & Verify')).toBeInTheDocument();
            expect(screen.getByText('Pick Offers')).toBeInTheDocument();
            expect(screen.getByText('Record Insight')).toBeInTheDocument();
            expect(screen.getByText('Get Paid on Repeat')).toBeInTheDocument();
        });

        it('shows experts heading', () => {
            render(<StepCardGrid role="experts" />);

            expect(screen.getByText('How Experts Earn')).toBeInTheDocument();
        });
    });

    describe('Providers only mode', () => {
        it('renders 4 provider cards', () => {
            render(<StepCardGrid role="providers" />);

            expect(screen.getByText('Post Request')).toBeInTheDocument();
            expect(screen.getByText('Match & Meet')).toBeInTheDocument();
            expect(screen.getByText('Actionable Report')).toBeInTheDocument();
            expect(screen.getByText('Repurpose Freely')).toBeInTheDocument();
        });

        it('shows providers heading', () => {
            render(<StepCardGrid role="providers" />);

            expect(screen.getByText('How Providers Get Insights')).toBeInTheDocument();
        });
    });

    describe('Both roles mode (default)', () => {
        it('renders both expert and provider content', () => {
            render(<StepCardGrid role="both" />);

            // Should have both role headings (might be multiple due to responsive design)
            expect(screen.getAllByText('For Experts').length).toBeGreaterThanOrEqual(1);
            expect(screen.getAllByText('For Providers').length).toBeGreaterThanOrEqual(1);

            // Should have all step cards (might be multiple due to responsive design)
            expect(screen.getAllByText('Apply & Verify').length).toBeGreaterThanOrEqual(1);
            expect(screen.getAllByText('Post Request').length).toBeGreaterThanOrEqual(1);
        });

        it('shows tab interface', () => {
            render(<StepCardGrid role="both" />);

            // Should show tab buttons
            expect(screen.getByRole('tab', { name: /for experts/i })).toBeInTheDocument();
            expect(screen.getByRole('tab', { name: /for providers/i })).toBeInTheDocument();
        });

        it('switches tabs correctly', async () => {
            render(<StepCardGrid role="both" />);

            const expertsTab = screen.getByRole('tab', { name: /for experts/i });
            const providersTab = screen.getByRole('tab', { name: /for providers/i });

            // Initially experts tab should be active
            expect(expertsTab).toHaveAttribute('aria-selected', 'true');
            expect(providersTab).toHaveAttribute('aria-selected', 'false');

            // Click providers tab
            fireEvent.click(providersTab);

            await waitFor(() => {
                expect(providersTab).toHaveAttribute('aria-selected', 'true');
                expect(expertsTab).toHaveAttribute('aria-selected', 'false');
            });
        });

        it('has correct aria attributes for accessibility', () => {
            render(<StepCardGrid role="both" />);

            const expertsTab = screen.getByRole('tab', { name: /for experts/i });
            const providersTab = screen.getByRole('tab', { name: /for providers/i });

            expect(expertsTab).toHaveAttribute('aria-selected');
            expect(providersTab).toHaveAttribute('aria-selected');
            expect(expertsTab).toHaveAttribute('role', 'tab');
            expect(providersTab).toHaveAttribute('role', 'tab');
        });

        it('displays step cards for active tab', () => {
            render(<StepCardGrid role="both" />);

            // Should see expert steps initially
            expect(screen.getByText('Apply & Verify')).toBeInTheDocument();
            expect(screen.getByText('Set Your Terms')).toBeInTheDocument();

            // Switch to providers
            const providersTab = screen.getByRole('tab', { name: /for providers/i });
            fireEvent.click(providersTab);

            // Should see provider steps
            expect(screen.getByText('Post a Brief')).toBeInTheDocument();
            expect(screen.getByText('Instant Matchboard')).toBeInTheDocument();
        });
    });

    describe('Custom steps', () => {
        it('renders custom steps when provided', () => {
            const TestIcon = () => <svg>TestIcon</svg>;
            const customSteps = {
                experts: [
                    {
                        title: 'Custom Expert Step',
                        body: 'Custom expert description',
                        icon: TestIcon as any, // Type assertion for test purposes
                    },
                ],
                providers: [
                    {
                        title: 'Custom Provider Step',
                        body: 'Custom provider description',
                        icon: TestIcon as any, // Type assertion for test purposes
                    },
                ],
            };

            render(<StepCardGrid role="both" steps={customSteps} />);

            // Use getAllByText since responsive design may show multiple instances
            expect(screen.getAllByText('Custom Expert Step').length).toBeGreaterThanOrEqual(1);
            expect(screen.getAllByText('Custom expert description').length).toBeGreaterThanOrEqual(1);
        });
    });

    describe('Anchor links', () => {
        it('has correct IDs for anchor linking', () => {
            render(<StepCardGrid role="both" />);

            expect(document.getElementById('experts-flow')).toBeInTheDocument();
            expect(document.getElementById('providers-flow')).toBeInTheDocument();
        });
    });
}); 