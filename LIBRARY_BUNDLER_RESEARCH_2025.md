# 📦 Library Bundler Deep Research 2025

## 🎯 Research Objective
Find the best bundler for publishing JavaScript/TypeScript component libraries with:
- ✅ Dual package support (ESM + CJS)
- ✅ TypeScript declarations (.d.ts)
- ✅ Tree-shaking optimization
- ✅ Minimal configuration
- ✅ Fast builds
- ✅ Small bundle sizes

## 🔍 Bundlers Analyzed

### 1. **tsup** - The Zero-Config Champion
**Technology**: esbuild-powered TypeScript bundler  
**Weekly downloads**: ~500k+  
**Created**: 2020 by @egoist

#### ✅ Strengths
- **Zero configuration**: Works out-of-the-box with sensible defaults
- **Fast builds**: esbuild-powered compilation (10-100x faster than Webpack)
- **Dual package**: Built-in ESM/CJS support with `--format esm,cjs`
- **TypeScript first**: Automatic .d.ts generation with `--dts`
- **CLI friendly**: `tsup src/index.ts --format esm,cjs --dts`
- **Tree-shaking**: Supports multiple entry points for optimization
- **External deps**: Smart external dependency detection

#### ❌ Limitations
- **CSS experimental**: Limited CSS/SCSS support for component libraries
- **esbuild constraints**: Some advanced TypeScript features not supported
- **Plugin ecosystem**: Smaller plugin ecosystem compared to Rollup

#### 📊 Use Cases
- Pure TypeScript/JavaScript libraries
- Utility libraries (like our string-utils)
- npm packages without complex CSS needs

---

### 2. **Rollup** - The Industry Standard
**Technology**: JavaScript bundler with extensive plugin ecosystem  
**Weekly downloads**: ~8M+  
**Created**: 2015 by Rich Harris

#### ✅ Strengths
- **Library focused**: Designed specifically for library bundling
- **Tree-shaking pioneer**: Excellent dead code elimination
- **Plugin ecosystem**: Massive plugin library for any use case
- **Code splitting**: Advanced code splitting capabilities
- **ES modules native**: Built for modern JavaScript standards
- **Mature**: Battle-tested by thousands of libraries

#### ❌ Limitations
- **Configuration heavy**: Requires significant setup for dual package
- **TypeScript setup**: Need additional plugins for .d.ts generation
- **Build speed**: Slower than esbuild-based alternatives
- **Learning curve**: Complex configuration for beginners

#### 📊 Use Cases
- Complex libraries with specific build requirements
- Libraries requiring custom plugins
- When maximum control over output is needed

---

### 3. **Vite Library Mode** - The Modern Experience
**Technology**: Rollup + esbuild hybrid  
**Weekly downloads**: ~10M+ (Vite total)  
**Created**: 2020 by Evan You

#### ✅ Strengths
- **Best DX**: Excellent developer experience with HMR
- **Rollup powered**: Inherits Rollup's tree-shaking and plugins
- **esbuild transforms**: Fast development builds
- **Framework integration**: Great for React/Vue component libraries
- **CSS handling**: Built-in CSS processing and modules

#### ❌ Limitations
- **CSS modules issue**: Generated code doesn't auto-import CSS ([known issue](https://github.com/vitejs/vite/issues/1579))
- **App-centric**: Library mode feels secondary to app development
- **Configuration**: More complex than tsup for simple libraries
- **Bundle size**: May include unnecessary dependencies

#### 📊 Use Cases
- React/Vue component libraries with CSS
- Libraries that are part of larger Vite applications
- When you need advanced CSS processing

---

### 4. **tsdown** - The Next-Gen Contender
**Technology**: Rolldown (Rust) + Oxc-powered  
**Weekly downloads**: Early adoption phase  
**Created**: 2024 by void(0) team (Vite/Rolldown creators)

#### ✅ Strengths
- **Rust performance**: Rolldown-powered for blazing fast builds
- **tsup compatibility**: Easy migration from tsup
- **Future-proof**: Official Rolldown project, future of Vite library mode
- **TypeScript focus**: Built-in declaration generation with Oxc
- **Modern toolchain**: Latest Rust-based tooling

#### ❌ Limitations
- **Early stage**: Still in development, limited production use
- **Documentation**: Less mature documentation and examples
- **Plugin ecosystem**: Limited plugins compared to Rollup
- **Unknown stability**: Too new for mission-critical projects

