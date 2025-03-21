
import React from 'react';
import { Button as ShadcnButton } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ComponentProps<typeof ShadcnButton> {
  children: React.ReactNode;
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link' | 'accent';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  className?: string;
  isLoading?: boolean;
}

const Button = ({ 
  children, 
  variant = 'default', 
  size = 'default', 
  className, 
  isLoading = false,
  ...props 
}: ButtonProps) => {
  const variantClasses = variant === 'accent' ? 'bg-accent text-accent-foreground hover:bg-accent/90' : '';
  
  return (
    <ShadcnButton
      variant={variant === 'accent' ? 'default' : variant}
      size={size}
      className={cn(
        'transition-all duration-300 font-medium',
        variantClasses,
        className
      )}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading ? (
        <span className="flex items-center justify-center">
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Loading...
        </span>
      ) : (
        children
      )}
    </ShadcnButton>
  );
};

export default Button;
