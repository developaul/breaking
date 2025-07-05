import { describe, it, expect } from 'vitest';
import { 
  kebabCase, 
  camelCase, 
  capitalize, 
  titleCase, 
  slugify, 
  truncate 
} from '@developaul/string-utils/formatters';

describe('String Formatters', () => {
  describe('kebabCase', () => {
    it('should convert camelCase to kebab-case', () => {
      expect(kebabCase('helloWorld')).toBe('hello-world');
      expect(kebabCase('camelCaseString')).toBe('camel-case-string');
    });

    it('should convert spaces to hyphens', () => {
      expect(kebabCase('Hello World')).toBe('hello-world');
      expect(kebabCase('The Quick Brown Fox')).toBe('the-quick-brown-fox');
    });

    it('should handle underscores', () => {
      expect(kebabCase('snake_case_string')).toBe('snake-case-string');
    });

    it('should handle mixed cases', () => {
      expect(kebabCase('MiXeD CaSe')).toBe('mi-xe-d-ca-se');
    });

    it('should handle empty string', () => {
      expect(kebabCase('')).toBe('');
    });
  });

  describe('camelCase', () => {
    it('should convert kebab-case to camelCase', () => {
      expect(camelCase('hello-world')).toBe('helloWorld');
      expect(camelCase('the-quick-brown-fox')).toBe('theQuickBrownFox');
    });

    it('should convert snake_case to camelCase', () => {
      expect(camelCase('snake_case_string')).toBe('snakeCaseString');
    });

    it('should convert spaces to camelCase', () => {
      expect(camelCase('hello world')).toBe('helloWorld');
    });

    it('should handle empty string', () => {
      expect(camelCase('')).toBe('');
    });
  });

  describe('capitalize', () => {
    it('should capitalize first letter', () => {
      expect(capitalize('hello')).toBe('Hello');
      expect(capitalize('hello world')).toBe('Hello world');
    });

    it('should handle empty string', () => {
      expect(capitalize('')).toBe('');
    });

    it('should handle single character', () => {
      expect(capitalize('a')).toBe('A');
    });
  });

  describe('titleCase', () => {
    it('should convert to title case', () => {
      expect(titleCase('hello world')).toBe('Hello World');
      expect(titleCase('the quick brown fox')).toBe('The Quick Brown Fox');
    });

    it('should handle empty string', () => {
      expect(titleCase('')).toBe('');
    });

    it('should handle single word', () => {
      expect(titleCase('hello')).toBe('Hello');
    });
  });

  describe('slugify', () => {
    it('should create URL-friendly slugs', () => {
      expect(slugify('Hello World!')).toBe('hello-world');
      expect(slugify('The Quick Brown Fox')).toBe('the-quick-brown-fox');
    });

    it('should remove special characters', () => {
      expect(slugify('Hello@#$%World!')).toBe('helloworld');
    });

    it('should handle multiple spaces', () => {
      expect(slugify('Hello    World')).toBe('hello-world');
    });

    it('should handle empty string', () => {
      expect(slugify('')).toBe('');
    });

    it('should trim leading/trailing hyphens', () => {
      expect(slugify('!Hello World!')).toBe('hello-world');
    });
  });

  describe('truncate', () => {
    it('should truncate long strings', () => {
      expect(truncate('Hello World', 5)).toBe('He...');
      expect(truncate('This is a long string', 10)).toBe('This is...');
    });

    it('should not truncate short strings', () => {
      expect(truncate('Hello', 10)).toBe('Hello');
    });

    it('should use custom suffix', () => {
      expect(truncate('Hello World', 5, '!')).toBe('Hell!');
      expect(truncate('Hello World', 5, '---')).toBe('He---');
    });

    it('should handle empty string', () => {
      expect(truncate('', 5)).toBe('');
    });

    it('should handle exact length', () => {
      expect(truncate('Hello', 5)).toBe('Hello');
    });
  });
});