import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { CONTACT_INFO } from '../utils/constants';
import { fadeInUp, staggerContainer } from '../utils/animations';
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm();

    const onSubmit = async (data) => {
        try {
            // Credentials from .env file
            const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

            if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY || SERVICE_ID === 'your_service_id_here') {
                alert("Please configure your EmailJS credentials in the .env file!");
                return;
            }

            await emailjs.send(
                SERVICE_ID,
                TEMPLATE_ID,
                {
                    from_name: data.name,                       // user name
                    to_name: "Indresh Harshan",                 // your name
                    from_email: "",// verified sender
                    reply_to: data.email,                        // user email
                    subject: data.subject,
                    message: data.message
                },
                PUBLIC_KEY
            );
            alert("Message sent successfully!");
            reset();
        } catch (error) {
            console.error("Failed to send email:", error);
            alert(`Failed to send message: ${error.text || error.message || "Unknown error"}`);
        }
    };

    return (
        <section id="contact" className="py-24 bg-white dark:bg-dark relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24"
                >
                    <motion.div variants={fadeInUp}>
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-slate-900 dark:text-white">Let's Work Together</h2>
                        <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 leading-relaxed">
                            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-6 group">
                                <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-sm">
                                    <FaEnvelope size={24} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Email</h4>
                                    <a href={`mailto:${CONTACT_INFO.email}`} className="text-lg text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
                                        {CONTACT_INFO.email}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-sm">
                                    <FaMapMarkerAlt size={24} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Location</h4>
                                    <p className="text-lg text-slate-600 dark:text-slate-400">
                                        {CONTACT_INFO.location}
                                    </p>
                                </div>
                            </div>

                            <div className="pt-8">
                                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Connect with me</h4>
                                <div className="flex gap-4">
                                    <a href={CONTACT_INFO.github} target="_blank" rel="noopener noreferrer" className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-all duration-300 shadow-sm hover:-translate-y-1">
                                        <FaGithub size={24} />
                                    </a>
                                    <a href={CONTACT_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-[#0077b5] hover:text-white transition-all duration-300 shadow-sm hover:-translate-y-1">
                                        <FaLinkedin size={24} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div variants={fadeInUp} className="bg-white dark:bg-slate-800 p-8 md:p-10 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700 relative">
                        {/* Form Glow */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-[2rem] opacity-20 blur-lg -z-10"></div>

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Name</label>
                                <input
                                    {...register("name", { required: "Name is required" })}
                                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                    placeholder="John Doe"
                                />
                                {errors.name && <span className="text-red-500 text-sm mt-1">{errors.name.message}</span>}
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Email</label>
                                <input
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "Invalid email address"
                                        }
                                    })}
                                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                    placeholder="john@example.com"
                                />
                                {errors.email && <span className="text-red-500 text-sm mt-1">{errors.email.message}</span>}
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Subject</label>
                                <input
                                    {...register("subject", { required: "Subject is required" })}
                                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                    placeholder="Project Inquiry"
                                />
                                {errors.subject && <span className="text-red-500 text-sm mt-1">{errors.subject.message}</span>}
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Message</label>
                                <textarea
                                    {...register("message", { required: "Message is required" })}
                                    rows="4"
                                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                                    placeholder="Tell me about your project..."
                                ></textarea>
                                {errors.message && <span className="text-red-500 text-sm mt-1">{errors.message.message}</span>}
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-primary/25 transition-all transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {isSubmitting ? (
                                    "Sending..."
                                ) : (
                                    <>
                                        Send Message <FaPaperPlane size={18} />
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
