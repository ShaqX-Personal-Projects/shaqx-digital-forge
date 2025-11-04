/**
 * Security utilities for input sanitization and validation
 */

// HTML entity encoding map
const HTML_ENTITIES: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#x27;',
  '/': '&#x2F;',
};

/**
 * Escape HTML entities to prevent XSS attacks
 */
export const escapeHtml = (text: string): string => {
  return text.replace(/[&<>"'/]/g, (char) => HTML_ENTITIES[char] || char);
};

/**
 * Sanitize user input by removing dangerous characters
 */
export const sanitizeInput = (input: string): string => {
  // Remove null bytes
  let sanitized = input.replace(/\0/g, '');
  
  // Remove control characters except newlines and tabs
  sanitized = sanitized.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '');
  
  // Trim whitespace
  sanitized = sanitized.trim();
  
  return sanitized;
};

/**
 * Validate email format with strict regex
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email) && email.length <= 255;
};

/**
 * Check if string contains dangerous characters
 */
export const containsDangerousChars = (input: string): boolean => {
  const dangerousChars = /[<>{}[\]\\|;:$%#@!]/;
  return dangerousChars.test(input);
};

/**
 * Validate string length
 */
export const isValidLength = (input: string, min: number, max: number): boolean => {
  const length = input.trim().length;
  return length >= min && length <= max;
};

/**
 * Secure localStorage with error handling and validation
 */
export const secureLocalStorage = {
  /**
   * Set item in localStorage with size limit check
   */
  setItem: (key: string, value: any, maxSize: number = 5000): boolean => {
    try {
      const serialized = JSON.stringify(value);
      
      // Check size limit (default 5KB)
      if (serialized.length > maxSize) {
        console.warn(`localStorage item "${key}" exceeds size limit`);
        return false;
      }
      
      // Add timestamp for expiration
      const item = {
        value,
        timestamp: Date.now(),
      };
      
      localStorage.setItem(key, JSON.stringify(item));
      return true;
    } catch (error) {
      console.warn(`Failed to save to localStorage: ${key}`, error);
      return false;
    }
  },
  
  /**
   * Get item from localStorage with validation and expiration check
   */
  getItem: (key: string, maxAge: number = 365 * 24 * 60 * 60 * 1000): any | null => {
    try {
      const item = localStorage.getItem(key);
      if (!item) return null;
      
      const parsed = JSON.parse(item);
      
      // Validate structure
      if (!parsed || typeof parsed !== 'object' || !parsed.value) {
        localStorage.removeItem(key);
        return null;
      }
      
      // Check expiration (default 1 year)
      if (parsed.timestamp && Date.now() - parsed.timestamp > maxAge) {
        localStorage.removeItem(key);
        return null;
      }
      
      return parsed.value;
    } catch (error) {
      console.warn(`Failed to read from localStorage: ${key}`, error);
      localStorage.removeItem(key);
      return null;
    }
  },
  
  /**
   * Remove item from localStorage
   */
  removeItem: (key: string): void => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.warn(`Failed to remove from localStorage: ${key}`, error);
    }
  },
  
  /**
   * Clear all items from localStorage
   */
  clear: (): void => {
    try {
      localStorage.clear();
    } catch (error) {
      console.warn('Failed to clear localStorage', error);
    }
  },
};

/**
 * Generate a simple CSRF token (for client-side validation)
 */
export const generateToken = (): string => {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
};

/**
 * Validate form submission timing (bot detection)
 */
export const isValidSubmissionTiming = (formLoadTime: number, minSeconds: number = 2): boolean => {
  const elapsedSeconds = (Date.now() - formLoadTime) / 1000;
  return elapsedSeconds >= minSeconds;
};

/**
 * Check if string is likely spam based on patterns
 */
export const isLikelySpam = (text: string): boolean => {
  const spamPatterns = [
    /viagra/i,
    /cialis/i,
    /casino/i,
    /lottery/i,
    /winner/i,
    /(click|buy)\s+(here|now)/i,
    /\$\$\$/,
    /http[s]?:\/\/.*http[s]?:\/\//i, // Multiple URLs
  ];
  
  return spamPatterns.some(pattern => pattern.test(text));
};
