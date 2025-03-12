
import React from 'react';
import { cn } from '@/lib/utils';

interface BackgroundGradientProps {
  className?: string;
  children?: React.ReactNode;
  variant?: 'default' | 'subtle' | 'vibrant';
  animate?: boolean;
}

const BackgroundGradient = ({
  className,
  children,
  variant = 'default',
  animate = true,
}: BackgroundGradientProps) => {
  const getGradientClasses = () => {
    switch (variant) {
      case 'subtle':
        return 'bg-gradient-to-br from-purple-50/50 via-white to-blue-50/50';
      case 'vibrant':
        return 'bg-gradient-to-br from-nettwork-purple/10 via-nettwork-blue/5 to-nettwork-teal/10';
      default:
        return 'bg-gradient-to-br from-nettwork-blue/5 via-white to-nettwork-purple/5';
    }
  };

  return (
    <div className={cn(
      'absolute inset-0 -z-10 overflow-hidden',
      getGradientClasses(),
      animate && 'animate-bg-pan',
      className
    )}>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-nettwork-blue/10 rounded-full filter blur-3xl opacity-60" />
      <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-nettwork-purple/10 rounded-full filter blur-3xl opacity-50" />
      <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-nettwork-teal/10 rounded-full filter blur-3xl opacity-40" />
      {children}
    </div>
  );
};

export default BackgroundGradient;
