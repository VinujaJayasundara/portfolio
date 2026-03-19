import { ConfigProvider } from 'antd';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#0f427e',
          colorBgBase: '#081635',
          colorTextBase: '#ffffff',
          borderRadius: 12,
          fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          fontSize: 16,
        },
      }}
    >
      <div className="min-h-screen bg-gradient-to-br from-luna-darkest via-luna-dark to-luna-darkest">
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

export default App;
