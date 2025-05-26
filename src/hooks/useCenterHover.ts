import { useEffect, useState, useRef } from 'react';

export const useCenterHover = () => {
  const [isInCenter, setIsInCenter] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return;

      const rect = elementRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementCenter = rect.top + rect.height / 2;
      const screenCenter = windowHeight / 2;
      const tolerance = 100; // pixels from center to trigger effect

      setIsInCenter(Math.abs(elementCenter - screenCenter) < tolerance);
    };

    // Initial check
    handleScroll();

    // Add scroll and resize listeners
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return { elementRef, isInCenter };
}; 