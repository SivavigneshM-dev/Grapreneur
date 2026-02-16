'use client';

import { motion } from 'framer-motion';

const metrics = [
    { label: 'Startups Launched', value: '150+', color: 'text-blue-600 dark:text-blue-400' },
    { label: 'Jobs Created', value: '1,200+', color: 'text-green-600 dark:text-green-400' },
    { label: 'Funding Raised', value: '$25M', color: 'text-purple-600 dark:text-purple-400' },
    { label: 'Community Members', value: '5,000+', color: 'text-amber-600 dark:text-amber-400' },
];

export default function ImpactMetrics() {
    return (
        <section className="py-24 bg-slate-50 dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                    {metrics.map((metric, index) => (
                        <motion.div
                            key={metric.label}
                            initial={{ scale: 0.5, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5, type: 'spring' }}
                            className="space-y-2"
                        >
                            <h3 className={`text-5xl md:text-6xl font-black font-heading ${metric.color}`}>
                                {metric.value}
                            </h3>
                            <p className="text-lg font-medium text-slate-600 dark:text-slate-300 uppercase tracking-wide">
                                {metric.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
