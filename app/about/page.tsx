import React from 'react';

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "About Grapreneur | Empowering Student Entrepreneurs in India",
    description: "Learn about Grapreneur's mission to democratize entrepreneurship. We provide free resources, expert mentorship, and a vibrant community for young founders.",
};

export default function AboutPage() {
    return (
        <div className="min-h-screen pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        About Grapreneur
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
                        Empowering the next generation of entrepreneurs through education, mentorship, and community support.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100">
                            Our Mission
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                            At Grapreneur, we believe that entrepreneurship is a powerful tool for social and economic change. Our mission is to democratize access to entrepreneurial education and resources, making it possible for anyone with a dream to build a successful business.
                        </p>
                        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                            We bridge the gap between ambition and achievement by providing structured programs, expert guidance, and a supportive network of peers and mentors.
                        </p>
                    </div>
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl bg-slate-100 dark:bg-slate-800">
                        {/* Placeholder for About Image - Using a gradient for now */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center">
                            <span className="text-slate-400 font-medium">About Image Placeholder</span>
                        </div>
                    </div>
                </div>

                {/* Values Section */}
                <div className="bg-slate-50 dark:bg-slate-900 rounded-3xl p-8 md:p-12">
                    <h2 className="text-3xl font-bold text-center mb-12 text-slate-800 dark:text-slate-100">
                        Our Core Values
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Innovation", desc: "We encourage creative thinking and novel solutions to old problems." },
                            { title: "Integrity", desc: "We operate with transparency, honesty, and strong ethical standards." },
                            { title: "Community", desc: "We believe in the power of collaboration and mutual support." }
                        ].map((value, index) => (
                            <div key={index} className="bg-white dark:bg-slate-950 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800">
                                <h3 className="text-xl font-bold mb-3 text-primary">{value.title}</h3>
                                <p className="text-slate-600 dark:text-slate-300">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
