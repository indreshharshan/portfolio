import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { EXPERIENCE_DATA } from '../utils/constants';
import { fadeInUp, staggerContainer } from '../utils/animations';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Experience = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <section id="experience" className="py-24 bg-light dark:bg-dark relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={staggerContainer}
                    className="space-y-16"
                >
                    <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">Professional Experience</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400">
                            My journey through the tech industry, building impactful solutions.
                        </p>
                    </motion.div>

                    <div className="relative">
                        {/* Center Line */}
                        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800 -translate-x-1/2 md:translate-x-0 ml-6 md:ml-0"></div>

                        <div className="space-y-12">
                            {EXPERIENCE_DATA.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    variants={fadeInUp}
                                    className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                                >
                                    {/* Timeline Dot */}
                                    <div className="absolute left-6 md:left-1/2 top-0 w-4 h-4 rounded-full bg-primary border-4 border-white dark:border-dark -translate-x-1/2 z-10 shadow-lg shadow-primary/30"></div>

                                    {/* Date (Desktop) */}
                                    <div className={`hidden md:block w-1/2 pt-1 ${index % 2 === 0 ? 'text-right pr-12' : 'text-left pl-12'}`}>
                                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm font-semibold text-primary shadow-sm">
                                            <FaCalendarAlt /> {exp.duration}
                                        </span>
                                    </div>

                                    {/* Content Card */}
                                    <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                                        <div className="group bg-white dark:bg-slate-800/50 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 hover:border-primary/30 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
                                            {/* Mobile Date */}
                                            <div className="md:hidden mb-4">
                                                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-700/50 text-xs font-semibold text-primary">
                                                    <FaCalendarAlt /> {exp.duration}
                                                </span>
                                            </div>

                                            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                                                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">{exp.role}</h3>
                                                <span className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-1">
                                                    <FaMapMarkerAlt size={12} /> {exp.location}
                                                </span>
                                            </div>

                                            <h4 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-4">{exp.company}</h4>

                                            {exp.image && (
                                                <div className="mb-6 rounded-xl overflow-hidden shadow-md border border-slate-100 dark:border-slate-700">
                                                    <img
                                                        src={exp.image}
                                                        alt={`${exp.role} at ${exp.company}`}
                                                        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            )}

                                            <ul className="space-y-3 mb-6">
                                                {exp.description.map((desc, i) => (
                                                    <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                                                        {desc}
                                                    </li>
                                                ))}
                                            </ul>

                                            <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100 dark:border-slate-700/50">
                                                {exp.tech.map((tech, i) => (
                                                    <span key={i} className="px-3 py-1 rounded-md bg-slate-50 dark:bg-slate-700/30 text-xs font-medium text-slate-600 dark:text-slate-300 border border-slate-100 dark:border-slate-700">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
