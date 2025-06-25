# Team Collaboration Guide

## Overview
This guide covers best practices for team collaboration on the TrustedApp project, including platform compatibility, project sharing, and common troubleshooting.

## Platform Compatibility Issues

### Tailwind CSS v4 Oxide Engine
**Problem:** Tailwind CSS v4 uses the new Oxide engine (written in Rust) that compiles to platform-specific native binaries.

**Symptoms:**
- `zsh: command not found: pnpm` errors on different platforms
- Binary compatibility issues when sharing zipped projects
- Platform-specific `.node` files causing startup failures

**Root Cause:**
- Oxide engine creates platform-specific binaries (e.g., `tailwindcss-oxide.darwin-arm64.node`)
- These binaries are stored in `node_modules/.pnpm/@tailwindcss+oxide-darwin-arm64/`
- Zipping projects with `node_modules` includes incompatible binaries

### Solution: Clean Project Sharing

#### ✅ **Recommended: Git-Based Sharing**
```bash
# Team member clones fresh repo
git clone https://github.com/nathankhane/trustedapp.git
cd trustedapp

# Install platform-appropriate dependencies
pnpm install  # or npm install / yarn install

# Start development
pnpm dev
```

#### ✅ **Alternative: Clean Zip Files**
When git isn't available, create clean zip files:

```bash
# Create clean zip excluding platform-specific files
zip -r trustedapp-clean.zip . \
  -x "node_modules/*" \
  -x ".next/*" \
  -x ".vercel/*" \
  -x "*.log" \
  -x ".env.local" \
  -x ".DS_Store" \
  -x "*.tmp" \
  -x ".cache/*" \
  -x "dist/*" \
  -x "build/*"
```

**Team Member Setup from Clean Zip:**
1. Extract zip file
2. Open terminal in project directory
3. Run `pnpm install` (installs platform-specific binaries)
4. Run `pnpm dev`

## Development Environment Setup

### Prerequisites by Platform

#### macOS
```bash
# Install Homebrew (if not already installed)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Add Homebrew to PATH
eval "$(/opt/homebrew/bin/brew shellenv)"

# Install Node.js
brew install node

# Install pnpm globally
npm install -g pnpm
```

#### Windows
```bash
# Using Chocolatey (recommended)
choco install nodejs pnpm

# Or using winget
winget install OpenJS.NodeJS
npm install -g pnpm
```

#### Linux
```bash
# Ubuntu/Debian
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs
npm install -g pnpm

# CentOS/RHEL
curl -fsSL https://rpm.nodesource.com/setup_lts.x | sudo bash -
sudo yum install -y nodejs
npm install -g pnpm
```

### Package Manager Priority
1. **pnpm** (preferred) - Faster, more efficient
2. **npm** (fallback) - Universal compatibility  
3. **yarn** (alternative) - If team prefers

## Common Issues & Solutions

### Issue: "command not found: pnpm"
**Cause:** pnpm not installed or not in PATH

**Solutions:**
```bash
# Option 1: Install pnpm globally
npm install -g pnpm

# Option 2: Use npx (temporary)
npx pnpm install
npx pnpm dev

# Option 3: Use npm instead
npm install
npm run dev
```

### Issue: Platform-specific binary errors
**Symptoms:**
- "Binary was compiled for different platform"
- Oxide engine startup failures
- Native module incompatibility

**Solution:**
```bash
# Delete node_modules and lock files
rm -rf node_modules pnpm-lock.yaml

# Clean install for current platform
pnpm install

# Verify installation
pnpm dev
```

### Issue: Permission errors (macOS/Linux)
**Symptoms:**
- `EACCES: permission denied`
- Global package installation failures

**Solutions:**
```bash
# Option 1: Fix npm permissions
sudo chown -R $(whoami) $(npm config get prefix)/{lib/node_modules,bin,share}

# Option 2: Use node version manager (recommended)
# Install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Install and use latest LTS Node.js
nvm install --lts
nvm use --lts
```

## Project Sharing Best Practices

### ✅ **Do's**
- Share via Git (clone → install → run)
- Create clean zip files without `node_modules`
- Include clear setup instructions
- Document platform-specific requirements
- Use `.gitignore` to exclude build artifacts
- Keep dependency versions consistent with lock files

### ❌ **Don'ts**
- Don't zip projects with `node_modules` included
- Don't share platform-specific binaries
- Don't ignore lock files (`pnpm-lock.yaml`, `package-lock.json`)
- Don't share `.env.local` or sensitive files
- Don't assume all team members use the same OS/architecture

## File Exclusion Patterns

### Always Exclude When Sharing:
```bash
# Dependencies (platform-specific)
node_modules/

# Build artifacts
.next/
dist/
build/
.cache/

# Environment files
.env.local
.env.*.local

# Logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# OS-specific
.DS_Store
Thumbs.db

# Deployment
.vercel/
```

### Include for Team Collaboration:
```bash
# Source code
src/

# Configuration
package.json
pnpm-lock.yaml  # Lock file for reproducible installs
next.config.ts
tailwind.config.ts
tsconfig.json

# Documentation
docs/
README.md

# Public assets
public/
```

## Development Workflow

### Initial Setup (New Team Member)
1. **Clone repository**
   ```bash
   git clone https://github.com/nathankhane/trustedapp.git
   cd trustedapp
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start development server**
   ```bash
   pnpm dev
   ```

4. **Verify setup**
   - Visit `http://localhost:3000`
   - Check for compilation errors
   - Test dark/light mode toggle

### Daily Development
1. **Pull latest changes**
   ```bash
   git pull origin main
   ```

2. **Install new dependencies** (if package.json changed)
   ```bash
   pnpm install
   ```

3. **Start development**
   ```bash
   pnpm dev
   ```

### Before Sharing Changes
1. **Test build**
   ```bash
   pnpm build
   ```

2. **Check linting**
   ```bash
   pnpm lint
   ```

3. **Commit and push**
   ```bash
   git add .
   git commit -m "descriptive message"
   git push origin main
   ```

## Troubleshooting Checklist

When experiencing issues, try these steps in order:

1. **Verify Node.js version**
   ```bash
   node --version  # Should be 18+ for Next.js 15
   ```

2. **Clear and reinstall dependencies**
   ```bash
   rm -rf node_modules pnpm-lock.yaml
   pnpm install
   ```

3. **Clear Next.js cache**
   ```bash
   rm -rf .next
   pnpm dev
   ```

4. **Check for platform-specific issues**
   ```bash
   # Look for platform-specific binaries
   find node_modules -name "*darwin*" -o -name "*win32*" -o -name "*linux*"
   ```

5. **Verify git status**
   ```bash
   git status
   git log --oneline -5
   ```

## Emergency Fallbacks

### If pnpm fails completely:
```bash
# Use npm instead
npm install
npm run dev
```

### If Node.js is missing:
```bash
# Quick install via package manager
# macOS: brew install node
# Windows: winget install OpenJS.NodeJS  
# Linux: apt install nodejs npm
```

### If all else fails:
1. Download clean zip from GitHub releases
2. Extract to new folder
3. Follow setup instructions from scratch
4. Contact team lead with error details

---

**Last Updated:** December 2024  
**Next Review:** When Next.js or Tailwind major versions change 