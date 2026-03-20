import { motion } from 'framer-motion';
import { Button } from 'antd';
import { FiDownload, FiArrowRight } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import StarryBackground from './StarryBackground';
import profileImage from '../assets/Vinuja.png';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.7, 
        ease: [0.4, 0, 0.2, 1] as const 
      },
    },
  };

  const socialLinks = [
    { icon: <FaGithub />, href: 'https://github.com/VinujaJayasundara-github', label: 'GitHub' },
    { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/vinuja-jayasundara-925261178', label: 'LinkedIn' },
    { icon: <FaTwitter />, href: 'https://x.com/Vinuja_o1', label: 'Twitter' },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Starry Background with glass effects */}
      <StarryBackground />

      <div className="container py-20 md:py-24 lg:py-0 ml-8 md:ml-20 lg:ml-32">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center relative z-10">
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <motion.div variants={itemVariants} className="mb-4">
              <span className="inline-block px-4 py-1.5 rounded-full glass text-sm font-medium" style={{ color: 'var(--color-accent-primary)' }}>
              🟢 Open to Work
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 leading-tight"
            >
              Hello, I'm{' '}
              <span className="gradient-text">Vinuja Jayasundara</span>
            </motion.h1>

            <motion.h2
              variants={itemVariants}
              className="text-lg md:text-xl mb-3 font-semibold"
              style={{ color: 'var(--color-accent-secondary)' }}
            >
              Software Engineering Undergraduate
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg mb-6 max-w-lg mx-auto lg:mx-0 leading-relaxed"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              A passionate software engineering student dedicated to building innovative 
              solutions and creating impactful digital experiences. Currently exploring 
              the endless possibilities of modern web technologies.
            </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start"
          >
            <motion.div
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <Button
                type="primary"
                size="large"
                icon={<FiArrowRight />}
                className="!h-12 !px-8 !rounded-full !font-semibold !text-sm !shadow-lg"
                style={{ '--tw-shadow-color': 'var(--color-accent-primary)' } as any}
                href="#projects"
              >
                View My Work
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <Button
                size="large"
                icon={<FiDownload />}
                className="!h-12 !px-8 !rounded-full !font-semibold !text-sm !bg-transparent !border"
                style={{
                  borderColor: 'var(--color-border)',
                  color: 'var(--color-accent-secondary)'
                }}
              >
                Download CV
              </Button>
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex gap-5 mt-10 justify-center lg:justify-start"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full glass flex items-center justify-center text-lg"
                style={{ color: 'var(--color-accent-primary)' }}
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: 0.8 + index * 0.1,
                  duration: 0.5,
                  ease: [0.4, 0, 0.2, 1]
                }}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
          </motion.div>

          {/* Profile Image / 3D Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 1, 
              delay: 0.3,
              ease: [0.4, 0, 0.2, 1]
            }}
            className="relative flex justify-center order-1 lg:order-2"
          >
            <div className="relative">
              {/* Decorative Ring - smoother rotation */}
              <motion.div
                className="absolute inset-0 rounded-full border"
                style={{ 
                  width: '110%', 
                  height: '110%', 
                  top: '-5%', 
                  left: '-5%',
                  borderColor: 'var(--color-accent-primary)',
                  opacity: 0.15
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute inset-0 rounded-full border"
                style={{ 
                  width: '120%', 
                  height: '120%', 
                  top: '-10%', 
                  left: '-10%',
                  borderColor: 'var(--color-accent-primary)',
                  opacity: 0.1
                }}
                animate={{ rotate: -360 }}
                transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
              />
              
              {/* Profile Container */}
              <motion.img
                src={profileImage}
                alt="Vinuja Jayasundara"
                className="w-auto h-auto max-w-[400px] max-h-[500px] object-contain"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              />

              {/* Floating Badges - smoother animations */}
              <motion.div
                className="absolute -top-1 right-0 glass px-3 py-1.5 rounded-full shadow-lg"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span className="text-xs font-medium" style={{ color: 'var(--color-accent-primary)', opacity: 0.9 }}>React.js</span>
              </motion.div>

              <motion.div
                className="absolute top-1/3 -left-2 glass px-3 py-1.5 rounded-full shadow-lg"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              >
                <span className="text-xs font-medium" style={{ color: 'var(--color-accent-primary)', opacity: 0.9 }}>TypeScript</span>
              </motion.div>

              <motion.div
                className="absolute bottom-12 -right-2 glass px-3 py-1.5 rounded-full shadow-lg"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              >
                <span className="text-xs font-medium" style={{ color: 'var(--color-accent-primary)', opacity: 0.9 }}>Node.js</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ 
          opacity: { delay: 1.5, duration: 0.5 },
          y: { duration: 2.5, repeat: Infinity, ease: 'easeInOut' }
        }}
      >
        <div className="w-5 h-9 rounded-full border flex justify-center pt-2" style={{ borderColor: 'var(--color-border)' }}>
          <motion.div
            className="w-1 h-1 rounded-full"
            style={{ backgroundColor: 'var(--color-accent-primary)', opacity: 0.6 }}
            animate={{ y: [0, 10, 0], opacity: [0.6, 0.3, 0.6] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
