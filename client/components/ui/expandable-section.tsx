import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ExpandableSectionProps {
  title: string;
  children: React.ReactNode;
  defaultExpanded?: boolean;
  className?: string;
}

export const ExpandableSection: React.FC<ExpandableSectionProps> = ({
  title,
  children,
  defaultExpanded = true,
  className,
}) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <div className={cn('space-y-4', className)}>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center justify-between w-full text-left group"
        aria-expanded={isExpanded}
      >
        <h3 className="text-grahun-white-40 text-lg group-hover:text-grahun-white-70 transition-colors">
          {title}
        </h3>
        <ChevronDown
          className={cn(
            'w-5 h-5 text-grahun-white-40 transition-transform duration-200',
            isExpanded ? 'rotate-180' : 'rotate-0'
          )}
        />
      </button>
      
      <div
        className={cn(
          'overflow-hidden transition-all duration-300 ease-in-out',
          isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="animate-slide-up">
          {children}
        </div>
      </div>
    </div>
  );
};
