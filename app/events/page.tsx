import React from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';

export default function EventsPage() {
    return (
        <div className="min-h-screen pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        Upcoming Events
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
                        Join us for workshops, networking sessions, and community gatherings designed to fuel your entrepreneurial journey.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Placeholder Event Cards */}
                    {[1, 2, 3].map((item) => (
                        <div key={item} className="group bg-white dark:bg-slate-950 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-all">
                            <div className="aspect-video bg-slate-100 dark:bg-slate-900 relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center text-slate-400">
                                    Event Image
                                </div>
                                <div className="absolute top-4 right-4 bg-white dark:bg-slate-950 px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                                    Free
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                                    Startup Boot Camp {item}
                                </h3>
                                <div className="space-y-2 mb-4 text-sm text-slate-600 dark:text-slate-400">
                                    <div className="flex items-center gap-2">
                                        <Calendar size={16} className="text-primary" />
                                        <span>March {10 + item}, 2026</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Clock size={16} className="text-primary" />
                                        <span>10:00 AM - 4:00 PM</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MapPin size={16} className="text-primary" />
                                        <span>Innovation Hub, City Center</span>
                                    </div>
                                </div>
                                <button className="w-full py-2.5 rounded-lg border border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-all">
                                    Register Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
