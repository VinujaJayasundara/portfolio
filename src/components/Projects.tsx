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
      title: 'Decentralized Peer-to-Peer Fitness Tracking System',
      description: 'Final Year Research Project - Engineered a secure, cross-platform React Native application for decentralized fitness data management with local data persistence via SQLite and Bluetooth Low Energy hardware connectivity.',
      image: '📱',
      tags: ['React Native', 'TypeScript', 'SQLite', 'BLE', 'Python', 'NumPy'],
      category: 'fullstack',
      liveUrl: '#',
      githubUrl: 'https://github.com/VinujaJayasundara/Ghost_tracker-fitnessapp.git',
      featured: true,
    },
    {
      id: 2,
      title: 'Fitness & Calorie Tracking Application',
      description: 'Built a responsive fitness application with dynamic UI components for real-time data visualization. Integrated secure backend services with JWT authentication, Cloudinary for media handling, and Stripe API for payment processing.',
      image: '💪',
      tags: ['React Native', 'Node.js', 'MongoDB', 'JWT', 'Cloudinary', 'Stripe'],
      category: 'fullstack',
      liveUrl: '#',
      githubUrl: 'https://github.com/VinujaJayasundara/Fitnessapp',
      featured: true,
    },
    {
      id: 3,
      title: 'Dynamic Route-Based Pickup & Ride Sharing System',
      description: 'Developed an intelligent ride-sharing application with dynamic route optimization and real-time location tracking capabilities.',
      image: '🚗',
      tags: ['React', 'Node.js', 'MongoDB', 'Maps API'],
      category: 'fullstack',
      liveUrl: '#',
      githubUrl: 'https://github.com/supunjh/vehicle-booking',
      featured: false,
    },
    {
      id: 4,
      title: 'Legal Document Management System',
      description: 'Co-developed a full-stack document management system, implementing REST APIs and CRUD functionalities for secure and efficient legal document handling.',
      image: '📑',
      tags: ['React Vite', 'Node.js', 'Express.js', 'MongoDB'],
      category: 'fullstack',
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
    },
    {
      id: 5,
      title: 'Student Learning Management System (LMS)',
      description: 'Engineered a secure full-stack architecture to manage role-based user permissions and learning activities. Implemented backend logic and relational database management.',
      image: '📚',
      tags: ['PHP', 'Hack', 'MySQL', 'CSS'],
      category: 'backend',
      liveUrl: '#',
      githubUrl: 'https://github.com/VinujaJayasundara/Student-LMS',
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
      <div className="absolute right-0 bottom-1/4 w-80 h-80 rounded-full blur-3xl" style={{ backgroundColor: 'var(--color-accent-primary)', opacity: 0.1 }} />
      
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="text-sm font-semibold tracking-[0.15em] uppercase" style={{ color: 'var(--color-accent-secondary)' }}>
              My Work
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-base lg:text-lg leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
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
                  <div className="relative h-64 flex items-center justify-center overflow-hidden" style={{ background: `linear-gradient(135deg, var(--color-secondary-bg), var(--color-primary-bg))` }}>
                    <motion.div
                      className="text-8xl"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      {project.image}
                    </motion.div>
                    
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4" style={{ backgroundColor: 'var(--color-primary-bg)', opacity: 0 }}>
                      {project.liveUrl && (
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: 'var(--color-accent-primary)', color: 'var(--color-primary-bg)' }}
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
                          className="w-12 h-12 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: 'var(--color-text-primary)' }}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <FiGithub />
                        </motion.a>
                      )}
                    </div>

                    {/* Featured Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-xs font-medium" style={{ backgroundColor: 'var(--color-accent-primary)', opacity: 0.2, color: 'var(--color-accent-primary)' }}>
                        Featured
                      </span>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:transition-colors" style={{ color: 'var(--color-text-primary)' }}>
                      {project.title}
                    </h3>
                    <p className="mb-4 line-clamp-2" style={{ color: 'var(--color-text-secondary)' }}>
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <Tag
                          key={tag}
                          className="!text-xs"
                          style={{ backgroundColor: 'var(--color-secondary-bg)', borderColor: 'var(--color-border)', color: 'var(--color-accent-primary)' }}
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
                    ? 'text-white'
                    : ''
                }`}
                style={
                  activeFilter === filter.key
                    ? { background: `linear-gradient(135deg, var(--color-accent-primary), var(--color-accent-secondary))` }
                    : { backgroundColor: 'var(--color-secondary-bg)', color: 'var(--color-text-secondary)', border: `1px solid var(--color-border)` }
                }
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
                  <div className="text-4xl" style={{ color: 'var(--color-accent-secondary)' }}>
                    <FiFolder />
                  </div>
                  <div className="flex gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors"
                        style={{ color: 'var(--color-text-secondary)' }}
                      >
                        <FiGithub />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors"  
                        style={{ color: 'var(--color-text-secondary)' }}
                      >
                        <FiExternalLink />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold mb-2 group-hover:transition-colors" style={{ color: 'var(--color-text-primary)' }}>
                  {project.title}
                </h3>
                <p className="text-sm mb-4 line-clamp-3" style={{ color: 'var(--color-text-secondary)' }}>
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.slice(0, 3).map(tag => (
                    <span
                      key={tag}
                      className="text-xs"
                      style={{ color: 'var(--color-accent-secondary)' }}
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
