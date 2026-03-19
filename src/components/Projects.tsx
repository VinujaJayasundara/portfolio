import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Tag, Button } from 'antd';
import { FiExternalLink, FiGithub, FiFolder } from 'react-icons/fi';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [activeFilter, setActiveFilter] = useState('all');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.5, 
        ease: [0.4, 0, 0.2, 1] as const 
      },
    },
  };

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce application with user authentication, product management, shopping cart, and payment integration.',
      image: '🛒',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'fullstack',
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management tool with real-time updates, drag-and-drop functionality, and team workspaces.',
      image: '📋',
      tags: ['React', 'TypeScript', 'Firebase', 'Tailwind'],
      category: 'frontend',
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'An interactive weather application with location-based forecasts, weather maps, and multiple data visualizations.',
      image: '🌤️',
      tags: ['React', 'API', 'Chart.js', 'Geolocation'],
      category: 'frontend',
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
    {
      id: 4,
      title: 'RESTful API Service',
      description: 'A robust backend API with JWT authentication, rate limiting, caching, and comprehensive documentation.',
      image: '⚙️',
      tags: ['Node.js', 'Express', 'PostgreSQL', 'Docker'],
      category: 'backend',
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'A modern and responsive portfolio website showcasing projects and skills with smooth animations.',
      image: '💼',
      tags: ['React', 'TypeScript', 'Tailwind', 'Framer Motion'],
      category: 'frontend',
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
    {
      id: 6,
      title: 'Chat Application',
      description: 'A real-time chat application with WebSocket support, file sharing, and message encryption.',
      image: '💬',
      tags: ['React', 'Socket.io', 'Node.js', 'Redis'],
      category: 'fullstack',
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' },
    { key: 'fullstack', label: 'Full Stack' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const featuredProjects = projects.filter(p => p.featured);

  return (
    <section id="projects" className="section-padding relative" ref={ref}>
      {/* Background accent */}
      <div className="absolute right-0 bottom-1/4 w-80 h-80 bg-luna-medium/10 rounded-full blur-3xl" />
      
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="text-luna-light text-sm font-semibold tracking-[0.15em] uppercase">
              My Work
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-base lg:text-lg leading-relaxed">
              Here are some of the projects I've worked on. Each one represents a unique challenge
              and an opportunity to learn something new.
            </p>
          </motion.div>

          {/* Featured Projects */}
          <motion.div variants={itemVariants} className="mb-20">
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredProjects.slice(0, 2).map((project, index) => (
                <motion.div
                  key={project.id}
                  className="glass rounded-2xl overflow-hidden card-hover group"
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ delay: index * 0.2 }}
                >
                  {/* Project Image */}
                  <div className="relative h-64 bg-gradient-to-br from-luna-dark to-luna-darkest flex items-center justify-center overflow-hidden">
                    <motion.div
                      className="text-8xl"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      {project.image}
                    </motion.div>
                    
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-luna-darkest/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                      {project.liveUrl && (
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 rounded-full bg-luna-light flex items-center justify-center text-luna-darkest"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <FiExternalLink />
                        </motion.a>
                      )}
                      {project.githubUrl && (
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <FiGithub />
                        </motion.a>
                      )}
                    </div>

                    {/* Featured Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-luna-light/20 text-luna-lightest text-xs font-medium">
                        Featured
                      </span>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-luna-lightest transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <Tag
                          key={tag}
                          className="!bg-luna-dark/50 !border-luna-light/20 !text-luna-lightest !text-xs"
                        >
                          {tag}
                        </Tag>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {filters.map(filter => (
              <motion.button
                key={filter.key}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === filter.key
                    ? 'bg-gradient-to-r from-luna-light to-luna-medium text-white'
                    : 'glass text-gray-300 hover:text-luna-lightest'
                }`}
                onClick={() => setActiveFilter(filter.key)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter.label}
              </motion.button>
            ))}
          </motion.div>

          {/* All Projects Grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            layout
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="glass rounded-xl p-6 card-hover group"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.1 }}
                layout
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl text-luna-light">
                    <FiFolder />
                  </div>
                  <div className="flex gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-luna-lightest transition-colors"
                      >
                        <FiGithub />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-luna-lightest transition-colors"
                      >
                        <FiExternalLink />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-luna-lightest transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.slice(0, 3).map(tag => (
                    <span
                      key={tag}
                      className="text-xs text-luna-light"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* View More Button */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-12"
          >
            <Button
              type="primary"
              size="large"
              icon={<FiGithub />}
              className="!h-12 !px-8 !rounded-full"
              href="https://github.com"
              target="_blank"
            >
              View More on GitHub
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
