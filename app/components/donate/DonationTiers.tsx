'use client';

import { useState } from 'react';
import { Check, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const tiers = [
    {
        name: 'Supporter',
        price: 25,
        features: ['Quarterly Impact Report', 'Invites to Community Mixers', 'Name on Wall of Supporters'],
        color: 'border-slate-200 dark:border-slate-800',
        buttonVariant: 'secondary',
    },
    {
        name: 'Believer',
        price: 100,
        features: ['All Supporter Perks', 'VIP Demo Day Tickets', 'Exclusive Webinars with Founders', 'Grapreneur Swag Pack'],
        color: 'border-primary ring-2 ring-primary bg-primary/5',
        buttonVariant: 'primary',
        popular: true,
    },
    {
        name: 'Partner',
        price: 500,
        features: ['All Believer Perks', 'Private Dinner with Directors', 'Mentorship Opportunity', 'Dedicated Account Manager'],
        color: 'border-slate-200 dark:border-slate-800',
        buttonVariant: 'secondary',
    },
];

export default function DonationTiers() {
    const [isMonthly, setIsMonthly] = useState(true);

    return (
        <section className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Toggle */}
                <div className="flex justify-center mb-16">
                    <div className="bg-slate-100 dark:bg-slate-800 p-1 rounded-full flex items-center relative gap-2">
                        <button
                            onClick={() => setIsMonthly(true)}
                            className={`px-8 py-2 rounded-full text-sm font-bold transition-all ${isMonthly ? 'bg-white dark:bg-slate-700 shadow-md text-primary' : 'text-slate-500'
                                }`}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => setIsMonthly(false)}
                            className={`px-8 py-2 rounded-full text-sm font-bold transition-all ${!isMonthly ? 'bg-white dark:bg-slate-700 shadow-md text-primary' : 'text-slate-500'
                                }`}
                        >
                            One-Time
                        </button>
                    </div>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {tiers.map((tier, index) => (
                        <motion.div
                            key={tier.name}
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative bg-white dark:bg-slate-900 rounded-2xl p-8 border ${tier.color} flex flex-col shadow-lg`}
                        >
                            {tier.popular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full shadow-lg">
                                    Most Popular
                                </div>
                            )}

                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{tier.name}</h3>
                            <div className="flex items-baseline mb-6">
                                <span className="text-4xl font-black font-heading text-slate-900 dark:text-white">
                                    ${isMonthly ? tier.price : tier.price * 10}
                                </span>
                                <span className="text-slate-500 ml-1 font-medium">
                                    /{isMonthly ? 'mo' : 'once'}
                                </span>
                            </div>

                            <ul className="space-y-4 flex-grow mb-8">
                                {tier.features.map((feature) => (
                                    <li key={feature} className="flex items-start text-sm text-slate-600 dark:text-slate-300">
                                        <Check size={18} className="text-primary mr-3 shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button
                                className={`w-full py-4 rounded-xl font-bold transition-all flex items-center justify-center ${tier.buttonVariant === 'primary'
                                        ? 'bg-primary text-white hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-1'
                                        : 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700'
                                    }`}
                            >
                                <Heart size={18} className="mr-2 fill-current" />
                                Donate Now
                            </button>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-slate-500 text-sm">
                        Grapreneur is a registered 501(c)(3) nonprofit organization. All donations are tax-deductible.
                    </p>
                </div>
            </div>
        </section>
    );
}
