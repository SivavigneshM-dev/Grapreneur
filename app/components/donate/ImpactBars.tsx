'use client';

import { motion } from 'framer-motion';

const allocation = [
    { label: 'Mentorship Programs', percentage: 40, color: 'bg-primary' },
    { label: 'Training Materials', percentage: 25, color: 'bg-secondary' },
    { label: 'Technology Platform', percentage: 20, color: 'bg-amber-500' },
    { label: 'Events & Workshops', percentage: 10, color: 'bg-purple-500' },
    { label: 'Administrative Costs', percentage: 5, color: 'bg-slate-400' },
];

export default function ImpactBars() {
    return (
        <section className="py-24 bg-white dark:bg-black">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 dark:text-white mb-4">
                        How Funds Are Used
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400">
                        We believe in complete transparency. Here is how every rupee is utilized.
                    </p>
                </div>

                <div className="space-y-6">
                    {allocation.map((item, index) => (
                        <div key={item.label}>
                            <div className="flex justify-between items-end mb-2">
                                <span className="font-bold text-slate-700 dark:text-slate-300">
                                    {item.label}
                                </span>
                                <span className="font-bold text-slate-900 dark:text-white">
                                    {item.percentage}%
                                </span>
                            </div>
                            <div className="h-3 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${item.percentage}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, ease: 'easeOut', delay: index * 0.1 }}
                                    className={`h-full rounded-full ${item.color}`}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl text-center border border-slate-100 dark:border-slate-800">
                    <p className="text-lg font-semibold text-slate-800 dark:text-white">
                        ✨ 95% of donations go directly to program activities.
                    </p>
                </div>
            </div>
        </section>
    );
}
