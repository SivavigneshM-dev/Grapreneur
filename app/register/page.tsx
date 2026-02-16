import RegistrationForm from "../components/register/RegistrationForm";

export default function RegisterPage() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-black py-24 px-4 sm:px-6 lg:px-8 bg-[url('/pattern.svg')]">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 dark:text-white mb-6">
                        Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Journey</span>
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-slate-400">
                        Apply now to join our upcoming cohort. Spots are limited to ensure personalized mentorship.
                    </p>
                </div>

                <RegistrationForm />
            </div>
        </div>
    );
}
