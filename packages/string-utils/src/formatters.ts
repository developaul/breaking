/**
 * String formatting utilities
 */

/**
 * Convert a string to kebab-case
 * @param str - The string to convert
 * @returns The kebab-case string
 * @example
 * ```ts
 * kebabCase('Hello World') // 'hello-world'
 * kebabCase('camelCase') // 'camel-case'
 * ```
 */
export function kebabCase(str: string): string {
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();
}

/**
 * Convert a string to camelCase
 * @param str - The string to convert
 * @returns The camelCase string
 * @example
 * ```ts
 * camelCase('hello-world') // 'helloWorld'
 * camelCase('snake_case') // 'snakeCase'
 * ```
 */
export function camelCase(str: string): string {
  return str
    .replace(/[-_\s]+(.)?/g, (_, char) => (char ? char.toUpperCase() : ''));
}

/**
 * Capitalize the first letter of a string
 * @param str - The string to capitalize
 * @returns The capitalized string
 * @example
 * ```ts
 * capitalize('hello world') // 'Hello world'
 * ```
 */
export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Convert a string to Title Case
 * @param str - The string to convert
 * @returns The Title Case string
 * @example
 * ```ts
 * titleCase('hello world') // 'Hello World'
 * titleCase('the quick brown fox') // 'The Quick Brown Fox'
 * ```
 */
export function titleCase(str: string): string {
  return str
    .split(' ')
    .map(word => capitalize(word))
    .join(' ');
}

/**
 * Create a URL-friendly slug from a string
 * @param str - The string to slugify
 * @returns The slug string
 * @example
 * ```ts
 * slugify('Hello World!') // 'hello-world'
 * slugify('The Quick Brown Fox') // 'the-quick-brown-fox'
 * ```
 */
export function slugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

/**
 * Truncate a string to a specified length
 * @param str - The string to truncate
 * @param length - The maximum length
 * @param suffix - The suffix to add (default: '...')
 * @returns The truncated string
 * @example
 * ```ts
 * truncate('Hello World', 5) // 'Hello...'
 * truncate('Hello World', 5, '!') // 'Hello!'
 * ```
 */
export function truncate(str: string, length: number, suffix: string = '...'): string {
  if (str.length <= length) return str;
  return str.slice(0, length - suffix.length) + suffix;
}