'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, User, Briefcase, FileText } from 'lucide-react';

export default function RegistrationForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        startupName: '',
        stage: 'Idea',
        description: '',
        motivation: '',
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate API call
        setTimeout(() => {
            setSubmitted(true);
        }, 1000);
    };

    if (submitted) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white dark:bg-slate-900 p-12 rounded-2xl shadow-xl text-center border border-slate-200 dark:border-slate-800"
            >
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send size={40} />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Application Received!</h2>
                <p className="text-slate-600 dark:text-slate-400 text-lg mb-8">
                    Thank you for applying to Grapreneur Cohort 2026. We will review your application and get back to you within 5 business days.
                </p>
                <button
                    onClick={() => window.location.href = '/'}
                    className="px-8 py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-colors"
                >
                    Back to Home
                </button>
            </motion.div>
        );
    }

    return (
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
            <div className="bg-slate-50 dark:bg-slate-950 px-8 py-6 border-b border-slate-200 dark:border-slate-800">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">Application Form</h2>
                <p className="text-slate-500 text-sm">Fill out the details below to join our next cohort.</p>
            </div>

            <form onSubmit={handleSubmit} className="p-8 space-y-8">

                {/* Personal Info */}
                <div className="space-y-4">
                    <div className="flex items-center space-x-2 text-primary font-bold border-b border-slate-100 dark:border-slate-800 pb-2">
                        <User size={20} />
                        <h3>Personal Information</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="firstName" className="text-sm font-medium text-slate-700 dark:text-slate-300">First Name</label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                required
                                value={formData.firstName}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                placeholder="Jane"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="lastName" className="text-sm font-medium text-slate-700 dark:text-slate-300">Last Name</label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                required
                                value={formData.lastName}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                placeholder="Doe"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-300">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                placeholder="jane@example.com"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="phone" className="text-sm font-medium text-slate-700 dark:text-slate-300">Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                required
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                placeholder="+1 (555) 000-0000"
                            />
                        </div>
                    </div>
                </div>

                {/* Startup Info */}
                <div className="space-y-4">
                    <div className="flex items-center space-x-2 text-primary font-bold border-b border-slate-100 dark:border-slate-800 pb-2">
                        <Briefcase size={20} />
                        <h3>Startup Details</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="startupName" className="text-sm font-medium text-slate-700 dark:text-slate-300">Startup Name (Tentative)</label>
                            <input
                                type="text"
                                id="startupName"
                                name="startupName"
                                value={formData.startupName}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                placeholder="My Awesome Startup"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="stage" className="text-sm font-medium text-slate-700 dark:text-slate-300">Current Stage</label>
                            <select
                                id="stage"
                                name="stage"
                                value={formData.stage}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all appearance-none"
                            >
                                <option>Idea Phase</option>
                                <option>Validation / Research</option>
                                <option>Prototype / MVP</option>
                                <option>Early Traction</option>
                            </select>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="description" className="text-sm font-medium text-slate-700 dark:text-slate-300">Describe your idea in 2-3 sentences</label>
                        <textarea
                            id="description"
                            name="description"
                            required
                            rows={3}
                            value={formData.description}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                            placeholder="We are building X for Y to solve Z..."
                        />
                    </div>
                </div>

                {/* Motivation */}
                <div className="space-y-4">
                    <div className="flex items-center space-x-2 text-primary font-bold border-b border-slate-100 dark:border-slate-800 pb-2">
                        <FileText size={20} />
                        <h3>Motivation</h3>
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="motivation" className="text-sm font-medium text-slate-700 dark:text-slate-300">Why do you want to join Grapreneur?</label>
                        <textarea
                            id="motivation"
                            name="motivation"
                            required
                            rows={4}
                            value={formData.motivation}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                            placeholder="I am looking for mentorship in..."
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25 flex items-center justify-center text-lg"
                >
                    <Send size={20} className="mr-2" />
                    Submit Application
                </button>
            </form>
        </div>
    );
}
