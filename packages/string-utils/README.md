# @developaul/string-utils

A comprehensive string manipulation utility library built with TypeScript for modern JavaScript applications.

## Features

- 🚀 **Modern ESM support** with full TypeScript types
- 📦 **Multiple entry points** for tree-shaking optimization
- 🔧 **Comprehensive utilities** for string formatting and validation
- 💪 **Fully typed** with excellent IDE support
- 🎯 **Zero dependencies** - lightweight and fast

## Installation

```bash
npm install @developaul/string-utils
# or
pnpm add @developaul/string-utils
# or
yarn add @developaul/string-utils
```

## Usage

### Basic Import

```typescript
import { kebabCase, capitalize, isEmail } from '@developaul/string-utils';

// Format strings
const slug = kebabCase('Hello World'); // 'hello-world'
const title = capitalize('hello world'); // 'Hello world'

// Validate strings
const valid = isEmail('test@example.com'); // true
```

### Namespace Imports

```typescript
import { formatters, validators } from '@developaul/string-utils';

// Use formatters
const slug = formatters.slugify('Hello World!'); // 'hello-world'
const camel = formatters.camelCase('hello-world'); // 'helloWorld'

// Use validators
const isValidEmail = validators.isEmail('test@example.com'); // true
const hasLength = validators.hasMinLength('hello', 3); // true
```

### Submodule Imports

```typescript
// Import only formatters
import { kebabCase, titleCase } from '@developaul/string-utils/formatters';

// Import only validators
import { isEmail, isUrl } from '@developaul/string-utils/validators';
```

## API Reference

### Formatters

#### `kebabCase(str: string): string`
Convert a string to kebab-case.

```typescript
kebabCase('Hello World') // 'hello-world'
kebabCase('camelCase') // 'camel-case'
```

#### `camelCase(str: string): string`
Convert a string to camelCase.

```typescript
camelCase('hello-world') // 'helloWorld'
camelCase('snake_case') // 'snakeCase'
```

#### `capitalize(str: string): string`
Capitalize the first letter of a string.

```typescript
capitalize('hello world') // 'Hello world'
```

#### `titleCase(str: string): string`
Convert a string to Title Case.

```typescript
titleCase('hello world') // 'Hello World'
titleCase('the quick brown fox') // 'The Quick Brown Fox'
```

#### `slugify(str: string): string`
Create a URL-friendly slug from a string.

```typescript
slugify('Hello World!') // 'hello-world'
slugify('The Quick Brown Fox') // 'the-quick-brown-fox'
```

#### `truncate(str: string, length: number, suffix?: string): string`
Truncate a string to a specified length.

```typescript
truncate('Hello World', 5) // 'Hello...'
truncate('Hello World', 5, '!') // 'Hello!'
```

### Validators

#### `isEmail(str: string): boolean`
Check if a string is a valid email address.

```typescript
isEmail('test@example.com') // true
isEmail('invalid-email') // false
```

#### `isUrl(str: string): boolean`
Check if a string is a valid URL.

```typescript
isUrl('https://example.com') // true
isUrl('not-a-url') // false
```

#### `isAlphanumeric(str: string): boolean`
Check if a string contains only alphanumeric characters.

```typescript
isAlphanumeric('abc123') // true
isAlphanumeric('abc-123') // false
```

#### `isEmpty(str: string): boolean`
Check if a string is empty or contains only whitespace.

```typescript
isEmpty('') // true
isEmpty('   ') // true
isEmpty('hello') // false
```

#### `hasMinLength(str: string, minLength: number): boolean`
Check if a string has a minimum length.

```typescript
hasMinLength('hello', 3) // true
hasMinLength('hi', 3) // false
```

#### `matchesPattern(str: string, pattern: RegExp): boolean`
Check if a string matches a pattern.

```typescript
matchesPattern('123', /^\d+$/) // true
matchesPattern('abc', /^\d+$/) // false
```

## Version History

This package follows [Semantic Versioning](https://semver.org/).

Current version: `0.1.0-alpha.0`

## Contributing

This package is part of the `@breaking` monorepo for learning package publishing workflows.

## License

MIT License - see LICENSE file for details.