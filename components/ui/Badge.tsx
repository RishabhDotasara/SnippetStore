import React from 'react';
import { cn } from '../../utils/styles';

type BadgeVariant = 'primary' | 'secondary' | 'outline';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
  onClick?: () => void;
}

const variantStyles: Record<BadgeVariant, string> = {
  primary: 'bg-primary-100 text-primary-700 dark:bg-primary-10',
  secondary: 'bg-gray-100 text-gray-700 dark:bg-gray-600 dark:text-white',
  outline: 'border border-gray-200 text-gray-600 dark:text-gray-100 '
};

export const Badge = ({ children, variant = 'primary', className, onClick, ...rest }: BadgeProps) => (
  <span
    className={cn(
      'px-2 py-1 rounded-md text-xs cursor-pointer',
      variantStyles[variant],
      className,
    )}
    onClick={onClick}
    {...rest}
  >
    {children}
  </span>
);