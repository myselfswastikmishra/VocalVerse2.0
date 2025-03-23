import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { EBooks } from './pages/EBooks';
import { AudioBooks } from './pages/AudioBooks';
import { Upload } from './pages/Upload';
import { Donate } from './pages/Donate';
import { Favorites } from './pages/Favorites';
import { Chat } from './pages/Chat';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
          <Header />
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/ebooks" element={<EBooks />} />
              <Route path="/audiobooks" element={<AudioBooks />} />
              <Route path="/upload" element={<Upload />} />
              <Route path="/donate" element={<Donate />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/chat" element={<Chat />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;