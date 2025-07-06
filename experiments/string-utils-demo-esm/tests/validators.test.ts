import { describe, it, expect } from 'vitest';
import { 
  isEmail, 
  isUrl, 
  isAlphanumeric, 
  isEmpty, 
  hasMinLength, 
  matchesPattern 
} from '@developaul/string-utils/validators';

describe('String Validators', () => {
  describe('isEmail', () => {
    it('should validate correct email addresses', () => {
      expect(isEmail('test@example.com')).toBe(true);
      expect(isEmail('user.name@domain.co.uk')).toBe(true);
      expect(isEmail('user+tag@example.org')).toBe(true);
    });

    it('should reject invalid email addresses', () => {
      expect(isEmail('invalid-email')).toBe(false);
      expect(isEmail('test@')).toBe(false);
      expect(isEmail('@example.com')).toBe(false);
      expect(isEmail('test.example.com')).toBe(false);
      expect(isEmail('')).toBe(false);
    });
  });

  describe('isUrl', () => {
    it('should validate correct URLs', () => {
      expect(isUrl('https://example.com')).toBe(true);
      expect(isUrl('http://example.com')).toBe(true);
      expect(isUrl('https://github.com/developaul')).toBe(true);
      expect(isUrl('https://sub.domain.example.com/path?query=value')).toBe(true);
    });

    it('should reject invalid URLs', () => {
      expect(isUrl('not-a-url')).toBe(false);
      expect(isUrl('example.com')).toBe(false);
      expect(isUrl('')).toBe(false);
      expect(isUrl('just-text')).toBe(false);
    });
  });

  describe('isAlphanumeric', () => {
    it('should validate alphanumeric strings', () => {
      expect(isAlphanumeric('abc123')).toBe(true);
      expect(isAlphanumeric('ABC123')).toBe(true);
      expect(isAlphanumeric('test')).toBe(true);
      expect(isAlphanumeric('123')).toBe(true);
    });

    it('should reject non-alphanumeric strings', () => {
      expect(isAlphanumeric('abc-123')).toBe(false);
      expect(isAlphanumeric('abc 123')).toBe(false);
      expect(isAlphanumeric('abc@123')).toBe(false);
      expect(isAlphanumeric('')).toBe(false);
    });
  });

  describe('isEmpty', () => {
    it('should detect empty strings', () => {
      expect(isEmpty('')).toBe(true);
      expect(isEmpty('   ')).toBe(true);
      expect(isEmpty('\t\n  ')).toBe(true);
    });

    it('should detect non-empty strings', () => {
      expect(isEmpty('hello')).toBe(false);
      expect(isEmpty('a')).toBe(false);
      expect(isEmpty(' a ')).toBe(false);
    });
  });

  describe('hasMinLength', () => {
    it('should validate minimum length', () => {
      expect(hasMinLength('hello', 3)).toBe(true);
      expect(hasMinLength('hello', 5)).toBe(true);
      expect(hasMinLength('hello world', 5)).toBe(true);
    });

    it('should reject strings below minimum length', () => {
      expect(hasMinLength('hi', 3)).toBe(false);
      expect(hasMinLength('', 1)).toBe(false);
      expect(hasMinLength('a', 2)).toBe(false);
    });

    it('should handle edge cases', () => {
      expect(hasMinLength('hello', 0)).toBe(true);
      expect(hasMinLength('', 0)).toBe(true);
    });
  });

  describe('matchesPattern', () => {
    it('should validate against regex patterns', () => {
      expect(matchesPattern('123', /^\d+$/)).toBe(true);
      expect(matchesPattern('abc', /^[a-z]+$/)).toBe(true);
      expect(matchesPattern('ABC123', /^[A-Z0-9]+$/)).toBe(true);
    });

    it('should reject non-matching patterns', () => {
      expect(matchesPattern('abc', /^\d+$/)).toBe(false);
      expect(matchesPattern('123', /^[a-z]+$/)).toBe(false);
      expect(matchesPattern('abc123', /^[A-Z]+$/)).toBe(false);
    });

    it('should handle complex patterns', () => {
      // Phone number pattern
      const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
      expect(matchesPattern('123-456-7890', phonePattern)).toBe(true);
      expect(matchesPattern('1234567890', phonePattern)).toBe(false);
    });
  });
});