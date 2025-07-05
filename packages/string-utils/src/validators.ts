/**
 * String validation utilities
 */

/**
 * Check if a string is a valid email address
 * @param str - The string to validate
 * @returns True if valid email, false otherwise
 * @example
 * ```ts
 * isEmail('test@example.com') // true
 * isEmail('invalid-email') // false
 * ```
 */
export function isEmail(str: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(str);
}

/**
 * Check if a string is a valid URL
 * @param str - The string to validate
 * @returns True if valid URL, false otherwise
 * @example
 * ```ts
 * isUrl('https://example.com') // true
 * isUrl('not-a-url') // false
 * ```
 */
export function isUrl(str: string): boolean {
  try {
    new URL(str);
    return true;
  } catch {
    return false;
  }
}

/**
 * Check if a string contains only alphanumeric characters
 * @param str - The string to validate
 * @returns True if alphanumeric, false otherwise
 * @example
 * ```ts
 * isAlphanumeric('abc123') // true
 * isAlphanumeric('abc-123') // false
 * ```
 */
export function isAlphanumeric(str: string): boolean {
  return /^[a-zA-Z0-9]+$/.test(str);
}

/**
 * Check if a string is empty or contains only whitespace
 * @param str - The string to validate
 * @returns True if empty/whitespace, false otherwise
 * @example
 * ```ts
 * isEmpty('') // true
 * isEmpty('   ') // true
 * isEmpty('hello') // false
 * ```
 */
export function isEmpty(str: string): boolean {
  return str.trim().length === 0;
}

/**
 * Check if a string has a minimum length
 * @param str - The string to validate
 * @param minLength - The minimum length required
 * @returns True if meets minimum length, false otherwise
 * @example
 * ```ts
 * hasMinLength('hello', 3) // true
 * hasMinLength('hi', 3) // false
 * ```
 */
export function hasMinLength(str: string, minLength: number): boolean {
  return str.length >= minLength;
}

/**
 * Check if a string matches a pattern
 * @param str - The string to validate
 * @param pattern - The regex pattern to match
 * @returns True if matches pattern, false otherwise
 * @example
 * ```ts
 * matchesPattern('123', /^\d+$/) // true
 * matchesPattern('abc', /^\d+$/) // false
 * ```
 */
export function matchesPattern(str: string, pattern: RegExp): boolean {
  return pattern.test(str);
}