#### 📊 Use Cases
- Future-forward projects willing to adopt cutting-edge tools
- When maximum build performance is critical
- Libraries that will benefit from Rolldown ecosystem

---

### 5. **Specialized Bundlers Comparison**

| Bundler | Technology | Weekly DL | Best For | Config | Performance |
|---------|------------|-----------|----------|--------|-------------|
| **microbundle** | Rollup | ~100k | Tiny modules | Zero | Medium |
| **unbuild** | Rollup | ~167k | UnJS ecosystem | Minimal | Medium |
| **pkgroll** | Rollup + esbuild | ~44k | Node.js packages | Zero | High |
| **bunchee** | Rollup + SWC | Growing | React + RSC | Zero | High |

#### **microbundle**
- ✅ Smallest bundles possible
- ❌ Limited features, no ESM/CJS interop
- 🎯 Best for: Browser-only tiny libraries

#### **unbuild**
- ✅ Highest adoption in modern ecosystem
- ✅ Part of UnJS (Nuxt, Nitro) toolchain
- 🎯 Best for: Server-side libraries, Node.js packages

#### **pkgroll**
- ✅ Superior ESM/CJS compilation vs tsup
- ✅ Smart package.json entry-point detection
- 🎯 Best for: Node.js libraries with complex exports

#### **bunchee**
- ✅ React Server Components support
- ✅ SWC-powered for ES5 compatibility
- 🎯 Best for: React libraries with RSC features

---

## 🏆 **2025 Recommendations**

### **For Component Libraries (React/Vue/etc)**
**Winner: Vite Library Mode + vite-plugin-lib-inject-css**

**Why:**
- Handles CSS properly with plugin
- Great TypeScript support
- Excellent development experience
- Framework ecosystem integration
- Mature and stable

**Setup:**
```bash
pnpm add -D vite @types/node vite-plugin-lib-inject-css
```

### **For Pure TypeScript Libraries**
**Winner: tsup**

**Why:**
- Zero configuration out-of-the-box
- Perfect dual package support
- Lightning fast builds
- Designed specifically for this use case
- Most popular in 2025

**Setup:**
```bash
pnpm add -D tsup
npx tsup src/index.ts --format esm,cjs --dts
```

### **For Future-Forward Projects**
**Winner: tsdown**

**Why:**
- Next-generation Rust performance
- tsup-compatible migration path
- Official Rolldown project
- Future of Vite library mode

**Setup:**
```bash
pnpm add -D tsdown
npx tsdown src/index.ts
```

### **For Maximum Control**
**Winner: Rollup**

**Why:**
- Industry standard for libraries
- Unlimited customization
- Massive plugin ecosystem
- Battle-tested reliability

**Setup:**
```bash
pnpm add -D rollup @rollup/plugin-typescript rollup-plugin-dts
# + complex configuration
```

---

## 🎯 **Decision Matrix**

| Priority | Best Choice | Why |
|----------|-------------|-----|
| **Simplicity** | tsup | Zero config, works immediately |
| **Performance** | tsdown | Rust-powered, fastest builds |
| **Component Libs** | Vite | CSS handling, framework integration |
| **Flexibility** | Rollup | Maximum control, plugins |
| **Future-proof** | tsdown | Next-gen tooling, Rolldown ecosystem |
| **Stability** | tsup | Mature, widely adopted |

---

## 📋 **Final Recommendation for Your Next Library**

### **Primary Choice: tsup**
- ✅ Most practical for 2025
- ✅ Zero configuration frustration
- ✅ Perfect dual package support
- ✅ Fast enough for any library
- ✅ Massive adoption and community

### **Alternative: tsdown** (if feeling adventurous)
- ✅ Future-proof with Rust performance
- ✅ Easy migration from tsup later
- ✅ Part of next-gen Vite ecosystem

### **Avoid for Libraries:**
- ❌ **Rsbuild**: App-focused, overkill for libraries
- ❌ **Webpack**: Too heavy, slow, complex for libraries
- ❌ **Parcel**: App-focused, not library optimized

---

## 🚀 **Next Steps**

1. **Start with tsup** for immediate productivity
2. **Experiment with tsdown** for future projects
3. **Consider Vite** only if building component libraries with CSS
4. **Use Rollup** only if you need specific plugins

**Bottom line**: In 2025, **tsup remains the sweet spot** for library bundling - simple, fast, and designed exactly for publishing npm packages. 📦✨