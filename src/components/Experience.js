import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Award } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "SOTI Inc.",
      position: "Software Developer I (Full-Stack)",
      duration: "July 2023 - Present",
      location: "Remote",
      technologies: ["Angular", ".NET", "SQL", "Elasticsearch", "Highcharts"],
      achievements: [
        "Developed and optimized in-house search feature using Elasticsearch",
        "Implemented indexing to minimize database query time",
        "Implemented dynamic Highcharts on UI using API-driven aggregation data",
        "Wrote clean, maintainable .NET code adhering to SOLID principles",
        "Led migration effort from legacy system to modern UI",
        "Fixed flaky BDDs and added Jasmine unit tests for frontend stability"
      ],
      
      color: "bg-red-500"
    },
    {
      company: "TechAtPlay",
      position: "Computer Vision Engineer",
      duration: "September 2022 - August 2023",
      location: "Remote",
      technologies: ["YOLOv5", "OpenCV", "PyTorch", "CUDA", "MLFlow", "GitHub Actions", "GCP"],
      achievements: [
        "Engineered CI/CD pipeline for automated testing of detection scripts",
        "Implemented GitHub Actions for pull request-triggered workflow testing",
        "Integrated GCP Storage Bucket for scalable test data storage",
        "Managed ML models using MLflow for tracking and versioning",
        "Optimized CUDA usage for enhanced GPU performance",
        "Built FastAPI-based backend to serve detection data to frontend",
        "Applied statistical methods and outlier removal for smooth ball trajectory animations"
      ],
      color: "bg-orange-500"
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A journey of growth, learning, and building innovative solutions
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="glass-effect rounded-xl overflow-hidden card-hover"
            >
              <div className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="mb-4 lg:mb-0">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {exp.position}
                    </h3>
                    <h4 className="text-xl text-red-400 font-semibold mb-3">
                      {exp.company}
                    </h4>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-300">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className={`w-16 h-16 ${exp.color} rounded-full flex items-center justify-center`}>
                    <Award className="text-white" size={24} />
                  </div>
                </div>

                <div className="mb-6">
                  <h5 className="text-lg font-semibold mb-3 text-red-300">
                    Technologies Used
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-red-500/20 text-red-300 px-3 py-1 rounded-full text-sm font-medium border border-red-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h5 className="text-lg font-semibold mb-4 text-red-300">
                    Key Achievements
                  </h5>
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, achIndex) => (
                      <motion.li
                        key={achIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.05 * achIndex }}
                        className="flex items-start gap-3 text-gray-300"
                      >
                        <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="leading-relaxed">{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <div className="glass-effect p-8 rounded-xl max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-semibold mb-6 gradient-text">
              Professional Summary
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-red-400">2+</div>
                <div className="text-gray-300">Years Experience</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-orange-400">2</div>
                <div className="text-gray-300">Companies</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-yellow-500">15+</div>
                <div className="text-gray-300">Technologies</div>
              </div>
            </div>
            <p className="text-gray-300 mt-6 leading-relaxed">
              Passionate about building scalable solutions and driving innovation 
              through cutting-edge technology and collaborative development.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 