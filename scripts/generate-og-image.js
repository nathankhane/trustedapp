const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function generateOGImage() {
    console.log('🚀 Starting OG image generation...');

    const browser = await puppeteer.launch({
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    try {
        const page = await browser.newPage();

        // Set viewport to exact OG image dimensions
        await page.setViewport({
            width: 1200,
            height: 630,
            deviceScaleFactor: 2 // For high-quality image
        });

        // Read the HTML template
        const htmlPath = path.join(__dirname, 'generate-og-image.html');
        const htmlContent = fs.readFileSync(htmlPath, 'utf8');

        // Set the HTML content
        await page.setContent(htmlContent, {
            waitUntil: 'networkidle0'
        });

        // Wait for fonts to load
        await page.evaluateHandle('document.fonts.ready');

        // Take screenshot
        const screenshotBuffer = await page.screenshot({
            type: 'png',
            fullPage: false
        });

        // Save the image
        const outputPath = path.join(__dirname, '..', 'public', 'og-image.png');
        fs.writeFileSync(outputPath, screenshotBuffer);

        console.log('✅ OG image generated successfully at:', outputPath);
        console.log('📏 Image dimensions: 1200x630px');
        console.log('🎨 Using TrustedApp brand colors and typography');

    } catch (error) {
        console.error('❌ Error generating OG image:', error);
    } finally {
        await browser.close();
    }
}

// Run the script
if (require.main === module) {
    generateOGImage().catch(console.error);
}

module.exports = { generateOGImage }; 