import React from 'react';
import { BookCard } from '../components/BookCard';

export const EBooks: React.FC = () => {
  // Sample data - in a real app, this would come from an API
  const books = [
    {
      id: '1',
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800',
      description: 'A story of decadence and excess, Gatsby explores the darker aspects of the American Dream.',
      format: 'ebook' as const,
      isFree: true,
    },
    {
      id: '2',
      title: '1984',
      author: 'George Orwell',
      cover: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=800',
      description: 'A dystopian social science fiction novel and cautionary tale.',
      format: 'ebook' as const,
      isFree: true,
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">eBooks Collection</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};