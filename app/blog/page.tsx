import React from 'react';
import Link from 'next/link';
import { ArrowRight, User, Calendar } from 'lucide-react';

export default function BlogPage() {
    return (
        <div className="min-h-screen pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        Latest News & Insights
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
                        Stay updated with success stories, entrepreneurship tips, and updates from the Grapreneur community.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Placeholder Blog Posts */}
                    {[1, 2, 3].map((item) => (
                        <article key={item} className="group bg-white dark:bg-slate-950 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all">
                            <Link href={`/blog/post-${item}`} className="block aspect-video bg-slate-100 dark:bg-slate-900 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center text-slate-400 group-hover:scale-105 transition-transform duration-500">
                                    Featured Image
                                </div>
                            </Link>
                            <div className="p-6">
                                <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 mb-4">
                                    <span className="bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-md font-medium text-slate-700 dark:text-slate-300">
                                        Entrepreneurship
                                    </span>
                                    <div className="flex items-center gap-1">
                                        <Calendar size={12} />
                                        <span>May {item * 5}, 2026</span>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                    <Link href={`/blog/post-${item}`}>
                                        How to Build a Sustainable Business Model in 2026
                                    </Link>
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">
                                    Discover the key strategies and frameworks that successful modern entrepreneurs are using to build resilience and long-term value.
                                </p>
                                <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
                                    <div className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                                        <User size={16} />
                                        <span>Team Grapreneur</span>
                                    </div>
                                    <Link href={`/blog/post-${item}`} className="text-primary hover:text-primary/90 flex items-center gap-1 text-sm font-semibold">
                                        Read More <ArrowRight size={14} />
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}
