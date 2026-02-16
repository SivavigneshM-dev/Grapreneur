'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const FORM_ACTION = 'https://docs.google.com/forms/d/e/1FAIpQLSd46byOxMNFTBneERnaI2nYazta21SZfsKHM-NPLAatSypJaQ/formResponse';

const FIELD_IDS = {
    firstName: 'entry.1631370767',
    lastName: 'entry.1734465508',
    email: 'entry.467974797',
    phone: 'entry.1571272052',
    organization: 'entry.118495462',
    designation: 'entry.1209844656',
    role: 'entry.570502303',
    expertise: 'entry.280216515',
    experience: 'entry.1689589001',
    availability: 'entry.741100802',
    motivation: 'entry.1948819728',
    previousExperience: 'entry.1418235861'
};

export default function CommunityRegistrationForm() {
    const [submitted, setSubmitted] = useState(false);

    // Handle iframe load - this fires after Google Forms receives the data
    const handleIframeLoad = () => {
        // Set submitted to show success message
        setSubmitted(true);
    };

    return (
        <div className="relative bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
            {/* Success Message - shown over the form */}
            {submitted && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute inset-0 bg-white dark:bg-slate-900 p-12 rounded-2xl shadow-xl text-center border border-slate-200 dark:border-slate-800 z-10"
                >
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Send size={40} />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Application Received!</h2>
                    <p className="text-slate-600 dark:text-slate-400 text-lg mb-8">
                        Thank you for joining the Grapreneur community. We will review your application and get back to you soon.
                    </p>
                    <button
                        onClick={() => window.location.href = '/'}
                        className="px-8 py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-colors"
                    >
                        Back to Home
                    </button>
                </motion.div>
            )}

            {/* Form - always mounted, hidden when submitted */}
            <div className={submitted ? 'opacity-0 pointer-events-none' : ''}>
                <div className="bg-slate-50 dark:bg-slate-950 px-8 py-6 border-b border-slate-200 dark:border-slate-800 text-center">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Community Member Registration</h2>
                    <p className="text-slate-500 text-sm max-w-lg mx-auto">Join as a mentor, volunteer, or partner to support the next generation of entrepreneurs.</p>
                </div>

                {/* Hidden iframe to prevent redirect */}
                <iframe
                    name="hidden_iframe"
                    id="hidden_iframe"
                    style={{ display: 'none' }}
                    onLoad={handleIframeLoad}
                />

                <form
                    action={FORM_ACTION}
                    method="POST"
                    target="hidden_iframe"
                    className="p-8 space-y-8"
                >

                    {/* Personal Info */}
                    <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">First Name *</label>
                                <input
                                    type="text"
                                    name={FIELD_IDS.firstName}
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Last Name *</label>
                                <input
                                    type="text"
                                    name={FIELD_IDS.lastName}
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Email Address *</label>
                                <input
                                    type="email"
                                    name={FIELD_IDS.email}
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Phone Number *</label>
                                <input
                                    type="tel"
                                    name={FIELD_IDS.phone}
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Professional Info */}
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Current Organization</label>
                            <input
                                type="text"
                                name={FIELD_IDS.organization}
                                placeholder="Company/Institution name"
                                className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Current Designation/Role</label>
                            <input
                                type="text"
                                name={FIELD_IDS.designation}
                                placeholder="Your current job title"
                                className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                            />
                        </div>

                        <div className="space-y-3">
                            <label className="text-sm font-medium text-slate-700 dark:text-slate-300 block">Role of Interest *</label>
                            <div className="space-y-2">
                                {['Mentor - Guide students with expertise', 'Associate - Support program activities', 'Partner - Collaborate on initiatives', 'Investor - Provide funding opportunities'].map((role) => (
                                    <label key={role} className="flex items-center space-x-3 cursor-pointer">
                                        <input
                                            type="radio"
                                            name={FIELD_IDS.role}
                                            value={role}
                                            required
                                            className="h-4 w-4 text-primary border-slate-300 focus:ring-primary"
                                        />
                                        <span className="text-slate-600 dark:text-slate-400 text-sm">{role}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Areas of Expertise *</label>
                            <textarea
                                name={FIELD_IDS.expertise}
                                required
                                rows={2}
                                className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                                placeholder="List your areas of expertise (e.g., Technology, Marketing, Finance, Legal, etc.)"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Years of Experience</label>
                                <select
                                    name={FIELD_IDS.experience}
                                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                >
                                    <option value="">Select experience range</option>
                                    <option value="0-2 years">0-2 years</option>
                                    <option value="3-5 years">3-5 years</option>
                                    <option value="5-10 years">5-10 years</option>
                                    <option value="10+ years">10+ years</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Time Availability</label>
                                <select
                                    name={FIELD_IDS.availability}
                                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                >
                                    <option value="">How much time can you contribute?</option>
                                    <option value="1-2 hours/week">1-2 hours/week</option>
                                    <option value="3-5 hours/week">3-5 hours/week</option>
                                    <option value="5+ hours/week">5+ hours/week</option>
                                    <option value="Weekends only">Weekends only</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Motivation */}
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Why do you want to join our community?</label>
                            <textarea
                                name={FIELD_IDS.motivation}
                                rows={3}
                                className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                                placeholder="Tell us about your motivation to support young entrepreneurs"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Previous Mentoring/Volunteering Experience</label>
                            <textarea
                                name={FIELD_IDS.previousExperience}
                                rows={2}
                                className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                                placeholder="Describe any previous experience in mentoring, volunteering, or supporting startups"
                            />
                        </div>
                    </div>

                    {/* Agreement */}
                    <div className="space-y-3">
                        <label className="flex items-start space-x-3 cursor-pointer">
                            <input
                                type="checkbox"
                                name="agree"
                                required
                                className="mt-1 h-4 w-4 text-primary border-slate-300 rounded focus:ring-primary"
                            />
                            <span className="text-sm text-slate-600 dark:text-slate-400">
                                I agree to the terms and conditions and privacy policy *
                            </span>
                        </label>
                    </div>

                    <div className="space-y-4">
                        <button
                            type="submit"
                            className="w-full py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all shadow-lg flex items-center justify-center text-lg"
                        >
                            Submit Application <Send size={18} className="ml-2" />
                        </button>

                        <p className="text-center text-sm text-slate-500">
                            Questions? Email us at <a href="mailto:sivavignesh.grapinz@gmail.com" className="text-primary hover:underline">sivavignesh.grapinz@gmail.com</a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}
