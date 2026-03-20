import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { BsMoon, BsSun } from 'react-icons/bs';
import { useTheme } from '../hooks/useTheme';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
        isScrolled 
          ? 'py-8 bg-[var(--color-primary-bg)]/70 backdrop-blur-2xl shadow-[0_8px_30px_rgba(0,0,0,0.4)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.4)] light:shadow-[0_8px_30px_rgba(0,0,0,0.1)]' 
          : 'py-10 bg-transparent'
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            className="flex items-center gap-2.5"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="text-3xl font-semibold text-[var(--color-text-primary)]">
              Vinuja
            </span>
          </motion.a>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center">
            <div className="flex items-center gap-8">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className={`relative text-xl font-medium transition-colors duration-500 ${
                    activeSection === item.href.substring(1)
                      ? 'text-[var(--color-text-primary)]'
                      : 'text-[var(--color-text-secondary)] hover:text-[var(--color-accent-primary)]'
                  }`}
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.name}
                  {activeSection === item.href.substring(1) && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-gradient-to-r from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)] rounded-full"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </motion.a>
              ))}
            </div>
          </div>

          {/* CTA Button & Theme Toggle */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Theme Toggle Button */}
            <motion.button
              onClick={toggleTheme}
              className="w-11 h-11 rounded-xl bg-[var(--color-secondary-bg)] border border-[var(--color-border)] flex items-center justify-center text-lg text-[var(--color-accent-primary)] hover:bg-[var(--color-border)] transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <BsSun /> : <BsMoon />}
            </motion.button>

            {/* CTA Button */}
            <motion.a
              href="#contact"
              className="px-6 py-3 text-xl font-semibold text-white bg-gradient-to-r from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)] rounded-xl hover:shadow-lg transition-all shadow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Let's Talk
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden w-11 h-11 rounded-xl bg-[var(--color-secondary-bg)] border border-[var(--color-border)] flex items-center justify-center text-xl text-[var(--color-accent-primary)]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden absolute top-full left-0 right-0 mt-2 mx-4"
          >
            <div className="bg-[var(--color-primary-bg)]/95 backdrop-blur-xl rounded-2xl border border-[var(--color-border)] p-6 shadow-xl">
              <div className="flex flex-col gap-2">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className={`px-4 py-3 rounded-xl text-base font-medium transition-all ${
                      activeSection === item.href.substring(1)
                        ? 'bg-gradient-to-r from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)] text-white'
                        : 'text-[var(--color-text-secondary)] hover:bg-[var(--color-secondary-bg)] hover:text-[var(--color-text-primary)]'
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-[var(--color-border)] flex gap-3">
                {/* Theme Toggle in Mobile */}
                <motion.button
                  onClick={() => {
                    toggleTheme();
                  }}
                  className="flex-shrink-0 w-12 h-12 rounded-xl bg-[var(--color-secondary-bg)] border border-[var(--color-border)] flex items-center justify-center text-lg text-[var(--color-accent-primary)] hover:bg-[var(--color-border)] transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25 }}
                  aria-label="Toggle theme"
                >
                  {theme === 'dark' ? <BsSun /> : <BsMoon />}
                </motion.button>

                {/* CTA Button */}
                <motion.a
                  href="#contact"
                  className="flex-grow px-6 py-3 rounded-xl bg-gradient-to-r from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)] text-white font-semibold text-center"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Let's Talk
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
