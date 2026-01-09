import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { HERO_CONTENT } from '../utils/constants';
import { fadeInUp, staggerContainer } from '../utils/animations';
import { FaArrowRight, FaDownload } from 'react-icons/fa';

const Hero = () => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 150]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-light dark:bg-dark">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] animate-blob mix-blend-multiply dark:mix-blend-screen"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-multiply dark:mix-blend-screen"></div>
                <div className="absolute top-[40%] left-[30%] w-[300px] h-[300px] bg-purple-500/20 rounded-full blur-[100px] animate-blob animation-delay-4000 mix-blend-multiply dark:mix-blend-screen"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                        className="order-2 lg:order-1"
                    >
                        <motion.div variants={fadeInUp} className="inline-block px-4 py-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 mb-6 shadow-sm">
                            <span className="text-sm font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                                Available for new opportunities
                            </span>
                        </motion.div>

                        <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                            Hi, I'm <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-secondary whitespace-nowrap inline-block mt-2 pb-4">
                                {HERO_CONTENT.name}
                            </span>

                        </motion.h1>

                        <motion.h2 variants={fadeInUp} className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 mb-6 font-medium">
                            {HERO_CONTENT.title}
                        </motion.h2>

                        <motion.p variants={fadeInUp} className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-lg leading-relaxed">
                            {HERO_CONTENT.tagline}
                        </motion.p>

                        <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                            <button onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })} className="group px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all flex items-center gap-2">
                                View Projects
                                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </button>
                            <a href="/assets/resume.pdf" download="Indresh-Resume.pdf" className="group px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded-full font-semibold hover:border-primary dark:hover:border-primary transition-colors flex items-center gap-2">
                                Download CV
                                <FaDownload className="group-hover:translate-y-1 transition-transform text-primary" />
                            </a>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="order-1 lg:order-2 flex justify-center lg:justify-end relative"
                    >
                        <motion.div style={{ y, opacity }} className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px]">
                            {/* Abstract Shapes behind image */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-[2rem] rotate-6 opacity-20 blur-2xl animate-pulse"></div>

                            <div className="relative w-full h-full rounded-[2rem] overflow-hidden border-2 border-white/50 dark:border-slate-700/50 shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500 group">
                                <img
                                    src="/assets/images/hero-portrait.jpg"
                                    alt="Lalith Kishore V S"
                                    className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                                    onError={(e) => { e.target.src = 'https://placehold.co/500x500/1e293b/ffffff?text=Lalith' }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>

                            {/* Floating Badge */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 flex items-center gap-3"
                            >
                                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="text-sm font-bold text-slate-900 dark:text-white">Open to Work</span>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 1, duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-400 dark:text-slate-600"
            >
                <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-current rounded-full animate-bounce"></div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
