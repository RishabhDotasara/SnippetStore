import { DateTimeFormatOptions } from '../types/date';

export const DEFAULT_DATE_FORMAT: DateTimeFormatOptions = {
  month: 'short',
  day: 'numeric',
  year: 'numeric'
};

export const formatDate = (date: Date, options: DateTimeFormatOptions = DEFAULT_DATE_FORMAT): string => {
  return new Intl.DateTimeFormat('en-US', options).format(date);
};

export const isValidDate = (date: Date): boolean => {
  return date instanceof Date && !isNaN(date.getTime());
};

export const getRelativeTime = (date: Date): string => {
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diffInSeconds < 60) return 'just now';
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
  if (diffInSeconds < 604800) return `${Math.floor(diffInSeconds / 86400)}d ago`;
  
  return formatDate(date);
};