import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ABOUT_CONTENT } from '../utils/constants';
import { fadeInUp, staggerContainer } from '../utils/animations';
import { FaGraduationCap } from 'react-icons/fa';

const About = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <section id="about" className="py-24 bg-white dark:bg-dark relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    ref={ref}
                    variants={staggerContainer}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20"
                >
                    {/* Image Column */}
                    <div className="lg:col-span-5 relative">
                        <motion.div variants={fadeInUp} className="sticky top-24">
                            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl group">
                                <img
                                    src="/assets/images/about-photo.jpg"
                                    alt="About Lalith"
                                    loading="lazy"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    onError={(e) => { e.target.src = 'https://placehold.co/600x800/1e293b/ffffff?text=About' }}
                                />
                                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500"></div>
                            </div>

                        </motion.div>
                    </div>

                    {/* Content Column */}
                    <div className="lg:col-span-7 space-y-12">
                        <motion.div variants={fadeInUp}>
                            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-slate-900 dark:text-white">
                                Passionate about <span className="text-primary">Full Stack</span>  <span className="text-secondary">Web Developer</span>
                            </h2>
                            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                                {ABOUT_CONTENT.bio}
                            </p>
                        </motion.div>

                        <motion.div variants={fadeInUp}>
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <FaGraduationCap className="text-primary" />
                                Education Journey
                            </h3>
                            <div className="space-y-8 border-l-2 border-slate-200 dark:border-slate-800 ml-3 pl-8 relative">
                                {ABOUT_CONTENT.education.map((edu, index) => (
                                    <div key={index} className="relative">
                                        <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full border-4 border-white dark:border-dark bg-primary"></span>
                                        <span className="text-sm font-semibold text-primary mb-1 block">{edu.year}</span>
                                        <h4 className="text-xl font-bold text-slate-900 dark:text-white">{edu.degree}</h4>
                                        <p className="text-slate-600 dark:text-slate-400">{edu.institution}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                            {ABOUT_CONTENT.stats.map((stat, index) => (
                                <div key={index} className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 text-center hover:border-primary/50 transition-colors">
                                    <h4 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-2">
                                        {stat.value}
                                    </h4>
                                    <p className="text-sm font-medium text-slate-600 dark:text-slate-400 uppercase tracking-wide">{stat.label}</p>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
