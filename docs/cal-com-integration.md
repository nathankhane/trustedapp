# Cal.com Integration Guide

## Overview
This document outlines the migration from Calendly to Cal.com booking system across the TrustedApp platform.

## Changes Made (December 2024)

### 1. Link Replacements
All instances of `https://calendly.com/trustedapp/30min` have been replaced with `https://cal.com/trustedapp/30min` in the following files:

#### Components Updated:
- **`src/components/PricingTable.tsx`** - Enterprise tier "Contact Sales" button
- **`src/components/HeroTabs.tsx`** - Both Expert and Provider CTA buttons
- **`src/components/marketing/call-to-action.tsx`** - Request Access/Get Started button
- **`src/app/solution/page.tsx`** - Solution page CTA button
- **`src/components/layout/footer.tsx`** - Contact Us and Help navigation links

#### Documentation Updated:
- **`docs/TrustedApp-Dev-CheatSheet.md`** - Updated example code snippets

### 2. Call-to-Action Streamlining
The main CTA section was simplified to remove friction:

**Before:**
- Email input field (work email/company email)
- Form submission process
- "Request Access" button

**After:**
- Direct link to Cal.com booking
- Removed email collection step
- Immediate booking flow

### 3. Footer Navigation
Updated footer navigation to direct users to booking rather than static pages:
- **Contact Us** → Cal.com booking link
- **Help** → Cal.com booking link (previously linked to FAQ section)

## Implementation Details

### Button Styling
All Cal.com links maintain consistent styling:
```tsx
<Link 
  href="https://cal.com/trustedapp/30min" 
  target="_blank" 
  rel="noopener noreferrer"
  className="..."
>
  <Button>Request Access</Button>
</Link>
```

### Persona-Based CTAs
The call-to-action maintains dynamic text based on selected persona:
- **Expert**: "Request Access"
- **Provider**: "Get Started"

## Benefits

1. **Reduced Friction**: Direct booking without email forms
2. **Consistent Flow**: All contact points lead to the same booking system
3. **Better UX**: Immediate scheduling vs. multi-step processes
4. **Centralized Bookings**: All leads funnel through Cal.com

## Testing Checklist

- [ ] Homepage Expert CTA links to Cal.com
- [ ] Homepage Provider CTA links to Cal.com
- [ ] Pricing page Enterprise button links to Cal.com
- [ ] Solution page CTA links to Cal.com
- [ ] Footer Contact Us links to Cal.com
- [ ] Footer Help links to Cal.com
- [ ] All links open in new tab
- [ ] Button styling remains consistent

## Future Considerations

- Monitor booking conversion rates vs. previous email collection
- Consider adding Cal.com widget embedding for inline booking
- Track user flow from different entry points
- Evaluate need for different booking links for different personas

---
*Last updated: December 2024* 