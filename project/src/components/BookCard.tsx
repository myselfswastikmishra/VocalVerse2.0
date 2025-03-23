import React from 'react';
import { Heart, PlayCircle, MessageCircle } from 'lucide-react';
import type { Book } from '../types';

interface BookCardProps {
  book: Book;
}

export const BookCard: React.FC<BookCardProps> = ({ book }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <img src={book.cover} alt={book.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{book.title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">{book.author}</p>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 line-clamp-2">{book.description}</p>
        
        <div className="mt-4 flex items-center justify-between">
          <div className="flex space-x-2">
            <button className="action-button">
              <Heart className="w-5 h-5" />
            </button>
            <button className="action-button">
              <PlayCircle className="w-5 h-5" />
            </button>
            <button className="action-button">
              <MessageCircle className="w-5 h-5" />
            </button>
          </div>
          {book.isFree ? (
            <span className="text-green-600 dark:text-green-400 font-medium">Free</span>
          ) : (
            <span className="text-purple-600 dark:text-purple-400 font-medium">Premium</span>
          )}
        </div>
      </div>
    </div>
  );
};