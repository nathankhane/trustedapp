#!/usr/bin/env bash
set -e

echo "🏗️  TrustedApp v1 Archive Script"
echo "================================="

# Ensure clean tree
if [ -n "$(git status --porcelain)" ]; then
  echo "❗️ Working tree is dirty. Commit or stash first." && exit 1
fi

# 1️⃣ Final commit message placeholder
printf "Optional final commit message for v1 (or leave empty): "
read -r MSG
if [ -n "$MSG" ]; then
  git commit --allow-empty -m "$MSG"
  git push origin HEAD
  echo "✅ Final commit pushed"
fi

# 2️⃣ Tag + push
echo "🏷️  Creating v1.0 tag..."
git tag -a v1.0 -m "TrustedApp marketing site – original beta"
git push origin v1.0
echo "✅ Tag v1.0 created and pushed"

# 3️⃣ Archive branch
echo "🌿 Creating archive/v1 branch..."
git branch archive/v1
git push -u origin archive/v1
echo "✅ Branch archive/v1 created and pushed"

echo ""
echo "✅ v1 snapshot complete!"
echo "   📌 Tag: v1.0"
echo "   🌿 Branch: archive/v1"
echo ""
echo "Next steps:"
echo "1. Create a new Vercel project pointing at branch 'archive/v1'"
echo "2. Set up domain: v1.trustedapp-demo.vercel.app"
echo "3. Configure environment variables and spending limits"
echo ""
echo "See docs/ARCHIVE_GUIDE.md for detailed instructions." 