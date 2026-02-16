'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center bg-slate-50 dark:bg-slate-950 overflow-hidden">
            {/* Background Graphic Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            <span>Applications Open for Cohort 2026</span>
                        </div>

                        <h1 className="text-4xl lg:text-6xl font-bold font-heading text-slate-900 dark:text-white leading-[1.1]">
                            Empowering Future <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Entrepreneurs</span>
                        </h1>

                        <p className="text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-lg leading-relaxed">
                            Grapreneur helps students become future-ready entrepreneurs by offering guidance, resources, and connections that enable them to build lasting businesses.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Link
                                href="/register"
                                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-primary text-white font-bold text-lg hover:bg-primary/90 hover:scale-105 transition-all shadow-lg shadow-primary/25"
                            >
                                Enroll now for Free
                                <ArrowRight className="ml-2" size={20} />
                            </Link>
                            <Link
                                href="/program"
                                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-semibold text-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 hover:border-slate-300 transition-all group"
                            >
                                <PlayCircle className="mr-2 text-primary group-hover:scale-110 transition-transform" size={20} />
                                Watch Video
                            </Link>
                        </div>

                        <div className="pt-8 flex items-center space-x-6 text-sm text-slate-500 font-medium">
                            <div>
                                <span className="block text-2xl font-bold text-slate-900 dark:text-white">500+</span>
                                <span>Grads</span>
                            </div>
                            <div className="w-px h-10 bg-slate-200 dark:border-slate-800" />
                            <div>
                                <span className="block text-2xl font-bold text-slate-900 dark:text-white">$10M+</span>
                                <span>Raised</span>
                            </div>
                            <div className="w-px h-10 bg-slate-200 dark:border-slate-800" />
                            <div>
                                <span className="block text-2xl font-bold text-slate-900 dark:text-white">96%</span>
                                <span>Success</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Hero Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-slate-900/5 aspect-[4/3] group">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay z-10 pointer-events-none" />
                            <Image
                                src="/hero_startup_collaboration.png"
                                alt="Diverse entrepreneurs collaborating"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                priority
                            />
                        </div>

                        {/* Floating Card Element */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 0.5 }}
                            className="absolute -bottom-8 -left-8 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 hidden md:block"
                        >
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">
                                    S
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-slate-900 dark:text-white">Latest Success</div>
                                    <div className="text-xs text-slate-500">Sarah raised $2M Seed</div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
