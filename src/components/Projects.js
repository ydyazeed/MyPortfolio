import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Bot, Globe, Shield } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Linux AI Assistant",
      description: "A sophisticated LangGraph-powered ReAct agent that revolutionizes Linux troubleshooting through intelligent reasoning and dynamic tool usage. Features advanced RAG implementation with FAISS vector database for context-aware responses from a comprehensive Linux knowledge base.",
      icon: <Bot className="w-10 h-10 text-white" />,
      technologies: ["RAG", "Langgraph", "FAISS", "Mistral-7B", "Linux", "Python"],
      github: "https://github.com/ydyazeed/Linux-ai-assistant",
      demo: null,
      gradient: "from-purple-600 via-purple-500 to-pink-500",
      bgPattern: "bg-purple-500/20",
    },
    {
      title: "BiteBoard",
      description: "An innovative mobile-first web application that transforms how users discover exceptional dining experiences. Powered by intelligent location-based search and advanced LLM review analysis, connecting food enthusiasts with the most recommended dishes in their vicinity.",
      icon: <Globe className="w-10 h-10 text-white" />,
      technologies: ["React", "Tailwind", "Django", "PostgreSQL", "Nginx", "Redis", "GCP", "JWT", "Gemini API"],
      github: "https://github.com/ydyazeed/BiteBoard",
      demo: "https://biteboardfrontend.vercel.app",
      gradient: "from-emerald-600 via-green-500 to-teal-500",
      bgPattern: "bg-green-500/20",
    },
    {
      title: "User Authentication Flow",
      description: "A comprehensive, enterprise-grade authentication system featuring secure user management, robust session handling, and seamless integration capabilities. Built with modern security standards and scalable architecture for production-ready applications.",
      icon: <Shield className="w-10 h-10 text-white" />,
      technologies: ["Node.js", "Express", "JWT", "MongoDB", "React", "Tailwind", "Bcrypt", "Validator"],
      github: "https://github.com/ydyazeed/UserAuthenticationFlow-Backend",
      demo: "https://github.com/ydyazeed/UserAuthenticationFlow-Frontend",
      gradient: "from-blue-600 via-indigo-500 to-purple-500",
      bgPattern: "bg-blue-500/20",
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-red-900/20 to-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 tracking-tight leading-tight px-4 sm:px-0">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-medium px-4 sm:px-0">
            A showcase of innovative solutions and technical expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto px-4 sm:px-0">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900/90 via-gray-800/50 to-gray-900/90 backdrop-blur-xl border border-gray-700/50 hover:border-red-500/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-red-500/10"
            >
              {/* Project Number Badge */}
              <div className="absolute top-6 right-6 z-20">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${project.gradient} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                  {String(index + 1).padStart(2, '0')}
                </div>
              </div>

              {/* Animated Background Pattern */}
              <div className={`absolute inset-0 ${project.bgPattern} opacity-5 group-hover:opacity-15 transition-opacity duration-500`}></div>
              
              {/* Gradient Mesh */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              
              <div className="relative z-10 p-8 h-full flex flex-col">
                {/* Project Icon & Title */}
                <div className="mb-6">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${project.gradient} shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 mb-4`}>
                    {project.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-red-400 group-hover:to-orange-400 transition-all duration-300 tracking-tight leading-tight">
                    {project.title}
                  </h3>
                </div>

                {/* Project Description - Full Text */}
                <div className="mb-8 flex-grow">
                  <p className="text-gray-200 leading-relaxed text-base font-light tracking-wide">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.05 * techIndex }}
                        className={`px-3 py-1.5 rounded-full text-xs font-medium backdrop-blur-sm border transition-all duration-200 hover:scale-105 bg-gradient-to-r ${project.gradient} bg-opacity-20 text-white border-white/20 hover:border-white/40`}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="grid grid-cols-2 gap-4 mt-auto">
                  {project.title === "User Authentication Flow" ? (
                    <>
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="group/btn relative overflow-hidden flex items-center justify-center gap-2 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 text-white px-4 py-3 rounded-xl transition-all duration-300 text-sm font-medium backdrop-blur-sm border border-gray-600/50 hover:border-gray-500/50 min-h-[48px] shadow-lg hover:shadow-xl"
                      >
                        <Github size={16} className="group-hover/btn:rotate-12 transition-transform duration-200" />
                        <span>Backend</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"></div>
                      </motion.a>
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="group/btn relative overflow-hidden flex items-center justify-center gap-2 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 text-white px-4 py-3 rounded-xl transition-all duration-300 text-sm font-medium backdrop-blur-sm border border-gray-600/50 hover:border-gray-500/50 min-h-[48px] shadow-lg hover:shadow-xl"
                      >
                        <Github size={16} className="group-hover/btn:rotate-12 transition-transform duration-200" />
                        <span>Frontend</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"></div>
                      </motion.a>
                    </>
                  ) : (
                    <>
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          className="group/btn relative overflow-hidden flex items-center justify-center gap-2 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 text-white px-4 py-3 rounded-xl transition-all duration-300 text-sm font-medium backdrop-blur-sm border border-gray-600/50 hover:border-gray-500/50 min-h-[48px] shadow-lg hover:shadow-xl"
                        >
                          <Github size={16} className="group-hover/btn:rotate-12 transition-transform duration-200" />
                          <span>Code</span>
                          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"></div>
                        </motion.a>
                      )}
                      {project.demo && (
                        <motion.a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          className={`group/btn relative overflow-hidden flex items-center justify-center gap-2 bg-gradient-to-r ${project.gradient} hover:shadow-lg text-white px-4 py-3 rounded-xl transition-all duration-300 text-sm font-medium min-h-[48px] shadow-lg hover:shadow-xl hover:shadow-red-500/25`}
                        >
                          <ExternalLink size={16} className="group-hover/btn:rotate-12 transition-transform duration-200" />
                          <span>Live Demo</span>
                          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"></div>
                        </motion.a>
                      )}
                    </>
                  )}
                </div>
              </div>

              {/* Glow Effect */}
              <div className={`absolute -inset-px rounded-3xl bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`}></div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-20"
        >
          <div className="glass-effect p-8 rounded-xl max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 gradient-text tracking-tight leading-tight">
              Let's Build Something Amazing
            </h3>
            <p className="text-gray-200 leading-relaxed mb-8 text-lg font-light tracking-wide">
              I'm always excited to collaborate on innovative projects and bring creative ideas to life. 
              Ready to turn your vision into reality?
            </p>
            <motion.button
              onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-red-500/25"
            >
              Get In Touch
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 