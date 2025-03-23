export interface Book {
  id: string;
  title: string;
  author: string;
  cover: string;
  description: string;
  format: 'ebook' | 'audiobook';
  isFree: boolean;
}

export interface Theme {
  isDark: boolean;
  toggleTheme: () => void;
}