'use client';

import { motion } from 'framer-motion';
import { Lightbulb, Hammer, Rocket, Trophy } from 'lucide-react';

const stages = [
    {
        title: 'Stage 1: Ideation & Validation',
        duration: 'Weeks 1-4',
        description: 'Refine your problem statement, conduct market research, and validate your solution with real potential customers.',
        icon: <Lightbulb size={24} />,
        color: 'bg-blue-500',
    },
    {
        title: 'Stage 2: MVP Build',
        duration: 'Weeks 5-8',
        description: 'Work with technical mentors to build a functional Minimum Viable Product. Focus on core features and user experience.',
        icon: <Hammer size={24} />,
        color: 'bg-purple-500',
    },
    {
        title: 'Stage 3: Traction & Growth',
        duration: 'Weeks 9-12',
        description: 'Launch your MVP, acquire your first users, and iterate based on feedback. Learn growth hacking strategies.',
        icon: <Rocket size={24} />,
        color: 'bg-amber-500',
    },
    {
        title: 'Stage 4: Demo Day',
        duration: 'Week 13',
        description: 'Pitch your startup to a room full of investors, partners, and media. Secure pre-seed funding and partnerships.',
        icon: <Trophy size={24} />,
        color: 'bg-green-500',
    },
];

export default function Timeline() {
    return (
        <section className="py-24 bg-white dark:bg-black">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 dark:text-white mb-4">
                        Your 12-Week Journey
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400">
                        From back-of-the-napkin idea to investable business.
                    </p>
                </div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-8 md:left-1/2 top-4 bottom-4 w-0.5 bg-slate-200 dark:bg-slate-800 -translate-x-1/2" />

                    <div className="space-y-12">
                        {stages.map((stage, index) => (
                            <motion.div
                                key={stage.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className={`flex flex-col md:flex-row gap-8 relative items-start md:items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                    }`}
                            >
                                {/* Content Side */}
                                <div className="flex-1 ml-16 md:ml-0">
                                    <div className={`bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 hover:shadow-lg transition-shadow duration-300 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                                        }`}>
                                        <div className={`inline-flex items-center space-x-2 text-sm font-bold text-slate-500 mb-2 ${index % 2 === 0 ? 'md:flex-row-reverse md:space-x-reverse' : ''
                                            }`}>
                                            <span className="uppercase tracking-wider">{stage.duration}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                                            {stage.title}
                                        </h3>
                                        <p className="text-slate-600 dark:text-slate-400">
                                            {stage.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Icon/Dot */}
                                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full border-4 border-white dark:border-black z-10 bg-white dark:bg-black">
                                    <div className={`w-full h-full rounded-full flex items-center justify-center text-white shadow-md ${stage.color}`}>
                                        {stage.icon}
                                    </div>
                                </div>

                                {/* Spacer for the other side */}
                                <div className="flex-1 hidden md:block" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
