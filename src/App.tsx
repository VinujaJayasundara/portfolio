import { ConfigProvider } from 'antd';
import { useTheme } from './hooks/useTheme';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

function AppContent() {
  const { theme } = useTheme();

  const isDark = theme === 'dark';

  const themeConfig = isDark
    ? {
        token: {
          colorPrimary: '#38BDF8',
          colorBgBase: '#0F172A',
          colorTextBase: '#F8FAFC',
          borderRadius: 12,
          fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          fontSize: 16,
          colorBorder: '#334155',
          colorBgContainer: '#1E293B',
        },
      }
    : {
        token: {
          colorPrimary: '#2563EB',
          colorBgBase: '#FFFFFF',
          colorTextBase: '#334155',
          borderRadius: 12,
          fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          fontSize: 16,
          colorBorder: '#E2E8F0',
          colorBgContainer: '#F1F5F9',
        },
      };

  return (
    <ConfigProvider theme={themeConfig}>
      <div className={`min-h-screen transition-colors duration-300 ${
        isDark
          ? 'bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-[#F8FAFC]'
          : 'bg-[#FFFFFF] text-[#334155]'
      }`}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </ConfigProvider>
  );
}

function App() {
  return <AppContent />;
}

export default App;
