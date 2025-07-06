/**
 * Test @developaul/date-utils-vite submodule imports
 */

import { toHumanString, formatDuration } from '@developaul/date-utils-vite/formatters';
import { isValidDate, isToday } from '@developaul/date-utils-vite/validators';

console.log('⚡ Testing @developaul/date-utils-vite submodule imports');
console.log('='.repeat(60));

const testDate = new Date('2025-01-06T10:30:00Z');

console.log('📁 Submodule Imports Test:');
console.log(`  formatters/toHumanString: ${toHumanString(testDate)}`);
console.log(`  formatters/formatDuration: ${formatDuration(5000)}`);
console.log(`  validators/isValidDate: ${isValidDate(testDate)}`);
console.log(`  validators/isToday: ${isToday(testDate)}`);
console.log('');

console.log('✅ Vite submodule imports test completed successfully!');
console.log('');