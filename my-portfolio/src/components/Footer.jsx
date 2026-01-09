import React from 'react';
import { FaGithub, FaLinkedin, FaHeart, FaArrowUp } from 'react-icons/fa';
import { CONTACT_INFO } from '../utils/constants';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-12 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-2">
                            Indresh.dev
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 text-sm flex items-center gap-1 justify-center md:justify-start">
                            Made with <FaHeart className="text-red-500 animate-pulse" /> using React & Tailwind
                        </p>
                        <p className="text-slate-500 dark:text-slate-500 text-xs mt-2">
                            © {new Date().getFullYear()} Indresh Harshan J.P . All rights reserved.
                        </p>
                    </div>

                    <div className="flex gap-6">
                        <a href={CONTACT_INFO.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors transform hover:scale-110">
                            <FaGithub size={24} />
                        </a>
                        <a href={CONTACT_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#0077b5] transition-colors transform hover:scale-110">
                            <FaLinkedin size={24} />
                        </a>
                    </div>

                    <button
                        onClick={scrollToTop}
                        className="p-3 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white transition-all shadow-sm hover:shadow-lg hover:-translate-y-1"
                        aria-label="Back to Top"
                    >
                        <FaArrowUp size={20} />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
