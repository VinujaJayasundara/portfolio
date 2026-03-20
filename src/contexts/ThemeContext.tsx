import { createContext, useState, useEffect, type ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(() => {
    // Check localStorage first
    const saved = localStorage.getItem('portfolio-theme') as Theme | null;
    if (saved) {
      return saved;
    }
    // Check system preference
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'dark';
  });

  useEffect(() => {
    // Save to localStorage
    localStorage.setItem('portfolio-theme', theme);

    // Update document class and CSS variables
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    root.setAttribute('data-theme', theme);

    // Set CSS variables based on theme
    if (theme === 'dark') {
      // Dark Mode - Modern Dev
      root.style.setProperty('--color-primary-bg', '#0F172A');
      root.style.setProperty('--color-secondary-bg', '#1E293B');
      root.style.setProperty('--color-accent-primary', '#38BDF8');
      root.style.setProperty('--color-accent-secondary', '#818CF8');
      root.style.setProperty('--color-text-primary', '#F8FAFC');
      root.style.setProperty('--color-text-secondary', '#CBD5E1');
      root.style.setProperty('--color-border', '#334155');
    } else {
      // Light Mode - Clean Minimalist
      root.style.setProperty('--color-primary-bg', '#FFFFFF');
      root.style.setProperty('--color-secondary-bg', '#F1F5F9');
      root.style.setProperty('--color-accent-primary', '#0F172A');
      root.style.setProperty('--color-accent-secondary', '#2563EB');
      root.style.setProperty('--color-text-primary', '#000000');
      root.style.setProperty('--color-text-secondary', '#64748B');
      root.style.setProperty('--color-border', '#E2E8F0');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
