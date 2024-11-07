import { ButtonHTMLAttributes, ReactNode } from 'react';
import { clsx } from 'clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: ReactNode;
}

export function Button({ 
  variant = 'primary', 
  children, 
  className, 
  ...props 
}: ButtonProps) {
  return (
    <button
      className={clsx(
        'inline-flex items-center px-6 py-3 text-lg font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2',
        {
          'text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500': variant === 'primary',
          'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 focus:ring-indigo-500': variant === 'secondary',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}