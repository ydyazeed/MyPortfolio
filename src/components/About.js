import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 tracking-tight leading-tight px-4 sm:px-0">
            What I've been <span className="gradient-text">up to</span>
          </h2>
        </motion.div>

        {/* Experience & Education Timeline */}
        <div className="max-w-5xl mx-auto">
          
          {/* SOTI Inc Experience */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="lg:w-1/3">
                <div className="lg:sticky lg:top-24">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-red-500 rounded-xl flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                      S
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white tracking-tight">SOTI Inc.</h3>
                      <div className="flex items-center gap-2 text-gray-400">
                        <Calendar size={16} />
                        <span className="text-lg">July 2023 - Present</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Career Progression */}
                  <div className="bg-gray-800/30 rounded-lg p-4 backdrop-blur-sm border border-gray-700/50">
                    <h5 className="text-gray-300 font-medium mb-4">Career Progression</h5>
                    <div className="flex items-center gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-4 h-4 bg-red-400 rounded-full shadow-lg"></div>
                        <div className="w-0.5 h-12 bg-gradient-to-b from-red-400 to-gray-400"></div>
                        <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                      </div>
                      <div className="space-y-8">
                        <div>
                          <div className="text-red-400 font-semibold text-lg">Software Developer I</div>
                          <div className="text-gray-400">Full-Stack Development</div>
                        </div>
                        <div>
                          <div className="text-gray-300 font-medium">Associate Software Developer</div>
                          <div className="text-gray-500 text-sm">Starting Position</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-2/3">
                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 shadow-2xl">
                  <p className="text-gray-200 text-lg leading-relaxed mb-6 font-light tracking-wide">
                    Currently developing and optimizing enterprise-level search features using <span className="text-red-400 font-medium">Elasticsearch</span>, 
                    implementing dynamic data visualizations with <span className="text-red-400 font-medium">Highcharts</span>, and leading migration efforts 
                    from legacy systems to modern UI frameworks.
                  </p>
                  <p className="text-gray-200 text-lg leading-relaxed mb-6 font-light tracking-wide">
                    Writing clean, maintainable <span className="text-red-400 font-medium">.NET</span> code while 
                    following SOLID principles and ensuring frontend stability through comprehensive testing with 
                    <span className="text-red-400 font-medium"> Angular</span> and modern development practices.
                  </p>
                  
                  <div className="flex flex-wrap gap-3">
                    {["Angular", ".NET", "SQL", "Elasticsearch", "Highcharts", "Jasmine", "BDD"].map((tech, index) => (
                      <span key={index} className="bg-red-500/20 text-red-300 px-4 py-2 rounded-lg text-sm font-medium border border-red-500/30 hover:bg-red-500/30 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* TechAtPlay Experience */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="lg:w-1/3">
                <div className="lg:sticky lg:top-24">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-orange-500 rounded-xl flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                      T
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white tracking-tight">TechAtPlay</h3>
                      <div className="text-orange-400 font-semibold">Computer Vision Engineer</div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <Calendar size={16} />
                        <span className="text-lg">Sept 2022 - Aug 2023</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-2/3">
                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 shadow-2xl">
                  <p className="text-gray-200 text-lg leading-relaxed mb-6 font-light tracking-wide">
                    Engineered comprehensive <span className="text-orange-400 font-medium">CI/CD pipelines</span> for automated testing of computer vision detection scripts, 
                    optimized <span className="text-orange-400 font-medium">CUDA</span> usage for enhanced GPU performance, and built 
                    <span className="text-orange-400 font-medium"> FastAPI</span> backends to serve detection data.
                  </p>
                  <p className="text-gray-200 text-lg leading-relaxed mb-6 font-light tracking-wide">
                    Specialized in cricket analytics using <span className="text-orange-400 font-medium">YOLOv5</span> and 
                    <span className="text-orange-400 font-medium"> OpenCV</span>, implementing advanced statistical methods 
                    for smooth ball trajectory animations and real-time performance insights.
                  </p>
                  
                  <div className="flex flex-wrap gap-3">
                    {["YOLOv5", "OpenCV", "PyTorch", "CUDA", "MLFlow", "FastAPI", "GCP", "GitHub Actions"].map((tech, index) => (
                      <span key={index} className="bg-orange-500/20 text-orange-300 px-4 py-2 rounded-lg text-sm font-medium border border-orange-500/30 hover:bg-orange-500/30 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="lg:w-1/3">
                <div className="lg:sticky lg:top-24">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                      🎓
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white tracking-tight">Education</h3>
                      <div className="flex items-center gap-2 text-gray-400">
                        <MapPin size={16} />
                        <span className="text-lg">Kerala, India</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-2/3">
                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 shadow-2xl">
                  <div className="mb-8">
                    <h4 className="text-2xl font-bold text-white mb-3">Bachelor of Technology (Honours)</h4>
                    <p className="text-gray-200 text-lg mb-2">Computer Science with Minor in Electronics and Communication Engineering</p>
                    <p className="text-gray-400 mb-4">GOVT. RAJIV GANDHI INSTITUTE OF TECHNOLOGY</p>
                    <div className="inline-block">
                      <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full font-semibold text-lg shadow-lg">
                        GPA: 8.53
                      </span>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-600/50 pt-6">
                    <h4 className="text-xl font-semibold text-white mb-4">Certifications</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-4 group">
                        <div className="w-3 h-3 bg-red-400 rounded-full group-hover:scale-125 transition-transform"></div>
                        <span className="text-gray-200 text-lg">Deep Learning Specialisation</span>
                        <span className="text-gray-400">• Coursera</span>
                      </div>
                      <div className="flex items-center gap-4 group">
                        <div className="w-3 h-3 bg-red-400 rounded-full group-hover:scale-125 transition-transform"></div>
                        <span className="text-gray-200 text-lg">Machine Learning - Stanford University</span>
                        <span className="text-gray-400">• Coursera</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About; 