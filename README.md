# Breaking - NPM Package Publishing Learning Monorepo

A hands-on learning project for mastering npm package publishing workflows, SemVer versioning, and monorepo management with pnpm workspaces.

## 🎯 Project Overview

This monorepo serves as a practical learning environment for understanding:

- **Package Publishing**: From alpha releases to stable production versions
- **SemVer Workflow**: Alpha → Beta → RC → Stable release lifecycle
- **Monorepo Architecture**: Using pnpm workspaces for package management
- **TypeScript Libraries**: Modern ESM-first package development
- **Testing & Validation**: Comprehensive testing of published packages

## 📁 Project Structure

```
breaking/
├── packages/           # Reusable packages and libraries
│   └── string-utils/   # @developaul/string-utils - String manipulation library
├── apps/              # Applications and main entry points
├── experiments/       # Experimental code and prototypes
│   └── string-utils-demo/  # Demo project using @developaul/string-utils
├── package.json       # Workspace root configuration
├── pnpm-workspace.yaml # pnpm workspace definition
├── .gitignore         # Git ignore rules
└── CLAUDE.md          # Development guidance for Claude Code
```

## 📦 Published Packages

### @developaul/string-utils

A comprehensive string manipulation utility library built with TypeScript.

**NPM Package**: [@developaul/string-utils](https://www.npmjs.com/package/@developaul/string-utils)

**Features**:
- 🚀 Modern ESM support with full TypeScript types
- 📦 Multiple entry points for tree-shaking optimization  
- 🔧 Comprehensive utilities for string formatting and validation
- 💪 Fully typed with excellent IDE support
- 🎯 Zero dependencies - lightweight and fast

**Installation**:
```bash
npm install @developaul/string-utils
```

**Usage**:
```typescript
import { kebabCase, isEmail } from '@developaul/string-utils';

const slug = kebabCase('Hello World'); // 'hello-world'
const valid = isEmail('test@example.com'); // true
```

## 🚀 Getting Started

### Prerequisites

- Node.js ≥22
- pnpm ≥9.0.0

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd breaking

# Install dependencies
pnpm install
```

### Development Commands

```bash
# Install dependencies across all workspaces
pnpm install

# Build a specific package
pnpm --filter @developaul/string-utils build

# Run tests for a specific package
pnpm --filter string-utils-demo test

# Run demo application
pnpm --filter string-utils-demo dev
```

## 📚 Learning Journey

### Phase 1: Package Creation ✅
- [x] Set up monorepo with pnpm workspaces
- [x] Create TypeScript package with proper configuration
- [x] Configure exports field for modern entry points
- [x] Set up build process and tooling

### Phase 2: Publishing Workflow ✅
- [x] Practice alpha → beta → stable release cycle
- [x] Master dist-tags usage (`alpha`, `beta`, `latest`)
- [x] Understand SemVer versioning strategies
- [x] Handle npm authentication and 2FA

### Phase 3: Validation & Testing ✅
- [x] Create consumer project using published package
- [x] Test different import patterns (named, namespace, submodule)
- [x] Write comprehensive test suite with Vitest
- [x] Validate package functionality in real-world usage

### Future Phases 🔄
- [ ] Add bundler integration (Vite, Rollup)
- [ ] Set up GitHub Actions for automated publishing
- [ ] Implement changeset-based versioning
- [ ] Add more utility packages to the monorepo

## 🔄 Publishing Workflow

### Version Release Cycle

```bash
# Alpha releases (experimental)
pnpm version premajor --preid=alpha  # 1.0.0-alpha.0
pnpm publish --tag alpha

# Beta releases (feature complete)
pnpm version 1.0.0-beta.0 --no-git-tag-version
pnpm publish --tag beta

# Release candidates (production ready)
pnpm version 1.0.0-rc.0 --no-git-tag-version  
pnpm publish --tag rc

# Stable release
pnpm version 1.0.0 --no-git-tag-version
pnpm publish  # Goes to 'latest' tag
```

### Dist-Tags Management

```bash
# View current tags
npm dist-tag ls @developaul/string-utils

# Move latest tag to specific version
npm dist-tag add @developaul/string-utils@1.0.0-beta.0 latest

# Install from specific tags
npm install @developaul/string-utils@alpha
npm install @developaul/string-utils@beta
npm install @developaul/string-utils@latest
```

## 🧪 Testing

### Running Tests

```bash
# Run tests in demo project
cd experiments/string-utils-demo
pnpm test

# Run with coverage
pnpm test:coverage

# Run in watch mode
pnpm test:watch
```

### Test Coverage

The test suite includes:
- **48 tests** covering all package functionality
- **Formatters**: kebabCase, camelCase, slugify, truncate, etc.
- **Validators**: isEmail, isUrl, isAlphanumeric, etc. 
- **Integration**: Multiple import patterns and edge cases

## 🎓 Key Learning Outcomes

Through this project, you'll master:

1. **Package Publishing**:
   - npm registry authentication and 2FA
   - SemVer versioning strategies
   - Dist-tags for release management
   - Package.json configuration best practices

2. **TypeScript Library Development**:
   - Modern ESM-first packages
   - Multiple entry points with exports field
   - Type declaration generation
   - Zero-dependency library creation

3. **Monorepo Management**:
   - pnpm workspace configuration
   - Cross-package dependencies
   - Workspace commands and filtering
   - Shared tooling and configuration

4. **Testing & Quality**:
   - Consumer-driven testing approach
   - Real-world usage validation
   - Comprehensive test coverage
   - Integration testing patterns

## 🛠 Tools & Technologies

- **Package Manager**: pnpm with workspaces
- **Language**: TypeScript with modern ESM
- **Testing**: Vitest with coverage reporting
- **Build**: TypeScript compiler (tsc)
- **Registry**: npm public registry
- **Versioning**: SemVer with pre-release tags

## 🤝 Contributing

This is a learning project, but contributions and improvements are welcome! 

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details.

## 🙏 Acknowledgments

This project was created as a hands-on learning experience for understanding the complete npm package publishing workflow, from development to production deployment.

---

**Happy Learning!** 🚀📦