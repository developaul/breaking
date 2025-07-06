import { describe, it, expect } from 'vitest';
import { 
  kebabCase, 
  camelCase,
  isEmail, 
  isUrl,
  formatters,
  validators,
  name,
  version
} from '@developaul/string-utils';

describe('Main Index Exports', () => {
  describe('Named exports', () => {
    it('should export formatter functions', () => {
      expect(typeof kebabCase).toBe('function');
      expect(typeof camelCase).toBe('function');
      expect(kebabCase('Hello World')).toBe('hello-world');
    });

    it('should export validator functions', () => {
      expect(typeof isEmail).toBe('function');
      expect(typeof isUrl).toBe('function');
      expect(isEmail('test@example.com')).toBe(true);
    });
  });

  describe('Namespace exports', () => {
    it('should export formatters namespace', () => {
      expect(typeof formatters).toBe('object');
      expect(typeof formatters.kebabCase).toBe('function');
      expect(typeof formatters.camelCase).toBe('function');
      expect(typeof formatters.slugify).toBe('function');
      
      expect(formatters.kebabCase('Hello World')).toBe('hello-world');
    });

    it('should export validators namespace', () => {
      expect(typeof validators).toBe('object');
      expect(typeof validators.isEmail).toBe('function');
      expect(typeof validators.isUrl).toBe('function');
      expect(typeof validators.isEmpty).toBe('function');
      
      expect(validators.isEmail('test@example.com')).toBe(true);
    });
  });

  describe('Package metadata', () => {
    it('should export package name', () => {
      expect(name).toBe('@developaul/string-utils');
    });

    it('should export package version', () => {
      expect(version).toBe('0.2.0');
    });
  });

  describe('Integration tests', () => {
    it('should work with chained operations', () => {
      const input = 'Hello World Example!';
      const kebab = kebabCase(input);
      const slug = formatters.slugify(input);
      
      expect(kebab).toBe('hello-world-example!');
      expect(slug).toBe('hello-world-example');
    });

    it('should validate formatted strings', () => {
      const email = 'test@example.com';
      const url = 'https://example.com';
      
      expect(validators.isEmail(email)).toBe(true);
      expect(validators.isUrl(url)).toBe(true);
      expect(validators.isAlphanumeric(formatters.camelCase('hello world'))).toBe(true);
    });

    it('should handle edge cases consistently', () => {
      const empty = '';
      const whitespace = '   ';
      
      expect(formatters.kebabCase(empty)).toBe('');
      expect(validators.isEmpty(empty)).toBe(true);
      expect(validators.isEmpty(whitespace)).toBe(true);
      expect(validators.hasMinLength(empty, 1)).toBe(false);
    });
  });
});