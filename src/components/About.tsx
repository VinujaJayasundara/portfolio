import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiCode, FiBook, FiTarget, FiHeart } from 'react-icons/fi';
import adobePhoto from '../assets/Adobe Express - file.png';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: [0.4, 0, 0.2, 1] as const 
      },
    },
  };

  const highlights = [
    {
      icon: <FiCode />,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code',
    },
    {
      icon: <FiBook />,
      title: 'Continuous Learning',
      description: 'Always exploring new technologies',
    },
    {
      icon: <FiTarget />,
      title: 'Problem Solver',
      description: 'Turning challenges into solutions',
    },
    {
      icon: <FiHeart />,
      title: 'Passionate',
      description: 'Love what I do every day',
    },
  ];

  const stats = [
    { number: '10+', label: 'Projects Completed' },
    { number: '3+', label: 'Years of Learning' },
    { number: '5+', label: 'Technologies' },
    { number: '100%', label: 'Dedication' },
  ];

  return (
    <section id="about" className="section-padding relative" ref={ref}>
      {/* Background accent */}
      <div className="absolute right-0 top-1/4 w-80 h-80 rounded-full blur-3xl" style={{ backgroundColor: 'var(--color-accent-primary)', opacity: 0.1 }} />
      
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="text-sm font-semibold tracking-[0.15em] uppercase" style={{ color: 'var(--color-accent-secondary)' }}>
              Get to know me
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3">
              About <span className="gradient-text">Me</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image Side */}
            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <div className="relative z-10">
                {/* Main Image Container */}
                <motion.div
                  className="relative rounded-2xl overflow-hidden glow"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="aspect-[4/5] flex items-center justify-center" style={{ background: `linear-gradient(135deg, var(--color-secondary-bg), var(--color-primary-bg))` }}>
                    <img 
                      src={adobePhoto} 
                      alt="Vinuja Jayasundara" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, var(--color-primary-bg), transparent)' }} />
                </motion.div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 w-24 h-24 border-2 rounded-2xl" style={{ borderColor: 'var(--color-accent-primary)', opacity: 0.3 }} />
                <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 rounded-2xl" style={{ borderColor: 'var(--color-accent-secondary)', opacity: 0.3 }} />
              </div>

              {/* Experience Badge */}
              <motion.div
                className="absolute -bottom-6 -right-6 glass rounded-2xl p-6 z-20"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="text-3xl font-bold gradient-text">3+</div>
                <div className="text-sm" style={{ color: 'var(--color-accent-primary)' }}>Years of<br />Learning</div>
              </motion.div>
            </motion.div>

            {/* Content Side */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 leading-tight">
                A Passionate{' '}
                <span style={{ color: 'var(--color-accent-secondary)' }}>Software Engineering</span>{' '}
                Student
              </h3>

              <p className="leading-relaxed mb-6 text-lg" style={{ color: 'var(--color-text-secondary)' }}>
                I'm currently pursuing my degree in Software Engineering, where I'm 
                developing a strong foundation in computer science principles and 
                modern development practices. My journey in tech started with curiosity 
                and has grown into a deep passion for creating impactful software solutions.
              </p>

              <p className="leading-relaxed mb-10 text-lg" style={{ color: 'var(--color-text-secondary)' }}>
                I specialize in full-stack development with a focus on React, TypeScript, 
                and Node.js. I'm constantly learning and adapting to new technologies, 
                always striving to write clean, efficient, and maintainable code. 
                When I'm not coding, you'll find me exploring new tech trends, 
                contributing to open-source projects, or working on personal projects 
                that challenge my skills.
              </p>

              {/* Highlights Grid */}
              <div className="grid grid-cols-2 gap-5">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.title}
                    className="glass rounded-xl p-5 card-hover"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <div className="text-2xl mb-3" style={{ color: 'var(--color-accent-secondary)' }}>{item.icon}</div>
                    <h4 className="font-semibold mb-1" style={{ color: 'var(--color-text-primary)' }}>{item.title}</h4>
                    <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="glass rounded-2xl p-6 text-center card-hover"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
