import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa';
import { FiArrowUp } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: <FaGithub />, href: 'https://github.com/VinujaJayasundara-github', label: 'GitHub' },
    { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/vinuja-jayasundara-925261178', label: 'LinkedIn' },
    { icon: <FaTwitter />, href: 'https://x.com/Vinuja_o1', label: 'Twitter' },
  ];

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative pt-16 pb-8 border-t" style={{ borderColor: 'var(--color-border)' }}>
      {/* Background gradient */}
      <div className="absolute inset-0 opacity-50" style={{ background: `linear-gradient(to top, var(--color-primary-bg), transparent)` }} />
      
      <div className="container relative z-10">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <motion.a
              href="#home"
              className="text-2xl font-bold inline-block mb-4 tracking-tight"
              whileHover={{ scale: 1.05 }}
            >
              <span className="gradient-text">Vinuja</span>
            </motion.a>
            <p className="mb-6 leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
              A passionate software engineering student building digital experiences
              that make a difference.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full glass flex items-center justify-center transition-colors"
                  style={{ color: 'var(--color-accent-primary)' }}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4" style={{ color: 'var(--color-text-primary)' }}>Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="transition-colors"
                    style={{ color: 'var(--color-text-secondary)' }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4" style={{ color: 'var(--color-text-primary)' }}>Get in Touch</h4>
            <ul className="space-y-2" style={{ color: 'var(--color-text-secondary)' }}>
              <li>
                <a href="mailto:vinujajayasundara@gmail.com" className="transition-colors" style={{ color: 'var(--color-text-secondary)' }}>
                  vinujajayasundara@gmail.com
                </a>
              </li>
              <li>Colombo, Sri Lanka</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px mb-8" style={{ background: `linear-gradient(to right, transparent, var(--color-border), transparent)` }} />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-center md:text-left" style={{ color: 'var(--color-text-secondary)' }}>
            © {currentYear} Your Name. All rights reserved.
          </p>
          <p className="text-sm flex items-center gap-2" style={{ color: 'var(--color-text-secondary)' }}>
            Made with <FaHeart style={{ color: 'var(--color-accent-secondary)' }} /> using React & TypeScript
          </p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg z-50"
        style={{ background: `linear-gradient(135deg, var(--color-accent-primary), var(--color-accent-secondary))` }}
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <FiArrowUp className="text-xl" />
      </motion.button>
    </footer>
  );
};

export default Footer;
