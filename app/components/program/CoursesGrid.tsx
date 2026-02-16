'use client';

import { BookOpen, Clock, BarChart } from 'lucide-react';
import { motion } from 'framer-motion';

const courses = [
    {
        title: 'Startup 101: Validation',
        level: 'Beginner',
        duration: '2 Hours',
        image: 'bg-gradient-to-br from-blue-500 to-cyan-400',
        description: 'Learn how to test your assumptions and find product-market fit before writing code.',
    },
    {
        title: 'Financial Modeling for Founders',
        level: 'Intermediate',
        duration: '4 Hours',
        image: 'bg-gradient-to-br from-purple-500 to-pink-500',
        description: 'Understand unit economics, burn rate, and how to create financial projections investors love.',
    },
    {
        title: 'Growth Hacking Fundamentals',
        level: 'Advanced',
        duration: '3 Hours',
        image: 'bg-gradient-to-br from-amber-500 to-orange-500',
        description: 'proven strategies to acquire your first 1,000 users without a marketing budget.',
    },
    {
        title: 'Pitch Deck Masterclass',
        level: 'Intermediate',
        duration: '2.5 Hours',
        image: 'bg-gradient-to-br from-emerald-500 to-green-400',
        description: 'Craft a compelling narrative and slide deck that gets you funded.',
    },
];

export default function CoursesGrid() {
    return (
        <section className="py-24 bg-slate-50 dark:bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 dark:text-white mb-4">
                        Free Educational Resources
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
                        Access our library of workshops and guides, completely free for aspiring entrepreneurs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {courses.map((course, index) => (
                        <motion.div
                            key={course.title}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.4 }}
                            className="group bg-white dark:bg-black rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300"
                        >
                            <div className={`h-32 ${course.image} relative overflow-hidden`}>
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                            </div>

                            <div className="p-6">
                                <div className="flex items-center space-x-4 text-xs font-semibold text-slate-500 mb-3">
                                    <span className="flex items-center">
                                        <BarChart size={14} className="mr-1" />
                                        {course.level}
                                    </span>
                                    <span className="flex items-center">
                                        <Clock size={14} className="mr-1" />
                                        {course.duration}
                                    </span>
                                </div>

                                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 line-clamp-2">
                                    {course.title}
                                </h3>

                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 line-clamp-2">
                                    {course.description}
                                </p>

                                <button className="w-full py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors flex items-center justify-center">
                                    <BookOpen size={16} className="mr-2" />
                                    Start Learning
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
