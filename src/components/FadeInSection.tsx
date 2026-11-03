import React, { useRef, useState, useEffect } from 'react';

export interface FadeInSectionProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  id?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
  duration?: number;
  scale?: number;
  once?: boolean;
  onClick?: () => void;
}

export const FadeInSection: React.FC<FadeInSectionProps> = ({
  children,
  delay = 0,
  className = '',
  id,
  direction = 'up',
  distance = 24,
  duration = 0.65,
  scale,
  once = true,
  onClick,
}) => {
  const domRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check reduced motion preference for accessibility
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true);
      return;
    }

    const currentRef = domRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once) {
              observer.unobserve(entry.target);
            }
          } else if (!once) {
            setIsVisible(false);
          }
        });
      },
      {
        rootMargin: '-40px',
        threshold: 0.05,
      }
    );

    observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [once]);

  const getTransform = () => {
    if (isVisible) {
      return scale !== undefined ? 'translate3d(0, 0, 0) scale(1)' : 'translate3d(0, 0, 0)';
    }

    let x = 0;
    let y = 0;
    switch (direction) {
      case 'up':
        y = distance;
        break;
      case 'down':
        y = -distance;
        break;
      case 'left':
        x = distance;
        break;
      case 'right':
        x = -distance;
        break;
      case 'none':
      default:
        break;
    }

    const scalePart = scale !== undefined ? ` scale(${scale})` : '';
    return `translate3d(${x}px, ${y}px, 0)${scalePart}`;
  };

  return (
    <div
      ref={domRef}
      id={id}
      onClick={onClick}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transitionProperty: 'opacity, transform',
        transitionDuration: `${duration}s`,
        transitionDelay: `${delay}s`,
        transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
        willChange: isVisible ? 'auto' : 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
};
