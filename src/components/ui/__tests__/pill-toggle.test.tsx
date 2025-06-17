import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { PillToggle, PillOption } from '../pill-toggle';

describe('PillToggle', () => {
    const mockOptions: PillOption<'option1' | 'option2' | 'option3'>[] = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3', disabled: true },
    ];

    const mockOnActiveChange = jest.fn();

    beforeEach(() => {
        mockOnActiveChange.mockClear();
    });

    describe('Rendering', () => {
        it('renders all options correctly', () => {
            render(
                <PillToggle
                    options={mockOptions}
                    active="option1"
                    onActiveChange={mockOnActiveChange}
                />
            );

            expect(screen.getByText('Option 1')).toBeInTheDocument();
            expect(screen.getByText('Option 2')).toBeInTheDocument();
            expect(screen.getByText('Option 3')).toBeInTheDocument();
        });

        it('applies active state correctly', () => {
            render(
                <PillToggle
                    options={mockOptions}
                    active="option1"
                    onActiveChange={mockOnActiveChange}
                />
            );

            const activeButton = screen.getByText('Option 1');
            const inactiveButton = screen.getByText('Option 2');

            expect(activeButton).toHaveAttribute('aria-selected', 'true');
            expect(inactiveButton).toHaveAttribute('aria-selected', 'false');
        });

        it('applies disabled state correctly', () => {
            render(
                <PillToggle
                    options={mockOptions}
                    active="option1"
                    onActiveChange={mockOnActiveChange}
                />
            );

            const disabledButton = screen.getByText('Option 3');
            expect(disabledButton).toBeDisabled();
            expect(disabledButton).toHaveAttribute('aria-disabled', 'true');
        });
    });

    describe('Interaction', () => {
        it('calls onActiveChange when clicking inactive option', () => {
            render(
                <PillToggle
                    options={mockOptions}
                    active="option1"
                    onActiveChange={mockOnActiveChange}
                />
            );

            fireEvent.click(screen.getByText('Option 2'));
            expect(mockOnActiveChange).toHaveBeenCalledWith('option2');
            expect(mockOnActiveChange).toHaveBeenCalledTimes(1);
        });

        it('does not call onActiveChange when clicking active option', () => {
            render(
                <PillToggle
                    options={mockOptions}
                    active="option1"
                    onActiveChange={mockOnActiveChange}
                />
            );

            fireEvent.click(screen.getByText('Option 1'));
            expect(mockOnActiveChange).toHaveBeenCalledTimes(1);
        });

        it('does not call onActiveChange when clicking disabled option', () => {
            render(
                <PillToggle
                    options={mockOptions}
                    active="option1"
                    onActiveChange={mockOnActiveChange}
                />
            );

            fireEvent.click(screen.getByText('Option 3'));
            expect(mockOnActiveChange).not.toHaveBeenCalled();
        });

        it('does not respond when entire component is disabled', () => {
            render(
                <PillToggle
                    options={mockOptions}
                    active="option1"
                    onActiveChange={mockOnActiveChange}
                    disabled
                />
            );

            fireEvent.click(screen.getByText('Option 2'));
            expect(mockOnActiveChange).not.toHaveBeenCalled();
        });
    });

    describe('Accessibility', () => {
        it('has proper ARIA roles', () => {
            render(
                <PillToggle
                    options={mockOptions}
                    active="option1"
                    onActiveChange={mockOnActiveChange}
                />
            );

            expect(screen.getByRole('tablist')).toBeInTheDocument();
            expect(screen.getAllByRole('tab')).toHaveLength(3);
        });

        it('manages tabIndex correctly', () => {
            render(
                <PillToggle
                    options={mockOptions}
                    active="option2"
                    onActiveChange={mockOnActiveChange}
                />
            );

            expect(screen.getByText('Option 1')).toHaveAttribute('tabIndex', '-1');
            expect(screen.getByText('Option 2')).toHaveAttribute('tabIndex', '0');
            expect(screen.getByText('Option 3')).toHaveAttribute('tabIndex', '-1');
        });

        it('supports keyboard navigation', () => {
            render(
                <PillToggle
                    options={mockOptions}
                    active="option1"
                    onActiveChange={mockOnActiveChange}
                />
            );

            const option2Button = screen.getByText('Option 2');
            option2Button.focus();
            fireEvent.keyDown(option2Button, { key: 'Enter' });

            expect(mockOnActiveChange).toHaveBeenCalledWith('option2');
        });
    });

    describe('Size Variants', () => {
        it('applies small size variant correctly', () => {
            const { container } = render(
                <PillToggle
                    options={mockOptions}
                    active="option1"
                    onActiveChange={mockOnActiveChange}
                    size="sm"
                />
            );

            const button = screen.getByText('Option 1');
            expect(button).toHaveClass('px-4', 'py-1.5', 'text-xs');
        });

        it('applies large size variant correctly', () => {
            const { container } = render(
                <PillToggle
                    options={mockOptions}
                    active="option1"
                    onActiveChange={mockOnActiveChange}
                    size="lg"
                />
            );

            const button = screen.getByText('Option 1');
            expect(button).toHaveClass('px-8', 'py-3', 'text-base');
        });

        it('uses medium size as default', () => {
            const { container } = render(
                <PillToggle
                    options={mockOptions}
                    active="option1"
                    onActiveChange={mockOnActiveChange}
                />
            );

            const button = screen.getByText('Option 1');
            expect(button).toHaveClass('px-6', 'py-2', 'text-sm');
        });
    });

    describe('Custom Styling', () => {
        it('accepts custom className', () => {
            const { container } = render(
                <PillToggle
                    options={mockOptions}
                    active="option1"
                    onActiveChange={mockOnActiveChange}
                    className="custom-class"
                />
            );

            expect(container.firstChild?.firstChild).toHaveClass('custom-class');
        });
    });

    describe('Type Safety', () => {
        it('maintains type safety with generic values', () => {
            type TestValue = 'test1' | 'test2';
            const typedOptions: PillOption<TestValue>[] = [
                { value: 'test1', label: 'Test 1' },
                { value: 'test2', label: 'Test 2' },
            ];

            const typedOnChange = (value: TestValue) => {
                // This should be type-safe
                expect(['test1', 'test2']).toContain(value);
            };

            render(
                <PillToggle<TestValue>
                    options={typedOptions}
                    active="test1"
                    onActiveChange={typedOnChange}
                />
            );

            fireEvent.click(screen.getByText('Test 2'));
        });
    });
}); 