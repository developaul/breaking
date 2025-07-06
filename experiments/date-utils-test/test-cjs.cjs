/**
 * Test CommonJS compatibility for both libraries
 */

console.log('🔗 Testing CommonJS compatibility for both libraries');
console.log('='.repeat(60));

// Test tsup library (CJS)
const { 
  toHumanString: toHumanStringTsup, 
  isValidDate: isValidDateTsup,
  name: nameTsup,
  buildTool: buildToolTsup
} = require('@developaul/date-utils-tsup');

// Test Vite library (CJS)
const { 
  toHumanString: toHumanStringVite, 
  isValidDate: isValidDateVite,
  name: nameVite,
  buildTool: buildToolVite
} = require('@developaul/date-utils-vite');

const testDate = new Date('2025-01-06T10:30:00Z');

console.log('🔧 tsup Library (CJS):');
console.log(`  Name: ${nameTsup}`);
console.log(`  Build Tool: ${buildToolTsup}`);
console.log(`  Human String: ${toHumanStringTsup(testDate)}`);
console.log(`  Is Valid Date: ${isValidDateTsup(testDate)}`);
console.log('');

console.log('⚡ Vite Library (CJS):');
console.log(`  Name: ${nameVite}`);
console.log(`  Build Tool: ${buildToolVite}`);
console.log(`  Human String: ${toHumanStringVite(testDate)}`);
console.log(`  Is Valid Date: ${isValidDateVite(testDate)}`);
console.log('');

console.log('✅ CommonJS compatibility test completed successfully!');
console.log('');