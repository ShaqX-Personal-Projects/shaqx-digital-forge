/**
 * Client-side rate limiting utilities
 */

interface RateLimitConfig {
  maxAttempts: number;
  windowMs: number;
  storageKey: string;
}

interface RateLimitAttempt {
  count: number;
  resetTime: number;
}

/**
 * Rate limiter for form submissions and other actions
 */
export class RateLimiter {
  private config: RateLimitConfig;

  constructor(config: RateLimitConfig) {
    this.config = config;
  }

  /**
   * Check if action is allowed
   */
  canProceed(): boolean {
    const now = Date.now();
    const data = this.getData();

    // If no data or reset time has passed, allow
    if (!data || now > data.resetTime) {
      this.resetCounter();
      return true;
    }

    // Check if attempts exceeded
    if (data.count >= this.config.maxAttempts) {
      return false;
    }

    return true;
  }

  /**
   * Record an attempt
   */
  recordAttempt(): void {
    const now = Date.now();
    const data = this.getData();

    if (!data || now > data.resetTime) {
      // Start new window
      this.setData({
        count: 1,
        resetTime: now + this.config.windowMs,
      });
    } else {
      // Increment counter
      this.setData({
        count: data.count + 1,
        resetTime: data.resetTime,
      });
    }
  }

  /**
   * Get remaining time until reset (in seconds)
   */
  getTimeUntilReset(): number {
    const data = this.getData();
    if (!data) return 0;

    const remaining = Math.max(0, data.resetTime - Date.now());
    return Math.ceil(remaining / 1000);
  }

  /**
   * Get remaining attempts
   */
  getRemainingAttempts(): number {
    const data = this.getData();
    if (!data || Date.now() > data.resetTime) {
      return this.config.maxAttempts;
    }

    return Math.max(0, this.config.maxAttempts - data.count);
  }

  /**
   * Reset counter
   */
  private resetCounter(): void {
    this.setData({
      count: 0,
      resetTime: Date.now() + this.config.windowMs,
    });
  }

  /**
   * Get data from sessionStorage
   */
  private getData(): RateLimitAttempt | null {
    try {
      const item = sessionStorage.getItem(this.config.storageKey);
      if (!item) return null;

      const parsed = JSON.parse(item);
      
      // Validate structure
      if (!parsed || typeof parsed.count !== 'number' || typeof parsed.resetTime !== 'number') {
        return null;
      }

      return parsed;
    } catch (error) {
      console.warn('Failed to read rate limit data', error);
      return null;
    }
  }

  /**
   * Set data to sessionStorage
   */
  private setData(data: RateLimitAttempt): void {
    try {
      sessionStorage.setItem(this.config.storageKey, JSON.stringify(data));
    } catch (error) {
      console.warn('Failed to save rate limit data', error);
    }
  }

  /**
   * Clear rate limit data
   */
  clear(): void {
    try {
      sessionStorage.removeItem(this.config.storageKey);
    } catch (error) {
      console.warn('Failed to clear rate limit data', error);
    }
  }
}

/**
 * Create a rate limiter for contact form submissions
 */
export const createContactFormLimiter = () => {
  return new RateLimiter({
    maxAttempts: 3,
    windowMs: 5 * 60 * 1000, // 5 minutes
    storageKey: 'contact_form_rate_limit',
  });
};
