import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Play, Zap, Brain, Target, Users, ArrowRight, Menu, X, Star, Award, Shield, Droplets } from 'lucide-react';
import productImg from '../assets/mangoChilli.jpg';
import harshImg from '../assets/harsh.jpg';
import chetanImg from '../assets/chetan.jpg';
import wheyProteinImg from '../assets/Whez.jpg';
import plantProImg from '../assets/plantPro.jpg';
import creatineImg from '../assets/creatineMono.jpg';
import bcaaImg from '../assets/bcaa.jpg';
import preworkoutImg from '../assets/preworkOut.jpg';
import thirdPartyImg from '../assets/thirdImg.jpg';

const NTRLMainPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);

  // Team data
  const teamMembers = [
    { name: "Harsh Rathod", role: "Quality Assurance", image: harshImg},
    { name: "Chaitanya Rane", role: "Research Scientist", image: chetanImg }
  ];

  // Product categories with flavors
  const productCategories = [
    {
      id: 1,
      name: "Whey Protein",
      category: "Protein",
      description: "Premium grass-fed whey protein for muscle building and recovery",
      flavors: ["Vanilla Bean", "Chocolate Fudge", "Strawberry Cream", "Cookies & Cream"],
      image: wheyProteinImg,
      price: "₹7999",
      features: ["25g Protein", "Zero Sugar", "Grass-Fed", "Easy Mix"]
    },
    {
      id: 2,
      name: "Plant Protein",
      category: "Protein",
      description: "Complete plant-based protein blend for vegans and vegetarians",
      flavors: ["Chocolate", "Vanilla", "Berry Blast", "Unflavored"],
      image: plantProImg,
      price: "₹5499",
      features: ["22g Protein", "Organic", "Complete Amino", "Dairy-Free"]
    },
    {
      id: 3,
      name: "Creatine Monohydrate",
      category: "Performance",
      description: "Pure creatine monohydrate for strength and power enhancement",
      flavors: ["Unflavored", "Fruit Punch", "Blue Raspberry", "Lemon Lime"],
      image: creatineImg,
      price: "₹1699",
      features: ["5g Per Serving", "Micronized", "No Fillers", "Third-Party Tested"]
    },
    {
      id: 4,
      name: "BCAA Complex",
      category: "Recovery",
      description: "Essential amino acids for muscle recovery and endurance",
      flavors: ["Tropical", "Watermelon", "Grape", "Orange"],
      image: bcaaImg,
      price: "₹2299",
      features: ["2:1:1 Ratio", "Electrolytes", "Zero Calories", "Instant Mix"]
    },
    {
      id: 5,
      name: "Pre-Workout",
      category: "Energy",
      description: "Clean energy and focus for intense training sessions",
      flavors: ["Wild Berry", "Green Apple", "Peach Mango", "Cotton Candy"],
      image: preworkoutImg,
      price: "₹1699",
      features: ["200mg Caffeine", "Beta-Alanine", "Citrulline", "No Crash"]
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % productCategories.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      {/* Navbar */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-orange-500/20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                <motion.span 
                  className="text-xl font-black text-white"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  N
                </motion.span>
              </div>
              <span className="text-2xl font-black bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent">
                NTRL
              </span>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {['Products', 'Flavors', 'About', 'Team', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  whileHover={{ scale: 1.1, color: '#f97316' }}
                  className="text-gray-300 hover:text-orange-400 transition-colors cursor-pointer font-semibold"
                >
                  {item}
                </motion.a>
              ))}
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(249, 115, 22, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-orange-500 to-red-600 px-6 py-2 rounded-full font-bold"
              >
                Shop Now
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <motion.div 
            style={{ y: y1 }}
            className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl"
          />
          <motion.div 
            style={{ y: y2 }}
            className="absolute bottom-20 right-10 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-80" />
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
            className="mb-8"
          >
            {['N', 'A', 'T', 'U', 'R', 'A', 'L'].map((letter, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="inline-block text-6xl md:text-8xl font-black bg-gradient-to-r from-orange-400 via-red-500 to-orange-600 bg-clip-text text-transparent mx-1"
              >
                {letter}
              </motion.span>
            ))}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            <span className="text-white">Premium Supplements</span>
            <br />
            <span className="bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent">
              Pure Performance
            </span>
          </motion.h1>

          <motion.p
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Unlock your potential with our scientifically-formulated supplements. 
            Natural ingredients, proven results, zero compromises.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 0 30px rgba(249, 115, 22, 0.6)",
                background: "linear-gradient(45deg, #f97316, #dc2626)"
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-orange-500 to-red-600 px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2"
            >
              Explore Products <ArrowRight className="w-5 h-5" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05, borderColor: '#f97316' }}
              className="border-2 border-orange-500 px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 hover:bg-orange-500/10 transition-colors"
            >
              <Play className="w-5 h-5" /> Watch Story
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="mt-16"
          >
            <ChevronDown className="w-8 h-8 mx-auto animate-bounce text-orange-400" />
          </motion.div>
        </div>
      </section>

      {/* Animated Marquee Section */}
      <section className="py-16 border-y border-orange-500/20 bg-gradient-to-r from-gray-900 to-black">
        <div className="overflow-hidden">
          <motion.div
            animate={{ x: [0, -2000] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex whitespace-nowrap items-center"
          >
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center text-2xl md:text-4xl font-black">
                <span className="mx-8 bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent">
                  PURE SUPPLEMENTS
                </span>
                <Star className="w-8 h-8 text-orange-500 mx-8" />
                <span className="mx-8 text-white">NATURAL INGREDIENTS</span>
                <Award className="w-8 h-8 text-red-500 mx-8" />
                <span className="mx-8 bg-gradient-to-r from-red-400 to-orange-600 bg-clip-text text-transparent">
                  PROVEN RESULTS
                </span>
                <Shield className="w-8 h-8 text-orange-500 mx-8" />
                <span className="mx-8 text-white">THIRD PARTY TESTED</span>
                <Droplets className="w-8 h-8 text-red-500 mx-8" />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="py-20" id="products">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-center mb-16"
          >
            <span className="bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent">
              Our Products
            </span>
          </motion.h2>

          {/* Category Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['All', 'Protein', 'Performance', 'Recovery', 'Energy'].map((category, index) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(index)}
                className={`px-6 py-3 rounded-full font-bold transition-all ${
                  selectedCategory === index 
                    ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white' 
                    : 'border border-orange-500 text-orange-400 hover:bg-orange-500/10'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>

        {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ 
                  scale: 1.03,
                  rotateY: 2,
                  boxShadow: "0 25px 50px rgba(249, 115, 22, 0.2)"
                }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-6 border border-orange-500/20 overflow-hidden group cursor-pointer"
              >
                <div className="relative h-64 mb-6 rounded-2xl overflow-hidden">
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute top-4 right-4">
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      {product.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="text-2xl font-black text-orange-400">{product.price}</span>
                  </div>
                </div>

                <h3 className="text-2xl font-black mb-3 text-white">{product.name}</h3>
                <p className="text-gray-300 mb-4">{product.description}</p>
                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.features.map((feature, idx) => (
                    <span key={idx} className="bg-orange-500/20 text-orange-300 px-2 py-1 rounded-full text-xs font-semibold">
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Flavors */}
                <div className="mb-4">
                  <h4 className="text-sm font-bold text-orange-400 mb-2">Available Flavors:</h4>
                  <div className="flex flex-wrap gap-1">
                    {product.flavors.map((flavor, idx) => (
                      <span key={idx} className="text-xs text-gray-400 bg-gray-700 px-2 py-1 rounded">
                        {flavor}
                      </span>
                    ))}
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-600 py-3 rounded-full font-bold text-white"
                >
                  Add to Cart
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Slider Section - Featured Products */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-center mb-16"
          >
            <span className="bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent">
              Featured Collection
            </span>
          </motion.h2>

          <div className="relative h-96 rounded-3xl overflow-hidden">
            {productCategories.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, x: 300 }}
                animate={{ 
                  opacity: index === currentSlide ? 1 : 0,
                  x: index === currentSlide ? 0 : 300 
                }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0"
              >
                <div className="relative h-full">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
                  <div className="absolute inset-0 flex items-center">
                    <div className="max-w-xl ml-12">
                      <motion.h3 
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-5xl font-black mb-4 text-white"
                      >
                        {product.name}
                      </motion.h3>
                      <motion.p 
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-xl text-gray-300 mb-6"
                      >
                        {product.description}
                      </motion.p>
                      <motion.button
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        whileHover={{ scale: 1.05 }}
                        className="bg-gradient-to-r from-orange-500 to-red-600 px-8 py-3 rounded-full font-bold text-white"
                      >
                        Shop Now - {product.price}
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Slider Navigation */}
            <div className="absolute bottom-6 right-6 flex space-x-3">
              {productCategories.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  whileHover={{ scale: 1.2 }}
                  className={`w-4 h-4 rounded-full transition-all ${
                    index === currentSlide ? 'bg-orange-500 w-8' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section with Animations */}
      <section className="py-20" id="about">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-center mb-16"
          >
            Why Choose <span className="text-orange-400">NTRL?</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: Shield, 
                title: "Third-Party Tested", 
                desc: "Every batch is independently tested for purity and potency to ensure the highest quality standards.",
                image: thirdPartyImg
              },
             {
  icon: Award,
  title: "Premium Ingredients",
  desc: "We source only the finest raw materials from trusted suppliers around the world.",
  image: productImg
},

              { 
                icon: Target, 
                title: "Science-Based Formulas", 
                desc: "Our products are formulated based on the latest scientific research and proven results.",
                image: "https://images.unsplash.com/photo-1582560469781-1965b9af903d?w=400&h=300&fit=crop"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  boxShadow: "0 20px 40px rgba(249, 115, 22, 0.3)"
                }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-orange-500/20 overflow-hidden group cursor-pointer"
              >
                <div className="relative h-48 mb-6 rounded-2xl overflow-hidden">
                  <motion.img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.5 }}
                      className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center"
                    >
                      <feature.icon className="w-6 h-6 text-white" />
                    </motion.div>
                  </div>
                </div>
                <motion.h3 
                  className="text-2xl font-black mb-4 text-white"
                  whileHover={{ color: '#f97316' }}
                >
                  {feature.title}
                </motion.h3>
                <p className="text-gray-300 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-900/30" id="team">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-center mb-16"
          >
            Meet Our <span className="text-orange-400">Expert Team</span>
          </motion.h2>

        
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ 
                  y: -15,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.4)"
                }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="relative mb-6 mx-auto w-40 h-40 overflow-hidden rounded-full border-4 border-orange-500/30">
                  <motion.img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <motion.h3 
                  className="text-xl font-black mb-2 text-white"
                  whileHover={{ color: '#f97316' }}
                >
                  {member.name}
                </motion.h3>
                <p className="text-orange-400 font-bold">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-black py-16 border-t border-orange-500/20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-black text-white">N</span>
              </div>
              <span className="text-3xl font-black bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent">
                NTRL
              </span>
            </div>
            <motion.p 
              className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto"
              whileHover={{ color: '#f97316' }}
            >
              Elevating your fitness journey with premium, natural supplements
            </motion.p>
            <div className="flex justify-center space-x-6 mb-8">
              {['Instagram', 'Facebook', 'Twitter', 'YouTube'].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  whileHover={{ scale: 1.2, color: '#f97316' }}
                  className="text-gray-400 hover:text-orange-400 font-semibold"
                >
                  {social}
                </motion.a>
              ))}
            </div>
          </div>
          
         <div className="border-t border-orange-500/20 pt-8 text-center">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h4 className="text-orange-400 font-bold mb-4">Products</h4>
                <div className="space-y-2">
                  {['Whey Protein', 'Plant Protein', 'Creatine', 'BCAA', 'Pre-Workout'].map((item) => (
                    <motion.a
                      key={item}
                      href="#"
                      whileHover={{ color: '#f97316', x: 5 }}
                      className="block text-gray-400 hover:text-orange-400 transition-colors"
                    >
                      {item}
                    </motion.a>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-orange-400 font-bold mb-4">Company</h4>
                <div className="space-y-2">
                  {['About Us', 'Our Team', 'Careers', 'Press', 'Blog'].map((item) => (
                    <motion.a
                      key={item}
                      href="#"
                      whileHover={{ color: '#f97316', x: 5 }}
                      className="block text-gray-400 hover:text-orange-400 transition-colors"
                    >
                      {item}
                    </motion.a>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-orange-400 font-bold mb-4">Support</h4>
                <div className="space-y-2">
                  {['Help Center', 'Contact Us', 'Shipping', 'Returns', 'FAQ'].map((item) => (
                    <motion.a
                      key={item}
                      href="#"
                      whileHover={{ color: '#f97316', x: 5 }}
                      className="block text-gray-400 hover:text-orange-400 transition-colors"
                    >
                      {item}
                    </motion.a>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-orange-400 font-bold mb-4">Newsletter</h4>
                <p className="text-gray-400 mb-4 text-sm">Get the latest updates and exclusive offers</p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter email"
                    className="flex-1 bg-gray-800 border border-orange-500/30 rounded-l-full px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-orange-500 to-red-600 px-6 py-2 rounded-r-full font-bold text-white"
                  >
                    Join
                  </motion.button>
                </div>
              </div>
            </div>
            
            <div className="text-center text-gray-400 text-sm">
              <p>&copy; 2025 NTRL Supplements. All rights reserved.</p>
              <div className="flex justify-center space-x-6 mt-4">
                <motion.a href="#" whileHover={{ color: '#f97316' }} className="hover:text-orange-400">
                  Privacy Policy
                </motion.a>
                <motion.a href="#" whileHover={{ color: '#f97316' }} className="hover:text-orange-400">
                  Terms of Service
                </motion.a>
                <motion.a href="#" whileHover={{ color: '#f97316' }} className="hover:text-orange-400">
                  Cookie Policy
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md md:hidden"
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {['Products', 'Flavors', 'About', 'Team', 'Contact'].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setIsMenuOpen(false)}
                className="text-3xl font-bold text-white hover:text-orange-400 transition-colors"
              >
                {item}
              </motion.a>
            ))}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              onClick={() => setIsMenuOpen(false)}
              className="bg-gradient-to-r from-orange-500 to-red-600 px-8 py-4 rounded-full font-bold text-xl"
            >
              Shop Now
            </motion.button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default NTRLMainPage;