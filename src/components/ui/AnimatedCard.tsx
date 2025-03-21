
import React from 'react';
import { cn } from '@/lib/utils';

interface AnimatedCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  hoverEffect?: 'scale' | 'lift' | 'glow' | 'border' | 'none';
  animation?: 'fade-in-up' | 'fade-in' | 'zoom-in' | 'slide-in' | 'none';
}

const AnimatedCard = ({ 
  children, 
  className, 
  delay = 0, 
  hoverEffect = 'scale',
  animation = 'fade-in-up',
  ...props 
}: AnimatedCardProps) => {
  const hoverEffectClasses = {
    scale: 'hover:scale-[1.02] transition-transform duration-300',
    lift: 'hover:-translate-y-1 transition-transform duration-300',
    glow: 'hover:shadow-lg hover:shadow-primary/20 transition-shadow duration-300',
    border: 'hover:border-primary/50 transition-colors duration-300 border-2 border-transparent',
    none: '',
  };

  const animationClasses = {
    'fade-in-up': 'animate-fade-in-up',
    'fade-in': 'animate-fade-in',
    'zoom-in': 'animate-zoom-in',
    'slide-in': 'animate-slide-in',
    'none': '',
  };

  return (
    <div
      className={cn(
        'rounded-lg bg-card shadow-md overflow-hidden',
        hoverEffectClasses[hoverEffect],
        animationClasses[animation],
        className
      )}
      style={{ animationDelay: animation !== 'none' ? `${delay}ms` : undefined }}
      {...props}
    >
      {children}
    </div>
  );
};

export default AnimatedCard;
