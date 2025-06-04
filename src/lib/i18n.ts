// Simple i18n helper for TrustedApp
// TODO: Replace with proper i18n library when internationalization is needed

const strings = {
    // Navigation
    'nav.team': 'Team',
    'nav.solution': 'Solution',
    'nav.pricing': 'Pricing',
    'nav.testimonials': 'Testimonials',
    'nav.experts': 'Experts',
    'nav.providers': 'Providers',
    'nav.login': 'Login',
    'nav.signup': 'Sign Up',
    'nav.requestAccess': 'Request Access',

    // Heroes
    'hero.experts.title': 'Get paid for your stack',
    'hero.providers.title': 'Interview power-users in 24 hrs',
    'hero.home.title': 'User-powered insight on tap',
    'hero.home.subtitle': 'A private marketplace connecting SaaS teams with the people who already run their tool-stack',

    // Common
    'common.loading': 'Loading...',
    'common.error': 'Error',
    'common.success': 'Success',
    'common.cancel': 'Cancel',
    'common.save': 'Save',
    'common.close': 'Close',

    // Waitlist
    'waitlist.title': 'Join the wait-list',
    'waitlist.success': 'Successfully joined the waitlist!',
    'waitlist.error': 'Failed to join waitlist. Please try again.',

    // Calculator
    'calculator.title': 'Revenue Calculator',
    'calculator.contentSharing': 'Content Sharing Revenue',
} as const;

export type StringKey = keyof typeof strings;

export function t(key: StringKey): string {
    return strings[key] || key;
} 