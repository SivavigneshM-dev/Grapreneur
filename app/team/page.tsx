import TeamGrid from "../components/team/TeamGrid";
import VolunteerSection from "../components/team/VolunteerSection";

export default function TeamPage() {
    return (
        <>
            <div className="bg-slate-900 py-24 px-4 sm:px-6 lg:px-8 text-center bg-[url('/pattern.svg')]">
                <h1 className="text-4xl md:text-6xl font-bold font-heading text-white mb-6">
                    People Behind the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Movement</span>
                </h1>
                <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                    We’re a diverse team of dreamers and doers, united by a passion for entrepreneurship.
                </p>
            </div>
            <TeamGrid />
            <VolunteerSection />
        </>
    );
}
