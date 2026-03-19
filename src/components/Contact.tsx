import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Form, Input, Button, message } from 'antd';
import { FiMail, FiMapPin, FiPhone, FiSend } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [form] = Form.useForm();

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

  const contactInfo = [
    {
      icon: <FiMail />,
      title: 'Email',
      value: 'your.email@example.com',
      link: 'mailto:your.email@example.com',
    },
    {
      icon: <FiMapPin />,
      title: 'Location',
      value: 'Your City, Country',
      link: null,
    },
    {
      icon: <FiPhone />,
      title: 'Phone',
      value: '+1 234 567 890',
      link: 'tel:+1234567890',
    },
  ];

  const socialLinks = [
    { icon: <FaGithub />, href: 'https://github.com', label: 'GitHub', color: '#ffffff' },
    { icon: <FaLinkedin />, href: 'https://linkedin.com', label: 'LinkedIn', color: '#0A66C2' },
    { icon: <FaTwitter />, href: 'https://twitter.com', label: 'Twitter', color: '#1DA1F2' },
    { icon: <FaInstagram />, href: 'https://instagram.com', label: 'Instagram', color: '#E4405F' },
  ];

  const handleSubmit = async (values: { name: string; email: string; subject: string; message: string }) => {
    console.log('Form values:', values);
    // Here you would typically send the form data to your backend
    message.success('Message sent successfully! I\'ll get back to you soon.');
    form.resetFields();
  };

  return (
    <section id="contact" className="section-padding relative" ref={ref}>
      {/* Background accents */}
      <div className="absolute left-0 top-1/4 w-80 h-80 bg-luna-light/10 rounded-full blur-3xl" />
      <div className="absolute right-0 bottom-1/4 w-64 h-64 bg-luna-medium/10 rounded-full blur-3xl" />
      
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="text-luna-light text-sm font-semibold tracking-[0.15em] uppercase">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3">
              Let's Work <span className="gradient-text">Together</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-base lg:text-lg leading-relaxed">
              Have a project in mind or just want to chat? Feel free to reach out.
              I'm always open to discussing new opportunities and ideas.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info Side */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-white mb-8">
                Contact Information
              </h3>

              {/* Contact Cards */}
              <div className="space-y-6 mb-12">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    className="glass rounded-xl p-6 flex items-center gap-4 card-hover"
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-luna-light to-luna-medium flex items-center justify-center text-xl text-white">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{info.title}</p>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-white hover:text-luna-lightest transition-colors font-medium"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-white font-medium">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">
                  Follow Me
                </h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full glass flex items-center justify-center text-xl transition-colors"
                      style={{ color: social.color }}
                      whileHover={{ 
                        scale: 1.1, 
                        y: -5,
                        backgroundColor: 'rgba(74, 144, 217, 0.15)'
                      }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Decorative Element */}
              <motion.div
                className="mt-12 p-8 glass rounded-2xl relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.8 }}
              >
                <div className="relative z-10">
                  <h4 className="text-xl font-bold text-white mb-2">
                    Open for Opportunities
                  </h4>
                  <p className="text-gray-400">
                    I'm currently looking for internship and entry-level positions 
                    in software engineering. Let's connect!
                  </p>
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-luna-light/20 rounded-full blur-2xl" />
              </motion.div>
            </motion.div>

            {/* Contact Form Side */}
            <motion.div variants={itemVariants}>
              <div className="glass rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-8">
                  Send Me a Message
                </h3>

                <Form
                  form={form}
                  layout="vertical"
                  onFinish={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <Form.Item
                      name="name"
                      rules={[{ required: true, message: 'Please enter your name' }]}
                    >
                      <Input
                        placeholder="Your Name"
                        className="!h-12 !rounded-lg"
                      />
                    </Form.Item>
                    <Form.Item
                      name="email"
                      rules={[
                        { required: true, message: 'Please enter your email' },
                        { type: 'email', message: 'Please enter a valid email' },
                      ]}
                    >
                      <Input
                        placeholder="Your Email"
                        className="!h-12 !rounded-lg"
                      />
                    </Form.Item>
                  </div>

                  <Form.Item
                    name="subject"
                    rules={[{ required: true, message: 'Please enter a subject' }]}
                  >
                    <Input
                      placeholder="Subject"
                      className="!h-12 !rounded-lg"
                    />
                  </Form.Item>

                  <Form.Item
                    name="message"
                    rules={[{ required: true, message: 'Please enter your message' }]}
                  >
                    <Input.TextArea
                      placeholder="Your Message"
                      rows={6}
                      className="!rounded-lg !resize-none"
                    />
                  </Form.Item>

                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      size="large"
                      icon={<FiSend />}
                      className="!h-12 !px-8 !rounded-full w-full md:w-auto"
                    >
                      Send Message
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
