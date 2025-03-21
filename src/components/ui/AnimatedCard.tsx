
import React from 'react';
import { cn } from '@/lib/utils';

interface AnimatedCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const AnimatedCard = ({ children, className, delay = 0, ...props }: AnimatedCardProps) => {
  return (
    <div
      className={cn(
        'rounded-lg bg-card shadow-md overflow-hidden card-hover animate-fade-in-up',
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
      {...props}
    >
      {children}
    </div>
  );
};

export default AnimatedCard;
