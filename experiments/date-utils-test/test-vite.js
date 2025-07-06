/**
 * Test @developaul/date-utils-vite (built with Vite)
 */

import { 
  toHumanString, 
  toRelativeTime, 
  isValidDate, 
  isToday,
  name,
  buildTool,
  formatters,
  validators
} from '@developaul/date-utils-vite';

console.log('⚡ Testing @developaul/date-utils-vite (built with Vite)');
console.log('='.repeat(60));

const testDate = new Date('2025-01-06T10:30:00Z');
const now = new Date();

console.log('📦 Package Info:');
console.log(`  Name: ${name}`);
console.log(`  Build Tool: ${buildTool}`);
console.log('');

console.log('📅 Formatters Test:');
console.log(`  Human String: ${toHumanString(testDate)}`);
console.log(`  Relative Time: ${toRelativeTime(testDate, now)}`);
console.log('');

console.log('✅ Validators Test:');
console.log(`  Is Valid Date: ${isValidDate(testDate)}`);
console.log(`  Is Today: ${isToday(testDate)}`);
console.log('');

console.log('📁 Namespace Imports:');
console.log(`  formatters.toHumanString: ${formatters.toHumanString(testDate)}`);
console.log(`  validators.isValidDate: ${validators.isValidDate(testDate)}`);
console.log('');

console.log('✅ Vite library test completed successfully!');
console.log('');