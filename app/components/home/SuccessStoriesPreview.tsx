'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Quote } from 'lucide-react';

const stories = [
    {
        name: 'Sarah Chen',
        company: 'EcoTech Solutions',
        image: '/entrepreneur_profile_sarah.png',
        quote: "Grapreneur didn't just give me funding; they gave me the confidence and network to turn a college project into a sustainable business employing 15 people.",
        color: 'bg-emerald-100 dark:bg-emerald-900/20 text-emerald-800 dark:text-emerald-300',
    },
    {
        name: 'Marcus Johnson',
        company: 'Urban Harvest',
        image: null, // Fallback to initials
        quote: "The mentorship I received was invaluable. My mentor helped me navigate complex supply chain issues that would have otherwise buried my startup.",
        color: 'bg-amber-100 dark:bg-amber-900/20 text-amber-800 dark:text-amber-300',
    },
    {
        name: 'Elena Rodriguez',
        company: 'EduLearn AI',
        image: null,
        quote: "From the bootcamps to the demo day, every step of the Grapreneur program is designed to accelerate your growth. Highly recommended!",
        color: 'bg-indigo-100 dark:bg-indigo-900/20 text-indigo-800 dark:text-indigo-300',
    },
];

export default function SuccessStoriesPreview() {
    return (
        <section className="py-24 bg-slate-50 dark:bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 dark:text-white mb-4">
                            Real Founders, Real Impact
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400">
                            Join hundreds of alumni who have successfully launched and scaled their ventures.
                        </p>
                    </div>
                    <Link
                        href="/stories"
                        className="hidden md:inline-flex items-center font-semibold text-primary hover:text-primary/80 transition-colors mt-4 md:mt-0"
                    >
                        View All Stories
                        <ArrowRight className="ml-2" size={20} />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {stories.map((story, index) => (
                        <motion.div
                            key={story.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-white dark:bg-black p-8 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-800 flex flex-col h-full"
                        >
                            <Quote className="text-primary/20 mb-6" size={40} />
                            <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed flex-grow mb-8 italic">
                                "{story.quote}"
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-slate-200 dark:bg-slate-800">
                                    {story.image ? (
                                        <Image
                                            src={story.image}
                                            alt={story.name}
                                            fill
                                            className="object-cover"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-slate-500 font-bold">
                                            {story.name.split(' ').map(n => n[0]).join('')}
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <div className="font-bold text-slate-900 dark:text-white">{story.name}</div>
                                    <div className={`text-sm font-medium px-2 py-0.5 rounded-full inline-block mt-1 ${story.color}`}>
                                        {story.company}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <Link
                        href="/stories"
                        className="inline-flex items-center font-semibold text-primary hover:text-primary/80 transition-colors"
                    >
                        View All Stories
                        <ArrowRight className="ml-2" size={20} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
