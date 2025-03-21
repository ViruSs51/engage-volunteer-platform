
import React from 'react';
import { Button as ShadcnButton, buttonVariants } from '@/components/ui/button';
import { type VariantProps } from 'class-variance-authority';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  Omit<VariantProps<typeof buttonVariants>, 'size'> {
  size?: 'default' | 'sm' | 'lg' | 'icon';
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link' | 'accent';
  children: React.ReactNode;
}

const Button = ({ 
  children,
  className,
  variant,
  size,
  ...props
}: ButtonProps) => {
  return (
    <ShadcnButton
      variant={variant}
      size={size as any}
      className={className}
      {...props}
    >
      {children}
    </ShadcnButton>
  );
};

export default Button;
