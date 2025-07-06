/**
 * @developaul/date-utils-vite
 * Date and time utilities built with Vite library mode for dual package support
 */

// Export all formatters
export * from './formatters.js';

// Export all validators
export * from './validators.js';

// Export as namespaces for convenient usage
export * as formatters from './formatters.js';
export * as validators from './validators.js';

// Package metadata
export const name = '@developaul/date-utils-vite';
export const version = '0.1.0';
export const description = 'Date and time utilities built with Vite library mode for dual package support';

// Built with Vite indicator
export const buildTool = 'vite';
export const buildDate = new Date().toISOString();