import React from 'react';
import { BookCard } from '../components/BookCard';

export const AudioBooks: React.FC = () => {
  // Sample data - in a real app, this would come from an API
  const books = [
    {
      id: '3',
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      cover: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=800',
      description: 'A classic tale of love and values in the class-conscious England of the late 18th century.',
      format: 'audiobook' as const,
      isFree: true,
    },
    {
      id: '4',
      title: 'The Art of War',
      author: 'Sun Tzu',
      cover: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=800',
      description: 'An ancient Chinese military treatise dating from the 5th century BC.',
      format: 'audiobook' as const,
      isFree: true,
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Audiobooks Collection</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};