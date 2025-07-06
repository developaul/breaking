# 📋 NPM Publishing Commands Cheatsheet

## 🎯 Quick Command Reference

| Scenario | Command | Why These Flags? |
|----------|---------|------------------|
| **Start Alpha** | `pnpm version premajor --preid=alpha` | `premajor` = bump major version with pre-release<br>`--preid=alpha` = adds "-alpha.0" suffix |
| **Next Alpha** | `pnpm version prerelease` | `prerelease` = increment alpha.0 → alpha.1 |
| **Publish Alpha** | `pnpm publish --tag alpha` | `--tag alpha` = users need `@alpha` to install |
| **Start Beta** | `pnpm version 1.0.0-beta.0 --no-git-tag-version` | Specific version = no auto-increment<br>`--no-git-tag-version` = don't create git tag |
| **Next Beta** | `pnpm version prerelease --preid=beta` | `--preid=beta` = increment beta.0 → beta.1 |
| **Publish Beta** | `pnpm publish --tag beta` | `--tag beta` = users need `@beta` to install |
| **Start RC** | `pnpm version 1.0.0-rc.0 --no-git-tag-version` | RC = final testing before stable |
| **Publish RC** | `pnpm publish --tag rc` | `--tag rc` = users need `@rc` to install |
| **Stable Release** | `pnpm version 1.0.0 --no-git-tag-version` | Remove pre-release suffix = stable |
| **Publish Stable** | `pnpm publish` | No `--tag` = goes to "latest" (default) |

## 🏷️ Tag Management

| Action | Command | Why? |
|--------|---------|------|
| **See all tags** | `npm dist-tag ls @user/package` | Shows current tag → version mapping |
| **Move latest** | `npm dist-tag add @user/package@1.0.0-beta.2 latest` | Makes beta the default install |
| **Remove tag** | `npm dist-tag rm @user/package alpha` | Cleanup old tags |

## 🔄 Version Bump Types

| Command | Example | When to Use |
|---------|---------|-------------|
| `pnpm version patch` | 1.0.0 → 1.0.1 | Bug fixes |
| `pnpm version minor` | 1.0.0 → 1.1.0 | New features (backward compatible) |
| `pnpm version major` | 1.0.0 → 2.0.0 | Breaking changes |
| `pnpm version premajor --preid=alpha` | 1.0.0 → 2.0.0-alpha.0 | Start new major with alpha |
| `pnpm version prerelease` | 1.0.0-alpha.0 → 1.0.0-alpha.1 | Next pre-release |

## 📦 User Installation

| User Types | Command | Gets Version |
|------------|---------|--------------|
| `npm install @user/package` | Default | Latest stable |
| `npm install @user/package@alpha` | Alpha testers | Newest alpha |
| `npm install @user/package@beta` | Beta testers | Newest beta |
| `npm install @user/package@rc` | Final testing | Newest RC |

## ⚡ Quick Workflows

### 🧪 Alpha Development
```bash
# Start alpha
pnpm version premajor --preid=alpha  # 1.0.0 → 2.0.0-alpha.0
pnpm publish --tag alpha

# More alpha versions
pnpm version prerelease              # 2.0.0-alpha.0 → 2.0.0-alpha.1
pnpm publish --tag alpha
```

### ✅ Release Progression
```bash
# Alpha → Beta
pnpm version 2.0.0-beta.0 --no-git-tag-version
pnpm publish --tag beta

# Beta → RC  
pnpm version 2.0.0-rc.0 --no-git-tag-version
pnpm publish --tag rc

# RC → Stable
pnpm version 2.0.0 --no-git-tag-version
pnpm publish  # Goes to 'latest'
```

### 🚨 Emergency Actions
```bash
# Rollback latest to previous stable
npm dist-tag add @user/package@1.9.0 latest

# Check what users are getting
npm dist-tag ls @user/package
```

## 🎯 Key Points

- **`--tag`** = Controls which users can install it
- **`--no-git-tag-version`** = Manual version, no git tag
- **No `--tag`** = Goes to "latest" (what users get by default)
- **`prerelease`** = Smart increment of current pre-release
- **`premajor/preminor/prepatch`** = Start new pre-release cycle