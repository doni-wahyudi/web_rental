import { useEffect, useRef } from 'react';

/**
 * Custom hook for Intersection Observer based scroll reveal animations.
 * Adds 'visible' class when element enters viewport.
 */
export function useScrollReveal(threshold = 0.15) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}

/**
 * Hook to observe multiple children of a container for staggered reveals.
 */
export function useStaggerReveal(selector = '.reveal, .reveal-left, .reveal-right, .reveal-scale') {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const elements = container.querySelectorAll(selector);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [selector]);

  return containerRef;
}

/**
 * Format price to IDR currency string
 */
export function formatPrice(price) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

/**
 * Generate WhatsApp URL with pre-filled message
 */
export function getWhatsAppUrl(message = '') {
  const phone = '6281234567890'; // Replace with actual number
  const encoded = encodeURIComponent(message || 'Halo RentalKu, saya ingin bertanya tentang sewa mobil.');
  return `https://api.whatsapp.com/send?phone=${phone}&text=${encoded}`;
}
