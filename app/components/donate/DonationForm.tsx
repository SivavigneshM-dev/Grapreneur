'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, ShieldCheck, QrCode } from 'lucide-react';
import PaymentModal from './PaymentModal';

const presets = [
    { amount: 500, label: 'Small Help' },
    { amount: 1000, label: 'Impact' },
    { amount: 2500, label: 'Supporter' },
    { amount: 5000, label: 'Patron' },
    { amount: 10000, label: 'Partner' },
    { amount: 25000, label: 'Champion' },
];

export default function DonationForm() {
    const [isMonthly, setIsMonthly] = useState(false);
    const [amount, setAmount] = useState(5000);
    const [customAmount, setCustomAmount] = useState('');
    const [showModal, setShowModal] = useState(false);

    // Form Fields
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        isAnonymous: false,
        subscribe: true,
    });

    const handleAmountSelect = (val: number) => {
        setAmount(val);
        setCustomAmount('');
    };

    const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value.replace(/[^0-9]/g, '');
        setCustomAmount(val);
        if (val) setAmount(parseInt(val));
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setShowModal(true);
    };

    return (
        <>
            <section className="py-12 -mt-16 relative z-10 px-4">
                <div className="max-w-4xl mx-auto bg-white dark:bg-slate-900 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
                    {/* Header Strip */}
                    <div className="bg-slate-50 dark:bg-slate-950 px-8 py-4 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center flex-wrap gap-4">
                        <h2 className="text-lg font-bold text-slate-800 dark:text-white flex items-center">
                            <Heart className="text-primary mr-2 fill-primary" size={20} />
                            Make a Donation
                        </h2>
                        <div className="flex bg-white dark:bg-slate-900 rounded-lg p-1 border border-slate-200 dark:border-slate-800">
                            <button
                                onClick={() => setIsMonthly(false)}
                                className={`px-4 py-1.5 rounded-md text-sm font-semibold transition-all ${!isMonthly ? 'bg-primary text-white shadow-sm' : 'text-slate-600 dark:text-slate-400 hover:text-primary'
                                    }`}
                            >
                                One-Time
                            </button>
                            <button
                                onClick={() => setIsMonthly(true)}
                                className={`px-4 py-1.5 rounded-md text-sm font-semibold transition-all ${isMonthly ? 'bg-primary text-white shadow-sm' : 'text-slate-600 dark:text-slate-400 hover:text-primary'
                                    }`}
                            >
                                Monthly
                            </button>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="p-8">
                        {/* Amount Selection */}
                        <div className="mb-10">
                            <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-4 uppercase tracking-wide">
                                Select Amount (INR)
                            </label>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-4">
                                {presets.map((preset) => (
                                    <button
                                        key={preset.amount}
                                        type="button"
                                        onClick={() => handleAmountSelect(preset.amount)}
                                        className={`flex flex-col items-center justify-center p-3 rounded-xl border transition-all ${amount === preset.amount && !customAmount
                                                ? 'border-primary bg-primary/5 ring-1 ring-primary text-primary'
                                                : 'border-slate-200 dark:border-slate-700 hover:border-primary/50 text-slate-600 dark:text-slate-400'
                                            }`}
                                    >
                                        <span className="font-bold text-lg">₹{preset.amount}</span>
                                        <span className="text-[10px] uppercase font-medium mt-1 opacity-70">{preset.label}</span>
                                    </button>
                                ))}
                            </div>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">₹</span>
                                <input
                                    type="text"
                                    placeholder="Enter custom amount"
                                    value={customAmount}
                                    onChange={handleCustomAmountChange}
                                    className="w-full pl-8 pr-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary focus:border-transparent outline-none font-semibold text-slate-900 dark:text-white"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                            {/* Donor Details */}
                            <div className="space-y-6">
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-2">
                                    Your Details
                                </h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">First Name</label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-primary outline-none"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Last Name</label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-primary outline-none"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Email Address (Required)</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-primary outline-none"
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Phone (Optional)</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-primary outline-none"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Company (Optional)</label>
                                        <input
                                            type="text"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-primary outline-none"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-3 pt-2">
                                    <label className="flex items-center space-x-3 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            name="isAnonymous"
                                            checked={formData.isAnonymous}
                                            onChange={handleInputChange}
                                            className="w-5 h-5 rounded border-slate-300 text-primary focus:ring-primary"
                                        />
                                        <span className="text-sm text-slate-600 dark:text-slate-400">Make this donation anonymous</span>
                                    </label>
                                    <label className="flex items-center space-x-3 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            name="subscribe"
                                            checked={formData.subscribe}
                                            onChange={handleInputChange}
                                            className="w-5 h-5 rounded border-slate-300 text-primary focus:ring-primary"
                                        />
                                        <span className="text-sm text-slate-600 dark:text-slate-400">Subscribe to quarterly impact updates</span>
                                    </label>
                                </div>
                            </div>

                            {/* Payment Method */}
                            <div className="space-y-6 flex flex-col">
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-2">
                                    Payment Method
                                </h3>
                                <div className="space-y-4">
                                    <div
                                        className="w-full flex items-center justify-between p-4 rounded-xl border-2 border-primary bg-primary/5 text-primary"
                                    >
                                        <div className="flex items-center">
                                            <div className="w-10 h-10 rounded-lg bg-green-100 text-green-600 flex items-center justify-center mr-4">
                                                <QrCode size={24} />
                                            </div>
                                            <div className="text-left">
                                                <div className="font-bold text-slate-900 dark:text-white">UPI / QR Code</div>
                                                <div className="text-xs text-slate-500">Google Pay, PhonePe, Paytm</div>
                                            </div>
                                        </div>
                                        <div className="w-4 h-4 rounded-full bg-primary" />
                                    </div>
                                </div>

                                <div className="flex-grow flex flex-col justify-end mt-4">
                                    <button
                                        type="submit"
                                        className="w-full py-4 rounded-xl bg-primary text-white font-bold text-lg hover:bg-primary/90 hover:scale-[1.02] transition-all shadow-xl shadow-primary/20 flex items-center justify-center"
                                    >
                                        <ShieldCheck size={20} className="mr-2" />
                                        Donate ₹{amount.toLocaleString()} {isMonthly ? 'Monthly' : ''}
                                    </button>
                                    <p className="text-center text-xs text-slate-400 mt-4">
                                        By donating, you agree to our Terms of Service and Privacy Policy.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>

            <PaymentModal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                amount={amount}
                isMonthly={isMonthly}
            />
        </>
    );
}
