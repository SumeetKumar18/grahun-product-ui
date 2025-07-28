import React from 'react';
import { cn } from '@/lib/utils';

interface InteractiveButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  children: React.ReactNode;
}

export const InteractiveButton = React.forwardRef<HTMLButtonElement, InteractiveButtonProps>(
  ({ className, variant = 'secondary', size = 'md', isLoading, children, ...props }, ref) => {
    const baseClasses = cn(
      'inline-flex items-center justify-center font-medium transition-all duration-200',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-grahun-yellow',
      'disabled:pointer-events-none disabled:opacity-50',
      'transform hover:scale-105 active:scale-95',
      className
    );

    const variantClasses = {
      primary: 'bg-grahun-yellow text-black hover:bg-yellow-400',
      secondary: 'bg-grahun-white-20 text-white hover:bg-grahun-white-30',
      ghost: 'text-white hover:bg-grahun-white-20',
    };

    const sizeClasses = {
      sm: 'px-3 py-2 text-sm rounded-lg',
      md: 'px-4 py-3 text-lg rounded-xl',
      lg: 'px-6 py-4 text-xl rounded-xl',
    };

    return (
      <button
        ref={ref}
        className={cn(baseClasses, variantClasses[variant], sizeClasses[size])}
        disabled={isLoading}
        {...props}
      >
        {isLoading ? (
          <div className="animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent" />
        ) : (
          children
        )}
      </button>
    );
  }
);

InteractiveButton.displayName = 'InteractiveButton';
