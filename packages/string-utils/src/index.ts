/**
 * @breaking/string-utils
 * A comprehensive string manipulation utility library
 */

// Export all formatters
export * from './formatters.js';

// Export all validators
export * from './validators.js';

// Convenience re-exports with namespace
export * as formatters from './formatters.js';
export * as validators from './validators.js';

// Package info
export const version = '0.1.0-alpha.0';
export const name = '@breaking/string-utils';