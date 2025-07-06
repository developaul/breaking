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
│   └── string-utils/   # @developaul/string-utils - Dual package library
│       ├── src/        # TypeScript source code
│       ├── dist/       # Built outputs
│       │   ├── esm/    # ES Modules (.js)
│       │   ├── cjs/    # CommonJS (.cjs)
│       │   └── types/  # TypeScript declarations (.d.ts)
│       ├── tsconfig.json      # Base TypeScript configuration
│       ├── tsconfig.esm.json  # ESM build configuration
│       └── tsconfig.cjs.json  # CJS build configuration
├── apps/              # Applications and main entry points
├── experiments/       # Experimental code and prototypes
│   ├── string-utils-demo-esm/  # ESM demo project using import syntax
│   │   ├── src/        # TypeScript source code
│   │   ├── tests/      # Comprehensive test suite (Vitest)
│   │   └── package.json # "type": "module"
│   └── string-utils-demo-cjs/  # CommonJS demo project using require syntax
│       ├── index.js    # Main demo application
│       ├── test.js     # CJS compatibility tests
│       └── package.json # Default (CommonJS)
├── package.json       # Workspace root configuration
├── pnpm-workspace.yaml # pnpm workspace definition
├── .gitignore         # Git ignore rules
└── CLAUDE.md          # Development guidance for Claude Code
```

## 📦 Published Packages

### @developaul/string-utils

A comprehensive string manipulation utility library built with TypeScript and **dual package support** (ESM + CommonJS).

**NPM Package**: [@developaul/string-utils](https://www.npmjs.com/package/@developaul/string-utils)

**Features**:
- 🚀 **Dual Package Support**: Works with both ESM and CommonJS
- 📦 Multiple entry points for tree-shaking optimization  
- 🔧 Comprehensive utilities for string formatting and validation
- 💪 Fully typed with excellent IDE support
- 🎯 Zero dependencies - lightweight and fast
- ⚡ Modern build system with TypeScript compiler

**Installation**:
```bash
npm install @developaul/string-utils
```

**Usage** (Works with both module systems):
```typescript
// ✅ ESM (Modern)
import { kebabCase, isEmail } from '@developaul/string-utils';

// ✅ CommonJS (Legacy)  
const { kebabCase, isEmail } = require('@developaul/string-utils');

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

### Phase 4: Dual Package Support ✅
- [x] Implement ESM + CommonJS compatibility
- [x] Configure TypeScript dual build system
- [x] Set up proper package.json exports field
- [x] Test both module systems in real projects
- [x] Handle file extensions and import resolution

### Future Phases 🔄
- [x] Migrate to modern bundler (tsup) for simplified builds
- [x] Set up GitHub Actions for automated publishing
- [x] Implement changeset-based versioning
- [ ] Add more utility packages to the monorepo

## 🔄 Publishing Workflow

### Dual Package Build Process

```bash
# Build both ESM and CommonJS formats
cd packages/string-utils
pnpm run build

# This generates:
# dist/esm/     - ES Modules (.js)
# dist/cjs/     - CommonJS (.cjs)  
# dist/types/   - TypeScript declarations (.d.ts)
```

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

# Test ESM compatibility
pnpm run dev

# Test CommonJS compatibility  
node cjs-test.cjs
```

### Test Coverage

The test suite includes:
- **48 tests** covering all package functionality
- **Formatters**: kebabCase, camelCase, slugify, truncate, etc.
- **Validators**: isEmail, isUrl, isAlphanumeric, etc. 
- **Integration**: Multiple import patterns and edge cases
- **Dual Package**: Both ESM and CommonJS compatibility verified

## 🎓 Key Learning Outcomes

Through this project, you'll master:

1. **Package Publishing**:
   - npm registry authentication and 2FA
   - SemVer versioning strategies
   - Dist-tags for release management
   - Package.json configuration best practices

2. **TypeScript Library Development**:
   - **Dual package support** (ESM + CommonJS)
   - Multiple entry points with exports field
   - TypeScript dual compilation setup
   - Type declaration generation
   - Zero-dependency library creation

3. **Modern Build Systems**:
   - TypeScript compiler configurations
   - Dual format builds (ESM/CJS)
   - File extension handling (.js, .cjs, .d.ts)
   - Build script automation and post-processing

4. **Monorepo Management**:
   - pnpm workspace configuration
   - Cross-package dependencies
   - Workspace commands and filtering
   - Shared tooling and configuration

5. **Testing & Quality**:
   - Consumer-driven testing approach
   - Real-world usage validation
   - Comprehensive test coverage
   - **Dual package compatibility** testing
   - Integration testing patterns

## 🛠 Tools & Technologies

- **Package Manager**: pnpm with workspaces
- **Language**: TypeScript with dual module support
- **Build System**: TypeScript compiler with dual builds (ESM + CJS)
- **Testing**: Vitest with coverage reporting + dual package validation
- **Registry**: npm public registry
- **Versioning**: SemVer with pre-release tags
- **Module Formats**: ES Modules (.js) + CommonJS (.cjs) + TypeScript declarations (.d.ts)

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

## 🏗️ **Dual Package Architecture**

### **Package.json Exports Configuration**

The library uses the modern `exports` field to provide different entry points for each module system:

```json
{
  "main": "./dist/cjs/index.cjs",
  "module": "./dist/esm/index.js", 
  "types": "./dist/types/index.d.ts",
  "exports": {
    ".": {
      "import": "./dist/esm/index.js",
      "require": "./dist/cjs/index.cjs",
      "types": "./dist/types/index.d.ts"
    },
    "./formatters": {
      "import": "./dist/esm/formatters.js",
      "require": "./dist/cjs/formatters.cjs",
      "types": "./dist/types/formatters.d.ts"
    },
    "./validators": {
      "import": "./dist/esm/validators.js",
      "require": "./dist/cjs/validators.cjs", 
      "types": "./dist/types/validators.d.ts"
    }
  }
}
```

### **Build System**

The dual build system uses TypeScript compiler with three configurations:

- **`tsconfig.json`**: Base configuration with shared settings
- **`tsconfig.esm.json`**: ES Modules build (`module: "ESNext"`)
- **`tsconfig.cjs.json`**: CommonJS build (`module: "CommonJS"`)

### **Compatibility Matrix**

| Environment | Module System | Import Syntax | Status |
|-------------|---------------|---------------|---------|
| Node.js ≥18 | ESM | `import { kebabCase } from '@developaul/string-utils'` | ✅ |
| Node.js ≥12 | CommonJS | `const { kebabCase } = require('@developaul/string-utils')` | ✅ |
| Bundlers (Vite, Webpack) | ESM | `import { kebabCase } from '@developaul/string-utils'` | ✅ |
| Legacy Projects | CommonJS | `const { kebabCase } = require('@developaul/string-utils')` | ✅ |
| TypeScript | Both | Full type support with `.d.ts` files | ✅ |

---

**¡La librería es compatible con TODO el ecosistema JavaScript moderno y legacy!** 🚀📦