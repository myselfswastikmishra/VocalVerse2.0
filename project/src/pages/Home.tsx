import React, { useState } from 'react';
import { Search, BookOpen, Headphones, MessageCircle, Sparkles, BookMarked, Users, ArrowRight } from 'lucide-react';
import { BookCard } from '../components/BookCard';

export const Home: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const featuredBooks = [
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
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      cover: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=800',
      description: 'A classic tale of love and values in the class-conscious England of the late 18th century.',
      format: 'audiobook' as const,
      isFree: true,
    },
    {
      id: '3',
      title: 'The Art of War',
      author: 'Sun Tzu',
      cover: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=800',
      description: 'An ancient Chinese military treatise dating from the 5th century BC.',
      format: 'ebook' as const,
      isFree: true,
    }
  ];

  return (
    <div>
      {/* Hero Section with Enhanced Visual Elements */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-white to-purple-50 dark:from-purple-900/20 dark:via-gray-900 dark:to-purple-800/20"></div>
          <div className="absolute top-0 left-0 w-full h-full opacity-30 dark:opacity-10"
               style={{
                 backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
               }}
          ></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32 text-center relative">
          <div className="absolute top-10 right-10 animate-pulse">
            <Sparkles className="w-8 h-8 text-purple-500" />
          </div>
          
          <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-6 relative">
            Welcome to 
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-400 ml-3">
              VocalVerse
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
            Your AI-Powered Digital Library Experience. Discover, listen, and engage with books in ways you never imagined.
          </p>
        
          <div className="max-w-2xl mx-auto mb-16 relative">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search books, authors, or genres..."
                className="w-full px-6 py-4 pl-14 rounded-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-lg"
              />
              <Search className="absolute left-5 top-4 w-6 h-6 text-gray-400" />
            </div>
            
            <div className="absolute -bottom-8 left-0 right-0 flex justify-center space-x-4 text-sm text-gray-500">
              <span>Popular: </span>
              <button className="hover:text-purple-500 transition-colors">Fantasy</button>
              <button className="hover:text-purple-500 transition-colors">Science Fiction</button>
              <button className="hover:text-purple-500 transition-colors">Mystery</button>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-24">
            <div className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl transform hover:-translate-y-1 transition-transform">
              <BookOpen className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2">10,000+</h3>
              <p className="text-gray-600 dark:text-gray-300">Digital Books</p>
            </div>
            <div className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl transform hover:-translate-y-1 transition-transform">
              <Headphones className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2">5,000+</h3>
              <p className="text-gray-600 dark:text-gray-300">AI Audiobooks</p>
            </div>
            <div className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl transform hover:-translate-y-1 transition-transform">
              <Users className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2">50,000+</h3>
              <p className="text-gray-600 dark:text-gray-300">Active Readers</p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl -mt-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="p-6 text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-purple-100 dark:bg-purple-900/50 rounded-2xl flex items-center justify-center">
              <BookMarked className="w-8 h-8 text-purple-500" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Smart Library</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Organize and access your books intelligently with AI-powered categorization
            </p>
          </div>
          <div className="p-6 text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-purple-100 dark:bg-purple-900/50 rounded-2xl flex items-center justify-center">
              <Headphones className="w-8 h-8 text-purple-500" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Voice Synthesis</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Convert any text to natural-sounding audio with multiple voice options
            </p>
          </div>
          <div className="p-6 text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-purple-100 dark:bg-purple-900/50 rounded-2xl flex items-center justify-center">
              <MessageCircle className="w-8 h-8 text-purple-500" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Interactive Chat</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Engage in meaningful discussions about your readings with AI assistance
            </p>
          </div>
        </div>
      </div>

      {/* Featured Books Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold">Featured Free Books</h2>
          <button className="flex items-center text-purple-500 hover:text-purple-600 transition-colors">
            View All <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredBooks.map(book => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Start Your Reading Journey Today</h2>
          <p className="text-lg mb-8 text-purple-100">
            Upload your own books or explore our collection. Let AI enhance your reading experience.
          </p>
          <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-50 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};