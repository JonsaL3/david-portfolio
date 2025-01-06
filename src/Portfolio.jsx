import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  Trophy, 
  GraduationCap, 
  Briefcase, 
  User, 
  Mail, 
  Phone, 
  Linkedin,
  Award,
  Heart,
  Users,
  School,
  Activity,
  Target
} from 'lucide-react';

const SportPortfolio = () => {
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const educationRef = useRef(null);
  const skillsRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
<div className="w-screen min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-blue-100 overflow-x-hidden">      {/* Navbar - Rediseñada */}
      <nav className="fixed top-0 inset-x-0 bg-gradient-to-r from-blue-600 to-green-600 shadow-lg z-50">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <motion.span 
              className="text-2xl font-bold text-white flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <Award className="w-8 h-8" />
              <span className="font-extrabold">David Lozano</span>
            </motion.span>
            <div className="flex gap-6">
              {[
                { ref: experienceRef, label: 'Experiencia', className: 'text-white hover:text-blue-200' },
                { ref: educationRef, label: 'Formación', className: 'text-white hover:text-blue-200' }
              ].map(({ ref, label, className }) => (
                <motion.button
                  key={label}
                  onClick={() => scrollToSection(ref)}
                  className={`px-4 py-2 transition-colors bg-transparent duration-200 outline-none focus:ring-0 ${className}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-lg">{label}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Más dinámico */}
      <motion.header 
        className="w-full pt-32 pb-16 flex flex-col items-center justify-center relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {/* Animated background elements */}
        <motion.div 
          className="absolute top-0 right-0 w-64 h-64 text-blue-200 opacity-20"
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <Award className="w-full h-full" />
        </motion.div>

        <motion.div 
          className="w-40 h-40 bg-gradient-to-br from-blue-500 to-green-500 rounded-full mb-8 flex items-center justify-center relative overflow-hidden"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring" }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
            }}
          />
          <Award className="w-20 h-20 text-white" />
        </motion.div>

        <motion.h1 
          className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600 mb-4 text-center"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
        >
          David Lozano Neira
        </motion.h1>
        <motion.h2 
          className="text-2xl text-gray-700 mb-8 text-center"
          initial={{ y: 50 }}
          animate={{ y: 0 }}
        >
          Educador Físico | Especialista en Deporte
        </motion.h2>
        
        <div className="flex gap-6">
          {[
            { href: "mailto:david.lozano@example.com", icon: Mail },
            { href: "tel:+34XXXXXXXXX", icon: Phone },
            { href: "#", icon: Linkedin }
          ].map(({ href, icon: Icon }, index) => (
            <motion.a
              key={href}
              href={href}
              className="p-4 bg-gradient-to-br from-blue-500 to-green-500 rounded-full shadow-lg text-white hover:shadow-xl"
              whileHover={{ y: -5, scale: 1.1 }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.1 * index }}
            >
              <Icon className="w-6 h-6" />
            </motion.a>
          ))}
        </div>
      </motion.header>

      {/* Experience Section */}
      <motion.section 
        ref={experienceRef}
        className="mb-32 scroll-mt-20 container mx-auto px-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h3 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3">
          <Briefcase className="w-8 h-8 text-blue-600" />
          Experiencia Profesional
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {[
            {
              title: "Becario",
              company: "Wonder Tour Madrid",
              period: "2017",
              description: "Primera experiencia profesional en gestión y atención al público. Desarrollo de habilidades comunicativas y servicio al cliente.",
              icon: Heart
            },
            {
              title: "Operario",
              company: "Cárnicas Ayllon",
              period: "2018",
              description: "Trabajo en equipo y gestión de procesos. Experiencia en coordinación y trabajo colaborativo.",
              icon: Activity
            },
            {
              title: "Gestor",
              company: "Explotaciones Cárnicas Iglesias",
              period: "2019 - 2020",
              description: "Gestión y coordinación de equipos de trabajo. Desarrollo de habilidades de liderazgo y organización que son transferibles al ámbito deportivo.",
              icon: Users
            },
            {
              title: "Becario Técnico",
              company: "PVO. Arganda del Rey",
              period: "2022",
              description: "Desarrollo de actividades deportivas y apoyo en la gestión de equipos deportivos. Implementación de programas de entrenamiento y coordinación de eventos deportivos.",
              icon: Target
            }
          ].map((job, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <job.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800">{job.title}</h4>
                      <p className="text-blue-600">{job.company}</p>
                    </div>
                    <span className="text-sm font-medium px-3 py-1 bg-blue-50 text-blue-600 rounded-full">
                      {job.period}
                    </span>
                  </div>
                  <p className="text-gray-600">{job.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Education Section - Actualizada */}
      <motion.section 
        ref={educationRef}
        className="mb-32 scroll-mt-20 container mx-auto px-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h3 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3">
          <GraduationCap className="w-8 h-8 text-blue-600" />
          Formación Académica
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div 
            className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-shadow"
            whileHover={{ y: -10 }}
          >
            <School className="w-12 h-12 text-blue-600 mb-4" />
            <h4 className="text-xl font-bold text-gray-800 mb-2">Grado medio de deporte</h4>
            <p className="text-gray-600">Formación inicial en ciencias del deporte y actividad física</p>
            <span className="inline-block mt-2 px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">2017 - 2019</span>
          </motion.div>

          <motion.div 
            className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-shadow"
            whileHover={{ y: -10 }}
          >
            <Trophy className="w-12 h-12 text-green-600 mb-4" />
            <h4 className="text-xl font-bold text-gray-800 mb-2">Grado superior de deporte (TSEAS)</h4>
            <p className="text-gray-600">Técnico Superior en Enseñanza y Animación Sociodeportiva</p>
            <span className="inline-block mt-2 px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">2019 - 2021</span>
          </motion.div>

          <motion.div 
            className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-shadow"
            whileHover={{ y: -10 }}
          >
            <GraduationCap className="w-12 h-12 text-blue-600 mb-4" />
            <h4 className="text-xl font-bold text-gray-800 mb-2">Grado en Educación Primaria</h4>
            <p className="text-gray-600">Mención en Educación Física</p>
            <span className="inline-block mt-2 px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">2021 - Actualidad</span>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer - Rediseñado */}
      <footer className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center md:items-start">
              <motion.div 
                className="flex items-center gap-2 mb-4"
                whileHover={{ scale: 1.05 }}
              >
                <Award className="w-8 h-8" />
                <span className="text-xl font-bold">David Lozano</span>
              </motion.div>
              <p className="text-white/80 text-center md:text-left">
                Comprometido con la educación física y el deporte
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <h4 className="text-lg font-semibold mb-4">Contacto</h4>
              <div className="flex gap-6">
                <motion.a 
                  href="mailto:david.lozano@example.com" 
                  className="hover:text-blue-200 transition-colors"
                  whileHover={{ scale: 1.2 }}
                >
                  <Mail className="w-6 h-6" />
                </motion.a>
                <motion.a 
                  href="tel:+34XXXXXXXXX" 
                  className="hover:text-blue-200 transition-colors"
                  whileHover={{ scale: 1.2 }}
                >
                  <Phone className="w-6 h-6" />
                </motion.a>
                <motion.a 
                  href="#" 
                  className="hover:text-blue-200 transition-colors"
                  whileHover={{ scale: 1.2 }}
                >
                  <Linkedin className="w-6 h-6" />
                </motion.a>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-end">
              <p className="text-white/80 text-sm">
                © {new Date().getFullYear()} David Lozano Neira
              </p>
              <p className="text-white/60 text-sm mt-2">
                Educación Física y Deporte
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SportPortfolio;