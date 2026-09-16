import React from 'react';
import { motion } from 'framer-motion';
import { CERTIFICATIONS_DATA } from '../utils/constants';
import { fadeInUp, staggerContainer } from '../utils/animations';
import { FaAward, FaExternalLinkAlt } from 'react-icons/fa';

const Certifications = () => {
    return (
        <section id="certifications" className="py-24 bg-white dark:bg-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                >
                    <motion.div variants={fadeInUp} className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">Certifications</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            Validating my expertise through recognized certifications.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {CERTIFICATIONS_DATA.map((cert, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                className="group relative bg-slate-50 dark:bg-slate-800/30 p-1 rounded-2xl overflow-hidden hover:bg-gradient-to-br hover:from-primary hover:to-secondary transition-colors duration-500"
                            >
                                <div className="bg-white dark:bg-slate-900 p-8 rounded-xl h-full flex flex-col sm:flex-row items-center gap-6 relative z-10">
                                    <div className="w-full sm:w-48 h-32 shrink-0 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center overflow-hidden border border-slate-200 dark:border-slate-700 group-hover:border-primary/20 transition-colors">
                                        <img
                                            src={cert.image || `/assets/images/certificates/cert-${index + 1}.webp`}
                                            alt={cert.title}
                                            loading="lazy"
                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                            onError={(e) => {
                                                e.target.style.display = 'none';
                                                e.target.nextSibling.style.display = 'block';
                                            }}
                                        />
                                        <FaAward className="text-3xl text-slate-300 hidden" />
                                    </div>

                                    <div className="flex-1 text-center sm:text-left">
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">{cert.title}</h3>
                                        <p className="text-slate-600 dark:text-slate-400 font-medium mb-1">{cert.issuer}</p>
                                        <p className="text-sm text-slate-400 dark:text-slate-500 mb-4">{cert.date}</p>

                                        <a href={cert.link} className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-secondary transition-colors">
                                            Verify Credential <FaExternalLinkAlt size={12} />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Certifications;
