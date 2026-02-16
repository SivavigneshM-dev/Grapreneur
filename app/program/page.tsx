import Timeline from "../components/program/Timeline";
import CoursesGrid from "../components/program/CoursesGrid";

export default function ProgramPage() {
    return (
        <>
            <div className="bg-slate-900 py-24 px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl md:text-6xl font-bold font-heading text-white mb-6">
                    Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Action</span>
                </h1>
                <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                    Our curriculum is hands-on and results-driven. We don't just teach theory; we help you build a business.
                </p>
            </div>
            <Timeline />
            <CoursesGrid />
        </>
    );
}
