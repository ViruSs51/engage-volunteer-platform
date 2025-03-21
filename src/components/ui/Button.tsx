
import React from 'react';
import { default as ShadcnButton, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends React.ComponentProps<typeof ShadcnButton> {
  children: React.ReactNode;
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link' | 'accent' | 'success';
  size?: 'default' | 'sm' | 'lg' | 'icon' | 'xl';
  className?: string;
  isLoading?: boolean;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  fullWidth?: boolean;
  loadingText?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const Button = ({ 
  children, 
  variant = 'default', 
  size = 'default', 
  className, 
  isLoading = false,
  leadingIcon,
  trailingIcon,
  fullWidth = false,
  loadingText = 'Loading...',
  onClick,
  type,
  disabled,
  ...props 
}: ButtonProps) => {
  // Custom variant classes that aren't part of shadcn/ui
  const variantClasses = {
    'accent': 'bg-accent text-accent-foreground hover:bg-accent/90',
    'success': 'bg-green-600 text-white hover:bg-green-700',
  };
  
  // Custom size classes
  const sizeClasses = {
    'xl': 'h-14 px-8 text-lg rounded-lg',
  };
  
  const selectedVariantClass = (variant === 'accent' || variant === 'success') 
    ? variantClasses[variant] 
    : '';
    
  const selectedSizeClass = size === 'xl' ? sizeClasses[size] : '';
  
  return (
    <ShadcnButton
      variant={['accent', 'success'].includes(variant) ? 'default' : variant}
      size={size === 'xl' ? 'default' : size}
      className={cn(
        'transition-all duration-300 font-medium',
        selectedVariantClass,
        selectedSizeClass,
        fullWidth && 'w-full',
        className
      )}
      disabled={isLoading || disabled}
      onClick={onClick}
      type={type}
      {...props}
    >
      {isLoading ? (
        <span className="flex items-center justify-center">
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          {loadingText}
        </span>
      ) : (
        <span className="flex items-center justify-center">
          {leadingIcon && <span className="mr-2">{leadingIcon}</span>}
          {children}
          {trailingIcon && <span className="ml-2">{trailingIcon}</span>}
        </span>
      )}
    </ShadcnButton>
  );
};

export default Button;
