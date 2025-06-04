# TrustedApp v1 Archive Guide

## Overview

This guide explains how to freeze the current TrustedApp marketing site as **v1** and create an archived version while preparing `main` for a v2 refactor.

## Why Archive v1?

- **Preserve working state**: Keep a stable snapshot of the current marketing site
- **Safe refactoring**: Allow major changes to `main` without losing the current version
- **Historical reference**: Maintain access to the original beta marketing site
- **Deployment isolation**: Run v1 and v2 simultaneously on different domains

## Archive Components

### 1. Git Tag: `v1.0`
- Permanent snapshot of the codebase at archive time
- Immutable reference point for the original beta

### 2. Git Branch: `archive/v1`
- Live branch for any v1 hotfixes or maintenance
- Source for the archived Vercel deployment

### 3. Archive Script: `scripts/archive_v1.sh`
- Automated workflow to create tag and branch
- Safety checks to prevent archiving dirty state
- Optional final commit before archiving

## How to Archive v1

### Prerequisites
- Clean git working tree (no uncommitted changes)
- All desired changes pushed to `main`
- Team consensus that current state should be v1

### Step 1: Run Archive Script
```bash
npm run archive:v1
```

The script will:
1. Check for clean git state
2. Prompt for optional final commit message
3. Create and push tag `v1.0`
4. Create and push branch `archive/v1`

### Step 2: Create Vercel Archive Project

1. **New Project Setup**
   - Go to Vercel Dashboard
   - Click "New Project"
   - Select the same repository
   - **Important**: Choose `archive/v1` as the Production Branch (not `main`)

2. **Domain Configuration**
   - Add custom domain: `v1.trustedapp-demo.vercel.app`
   - This keeps v1 accessible while main becomes v2

3. **Deployment Settings**
   - **Disable auto-production deploys** for `main` branch
   - Only `archive/v1` should trigger production builds
   - This prevents accidental v2 changes from affecting v1

4. **Environment Variables**
   - Copy all env vars from main project
   - Verify all secrets and API keys are properly set
   - Consider separate analytics/tracking IDs for v1

5. **Resource Limits**
   - Set appropriate spending cap for archived site
   - Archive sites typically need lower limits
   - Monitor usage to optimize costs

## Post-Archive Workflow

### For v1 Maintenance
- **Branch**: `archive/v1`
- **Purpose**: Critical fixes only
- **Deployment**: Auto-deploys to v1.trustedapp-demo.vercel.app

### For v2 Development
- **Branch**: `main`
- **Purpose**: Complete refactor/redesign
- **Deployment**: Continues to main domain after v2 is ready

## Safety Features

### Git Protections
- Script requires clean working tree
- All changes must be committed before archiving
- Tags are immutable once pushed

### Vercel Isolation
- Separate projects prevent cross-contamination
- Independent environment variables
- Isolated build and deployment pipelines

## Troubleshooting

### "Working tree is dirty"
```bash
# Check status
git status

# Commit changes
git add .
git commit -m "final changes before v1 archive"

# Or stash temporary changes
git stash
```

### Tag already exists
```bash
# Delete local tag
git tag -d v1.0

# Delete remote tag (careful!)
git push origin :refs/tags/v1.0

# Re-run archive script
npm run archive:v1
```

### Branch already exists
```bash
# Delete local branch
git branch -D archive/v1

# Delete remote branch (careful!)
git push origin --delete archive/v1

# Re-run archive script
npm run archive:v1
```

## Best Practices

1. **Archive at stable milestones** - Don't archive broken or incomplete features
2. **Communicate with team** - Ensure everyone knows v1 is being frozen
3. **Test archive deployment** - Verify the archived version works correctly
4. **Document v1 features** - Keep record of what's included in v1
5. **Plan v2 migration** - Have clear strategy for v2 development

## Access Points

- **v1 Live Site**: v1.trustedapp-demo.vercel.app
- **v1 Git Tag**: `git checkout v1.0`
- **v1 Git Branch**: `git checkout archive/v1`
- **v1 Vercel Project**: [Archive project in dashboard]

---

*This archive system ensures TrustedApp v1 remains accessible and maintainable while enabling safe v2 development.* 