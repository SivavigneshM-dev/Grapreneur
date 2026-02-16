'use client';

import { useState } from 'react';
import StartupCard from './StartupCard';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ['All', 'Technology', 'Sustainability', 'Education', 'Health'];

const startups = [
    {
        id: 1,
        name: 'EcoTech Solutions',
        description: 'Developing biodegradable packaging alternatives using agricultural waste materials.',
        founder: 'Sarah Chen',
        image: '/entrepreneur_profile_sarah.png',
        category: 'Sustainability',
        location: 'San Francisco, CA',
        website: '#',
    },
    {
        id: 2,
        name: 'EduLearn AI',
        description: 'Personalized AI tutoring platform making high-quality education accessible to under-resourced schools.',
        founder: 'Elena Rodriguez',
        image: '',
        category: 'Education',
        location: 'Austin, TX',
        website: '#',
    },
    {
        id: 3,
        name: 'VitalMetric',
        description: 'Wearable health monitoring device aimed at early detection of cardiovascular issues.',
        founder: 'James Wilson',
        image: '',
        category: 'Health',
        location: 'Boston, MA',
        website: '#',
    },
    {
        id: 4,
        name: 'GreenScapes',
        description: 'Urban farming solutions utilizing vertical hydroponic systems for city centers.',
        founder: 'Marcus Johnson',
        image: '',
        category: 'Sustainability',
        location: 'Chicago, IL',
        website: '#',
    },
    {
        id: 5,
        name: 'CodeFlow',
        description: 'No-code platform enabling non-technical founders to build MVP apps in days.',
        founder: 'Priya Patel',
        image: '',
        category: 'Technology',
        location: 'Seattle, WA',
        website: '#',
    },
    {
        id: 6,
        name: 'MindWell',
        description: 'Mental health platform connecting students with peer counselors and professional support.',
        founder: 'David Kim',
        image: '',
        category: 'Health',
        location: 'New York, NY',
        website: '#',
    },
];

export default function StoriesDirectory() {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredStartups = activeCategory === 'All'
        ? startups
        : startups.filter(s => s.category === activeCategory);

    return (
        <section className="py-12 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === category
                                    ? 'bg-primary text-white shadow-md transform scale-105'
                                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hover:border-primary hover:text-primary'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence mode='popLayout'>
                        {filteredStartups.map((startup) => (
                            <motion.div
                                key={startup.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                            >
                                <StartupCard {...startup} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredStartups.length === 0 && (
                    <div className="text-center py-20 text-slate-500">
                        No startups found in this category.
                    </div>
                )}
            </div>
        </section>
    );
}
