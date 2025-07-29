import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
} from 'chart.js';
import { Bar, Pie, Radar, PolarArea, Doughnut } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler
);

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const skillsSection = document.querySelector('#skills');
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => observer.disconnect();
  }, []);



  const redGradientColors = [
    'rgba(244, 63, 94, 0.8)',
    'rgba(251, 113, 133, 0.8)',
    'rgba(252, 165, 165, 0.8)',
    'rgba(254, 202, 202, 0.8)',
    'rgba(254, 226, 226, 0.8)',
  ];

  const orangeGradientColors = [
    'rgba(251, 146, 60, 0.8)',
    'rgba(253, 186, 116, 0.8)',
    'rgba(254, 215, 170, 0.8)',
    'rgba(255, 237, 213, 0.8)',
    'rgba(255, 251, 235, 0.8)',
  ];

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: '#e2e8f0',
          font: { size: 12 }
        }
      },
      tooltip: {
        backgroundColor: 'rgba(15, 23, 42, 0.9)',
        titleColor: '#f8fafc',
        bodyColor: '#e2e8f0',
        borderColor: 'rgba(244, 63, 94, 0.5)',
        borderWidth: 1,
      },
    },
    animation: {
      duration: isVisible ? 2000 : 0,
      easing: 'easeInOutQuart',
    },
  };

  // Programming Languages - Bar Chart
  const programmingData = {
    labels: ['Python', 'TypeScript', 'C#', 'JavaScript', 'C++', 'Java', 'SQL'],
    datasets: [{
      label: 'Proficiency Level',
      data: isVisible ? [90, 90, 90, 90, 70, 70, 70] : [0, 0, 0, 0, 0, 0, 0],
      backgroundColor: redGradientColors,
      borderColor: redGradientColors.map(color => color.replace('0.8', '1')),
      borderWidth: 2,
      borderRadius: 6,
    }]
  };

  // Frontend Frameworks - Radar Chart
  const frontendData = {
    labels: ['Angular', 'React', 'Tailwind CSS', 'HTML5', 'CSS3'],
    datasets: [{
      label: 'Expertise Level',
      data: isVisible ? [90, 70, 70, 90, 90] : [0, 0, 0, 0, 0],
      backgroundColor: 'rgba(244, 63, 94, 0.2)',
      borderColor: 'rgba(244, 63, 94, 1)',
      borderWidth: 2,
      pointBackgroundColor: 'rgba(244, 63, 94, 1)',
      pointBorderColor: '#fff',
      pointBorderWidth: 2,
      pointRadius: 6,
    }]
  };

  // Backend Frameworks - Pie Chart
  const backendData = {
    labels: ['.NET Core', 'ASP.NET', 'Django', 'Flask', 'FastAPI', 'Express.js'],
    datasets: [{
      data: isVisible ? [90, 70, 70, 70, 70, 70] : [0, 0, 0, 0, 0, 0],
      backgroundColor: [
        'rgba(244, 63, 94, 0.8)',
        'rgba(251, 113, 133, 0.8)',
        'rgba(252, 165, 165, 0.8)',
        'rgba(254, 202, 202, 0.8)',
        'rgba(254, 226, 226, 0.8)',
        'rgba(251, 146, 60, 0.8)',
      ],
      borderColor: [
        'rgba(244, 63, 94, 1)',
        'rgba(251, 113, 133, 1)',
        'rgba(252, 165, 165, 1)',
        'rgba(254, 202, 202, 1)',
        'rgba(254, 226, 226, 1)',
        'rgba(251, 146, 60, 1)',
      ],
      borderWidth: 2,
    }]
  };

  // AI/ML Word Cloud Data
  const aimlWords = [
    { text: 'YOLOv5', size: 'text-3xl', color: 'text-red-400', weight: 'font-bold' },
    { text: 'OpenCV', size: 'text-2xl', color: 'text-orange-400', weight: 'font-semibold' },
    { text: 'PyTorch', size: 'text-xl', color: 'text-yellow-400', weight: 'font-medium' },
    { text: 'TensorFlow', size: 'text-xl', color: 'text-red-300', weight: 'font-medium' },
    { text: 'LLM', size: 'text-2xl', color: 'text-orange-300', weight: 'font-bold' },
    { text: 'MediaPipe', size: 'text-lg', color: 'text-yellow-300', weight: 'font-medium' },
    { text: 'Scikit-learn', size: 'text-base', color: 'text-red-200', weight: 'font-normal' },
    { text: 'MLflow', size: 'text-lg', color: 'text-orange-200', weight: 'font-medium' },
    { text: 'CUDA', size: 'text-xl', color: 'text-red-400', weight: 'font-semibold' },
    { text: 'FastAPI', size: 'text-lg', color: 'text-yellow-400', weight: 'font-medium' },
    { text: 'Computer Vision', size: 'text-base', color: 'text-orange-300', weight: 'font-normal' },
    { text: 'RAG', size: 'text-xl', color: 'text-red-300', weight: 'font-semibold' },
    { text: 'LangGraph', size: 'text-lg', color: 'text-yellow-300', weight: 'font-medium' },
    { text: 'FAISS', size: 'text-base', color: 'text-orange-200', weight: 'font-normal' },
    { text: 'Mistral-7B', size: 'text-lg', color: 'text-red-200', weight: 'font-medium' },
    { text: 'Neural Networks', size: 'text-sm', color: 'text-yellow-200', weight: 'font-normal' },
  ];

  // Cloud & DevOps - Polar Area Chart
  const cloudData = {
    labels: ['AWS', 'Docker', 'Kubernetes', 'GCP', 'Prometheus', 'Nginx'],
    datasets: [{
      data: isVisible ? [90, 90, 90, 70, 70, 70] : [0, 0, 0, 0, 0, 0],
      backgroundColor: [
        'rgba(244, 63, 94, 0.7)',
        'rgba(251, 113, 133, 0.7)',
        'rgba(252, 165, 165, 0.7)',
        'rgba(251, 146, 60, 0.7)',
        'rgba(253, 186, 116, 0.7)',
        'rgba(254, 215, 170, 0.7)',
      ],
      borderColor: [
        'rgba(244, 63, 94, 1)',
        'rgba(251, 113, 133, 1)',
        'rgba(252, 165, 165, 1)',
        'rgba(251, 146, 60, 1)',
        'rgba(253, 186, 116, 1)',
        'rgba(254, 215, 170, 1)',
      ],
      borderWidth: 2,
    }]
  };

  // Databases - Doughnut Chart
  const databaseData = {
    labels: ['PostgreSQL', 'Elasticsearch', 'Kafka', 'RabbitMQ', 'MongoDB', 'Redis'],
    datasets: [{
      data: isVisible ? [90, 90, 70, 70, 70, 70] : [0, 0, 0, 0, 0, 0],
      backgroundColor: orangeGradientColors,
      borderColor: orangeGradientColors.map(color => color.replace('0.8', '1')),
      borderWidth: 2,
    }]
  };

  const skillCharts = [
    {
      title: "Programming Languages",
      type: "bar",
      data: programmingData,
      component: Bar,
      options: {
        ...chartOptions,
        scales: {
          y: {
            beginAtZero: true,
            max: 100,
            grid: { color: 'rgba(148, 163, 184, 0.1)' },
            ticks: { color: '#64748b' },
          },
          x: {
            grid: { color: 'rgba(148, 163, 184, 0.1)' },
            ticks: { color: '#64748b' },
          },
        },
      }
    },
    {
      title: "Frontend Frameworks",
      type: "radar",
      data: frontendData,
      component: Radar,
      options: {
        ...chartOptions,
        scales: {
          r: {
            beginAtZero: true,
            max: 100,
            grid: { color: 'rgba(148, 163, 184, 0.2)' },
            angleLines: { color: 'rgba(148, 163, 184, 0.2)' },
            pointLabels: {
              color: '#e2e8f0',
              font: { size: 11 },
            },
            ticks: { display: false },
          },
        },
      }
    },
    {
      title: "Backend Frameworks",
      type: "pie",
      data: backendData,
      component: Pie,
      options: chartOptions
    },
    {
      title: "AI/ML & Computer Vision",
      type: "wordcloud",
      data: aimlWords,
      component: null, // Custom word cloud component
      options: null
    },
    {
      title: "Cloud & DevOps Tools",
      type: "polarArea",
      data: cloudData,
      component: PolarArea,
      options: {
        ...chartOptions,
        scales: {
          r: {
            beginAtZero: true,
            max: 100,
            grid: { color: 'rgba(148, 163, 184, 0.2)' },
            ticks: { display: false },
          },
        },
      }
    },
    {
      title: "Message Queues & Databases",
      type: "doughnut",
      data: databaseData,
      component: Doughnut,
      options: {
        ...chartOptions,
        cutout: '60%',
      }
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-black to-red-900/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 tracking-tight leading-tight px-4 sm:px-0">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed font-light tracking-wide px-4 sm:px-0">
            Interactive visualizations of my technical expertise across different domains
          </p>
          
          {/* Legend */}
          <div className="flex justify-center gap-6 mb-8">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-red-500 rounded-sm"></div>
              <span className="text-sm text-gray-300">Advanced (85-100%)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-orange-500 rounded-sm"></div>
              <span className="text-sm text-gray-300">Intermediate (65-84%)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-yellow-600 rounded-sm"></div>
              <span className="text-sm text-gray-300">Beginner (40-64%)</span>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 px-4 sm:px-0">
          {skillCharts.map((chart, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-effect p-6 rounded-xl"
            >
              <h3 className="text-xl font-semibold mb-6 gradient-text text-center tracking-tight leading-tight">
                {chart.title}
              </h3>
              
              <div className="h-80 flex items-center justify-center">
                {chart.type === 'wordcloud' ? (
                  <div className="w-full h-full flex flex-wrap items-center justify-center gap-2 p-4 overflow-hidden">
                    {chart.data.map((word, wordIndex) => (
                      <motion.span
                        key={wordIndex}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                        transition={{ 
                          duration: 0.6, 
                          delay: wordIndex * 0.1,
                          type: "spring",
                          stiffness: 100 
                        }}
                        className={`${word.size} ${word.color} ${word.weight} cursor-pointer hover:scale-110 transition-transform duration-200 text-center leading-tight`}
                        style={{
                          transform: `rotate(${Math.random() * 10 - 5}deg)`,
                          margin: '2px'
                        }}
                      >
                        {word.text}
                      </motion.span>
                    ))}
                  </div>
                ) : (
                  <chart.component data={chart.data} options={chart.options} />
                )}
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default Skills; 