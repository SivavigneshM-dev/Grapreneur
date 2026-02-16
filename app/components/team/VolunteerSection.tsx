'use client';

import { Heart, Users, Calendar } from 'lucide-react';
import Link from 'next/link';

const opportunities = [
    {
        title: 'Student Mentor',
        icon: <Users size={24} />,
        description: 'Guide student teams through the ideation and validation process. 2-3 hours/week commitment.',
    },
    {
        title: 'Workshop Lead',
        icon: <Calendar size={24} />,
        description: 'Host a workshop on your area of expertise (e.g., Marketing, Coding, Finance, Legal).',
    },
    {
        title: 'Event Volunteer',
        icon: <Heart size={24} />,
        description: 'Help us organize and run our Demo Days, Hackathons, and networking mixers.',
    },
];

export default function VolunteerSection() {
    return (
        <section className="py-24 bg-slate-50 dark:bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-primary rounded-3xl overflow-hidden shadow-2xl relative">
                    {/* Background Patterns */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-2xl -translate-x-1/2 translate-y-1/2" />

                    <div className="grid grid-cols-1 lg:grid-cols-2 relative z-10">
                        <div className="p-12 lg:p-16 flex flex-col justify-center">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                Join Our Mission
                            </h2>
                            <p className="text-primary-foreground/90 text-lg mb-8 leading-relaxed">
                                Communities are the backbone of Grapreneur. your expertise and time can change the trajectory of a young entrepreneur's life.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="/register?type=volunteer"
                                    className="px-8 py-3 bg-white text-primary font-bold rounded-xl hover:bg-slate-50 transition-colors text-center"
                                >
                                    Apply to Team 
                                </Link>
                                <Link
                                    href="/contact"
                                    className="px-8 py-3 bg-primary-foreground/10 text-white font-bold rounded-xl border border-white/20 hover:bg-white/10 transition-colors text-center"
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </div>

                        <div className="bg-black/20 p-12 lg:p-16">
                            <h3 className="text-xl font-bold text-white mb-8 border-b border-white/20 pb-4">
                                Open Opportunities
                            </h3>
                            <div className="space-y-6">
                                {opportunities.map((opp) => (
                                    <div key={opp.title} className="flex items-start">
                                        <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white mr-4 shrink-0">
                                            {opp.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold text-lg mb-1">{opp.title}</h4>
                                            <p className="text-primary-foreground/80 text-sm">
                                                {opp.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
