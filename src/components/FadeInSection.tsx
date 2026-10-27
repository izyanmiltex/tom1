import React from 'react';
import { motion, Transition } from 'framer-motion';

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
  const getInitialOffset = () => {
    switch (direction) {
      case 'up':
        return { y: distance, x: 0 };
      case 'down':
        return { y: -distance, x: 0 };
      case 'left':
        return { x: distance, y: 0 };
      case 'right':
        return { x: -distance, y: 0 };
      case 'none':
      default:
        return { x: 0, y: 0 };
    }
  };

  const initialOffset = getInitialOffset();

  const transitionConfig: Transition = {
    duration,
    delay,
    ease: [0.22, 1, 0.36, 1], // Smooth luxury cubic-bezier curve
  };

  return (
    <motion.div
      id={id}
      onClick={onClick}
      className={className}
      initial={{
        opacity: 0,
        ...initialOffset,
        ...(scale ? { scale } : {}),
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        ...(scale ? { scale: 1 } : {}),
      }}
      viewport={{
        once,
        margin: '-50px',
      }}
      transition={transitionConfig}
    >
      {children}
    </motion.div>
  );
};
