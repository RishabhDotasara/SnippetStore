import { DateTimeFormatOptions } from "@rishabhdotasara/snippetstore-types";


export const DEFAULT_DATE_FORMAT: DateTimeFormatOptions = {
  month: 'short',
  day: 'numeric',
  year: 'numeric'
};

export const formatDate = (date: Date, options: DateTimeFormatOptions = DEFAULT_DATE_FORMAT): string => {
  return new Intl.DateTimeFormat('en-US', options).format(date);
};

export const isValidDate = (date: Date | string): boolean => {
  return date instanceof Date && !isNaN(date.getTime());
};

export const getRelativeTime = (dateInput: string | Date): string => {
  let date: Date;

  // Parse the input into a Date object
  if (typeof dateInput === "string") {
    date = new Date(dateInput);

    // Handle invalid dates
    if (isNaN(date.getTime())) {
      throw new Error("Invalid date format. Ensure the input is a valid ISO date.");
    }
  } else if (dateInput instanceof Date) {
    date = dateInput;

    // Handle invalid Date objects
    if (isNaN(date.getTime())) {
      throw new Error("Invalid Date object.");
    }
  } else {
    throw new Error("Input must be a string or Date object.");
  }

  // Calculate the relative time
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diffInSeconds < 60) return "just now";
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
  if (diffInSeconds < 604800) return `${Math.floor(diffInSeconds / 86400)}d ago`;

  return formatDate(date);
};
