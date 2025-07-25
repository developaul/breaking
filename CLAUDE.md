# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Structure

This is a monorepo managed with pnpm workspaces containing:
- `apps/` - Applications and main entry points
- `packages/` - Reusable packages and libraries
- `experiments/` - Experimental code and prototypes

## Commands

### Package Management
- `pnpm install` - Install all dependencies across the monorepo
- `pnpm -w add <package>` - Add a dependency to the workspace root
- `pnpm --filter <workspace> add <package>` - Add a dependency to a specific workspace

### Development
- `pnpm --filter <workspace> dev` - Start development server for a specific workspace
- `pnpm --filter <workspace> build` - Build a specific workspace
- `pnpm --filter <workspace> test` - Run tests for a specific workspace

### Workspace Management
- `pnpm -r <command>` - Run command in all workspaces
- `pnpm --filter <workspace> <command>` - Run command in specific workspace

## Architecture

The monorepo uses pnpm workspaces to manage dependencies and build orchestration. Each workspace (apps, packages, experiments) can contain multiple projects that can depend on each other through the workspace protocol.

### Current Packages

- `@developaul/string-utils` - String manipulation utility library (packages/string-utils/)

## Package Publishing Commands

### Changesets Workflow

#### Option 1: Automated (Recommended)
```bash
# 1. Developer workflow: Create changeset for your changes
pnpm changeset

# 2. Push to main: GitHub Action automatically creates a "Release PR"
git add .
git commit -m "feat: add new feature"
git push origin main

# 3. Maintainer: Review and merge the Release PR
# 4. GitHub Action: Automatically publishes when Release PR is merged
```

#### Option 2: Manual Control
```bash
# 1. Developer workflow: Create changeset for your changes
pnpm changeset

# 2. Maintainer workflow: Update versions and changelogs locally
pnpm version-packages

# 3. Maintainer workflow: Commit and push changes
git add .
git commit -m "chore: version packages"
git push origin main

# 4. GitHub Action: Manually trigger "Manual Publish" workflow
# (Runs: pnpm release)
```

### Manual Publishing (Legacy)
```bash
# Navigate to package directory
cd packages/string-utils

# Alpha release
pnpm version premajor --preid=alpha  # Creates 1.0.0-alpha.0
pnpm publish --tag alpha

# Beta release
pnpm version 1.0.0-beta.0 --no-git-tag-version
pnpm publish --tag beta

# Release candidate
pnpm version 1.0.0-rc.0 --no-git-tag-version
pnpm publish --tag rc

# Final release
pnpm version 1.0.0 --no-git-tag-version
pnpm publish
```

### Testing Commands
```bash
# Build and pack locally
pnpm build && pnpm pack

# Install from different tags
npm install @developaul/string-utils@alpha
npm install @developaul/string-utils@beta
npm install @developaul/string-utils@latest
```