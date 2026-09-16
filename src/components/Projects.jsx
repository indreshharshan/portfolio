import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS_DATA } from '../utils/constants';
import { fadeInUp, staggerContainer } from '../utils/animations';
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa';

const Projects = () => {
    return (
        <section id="projects" className="py-24 bg-white dark:bg-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                >
                    <motion.div variants={fadeInUp} className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div className="max-w-2xl">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">Featured Projects</h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400">
                                Showcasing my technical projects built with modern web technologies.
                            </p>
                        </div>
                        <a href="https://github.com/indreshharshan" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                            View all on GitHub <FaArrowRight />
                        </a>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {PROJECTS_DATA.map((project, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                className="group relative bg-slate-50 dark:bg-slate-800/50 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-700 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 flex flex-col h-full"
                            >
                                {/* Image Container */}
                                <div className="relative h-64 overflow-hidden">
                                    <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/0 transition-colors z-10"></div>
                                    <img
                                        src={project.image || `/assets/images/project-${index + 1}.webp`}
                                        alt={project.title}
                                        loading="lazy"
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                        onError={(e) => { e.target.src = `https://placehold.co/600x400/1e293b/ffffff?text=${project.title.split(' ')[0]}` }}
                                    />

                                    {/* Floating Links */}
                                    <div className="absolute top-4 right-4 flex gap-2 z-20 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                        <a href={project.links.github} className="p-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-full text-slate-900 dark:text-white hover:text-primary transition-colors shadow-lg" title="View Code">
                                            <FaGithub size={18} />
                                        </a>
                                        <a href={project.links.demo} className="p-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-full text-slate-900 dark:text-white hover:text-primary transition-colors shadow-lg" title="Live Demo">
                                            <FaExternalLinkAlt size={18} />
                                        </a>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8 flex flex-col flex-grow">
                                    <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-primary transition-colors line-clamp-1">
                                        {project.title}
                                    </h3>

                                    <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-3 text-sm leading-relaxed flex-grow">
                                        {project.description}
                                    </p>

                                    <div className="space-y-4 mt-auto">
                                        <div className="flex items-center gap-2 text-sm font-medium text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 px-3 py-2 rounded-lg w-fit">
                                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                            {project.impact}
                                        </div>

                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.map((tech, i) => (
                                                <span key={i} className="px-3 py-1 text-xs font-semibold rounded-full bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-12 text-center md:hidden">
                        <a href="https://github.com/indreshharshan" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary font-semibold">
                            View all on GitHub <FaArrowRight />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
