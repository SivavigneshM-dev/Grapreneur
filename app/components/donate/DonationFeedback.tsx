'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const feedbacks = [
    {
        name: 'Rahul Sharma',
        role: 'Corporate Donor',
        image: null,
        message: 'Seeing the direct impact of my contribution on these young startups is incredibly rewarding. Grapreneur is doing vital work.',
        initials: 'RS',
        color: 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400',
    },
    {
        name: 'Anita Desai',
        role: 'Alumni Founder',
        image: null,
        message: 'The scholarship I received changed my life. Giving back now is the least I can do to help the next cohort.',
        initials: 'AD',
        color: 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400',
    },
    {
        name: 'Vikram Singh',
        role: 'Monthly Supporter',
        image: null,
        message: 'I love the transparency. Knowing exactly how my monthly donation fuels mentorship sessions keeps me committed.',
        initials: 'VS',
        color: 'bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400',
    },
];

export default function DonationFeedback() {
    return (
        <section className="py-24 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 dark:text-white mb-4">
                        Voices of Impact
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Join a community that believes in the power of entrepreneurship to change the world.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {feedbacks.map((item, index) => (
                        <motion.div
                            key={item.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-white dark:bg-black p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 dark:border-slate-800"
                        >
                            <Quote className="text-primary/20 mb-6" size={32} />
                            <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-8 italic">
                                "{item.message}"
                            </p>

                            <div className="flex items-center gap-4">
                                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${item.color}`}>
                                    {item.initials}
                                </div>
                                <div>
                                    <div className="font-bold text-slate-900 dark:text-white">{item.name}</div>
                                    <div className="text-xs font-semibold uppercase tracking-wide text-slate-500 mt-0.5">
                                        {item.role}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
