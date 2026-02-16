'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Copy, Check } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

interface PaymentModalProps {
    isOpen: boolean;
    onClose: () => void;
    amount: number;
    isMonthly: boolean;
}

export default function PaymentModal({ isOpen, onClose, amount, isMonthly }: PaymentModalProps) {
    const [copied, setCopied] = useState(false);
    const upiId = 'grapreneur@upi';

    const handleCopy = () => {
        navigator.clipboard.writeText(upiId);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed z-50 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl w-[95%] max-w-[420px] max-h-[95vh] overflow-y-auto border border-slate-200 dark:border-slate-800 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"

                    >
                        {/* Header */}
                        <div className="flex justify-between items-center p-6 border-b border-slate-100 dark:border-slate-800">
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Make a Donation</h3>
                            <button
                                onClick={onClose}
                                className="text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-8 flex flex-col items-center text-center">
                            <div className="mb-6">
                                <span className="text-slate-500 text-sm font-medium uppercase tracking-wider">Amount to Pay</span>
                                <div className="text-4xl font-black text-slate-900 dark:text-white mt-1">
                                    ₹{amount.toLocaleString()}
                                    <span className="text-lg text-slate-500 font-medium ml-1">
                                        {isMonthly ? '/mo' : ''}
                                    </span>
                                </div>
                            </div>

                            {/* QR Code Container */}
                            <div className="bg-white p-4 rounded-2xl border-2 border-slate-100 dark:border-slate-700 shadow-inner mb-6 relative group">
                                <div className="relative w-48 h-48">
                                    <Image
                                        src="/payment_qr_code.png"
                                        alt="Payment QR Code"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                {/* Scan Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <div className="w-40 h-0.5 bg-red-500/50 shadow-[0_0_15px_rgba(239,68,68,0.5)] animate-[scan_2s_ease-in-out_infinite]" />
                                </div>
                            </div>

                            <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">
                                Scan QR or copy UPI ID to donate
                            </p>

                            {/* UPI Details */}
                            <div className="w-full bg-slate-50 dark:bg-slate-800 rounded-xl p-4 border border-slate-200 dark:border-slate-700 space-y-3">
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-slate-500">Payee Name</span>
                                    <span className="font-bold text-slate-900 dark:text-white">Grapreneur Foundation</span>
                                </div>
                                <div className="flex justify-between items-center pt-2 border-t border-slate-200 dark:border-slate-700">
                                    <span className="text-sm text-slate-500">UPI ID</span>
                                    <div className="flex items-center gap-2">
                                        <span className="font-mono font-medium text-slate-900 dark:text-white bg-white dark:bg-slate-900 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-700">
                                            {upiId}
                                        </span>
                                        <button
                                            onClick={handleCopy}
                                            className="text-primary hover:text-primary/80 transition-colors"
                                            title="Copy UPI ID"
                                        >
                                            {copied ? <Check size={18} /> : <Copy size={18} />}
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={onClose}
                                className="mt-8 mb-4 px-12 py-3.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold hover:bg-slate-800 dark:hover:bg-slate-200 transition-all shadow-lg active:scale-95 text-lg"
                            >
                                Done
                            </button>
                        </div>

                        {/* Footer */}
                        <div className="p-4 bg-slate-50 dark:bg-slate-950 text-center text-xs text-slate-400">
                            Secure 256-bit SSL Encrypted Transaction
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
