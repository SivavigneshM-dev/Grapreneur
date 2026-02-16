import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <Link href="/" className="inline-block">
                            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                                Grapreneur
                            </span>
                        </Link>
                        <p className="text-slate-500 dark:text-slate-300 text-sm leading-relaxed">
                            Empowering the next generation of entrepreneurs to build distinct, sustainable, and impactful businesses.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <SocialLink href="#" icon={<Twitter size={20} />} label="Twitter" />
                            <SocialLink href="#" icon={<Facebook size={20} />} label="Facebook" />
                            <SocialLink href="#" icon={<Instagram size={20} />} label="Instagram" />
                            <SocialLink href="#" icon={<Linkedin size={20} />} label="LinkedIn" />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-bold text-slate-900 dark:text-white mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            <FooterLink href="/program" label="Our Program" />
                            <FooterLink href="/stories" label="Success Stories" />
                            <FooterLink href="/team" label="Meet the Team" />
                            <FooterLink href="/donate" label="Donate" />
                        </ul>
                    </div>

                    {/* Legal/Resources */}
                    <div>
                        <h3 className="font-bold text-slate-900 dark:text-white mb-6">Resources</h3>
                        <ul className="space-y-3">
                            <FooterLink href="#" label="Student Portal" />
                            <FooterLink href="#" label="Volunteer" />
                            <FooterLink href="#" label="Privacy Policy" />
                            <FooterLink href="#" label="Terms of Service" />
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-bold text-slate-900 dark:text-white mb-6">Contact Us</h3>
                        <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
                            <li className="flex items-start gap-3">
                                <MapPin className="text-primary mt-1 shrink-0" size={18} />
                                <span>12/1 VV layout , Dr. Rajendraprasad Road, Udumalpet -642126</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="text-primary shrink-0" size={18} />
                                <span>8270661299</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="text-primary shrink-0" size={18} />
                                <div className="flex flex-col">
                                    <span>contact@grapreneur.com</span>
                                    <span>support@grapreneur.com</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-200 dark:border-slate-800 mt-12 pt-8 text-center text-slate-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Grapreneur. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
    return (
        <a
            href={href}
            aria-label={label}
            className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center text-slate-500 hover:text-primary hover:shadow-md transition-all border border-slate-200 dark:border-slate-700"
        >
            {icon}
        </a>
    );
}

function FooterLink({ href, label }: { href: string; label: string }) {
    return (
        <li>
            <Link href={href} className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors text-sm">
                {label}
            </Link>
        </li>
    );
}
