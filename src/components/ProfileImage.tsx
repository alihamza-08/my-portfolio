import React from 'react';
import { cn } from '@/lib/utils';

interface ProfileImageProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const ProfileImage: React.FC<ProfileImageProps> = ({ size = 'md', className }) => {
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32',
    xl: 'w-40 h-40'
  };

  return (
    <div className={cn(
      'relative group',
      className
    )}>
      <div className={cn(
        'rounded-full overflow-hidden border-4 border-gradient-to-r from-purple-400 to-pink-400 p-1 bg-gradient-to-r from-purple-400 to-pink-400 animate-pulse-slow',
        sizeClasses[size]
      )}>
        <div className="w-full h-full rounded-full overflow-hidden bg-gray-800">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
            alt="Ali Hamza - DevOps Engineer"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      </div>
      
      {/* Floating animation rings */}
      <div className="absolute inset-0 rounded-full border-2 border-purple-400/30 animate-ping" style={{ animationDuration: '3s' }}></div>
      <div className="absolute inset-0 rounded-full border-2 border-pink-400/20 animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
    </div>
  );
};

export default ProfileImage;