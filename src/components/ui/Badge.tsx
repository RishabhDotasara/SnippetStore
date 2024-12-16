import React from 'react';
import { cn } from '../../utils/styles';

type BadgeVariant = 'primary' | 'secondary' | 'outline';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  primary: 'bg-primary-100 text-primary-700',
  secondary: 'bg-gray-100 text-gray-700',
  outline: 'border border-gray-200 text-gray-600 dark:text-gray-100'
};

export const Badge = ({ children, variant = 'primary', className }: BadgeProps) => (
  <span
    className={cn(
      'px-2 py-1 rounded-md text-xs',
      variantStyles[variant],
      className
    )}
  >
    {children}
  </span>
);