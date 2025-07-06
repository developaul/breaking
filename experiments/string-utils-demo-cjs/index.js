/**
 * CommonJS Demo - Legacy Node.js Application
 * Demonstrating @developaul/string-utils usage with require()
 */

console.log('🏗️  Legacy CommonJS Application');
console.log('📦 Using @developaul/string-utils with require()');
console.log('═'.repeat(60));

// 1. Basic require() - Named destructuring
const { kebabCase, camelCase, capitalize, isEmail, isUrl } = require('@developaul/string-utils');

console.log('\n🎯 Basic Usage with Destructuring:');
console.log('──────────────────────────────────');

const sampleText = 'Hello CommonJS World';
console.log(`Original: "${sampleText}"`);
console.log(`kebabCase: "${kebabCase(sampleText)}"`);
console.log(`camelCase: "${camelCase(sampleText)}"`);
console.log(`capitalize: "${capitalize(sampleText)}"`);

const sampleEmail = 'legacy@commonjs.org';
const sampleUrl = 'https://legacy-app.example.com';
console.log(`\nValidation:`);
console.log(`"${sampleEmail}" is email: ${isEmail(sampleEmail)}`);
console.log(`"${sampleUrl}" is URL: ${isUrl(sampleUrl)}`);

// 2. Namespace imports
const { formatters, validators } = require('@developaul/string-utils');

console.log('\n🔧 Namespace Usage:');
console.log('──────────────────────');

const legacyData = 'old_school_naming_convention';
console.log(`Original: "${legacyData}"`);
console.log(`formatters.kebabCase: "${formatters.kebabCase(legacyData)}"`);
console.log(`formatters.titleCase: "${formatters.titleCase(legacyData)}"`);
console.log(`formatters.slugify: "${formatters.slugify(legacyData)}"`);

console.log(`\nvalidators.isEmpty(""): ${validators.isEmpty('')}`);
console.log(`validators.hasMinLength("legacy", 5): ${validators.hasMinLength('legacy', 5)}`);

// 3. Full module import
const stringUtils = require('@developaul/string-utils');

console.log('\n📚 Full Module Usage:');
console.log('─────────────────────');

console.log(`Package name: ${stringUtils.name}`);
console.log(`Package version: ${stringUtils.version}`);

// 4. Submodule imports (CommonJS style)
const formattersOnly = require('@developaul/string-utils/formatters');
const validatorsOnly = require('@developaul/string-utils/validators');

console.log('\n🎛️  Submodule Usage:');
console.log('────────────────────');

const apiEndpoint = 'getUserProfile';
console.log(`API endpoint: "${apiEndpoint}"`);
console.log(`formattersOnly.kebabCase: "${formattersOnly.kebabCase(apiEndpoint)}"`);
console.log(`formattersOnly.slugify: "${formattersOnly.slugify(apiEndpoint)}"`);

const userInput = 'admin@legacy-system.com';
console.log(`\nUser input: "${userInput}"`);
console.log(`validatorsOnly.isEmail: ${validatorsOnly.isEmail(userInput)}`);

// 5. Real-world CommonJS patterns
console.log('\n🌍 Real-World Legacy Patterns:');
console.log('─────────────────────────────');

// Pattern 1: Express.js route handler style
function processUserData(userData) {
    const { slugify, titleCase } = require('@developaul/string-utils');
    
    return {
        username: slugify(userData.displayName),
        title: titleCase(userData.displayName),
        slug: slugify(`${userData.firstName} ${userData.lastName}`)
    };
}

const mockUser = {
    displayName: 'John Legacy User',
    firstName: 'John',
    lastName: 'Legacy User'
};

const processed = processUserData(mockUser);
console.log('Processed user data:');
console.log(JSON.stringify(processed, null, 2));

// Pattern 2: Configuration-based validation
const validationRules = {
    email: require('@developaul/string-utils').isEmail,
    url: require('@developaul/string-utils').isUrl,
    alphanumeric: require('@developaul/string-utils').isAlphanumeric
};

const testData = {
    email: 'test@legacy.com',
    url: 'https://legacy.example.com',
    code: 'ABC123'
};

console.log('\nValidation results:');
console.log(`Email valid: ${validationRules.email(testData.email)}`);
console.log(`URL valid: ${validationRules.url(testData.url)}`);
console.log(`Code alphanumeric: ${validationRules.alphanumeric(testData.code)}`);

console.log('\n═'.repeat(60));
console.log('✅ CommonJS Demo completed successfully!');
console.log('🎉 @developaul/string-utils works perfectly in legacy environments!');