
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { Calendar, Clock, CheckCircle, XCircle } from 'lucide-react';

interface EventStatusBadgeProps {
  status: 'upcoming' | 'ongoing' | 'completed' | 'cancelled';
  className?: string;
  showIcon?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const EventStatusBadge = ({
  status,
  className,
  showIcon = true,
  size = 'md',
}: EventStatusBadgeProps) => {
  const getStatusConfig = () => {
    switch (status) {
      case 'upcoming':
        return {
          label: 'Upcoming',
          variant: 'outline' as const,
          icon: Calendar,
          customClass: 'border-blue-200 text-blue-700 bg-blue-50',
        };
      case 'ongoing':
        return {
          label: 'Ongoing',
          variant: 'default' as const,
          icon: Clock,
          customClass: 'bg-green-500 hover:bg-green-600',
        };
      case 'completed':
        return {
          label: 'Completed',
          variant: 'secondary' as const,
          icon: CheckCircle,
          customClass: 'bg-gray-200 text-gray-700',
        };
      case 'cancelled':
        return {
          label: 'Cancelled',
          variant: 'destructive' as const,
          icon: XCircle,
          customClass: '',
        };
    }
  };

  const config = getStatusConfig();
  const sizeClasses = {
    sm: 'text-xs py-0 px-2',
    md: 'text-sm py-0.5 px-2.5',
    lg: 'py-1 px-3',
  };

  const Icon = config.icon;

  return (
    <Badge 
      variant={config.variant} 
      className={cn(
        config.customClass,
        sizeClasses[size],
        'font-medium',
        className
      )}
    >
      {showIcon && <Icon className="mr-1 h-3 w-3" />}
      {config.label}
    </Badge>
  );
};

export default EventStatusBadge;
