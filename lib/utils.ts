import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { smoothScrollTo } from './smoothScroll';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatTime(time: string): string {
  return time;
}

/**
 * Optimized smooth scroll to section
 * Uses requestAnimationFrame for better performance
 */
export function scrollToSection(id: string) {
  const element = document.getElementById(id);
  if (element) {
    smoothScrollTo(element, 80);
  }
}

