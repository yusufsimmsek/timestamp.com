/**
 * Optimized smooth scroll utility with performance improvements
 */

export function smoothScrollTo(element: HTMLElement | null, offset: number = 80) {
  if (!element) return;

  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - offset;

  // Use requestAnimationFrame for smooth scrolling
  const startPosition = window.pageYOffset;
  const distance = offsetPosition - startPosition;
  let startTime: number | null = null;

  function easeInOutCubic(t: number): number {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function animation(currentTime: number) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const duration = 800; // 800ms scroll duration
    const progress = Math.min(timeElapsed / duration, 1);

    window.scrollTo({
      top: startPosition + distance * easeInOutCubic(progress),
      behavior: 'auto', // We handle the animation manually
    });

    if (progress < 1) {
      requestAnimationFrame(animation);
    }
  }

  requestAnimationFrame(animation);
}

/**
 * Debounced scroll handler for performance
 */
export function createScrollHandler(
  callback: () => void,
  delay: number = 100
): () => void {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  return () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(callback, delay);
  };
}

/**
 * Throttled scroll handler for performance
 */
export function createThrottledScrollHandler(
  callback: () => void,
  limit: number = 100
): () => void {
  let inThrottle: boolean = false;

  return () => {
    if (!inThrottle) {
      callback();
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}


