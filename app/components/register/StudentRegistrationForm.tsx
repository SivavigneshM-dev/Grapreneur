'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export default function StudentRegistrationForm() {
    type FormData = {
        fullName: string;
        email: string;
        phone: string;
        dob: string;
        city: string;
        state: string;
        institution: string;
        major: string;
        year: string;
        interests: string[];
        motivation: string;
        goals: string;
        projects: string;
        clubs: string;
        agree: boolean;
        parentConsent: boolean;
    };

    const [formData, setFormData] = useState<FormData>({
        fullName: '',
        email: '',
        phone: '',
        dob: '',
        city: '',
        state: '',
        institution: '',
        major: '',
        year: '',
        interests: [],
        motivation: '',
        goals: '',
        projects: '',
        clubs: '',
        agree: false,
        parentConsent: false,
    });

    const [submitted, setSubmitted] = useState(false);

    const areasOfInterest = [
        'Entrepreneurship',
        'Startups',
        'Innovation',
        'Technology',
        'Product Building',
        'Leadership',
        'Research & Development',
        'Business / Marketing',
        'Creative Arts & Design'
    ];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        // Handle checkbox
        if ((e.target as HTMLInputElement).type === 'checkbox') {
            setFormData(prev => ({ ...prev, [name]: (e.target as HTMLInputElement).checked }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value as string }));
        }
    };

    const handleInterestChange = (interest: string) => {
        setFormData(prev => {
            const currentInterests = prev.interests;
            if (currentInterests.includes(interest)) {
                return { ...prev, interests: currentInterests.filter(i => i !== interest) };
            } else {
                return { ...prev, interests: [...currentInterests, interest] };
            }
        });
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
                    Thank you for applying to Grapreneur as a student. We will review your application and get back to you within 5 business days.
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
            <div className="bg-slate-50 dark:bg-slate-950 px-8 py-6 border-b border-slate-200 dark:border-slate-800 text-center">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Student Registration</h2>
                <p className="text-slate-500 text-sm max-w-lg mx-auto">Join our program and get free mentorship, training, and support to launch your startup.</p>
            </div>

            <form onSubmit={handleSubmit} className="p-8 space-y-8">

                {/* Personal Information */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-2">Personal Information</h3>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Full Name *</label>
                            <input
                                type="text"
                                name="fullName"
                                required
                                value={formData.fullName}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Email Address *</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Phone Number *</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    required
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Date of Birth (Optional)</label>
                                <input
                                    type="date"
                                    name="dob"
                                    value={formData.dob}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">City *</label>
                                    <input
                                        type="text"
                                        name="city"
                                        required
                                        value={formData.city}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">State *</label>
                                    <input
                                        type="text"
                                        name="state"
                                        required
                                        value={formData.state}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Education */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-2">Education</h3>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Current Institution (School/College/University) *</label>
                            <input
                                type="text"
                                name="institution"
                                required
                                value={formData.institution}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Field of Study / Major</label>
                                <input
                                    type="text"
                                    name="major"
                                    value={formData.major}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Year of Study</label>
                                <select
                                    name="year"
                                    value={formData.year}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                >
                                    <option value="">Select year</option>
                                    <option value="1st">1st Year</option>
                                    <option value="2nd">2nd Year</option>
                                    <option value="3rd">3rd Year</option>
                                    <option value="Final">Final Year</option>
                                    <option value="Graduated">Graduated</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Interests */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-2">Interests</h3>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300 block mb-2">Areas of Interest (Check all that apply)</label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {areasOfInterest.map((interest) => (
                                <label key={interest} className="flex items-center space-x-3 cursor-pointer p-2 rounded hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                                    <input
                                        type="checkbox"
                                        checked={formData.interests.includes(interest)}
                                        onChange={() => handleInterestChange(interest)}
                                        className="h-4 w-4 text-primary border-slate-300 rounded focus:ring-primary"
                                    />
                                    <span className="text-slate-600 dark:text-slate-300 text-sm">{interest}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Goals & Motivation */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-2">Goals & Motivation</h3>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Why do you want to join Grapreneur? (Short answer) *</label>
                            <textarea
                                name="motivation"
                                required
                                rows={2}
                                value={formData.motivation}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">What do you hope to learn or achieve? (Short answer) *</label>
                            <textarea
                                name="goals"
                                required
                                rows={2}
                                value={formData.goals}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                            />
                        </div>
                    </div>
                </div>

                {/* Experience (Optional) */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-2">Experience (Optional)</h3>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Previous projects (if any)</label>
                            <textarea
                                name="projects"
                                rows={2}
                                value={formData.projects}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Clubs / Communities (if any)</label>
                            <textarea
                                name="clubs"
                                rows={2}
                                value={formData.clubs}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                            />
                        </div>
                    </div>
                </div>

                {/* Consent & Confirmation */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-2">Consent & Confirmation</h3>
                    <div className="space-y-3">
                        <label className="flex items-start space-x-3 cursor-pointer">
                            <input
                                type="checkbox"
                                name="agree"
                                required
                                checked={formData.agree}
                                onChange={handleChange}
                                className="mt-1 h-4 w-4 text-primary border-slate-300 rounded focus:ring-primary"
                            />
                            <span className="text-sm text-slate-600 dark:text-slate-400">
                                I agree to receive updates, opportunities, and communications from Grapreneur *
                            </span>
                        </label>
                        <label className="flex items-start space-x-3 cursor-pointer">
                            <input
                                type="checkbox"
                                name="parentConsent"
                                checked={formData.parentConsent}
                                onChange={handleChange}
                                className="mt-1 h-4 w-4 text-primary border-slate-300 rounded focus:ring-primary"
                            />
                            <span className="text-sm text-slate-600 dark:text-slate-400">
                                Parent/Guardian Consent (Required if under 18)
                            </span>
                        </label>
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all shadow-lg flex items-center justify-center text-lg"
                >
                    Submit Application <Send size={18} className="ml-2" />
                </button>
            </form>
        </div>
    );
}
