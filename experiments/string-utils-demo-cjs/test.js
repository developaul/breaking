/**
 * CommonJS Compatibility Test Suite
 * Validates all import patterns work correctly with require()
 */

console.log('🧪 Running CommonJS Compatibility Tests...\n');

let passedTests = 0;
let totalTests = 0;

function test(description, testFn) {
    totalTests++;
    try {
        testFn();
        console.log(`✅ ${description}`);
        passedTests++;
    } catch (error) {
        console.log(`❌ ${description}`);
        console.log(`   Error: ${error.message}`);
    }
}

function assertEqual(actual, expected, message) {
    if (actual !== expected) {
        throw new Error(`${message}. Expected: ${expected}, Got: ${actual}`);
    }
}

// Test 1: Basic named destructuring
test('Named destructuring with require()', () => {
    const { kebabCase, isEmail } = require('@developaul/string-utils');
    
    assertEqual(typeof kebabCase, 'function', 'kebabCase should be a function');
    assertEqual(typeof isEmail, 'function', 'isEmail should be a function');
    assertEqual(kebabCase('Hello World'), 'hello-world', 'kebabCase should work correctly');
    assertEqual(isEmail('test@example.com'), true, 'isEmail should validate correctly');
});

// Test 2: Namespace imports
test('Namespace imports (formatters, validators)', () => {
    const { formatters, validators } = require('@developaul/string-utils');
    
    assertEqual(typeof formatters, 'object', 'formatters should be an object');
    assertEqual(typeof validators, 'object', 'validators should be an object');
    assertEqual(typeof formatters.kebabCase, 'function', 'formatters.kebabCase should be a function');
    assertEqual(typeof validators.isEmail, 'function', 'validators.isEmail should be a function');
    
    assertEqual(formatters.slugify('Hello World!'), 'hello-world', 'formatters.slugify should work');
    assertEqual(validators.isEmpty(''), true, 'validators.isEmpty should work');
});

// Test 3: Full module import
test('Full module import', () => {
    const stringUtils = require('@developaul/string-utils');
    
    assertEqual(stringUtils.name, '@developaul/string-utils', 'Package name should be correct');
    assertEqual(stringUtils.version, '0.2.0', 'Package version should be correct');
    assertEqual(typeof stringUtils.kebabCase, 'function', 'Direct functions should be available');
    assertEqual(typeof stringUtils.formatters, 'object', 'Namespaces should be available');
});

// Test 4: Submodule imports
test('Submodule imports (/formatters, /validators)', () => {
    const formattersModule = require('@developaul/string-utils/formatters');
    const validatorsModule = require('@developaul/string-utils/validators');
    
    assertEqual(typeof formattersModule.kebabCase, 'function', 'formatters submodule should work');
    assertEqual(typeof validatorsModule.isEmail, 'function', 'validators submodule should work');
    
    assertEqual(formattersModule.camelCase('hello-world'), 'helloWorld', 'Submodule formatters should work');
    assertEqual(validatorsModule.isUrl('https://example.com'), true, 'Submodule validators should work');
});

// Test 5: All formatters functionality
test('All formatters work in CommonJS', () => {
    const { 
        kebabCase, 
        camelCase, 
        capitalize, 
        titleCase, 
        slugify, 
        truncate 
    } = require('@developaul/string-utils');
    
    assertEqual(kebabCase('Hello World'), 'hello-world', 'kebabCase should work');
    assertEqual(camelCase('hello-world'), 'helloWorld', 'camelCase should work');
    assertEqual(capitalize('hello'), 'Hello', 'capitalize should work');
    assertEqual(titleCase('hello world'), 'Hello World', 'titleCase should work');
    assertEqual(slugify('Hello World!'), 'hello-world', 'slugify should work');
    assertEqual(truncate('Hello World', 5), 'He...', 'truncate should work');
});

// Test 6: All validators functionality
test('All validators work in CommonJS', () => {
    const { 
        isEmail, 
        isUrl, 
        isAlphanumeric, 
        isEmpty, 
        hasMinLength, 
        matchesPattern 
    } = require('@developaul/string-utils');
    
    assertEqual(isEmail('test@example.com'), true, 'isEmail should work');
    assertEqual(isUrl('https://example.com'), true, 'isUrl should work');
    assertEqual(isAlphanumeric('abc123'), true, 'isAlphanumeric should work');
    assertEqual(isEmpty(''), true, 'isEmpty should work');
    assertEqual(hasMinLength('hello', 3), true, 'hasMinLength should work');
    assertEqual(matchesPattern('123', /^\d+$/), true, 'matchesPattern should work');
});

// Test 7: Multiple require() calls (caching behavior)
test('Multiple require() calls work correctly', () => {
    const utils1 = require('@developaul/string-utils');
    const utils2 = require('@developaul/string-utils');
    
    // CommonJS modules are cached
    assertEqual(utils1 === utils2, true, 'Multiple requires should return same instance');
    assertEqual(utils1.version, utils2.version, 'Both instances should have same version');
});

// Test 8: Nested require() calls
test('Nested require() calls work', () => {
    function processText(text) {
        const { kebabCase } = require('@developaul/string-utils');
        return kebabCase(text);
    }
    
    function validateEmail(email) {
        const { isEmail } = require('@developaul/string-utils');
        return isEmail(email);
    }
    
    assertEqual(processText('Hello World'), 'hello-world', 'Nested require in function should work');
    assertEqual(validateEmail('test@example.com'), true, 'Nested require in validation should work');
});

// Test Results
console.log('\n' + '═'.repeat(50));
console.log(`🏁 Test Results: ${passedTests}/${totalTests} tests passed`);

if (passedTests === totalTests) {
    console.log('🎉 All CommonJS compatibility tests passed!');
    console.log('✅ @developaul/string-utils works perfectly with require()');
    process.exit(0);
} else {
    console.log('❌ Some tests failed. CommonJS compatibility issues detected.');
    process.exit(1);
}