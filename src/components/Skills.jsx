import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS_DATA } from '../utils/constants';
import { fadeInUp, staggerContainer } from '../utils/animations';

const Skills = () => {
    return (
        <section id="skills" className="py-24 bg-light dark:bg-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                >
                    <motion.div variants={fadeInUp} className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">Technical Arsenal</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            A comprehensive overview of my technical skills and proficiency levels.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {SKILLS_DATA.map((category, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                className="bg-white dark:bg-slate-800/50 rounded-2xl p-8 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group"
                            >
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                        {/* Icon placeholder since we don't have category icons in data, using first skill icon */}
                                        {React.createElement(category.skills[0].icon, { size: 24 })}
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{category.category}</h3>
                                </div>

                                <div className="space-y-6">
                                    {category.skills.map((skill, i) => (
                                        <div key={i} className="group/skill">
                                            <div className="flex justify-between mb-2">
                                                <div className="flex items-center gap-3">
                                                    {React.createElement(skill.icon, { className: "text-slate-400 group-hover/skill:text-primary transition-colors" })}
                                                    <span className="font-medium text-slate-700 dark:text-slate-200">{skill.name}</span>
                                                </div>
                                                <span className="text-xs font-semibold text-slate-400 uppercase">{skill.level}</span>
                                            </div>
                                            <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: skill.level === 'Expert' ? '95%' : skill.level === 'Advanced' ? '85%' : '70%' }}
                                                    transition={{ duration: 1, delay: 0.5 }}
                                                    className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                                                ></motion.div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
