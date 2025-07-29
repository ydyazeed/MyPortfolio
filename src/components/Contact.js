import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Send, Download } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "yazeed9895@gmail.com",
      href: "mailto:yazeed9895@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+91-9605329104",
      href: "tel:+919605329104"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Remote / India",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      href: "https://github.com/ydyazeed",
      color: "hover:text-gray-400"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/yazeedshamsudeen",
      color: "hover:text-blue-400"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      href: "mailto:yazeed9895@gmail.com",
      color: "hover:text-red-400"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-black to-red-900/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 tracking-tight leading-tight px-4 sm:px-0">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4 sm:px-0">
            Let's connect and discuss opportunities to work together on innovative projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto px-4 sm:px-0">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="glass-effect p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-6 gradient-text">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    className="flex items-center gap-4"
                  >
                    <div className="p-3 bg-primary-500/20 rounded-lg text-primary-400 min-h-[50px] min-w-[50px] flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm font-medium">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-white hover:text-primary-400 transition-colors duration-300 text-base sm:text-lg"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-white text-base sm:text-lg">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-effect p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-6 gradient-text">
                Connect With Me
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    whileHover={{ scale: 1.1 }}
                    className={`p-4 bg-gray-800 rounded-lg text-gray-300 ${social.color} transition-all duration-300 min-h-[50px] min-w-[50px] flex items-center justify-center`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="glass-effect p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-6 gradient-text">
                Let's Work Together
              </h3>
              <p className="text-dark-300 leading-relaxed mb-8">
                I'm always open to discussing new opportunities, innovative projects, 
                and ways to bring ideas to life through technology. Whether you're looking 
                for a full-stack developer, computer vision engineer, or a collaborative 
                partner for your next big idea, I'd love to hear from you.
              </p>
              
              <div className="space-y-4">
                <motion.a
                  href="mailto:yazeed9895@gmail.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-3 w-full bg-primary-500 hover:bg-primary-600 text-white py-4 rounded-lg font-semibold transition-all duration-300 min-h-[50px] text-base sm:text-lg"
                >
                  <Send size={20} />
                  Send Message
                </motion.a>
                
                <motion.a
                  href="/yazeedshamsudeenCV-main.pdf"
                  download="Yazeed_Shamsudeen_Resume.pdf"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-3 w-full border border-primary-500 text-primary-400 hover:bg-primary-500 hover:text-white py-4 rounded-lg font-semibold transition-all duration-300 min-h-[50px] text-base sm:text-lg"
                >
                  <Download size={20} />
                  Download Resume
                </motion.a>
              </div>
            </div>

            {/* Availability Status */}
            <div className="glass-effect p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <h4 className="text-lg font-semibold text-white">Current Status</h4>
              </div>
              <p className="text-dark-300">
                Currently employed at SOTI Inc. but open to discussing exciting 
                opportunities and freelance projects.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-20 pt-8 border-t border-dark-600"
        >
          <p className="text-dark-400">
            © 2024 Yazeed Shamsudeen. Built with React, Tailwind CSS, and lots of ☕
          </p>
          <p className="text-dark-500 text-sm mt-2">
            Designed for performance, accessibility, and a great user experience
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 