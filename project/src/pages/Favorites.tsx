import React from 'react';
import { Heart } from 'lucide-react';

export const Favorites: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto text-center">
      <div className="flex flex-col items-center justify-center">
        <Heart className="w-16 h-16 text-purple-500 mb-4" />
        <h1 className="text-3xl font-bold mb-4">Your Favorites</h1>
        <p className="text-gray-600 dark:text-gray-300">
          Books you've marked as favorites will appear here. Start exploring and collecting your favorite reads!
        </p>
      </div>
    </div>
  );
};