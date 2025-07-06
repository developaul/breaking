/**
 * Date validation utilities
 */

/**
 * Check if a value is a valid Date object
 */
export function isValidDate(value: any): value is Date {
  return value instanceof Date && !isNaN(value.getTime());
}

/**
 * Check if a date string is in ISO format
 */
export function isISOString(dateString: string): boolean {
  if (typeof dateString !== 'string') return false;
  
  const isoRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z?$/;
  return isoRegex.test(dateString) && !isNaN(new Date(dateString).getTime());
}

/**
 * Check if a date is in the past
 */
export function isPast(date: Date, baseDate: Date = new Date()): boolean {
  if (!isValidDate(date)) return false;
  return date.getTime() < baseDate.getTime();
}

/**
 * Check if a date is in the future
 */
export function isFuture(date: Date, baseDate: Date = new Date()): boolean {
  if (!isValidDate(date)) return false;
  return date.getTime() > baseDate.getTime();
}

/**
 * Check if a date is today
 */
export function isToday(date: Date, baseDate: Date = new Date()): boolean {
  if (!isValidDate(date)) return false;
  
  const dateStr = date.toDateString();
  const baseDateStr = baseDate.toDateString();
  
  return dateStr === baseDateStr;
}

/**
 * Check if a date is yesterday
 */
export function isYesterday(date: Date, baseDate: Date = new Date()): boolean {
  if (!isValidDate(date)) return false;
  
  const yesterday = new Date(baseDate);
  yesterday.setDate(yesterday.getDate() - 1);
  
  return date.toDateString() === yesterday.toDateString();
}

/**
 * Check if a date is tomorrow
 */
export function isTomorrow(date: Date, baseDate: Date = new Date()): boolean {
  if (!isValidDate(date)) return false;
  
  const tomorrow = new Date(baseDate);
  tomorrow.setDate(tomorrow.getDate() + 1);
  
  return date.toDateString() === tomorrow.toDateString();
}

/**
 * Check if a date is within a specific range
 */
export function isInRange(date: Date, startDate: Date, endDate: Date): boolean {
  if (!isValidDate(date) || !isValidDate(startDate) || !isValidDate(endDate)) {
    return false;
  }
  
  const dateTime = date.getTime();
  const startTime = startDate.getTime();
  const endTime = endDate.getTime();
  
  return dateTime >= startTime && dateTime <= endTime;
}

/**
 * Check if a date is a weekend (Saturday or Sunday)
 */
export function isWeekend(date: Date): boolean {
  if (!isValidDate(date)) return false;
  
  const dayOfWeek = date.getDay();
  return dayOfWeek === 0 || dayOfWeek === 6; // Sunday = 0, Saturday = 6
}

/**
 * Check if a date is a weekday (Monday to Friday)
 */
export function isWeekday(date: Date): boolean {
  if (!isValidDate(date)) return false;
  
  const dayOfWeek = date.getDay();
  return dayOfWeek >= 1 && dayOfWeek <= 5; // Monday = 1, Friday = 5
}

/**
 * Check if a year is a leap year
 */
export function isLeapYear(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

/**
 * Check if two dates are the same day
 */
export function isSameDay(date1: Date, date2: Date): boolean {
  if (!isValidDate(date1) || !isValidDate(date2)) return false;
  
  return date1.toDateString() === date2.toDateString();
}

/**
 * Check if two dates are in the same month
 */
export function isSameMonth(date1: Date, date2: Date): boolean {
  if (!isValidDate(date1) || !isValidDate(date2)) return false;
  
  return date1.getFullYear() === date2.getFullYear() && 
         date1.getMonth() === date2.getMonth();
}

/**
 * Check if two dates are in the same year
 */
export function isSameYear(date1: Date, date2: Date): boolean {
  if (!isValidDate(date1) || !isValidDate(date2)) return false;
  
  return date1.getFullYear() === date2.getFullYear();
}