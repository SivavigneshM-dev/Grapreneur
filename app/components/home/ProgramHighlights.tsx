'use client';

import { Users, TrendingUp, Lightbulb, Wallet } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
    {
        icon: <Lightbulb size={32} />,
        title: 'Expert Led Curriculum',
        description: '12 weeks of intensive workshops covering everything from ideation to go-to-market strategy.',
        color: 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400',
    },
    {
        icon: <Users size={32} />,
        title: 'Mentorship Network',
        description: 'Get paired with industry veterans and successful founders who guide you through every challenge.',
        color: 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400',
    },
    {
        icon: <Wallet size={32} />,
        title: 'Seed Funding',
        description: 'Access up to $50,000 in equity-free grant funding to build your MVP and launch.',
        color: 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400',
    },
    {
        icon: <TrendingUp size={32} />,
        title: 'Growth Support',
        description: 'Post-program support including investor introductions and PR opportunities.',
        color: 'bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400',
    },
];

export default function ProgramHighlights() {
    return (
        <section className="py-24 bg-white dark:bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 dark:text-white mb-4">
                        Everything You Need to Succeed
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400">
                        Our comprehensive program is designed to bridge the gap between idea and impact.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-shadow duration-300 group"
                        >
                            <div
                                className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${feature.color} group-hover:scale-110 transition-transform duration-300`}
                            >
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
