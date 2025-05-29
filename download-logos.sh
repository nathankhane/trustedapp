#!/bin/bash

# Create directories if they don't exist
mkdir -p public/images/providers
mkdir -p public/logos

# Download logos for providers page
curl -o public/images/providers/nvidia-logo.png "https://img.logo.dev/api?format=png&logo=nvidia"
curl -o public/images/providers/github-logo.png "https://img.logo.dev/api?format=png&logo=github"
curl -o public/images/providers/figma-logo.png "https://img.logo.dev/api?format=png&logo=figma"
curl -o public/images/providers/notion-logo.png "https://img.logo.dev/api?format=png&logo=notion"
curl -o public/images/providers/linear-logo.png "https://img.logo.dev/api?format=png&logo=linear"
curl -o public/images/providers/vercel-logo.png "https://img.logo.dev/api?format=png&logo=vercel"
curl -o public/images/providers/slack-logo.png "https://img.logo.dev/api?format=png&logo=slack"

# Download logos for experts page
curl -o public/logos/bild.jpeg "https://img.logo.dev/api?format=png&logo=bild"
curl -o "public/logos/adobe logo.jpeg" "https://img.logo.dev/api?format=png&logo=adobe"
curl -o public/logos/snap.jpeg "https://img.logo.dev/api?format=png&logo=snapchat"
curl -o public/logos/stripe.jpeg "https://img.logo.dev/api?format=png&logo=stripe"
curl -o "public/logos/Trusted App PFP.png" "https://img.logo.dev/api?format=png&logo=trusted"

echo "All logos downloaded successfully." 