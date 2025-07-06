# string-utils-demo-cjs

This demo project showcases how to use `@developaul/string-utils` in **legacy CommonJS environments** using `require()`.

## 🎯 Purpose

Demonstrates that the dual package supports both modern ESM and legacy CommonJS projects seamlessly.

## 🏗️ Project Structure

```
cjs-demo/
├── package.json    # CommonJS project (no "type": "module")
├── index.js        # Main demo application 
├── test.js         # Compatibility test suite
└── README.md       # This file
```

## 🚀 Running the Demo

```bash
# Install dependencies
pnpm install

# Run the main demo
pnpm start

# Run compatibility tests
pnpm test
```

## 📋 What's Demonstrated

### 1. **Named Destructuring**
```javascript
const { kebabCase, isEmail } = require('@developaul/string-utils');
```

### 2. **Namespace Imports**
```javascript
const { formatters, validators } = require('@developaul/string-utils');
```

### 3. **Full Module Import**
```javascript
const stringUtils = require('@developaul/string-utils');
console.log(stringUtils.version); // '0.2.0'
```

### 4. **Submodule Imports**
```javascript
const formattersOnly = require('@developaul/string-utils/formatters');
const validatorsOnly = require('@developaul/string-utils/validators');
```

### 5. **Real-World Patterns**
- Express.js route handler style
- Configuration-based validation
- Nested require() calls

## ✅ Compatibility Results

**All 8 compatibility tests pass:**
- ✅ Named destructuring with require()
- ✅ Namespace imports (formatters, validators)
- ✅ Full module import
- ✅ Submodule imports (/formatters, /validators)
- ✅ All formatters work in CommonJS
- ✅ All validators work in CommonJS
- ✅ Multiple require() calls work correctly
- ✅ Nested require() calls work

## 🌍 Use Cases

This demo represents how `@developaul/string-utils` works in:

- **Legacy Node.js applications** (pre-ESM)
- **Express.js projects** using CommonJS
- **Older codebases** that haven't migrated to ESM
- **Corporate environments** with strict compatibility requirements
- **Build tools** that still use CommonJS

## 🔄 vs ESM Demo

| Feature | CJS Demo | ESM Demo |
|---------|----------|----------|
| Module System | CommonJS | ES Modules |
| Import Syntax | `require()` | `import` |
| Package Type | Default (CJS) | `"type": "module"` |
| File Extensions | `.js` | `.js` (ESM) |
| Use Case | Legacy Apps | Modern Apps |

## 🎉 Key Takeaway

**Same library, same functionality, different syntax!**

Your users can choose their preferred module system without any compromises in features or performance.