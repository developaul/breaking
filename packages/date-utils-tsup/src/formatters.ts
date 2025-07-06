/**
 * Date formatting utilities
 */

export interface DateFormatOptions {
  locale?: string;
  timezone?: string;
}

/**
 * Format date to ISO string
 */
export function toISOString(date: Date): string {
  return date.toISOString();
}

/**
 * Format date to human-readable string
 */
export function toHumanString(date: Date, options: DateFormatOptions = {}): string {
  const { locale = 'en-US', timezone } = options;
  
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZone: timezone
  }).format(date);
}

/**
 * Format date to short date string (MM/DD/YYYY)
 */
export function toShortDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric'
  });
}

/**
 * Format date to time string (HH:MM:SS)
 */
export function toTimeString(date: Date, includeSeconds: boolean = false): string {
  const options: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  };
  
  if (includeSeconds) {
    options.second = '2-digit';
  }
  
  return date.toLocaleTimeString('en-US', options);
}

/**
 * Format date relative to now (e.g., "2 hours ago", "in 3 days")
 */
export function toRelativeTime(date: Date, baseDate: Date = new Date()): string {
  const diffMs = date.getTime() - baseDate.getTime();
  const diffSeconds = Math.floor(diffMs / 1000);
  const diffMinutes = Math.floor(diffSeconds / 60);
  const diffHours = Math.floor(diffMinutes / 60);
  const diffDays = Math.floor(diffHours / 24);
  
  if (Math.abs(diffDays) >= 1) {
    return diffDays > 0 ? `in ${diffDays} day${diffDays > 1 ? 's' : ''}` : `${Math.abs(diffDays)} day${Math.abs(diffDays) > 1 ? 's' : ''} ago`;
  }
  
  if (Math.abs(diffHours) >= 1) {
    return diffHours > 0 ? `in ${diffHours} hour${diffHours > 1 ? 's' : ''}` : `${Math.abs(diffHours)} hour${Math.abs(diffHours) > 1 ? 's' : ''} ago`;
  }
  
  if (Math.abs(diffMinutes) >= 1) {
    return diffMinutes > 0 ? `in ${diffMinutes} minute${diffMinutes > 1 ? 's' : ''}` : `${Math.abs(diffMinutes)} minute${Math.abs(diffMinutes) > 1 ? 's' : ''} ago`;
  }
  
  return 'just now';
}

/**
 * Format duration in milliseconds to human-readable string
 */
export function formatDuration(durationMs: number): string {
  const seconds = Math.floor(durationMs / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  
  if (days > 0) {
    return `${days}d ${hours % 24}h ${minutes % 60}m ${seconds % 60}s`;
  }
  
  if (hours > 0) {
    return `${hours}h ${minutes % 60}m ${seconds % 60}s`;
  }
  
  if (minutes > 0) {
    return `${minutes}m ${seconds % 60}s`;
  }
  
  return `${seconds}s`;
}