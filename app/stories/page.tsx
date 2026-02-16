import StoriesDirectory from "../components/stories/StoriesDirectory";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Grapreneur Success Stories | Real Student Startups & Impact",
    description: "Discover how Grapreneur has helped students launch sustainable businesses. Read inspiring stories of innovation and growth from our alumni.",
};

export default function StoriesPage() {
    return (
        <>
            <div className="bg-white dark:bg-black py-24 px-4 sm:px-6 lg:px-8 text-center border-b border-slate-100 dark:border-slate-900">
                <h1 className="text-4xl md:text-6xl font-bold font-heading text-slate-900 dark:text-white mb-6">
                    Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Alumni</span>
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                    Discover the innovative companies built by Grapreneur graduates across the globe.
                </p>
            </div>
            <StoriesDirectory />
        </>
    );
}
