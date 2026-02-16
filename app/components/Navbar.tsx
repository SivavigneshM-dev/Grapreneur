'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Program', href: '/program' },
    { name: 'Events', href: '/events' },
    { name: 'Success Stories', href: '/stories' },
    { name: 'Team', href: '/team' },
    { name: 'Blog', href: '/blog' },
];

export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm'
                : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="flex-shrink-0 flex items-center gap-2">
                        <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                            Grapreneur
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8 items-center">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`font-medium transition-colors ${isActive
                                        ? 'text-primary'
                                        : 'text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                        <Link
                            href="/join"
                            className="px-6 py-2.5 rounded-full bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-all shadow-md hover:shadow-lg active:scale-95"
                        >
                            Join Our Community
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-slate-700 dark:text-slate-200 hover:text-primary focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 overflow-hidden"
                    >
                        <div className="px-4 pt-4 pb-6 space-y-2">
                            {navLinks.map((link) => {
                                const isActive = pathname === link.href;
                                return (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${isActive
                                            ? 'text-primary bg-slate-50 dark:bg-slate-900'
                                            : 'text-slate-700 dark:text-slate-200 hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-900'
                                            }`}
                                    >
                                        <div className="flex justify-between items-center">
                                            {link.name}
                                            {isActive && <ChevronRight size={16} className="text-primary" />}
                                            {!isActive && <ChevronRight size={16} className="text-slate-400" />}
                                        </div>
                                    </Link>
                                );
                            })}
                            <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800">
                                <Link
                                    href="/join"
                                    onClick={() => setIsOpen(false)}
                                    className="block w-full text-center px-4 py-3 rounded-lg bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-all shadow-md active:scale-95"
                                >
                                    Join Our Community
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
