'use client';

import Image from 'next/image';
import { Linkedin, Twitter, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const team = [
    {
        name: 'David Kim',
        role: 'Program Director',
        bio: 'Former founder with 2 exits. Passionate about mentoring the next generation of innovators.',
        image: '/mentor_david_kim.png',
    },
    {
        name: 'Sarah Jenkins',
        role: 'Head of Operations',
        bio: 'Ensures the smooth running of all our cohorts and events. 10+ years in non-profit management.',
        image: null,
    },
    {
        name: 'Michael Chen',
        role: 'Curriculum Lead',
        bio: 'Designed our award-winning 12-week accelerator curriculum based on lean startup methodology.',
        image: null,
    },
    {
        name: 'Priya Gupta',
        role: 'Community Manager',
        bio: 'Connects our founders with mentors, investors, and each other. Building bridges is her superpower.',
        image: null,
    },
];

export default function TeamGrid() {
    return (
        <section className="py-24 bg-white dark:bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 dark:text-white mb-4">
                        Meet the Team
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        We are a dedicated group of founders, educators, and operators committed to your success.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {team.map((member, index) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group text-center"
                        >
                            <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden bg-slate-100 dark:bg-slate-800 ring-4 ring-slate-50 dark:ring-slate-900 group-hover:ring-primary/20 transition-all duration-300">
                                {member.image ? (
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-4xl font-bold text-slate-300 dark:text-slate-600">
                                        {member.name.split(' ').map(n => n[0]).join('')}
                                    </div>
                                )}
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                                {member.name}
                            </h3>
                            <div className="text-primary font-medium text-sm mb-3">
                                {member.role}
                            </div>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                                {member.bio}
                            </p>

                            <div className="flex justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <SocialIcon icon={<Linkedin size={16} />} href="#" />
                                <SocialIcon icon={<Twitter size={16} />} href="#" />
                                <SocialIcon icon={<Mail size={16} />} href="#" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function SocialIcon({ icon, href }: { icon: React.ReactNode; href: string }) {
    return (
        <a
            href={href}
            className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-primary hover:bg-white dark:hover:bg-slate-700 transition-colors"
        >
            {icon}
        </a>
    );
}
