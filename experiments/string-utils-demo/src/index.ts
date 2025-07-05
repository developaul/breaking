/**
 * Demo project using @developaul/string-utils
 * Testing different import patterns and utilities
 */

// 1. Named imports (most common)
import { kebabCase, camelCase, titleCase, slugify, capitalize, truncate } from '@developaul/string-utils';
import { isEmail, isUrl, isAlphanumeric, isEmpty, hasMinLength } from '@developaul/string-utils';

// 2. Namespace imports
import { formatters, validators } from '@developaul/string-utils';

// 3. Submodule imports
import { kebabCase as kebabFromSub } from '@developaul/string-utils/formatters';
import { isEmail as isEmailFromSub } from '@developaul/string-utils/validators';

// 4. Package info
import { name, version } from '@developaul/string-utils';

console.log('🚀 Demo: Using @developaul/string-utils');
console.log(`📦 Package: ${name} v${version}`);
console.log('─'.repeat(50));

// Test data
const testStrings = [
  'Hello World!',
  'the-quick-brown-fox',
  'camelCaseString',
  'snake_case_string',
  'MiXeD CaSe StRiNg',
  'test@example.com',
  'https://github.com/developaul',
  'invalid-email',
  'not-a-url',
  'abc123',
  'abc-123',
  '',
  '   ',
  'This is a very long string that needs to be truncated'
];

console.log('🎯 Testing String Formatters:');
console.log('─'.repeat(30));

testStrings.slice(0, 5).forEach(str => {
  console.log(`Original: "${str}"`);
  console.log(`  kebabCase: "${kebabCase(str)}"`);
  console.log(`  camelCase: "${camelCase(str)}"`);
  console.log(`  titleCase: "${titleCase(str)}"`);
  console.log(`  slugify: "${slugify(str)}"`);
  console.log(`  capitalize: "${capitalize(str)}"`);
  console.log(`  truncate(20): "${truncate(str, 20)}"`);
  console.log('');
});

console.log('✅ Testing String Validators:');
console.log('─'.repeat(30));

testStrings.forEach(str => {
  console.log(`Testing: "${str}"`);
  console.log(`  isEmail: ${isEmail(str)}`);
  console.log(`  isUrl: ${isUrl(str)}`);
  console.log(`  isAlphanumeric: ${isAlphanumeric(str)}`);
  console.log(`  isEmpty: ${isEmpty(str)}`);
  console.log(`  hasMinLength(3): ${hasMinLength(str, 3)}`);
  console.log('');
});

console.log('🔄 Testing Namespace Imports:');
console.log('─'.repeat(30));

console.log('Using formatters namespace:');
console.log(`formatters.kebabCase("Hello World"): "${formatters.kebabCase("Hello World")}"`);
console.log(`formatters.slugify("Hello World!"): "${formatters.slugify("Hello World!")}"`);

console.log('Using validators namespace:');
console.log(`validators.isEmail("test@example.com"): ${validators.isEmail("test@example.com")}`);
console.log(`validators.isUrl("https://example.com"): ${validators.isUrl("https://example.com")}`);

console.log('📦 Testing Submodule Imports:');
console.log('─'.repeat(30));

console.log('Using submodule imports:');
console.log(`kebabFromSub("Hello World"): "${kebabFromSub("Hello World")}"`);
console.log(`isEmailFromSub("test@example.com"): ${isEmailFromSub("test@example.com")}`);

console.log('─'.repeat(50));
console.log('✨ Demo completed successfully!');
console.log('🎉 Your @developaul/string-utils library is working perfectly!');