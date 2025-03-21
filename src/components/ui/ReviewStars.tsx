
import React from 'react';
import { Star, StarHalf } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ReviewStarsProps {
  rating: number;
  maxRating?: number;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showEmpty?: boolean;
}

const ReviewStars = ({
  rating,
  maxRating = 5,
  size = 'md',
  className,
  showEmpty = true
}: ReviewStarsProps) => {
  // Calculate the number of full stars, half stars, and empty stars
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = maxRating - fullStars - (hasHalfStar ? 1 : 0);

  // Determine star sizes based on the size prop
  const starSizes = {
    sm: 'w-3 h-3',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };

  const starSize = starSizes[size];

  return (
    <div className={cn('flex items-center', className)}>
      {/* Render full stars */}
      {Array.from({ length: fullStars }).map((_, i) => (
        <Star
          key={`full-${i}`}
          className={cn(starSize, 'text-yellow-500 fill-yellow-500')}
        />
      ))}

      {/* Render half star if needed */}
      {hasHalfStar && (
        <StarHalf
          className={cn(starSize, 'text-yellow-500 fill-yellow-500')}
        />
      )}

      {/* Render empty stars */}
      {showEmpty && 
        Array.from({ length: emptyStars }).map((_, i) => (
          <Star
            key={`empty-${i}`}
            className={cn(starSize, 'text-yellow-500/30')}
          />
        ))
      }
    </div>
  );
};

export default ReviewStars;
