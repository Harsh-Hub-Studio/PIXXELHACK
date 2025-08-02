import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { ChevronDown, Play, ArrowRight } from 'lucide-react';

const AnimatedCounter = ({ end, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const increment = end / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
};

const HeroSection = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);

  const letterVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: { opacity: 1, y: 0, rotateX: 0 }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Animated Gradient Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          style={{ y: y1 }}
          className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl"
          animate={{ rotate: 360, scale: [1, 1.2, 1], rotateX: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"
          animate={{ rotate: -360, scale: [1.2, 1, 1.2], rotateY: [0, 180, 360] }}
          transition={{ duration: 25, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"
          animate={{ x: [-100, 100, -100], y: [-50, 50, -50], rotateZ: [0, 180, 360] }}
          transition={{ duration: 30, repeat: Infinity }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-80" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* NTRL Logo Letters */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="mb-8"
        >
          {['N', 'T', 'R', 'L'].map((letter, i) => (
            <motion.span
              key={i}
              variants={letterVariants}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{
                scale: 1.2,
                rotate: [0, -10, 10, 0],
                rotateY: [0, 180, 360],
                color: '#f97316',
                textShadow: '0 0 20px rgba(249,115,22,0.8)'
              }}
              className="inline-block text-4xl sm:text-6xl md:text-8xl font-black ntrl-logo mx-1 cursor-pointer"
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 50, rotateX: -90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6"
        >
          <motion.span
            className="text-white block"
            whileHover={{
              color: '#f97316',
              scale: 1.05,
              textShadow: '0 0 30px rgba(249,115,22,0.6)'
            }}
          >
            Naturally Strong
          </motion.span>
          <motion.span
            className="block text-gradient-ntrl"
            animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
            transition={{ duration: 3, repeat: Infinity }}
            whileHover={{ scale: 1.05 }}
          >
            Premium Performance
          </motion.span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          whileHover={{ scale: 1.02, y: -2 }}
          className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
        >
          Unlock your potential with our scientifically-formulated NTRL supplements.
          Natural ingredients, proven results, zero compromises.
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30, rotateX: -45 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col sm:flex-row justify-center gap-4 mb-8"
        >
          {[
            { number: 50000, label: "Happy Customers", suffix: "+" },
            { number: 15, label: "Products", suffix: "" },
            { number: 99, label: "Satisfaction Rate", suffix: "%" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.1,
                rotateY: 15,
                boxShadow: '0 10px 30px rgba(249, 115, 22, 0.3)'
              }}
              className="text-center bg-gray-800/50 p-4 rounded-xl backdrop-blur-sm"
            >
              <div className="text-2xl font-black text-orange-400">
                <AnimatedCounter end={stat.number} />{stat.suffix}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30, rotateX: -45 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              background: 'linear-gradient(45deg, #f97316, #dc2626)',
              rotateY: 15
            }}
            whileTap={{ scale: 0.95 }}
            className="btn-3d glow-orange px-6 py-3 rounded-full text-base font-bold flex items-center gap-2 shadow-lg bg-gradient-to-r from-orange-500 to-red-600"
            aria-label="Explore Products"
          >
            Explore Products
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.05,
              borderColor: '#f97316',
              rotateY: -15
            }}
            whileTap={{ scale: 0.95 }}
            className="btn-3d border-2 border-orange-500 px-6 py-3 rounded-full text-base font-bold flex items-center gap-2 hover:bg-orange-500/10 transition-colors"
            aria-label="Watch Story"
          >
            <Play className="w-4 h-4 group-hover:scale-110 transition-transform" />
            Watch Story
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, -10, 0], rotateX: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-16"
        >
          <ChevronDown className="w-6 h-6 text-orange-400 mx-auto" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
