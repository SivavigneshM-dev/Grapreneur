'use client';

import CommunityRegistrationForm from '../components/register/CommunityRegistrationForm';

export default function JoinPage() {

    return (
        <div className="min-h-screen pt-24 pb-16 bg-slate-50 dark:bg-slate-950">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
                        Join Grapreneur
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
                        Take the first step towards transforming your entrepreneurial dreams into reality as a Community Member.
                    </p>
                </div>

                {/* Only Community Form */}
                <div className="transition-all duration-300">
                    <CommunityRegistrationForm />
                </div>

            </div>
        </div>
    );
}
