import { ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * A utility function to merge classnames and apply tailwindcss classes.
 *
 * @param inputs: ClassValue - Classnames to merge.
 * @returns A string of classnames.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(...inputs))
}
