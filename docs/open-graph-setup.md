# Open Graph Setup for TrustedApp

## Overview

Open Graph (OG) tags allow social media platforms and messaging apps to display rich previews when your website link is shared. This includes:
- A preview image
- Title and description
- Website metadata

## Current Setup

### OG Image
- **Location**: `/public/og-image.png`
- **Dimensions**: 1200x630px (2400x1260 actual for high-DPI displays)
- **Format**: PNG with transparency support
- **Brand Colors**: TrustedApp palette (#7F5BFF, #14E956, #0F0F0F, #FAFAFA)

### Meta Tags
Located in `src/app/layout.tsx`:
- Standard Open Graph tags
- Twitter Card tags
- Structured data markup

## Testing Your OG Image

### Online Tools
1. **Facebook Sharing Debugger**: https://developers.facebook.com/tools/debug/
2. **Twitter Card Validator**: https://cards-dev.twitter.com/validator
3. **LinkedIn Post Inspector**: https://www.linkedin.com/post-inspector/
4. **Open Graph Check**: https://opengraphcheck.com/

### Manual Testing
1. Share your website link on:
   - iMessage
   - WhatsApp
   - Discord
   - Slack
   - Social media platforms

### Common Issues & Solutions
- **Image not updating**: Clear cache or add query parameter (`?v=2`)
- **Wrong dimensions**: Ensure 1200x630px for optimal display
- **Image not loading**: Check file path and ensure image is publicly accessible

## Regenerating the OG Image

### Using npm script (Recommended)
```bash
pnpm run generate:og
```

### Manual process
1. Edit `scripts/generate-og-image.html` to update content
2. Run `node scripts/generate-og-image.js`
3. The new image will be saved to `public/og-image.png`

### When to regenerate
- Brand/logo changes
- Tagline updates
- Major design refreshes
- Seasonal campaigns

## File Structure

```
├── public/
│   └── og-image.png          # The actual OG image
├── scripts/
│   ├── generate-og-image.html # HTML template for image
│   └── generate-og-image.js   # Puppeteer script to generate image
└── src/app/
    └── layout.tsx            # Meta tags configuration
```

## Technical Details

### Image Requirements
- **Minimum size**: 600x315px
- **Recommended size**: 1200x630px (1.91:1 aspect ratio)
- **Maximum file size**: 8MB (but aim for under 1MB)
- **Formats**: PNG, JPEG, WebP

### Meta Tag Configuration
The current setup includes:
- `og:title` - Page title
- `og:description` - Page description  
- `og:image` - Preview image URL
- `og:url` - Canonical URL
- `og:type` - Content type (website)
- `twitter:card` - Twitter card type
- `twitter:image` - Twitter preview image

## Best Practices

1. **Keep text readable**: Use high contrast and large fonts
2. **Brand consistency**: Use your brand colors and typography
3. **Clear hierarchy**: Make the main message prominent
4. **Mobile-friendly**: Consider how it looks on small screens
5. **A/B test**: Try different versions to see what performs better

## Platform-Specific Notes

### iMessage
- Shows image preview prominently
- Displays title and description below image
- Works with both PNG and JPEG

### Facebook/Meta
- Prefers 1200x630px images
- Caches aggressively (use debugger to refresh)
- Shows title, description, and domain

### Twitter/X
- Supports various card types
- `summary_large_image` recommended for hero images
- Image displays above text content

### LinkedIn
- Similar to Facebook requirements
- Professional context important
- Clear branding recommended 