'use client';

import { Fragment, useEffect, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
    { href: '/team', label: 'Team' },
    { href: '/solution', label: 'Solution' },
    { href: '/pricing', label: 'Pricing' },
];

export default function Header() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    // close mobile menu on route change
    useEffect(() => setOpen(false), [pathname]);

    // lock body scroll while menu open
    useEffect(() => {
        if (!open) return;
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = '';
        };
    }, [open]);

    return (
        <header className="fixed inset-x-0 top-0 z-50">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:py-4">
                {/* Logo */}
                <Link href="/" className="text-lg font-semibold">
                    ✨ Trusted
                </Link>

                {/* Desktop nav */}
                <nav className="hidden items-center md:flex">
                    {links.map((l) => (
                        <Link
                            key={l.href}
                            href={l.href}
                            className="ml-6 text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                        >
                            {l.label}
                        </Link>
                    ))}
                    <Link
                        href="/onboard"
                        className="ml-8 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-indigo-700"
                    >
                        Request Access
                    </Link>
                </nav>

                {/* Mobile hamburger */}
                <button
                    onClick={() => setOpen(true)}
                    className="md:hidden rounded-md p-2 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
                    aria-label="Open menu"
                >
                    <Bars3Icon className="h-6 w-6" />
                </button>
            </div>

            {/* Mobile full-screen menu */}
            <Transition show={open} as={Fragment}>
                <Dialog as="div" className="relative z-40 md:hidden" onClose={setOpen}>
                    {/* blurred backdrop */}
                    <Transition.Child
                        as={Fragment}
                        enter="duration-200 ease-out"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="duration-150 ease-in"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-white/80 backdrop-blur-lg dark:bg-gray-900/70" />
                    </Transition.Child>

                    {/* panel */}
                    <Transition.Child
                        as={Fragment}
                        enter="duration-200 ease-out"
                        enterFrom="opacity-0 -translate-y-4"
                        enterTo="opacity-100 translate-y-0"
                        leave="duration-150 ease-in"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 -translate-y-4"
                    >
                        <Dialog.Panel className="fixed inset-0 px-6 py-6">
                            <div className="flex items-center justify-between">
                                <Link href="/" className="text-lg font-semibold">
                                    ✨ Trusted
                                </Link>
                                <button
                                    onClick={() => setOpen(false)}
                                    className="rounded-md p-2 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
                                    aria-label="Close menu"
                                >
                                    <XMarkIcon className="h-6 w-6" />
                                </button>
                            </div>

                            <div className="mt-10 flex flex-col space-y-6">
                                {links.map((l) => (
                                    <Link
                                        key={l.href}
                                        href={l.href}
                                        className="block text-lg font-medium text-gray-900 dark:text-gray-100"
                                    >
                                        {l.label}
                                    </Link>
                                ))}
                                <Link
                                    href="/onboard"
                                    className="mt-6 w-full rounded-lg bg-indigo-600 px-4 py-3 text-center text-base font-semibold text-white shadow hover:bg-indigo-700"
                                >
                                    Request Access
                                </Link>
                            </div>
                        </Dialog.Panel>
                    </Transition.Child>
                </Dialog>
            </Transition>
        </header>
    );
}
