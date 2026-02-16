import Image from 'next/image';
import { ExternalLink, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

interface StartupCardProps {
    name: string;
    description: string;
    founder: string;
    image: string;
    category: string;
    location: string;
    website?: string;
}

export default function StartupCard({
    name,
    description,
    founder,
    image,
    category,
    location,
    website
}: StartupCardProps) {
    return (
        <div className="group bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full">
            <div className="relative h-48 bg-slate-100 dark:bg-slate-800 overflow-hidden">
                {image ? (
                    <Image
                        src={image}
                        alt={name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-4xl font-bold text-slate-300 dark:text-slate-700 select-none">
                        {name[0]}
                    </div>
                )}
                <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-bold rounded-full bg-white/90 backdrop-blur-sm text-slate-800 shadow-sm">
                        {category}
                    </span>
                </div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{name}</h3>
                    {website && (
                        <a href={website} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors">
                            <ExternalLink size={18} />
                        </a>
                    )}
                </div>

                <p className="text-sm text-slate-500 mb-4 flex items-center">
                    <span className="font-semibold mr-2">{founder}</span>
                    •
                    <MapPin size={14} className="ml-2 mr-1" />
                    {location}
                </p>

                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                    {description}
                </p>

                <button className="w-full py-2 rounded-lg border border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-all text-sm">
                    View Profile
                </button>
            </div>
        </div>
    );
}
