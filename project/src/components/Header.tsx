import React from 'react';
import { Link } from 'react-router-dom';
import { Mic, Book, Headphones, Heart, Upload, Wallet, MessageSquare } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export const Header: React.FC = () => {
  return (
    <header className="bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Mic className="w-8 h-8 text-purple-600 dark:text-purple-400" />
            <span className="text-xl font-bold text-gray-900 dark:text-white">VocalVerse</span>
          </Link>

          <nav className="flex items-center space-x-6">
            <Link to="/ebooks" className="nav-link">
              <Book className="w-5 h-5" />
              <span>eBooks</span>
            </Link>
            <Link to="/audiobooks" className="nav-link">
              <Headphones className="w-5 h-5" />
              <span>Audiobooks</span>
            </Link>
            <Link to="/favorites" className="nav-link">
              <Heart className="w-5 h-5" />
              <span>Favorites</span>
            </Link>
            <Link to="/chat" className="nav-link">
              <MessageSquare className="w-5 h-5" />
              <span>AI Chat</span>
            </Link>
            <Link to="/upload" className="nav-link">
              <Upload className="w-5 h-5" />
              <span>Upload</span>
            </Link>
            <Link to="/donate" className="nav-link">
              <Wallet className="w-5 h-5" />
              <span>Donate</span>
            </Link>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
};