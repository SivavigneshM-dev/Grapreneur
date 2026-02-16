import ImpactBars from "../components/donate/ImpactBars";
import DonationForm from "../components/donate/DonationForm";
import DonationFeedback from "../components/donate/DonationFeedback";

export default function DonatePage() {
    return (
        <>
            <div className="bg-slate-900 pt-24 pb-32 px-4 sm:px-6 lg:px-8 text-center bg-[url('/pattern.svg')]">
                <h1 className="text-4xl md:text-6xl font-bold font-heading text-white mb-6">
                    Fueling the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Future</span>
                </h1>
                <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                    Your contribution directly empowers young entrepreneurs to solve the world's biggest problems.
                </p>
            </div>
            <DonationForm />
            <ImpactBars />
            <DonationFeedback />
        </>
    );
}
