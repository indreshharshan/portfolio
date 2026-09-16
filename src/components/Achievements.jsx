import React from 'react';
import { motion } from 'framer-motion';
import { ACHIEVEMENTS_DATA } from '../utils/constants';
import { fadeInUp, staggerContainer } from '../utils/animations';
import { FaTrophy, FaMedal } from 'react-icons/fa';

const Achievements = () => {
    return (
        <section id="achievements" className="py-24 bg-light dark:bg-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                >
                    <motion.div variants={fadeInUp} className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">Honors & Awards</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            Recognition for excellence in events and competitions.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {ACHIEVEMENTS_DATA.map((achievement, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 relative overflow-hidden group"
                            >
                                {/* Decorative Background */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>

                                <div className="flex flex-col gap-6 relative z-10">
                                    <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-md">
                                        <img
                                            src={achievement.image || `/assets/images/achievement-${index + 1}.webp`}
                                            alt={achievement.title}
                                            loading="lazy"
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                            onError={(e) => { e.target.src = `https://placehold.co/400x400/1e293b/ffffff?text=Award` }}
                                        />
                                    </div>

                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="p-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 rounded-lg">
                                                <FaTrophy size={20} />
                                            </div>
                                            <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">{achievement.date}</span>
                                        </div>

                                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
                                            {achievement.title}
                                        </h3>

                                        <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                                            {achievement.description}
                                        </p>

                                        {achievement.prize && (
                                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 dark:bg-slate-700/50 rounded-lg border border-slate-100 dark:border-slate-600">
                                                <FaMedal className="text-primary" />
                                                <span className="font-bold text-slate-900 dark:text-white">{achievement.prize}</span>
                                            </div>
                                        )}
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

export default Achievements;
