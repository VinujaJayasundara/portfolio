import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useTheme } from '../hooks/useTheme';
import { Progress, Tabs } from 'antd';
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiGit,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiFigma,
  SiNextdotjs,
  SiExpress,
} from 'react-icons/si';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
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

  const skillCategories = {
    frontend: {
      title: 'Frontend',
      skills: [
        { name: 'React.js', icon: <SiReact />, level: 90, color: '#61DAFB' },
        { name: 'TypeScript', icon: <SiTypescript />, level: 85, color: '#3178C6' },
        { name: 'JavaScript', icon: <SiJavascript />, level: 90, color: '#F7DF1E' },
        { name: 'HTML5', icon: <SiHtml5 />, level: 95, color: '#E34F26' },
        { name: 'CSS3', icon: <SiCss3 />, level: 90, color: '#1572B6' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 88, color: '#06B6D4' },
        { name: 'Next.js', icon: <SiNextdotjs />, level: 80, color: '#ffffff' },
      ],
    },
    backend: {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: <SiNodedotjs />, level: 85, color: '#339933' },
        { name: 'Express.js', icon: <SiExpress />, level: 82, color: '#ffffff' },
        { name: 'Python', icon: <SiPython />, level: 75, color: '#3776AB' },
        { name: 'MongoDB', icon: <SiMongodb />, level: 80, color: '#47A248' },
        { name: 'PostgreSQL', icon: <SiPostgresql />, level: 75, color: '#4169E1' },
      ],
    },
    tools: {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', icon: <SiGit />, level: 88, color: '#F05032' },
        { name: 'Docker', icon: <SiDocker />, level: 70, color: '#2496ED' },
        { name: 'Figma', icon: <SiFigma />, level: 75, color: '#F24E1E' },
      ],
    },
  };

  const SkillCard = ({ skill, index }: { skill: typeof skillCategories.frontend.skills[0]; index: number }) => {
    const { theme } = useTheme();
    const textColor = theme === 'dark' ? '#ffffff' : '#000000';
    const secondaryTextColor = theme === 'dark' ? '#9CA3AF' : '#666666';
    
    return (
      <motion.div
        className="glass rounded-xl p-6 card-hover"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
        transition={{ delay: index * 0.1 }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="flex items-center gap-4 mb-4">
          <div
            className="text-3xl p-3 rounded-lg"
            style={{ backgroundColor: `${skill.color}20`, color: skill.color }}
          >
            {skill.icon}
          </div>
          <div>
            <h4 className="font-semibold" style={{ color: textColor }}>{skill.name}</h4>
            <p className="text-sm" style={{ color: secondaryTextColor }}>{skill.level}%</p>
          </div>
        </div>
        <Progress
          percent={skill.level}
          showInfo={false}
          strokeColor={{
            '0%': '#0f427e',
            '100%': '#4A90D9',
          }}
          trailColor="rgba(74, 144, 217, 0.1)"
          size="small"
        />
      </motion.div>
    );
  };

  const tabItems = Object.entries(skillCategories).map(([key, category]) => ({
    key,
    label: (
      <span className="transition-colors px-4 py-2" style={{ color: 'var(--color-text-secondary)' }}>
        {category.title}
      </span>
    ),
    children: (
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {category.skills.map((skill, index) => (
          <SkillCard key={skill.name} skill={skill} index={index} />
        ))}
      </motion.div>
    ),
  }));

  return (
    <section id="skills" className="section-padding relative" ref={ref}>
      {/* Background accent */}
      <div className="absolute left-0 top-1/3 w-80 h-80 rounded-full blur-3xl" style={{ backgroundColor: 'var(--color-accent-secondary)', opacity: 0.1 }} />
      
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="text-sm font-semibold tracking-[0.15em] uppercase" style={{ color: 'var(--color-accent-secondary)' }}>
              My Expertise
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-base lg:text-lg leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
              I've worked with a variety of technologies in my journey as a software engineering student.
              Here's a snapshot of my technical toolkit.
            </p>
          </motion.div>

          {/* Skills Showcase - Icon Cloud */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-8 mb-16"
          >
            {[
              { icon: <SiReact />, color: '#61DAFB', name: 'React' },
              { icon: <SiTypescript />, color: '#3178C6', name: 'TypeScript' },
              { icon: <SiNodedotjs />, color: '#339933', name: 'Node.js' },
              { icon: <SiPython />, color: '#3776AB', name: 'Python' },
              { icon: <SiMongodb />, color: '#47A248', name: 'MongoDB' },
              { icon: <SiGit />, color: '#F05032', name: 'Git' },
              { icon: <SiTailwindcss />, color: '#06B6D4', name: 'Tailwind' },
              { icon: <SiDocker />, color: '#2496ED', name: 'Docker' },
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                className="text-5xl md:text-6xl opacity-30 hover:opacity-100 transition-opacity cursor-pointer"
                style={{ color: tech.color }}
                whileHover={{ scale: 1.2, y: -10 }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 0.3, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: index * 0.1 }}
              >
                {tech.icon}
              </motion.div>
            ))}
          </motion.div>

          {/* Skills Tabs */}
          <motion.div variants={itemVariants}>
            <Tabs
              defaultActiveKey="frontend"
              items={tabItems}
              centered
              className="skills-tabs"
              tabBarStyle={{
                borderBottom: '1px solid rgba(74, 144, 217, 0.1)',
              }}
            />
          </motion.div>

          {/* Services Section */}
          <motion.div variants={itemVariants} className="mt-24">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
              What I Can <span className="gradient-text">Do</span>
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Frontend Development',
                  description: 'Building responsive and interactive user interfaces with React, TypeScript, and modern CSS frameworks.',
                  icon: '🎨',
                },
                {
                  title: 'Backend Development',
                  description: 'Creating robust APIs and server-side applications with Node.js, Express, and various databases.',
                  icon: '⚙️',
                },
                {
                  title: 'Full-Stack Solutions',
                  description: 'Developing end-to-end applications from concept to deployment with modern tech stacks.',
                  icon: '🚀',
                },
              ].map((service, index) => (
                <motion.div
                  key={service.title}
                  className="rounded-2xl p-8 text-center card-hover group"
                  style={{
                    background: 'var(--color-secondary-bg)',
                    border: '1px solid var(--color-border)'
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ delay: 0.6 + index * 0.2 }}
                >
                  <motion.div
                    className="text-5xl mb-6"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: index * 0.3 }}
                  >
                    {service.icon}
                  </motion.div>
                  <h4 className="text-xl font-semibold mb-4 group-hover:transition-colors" style={{ color: '#000000' }}>
                    {service.title}
                  </h4>
                  <p style={{ color: '#000000' }}>{service.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
