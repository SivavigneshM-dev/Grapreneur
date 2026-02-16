import Hero from "./components/home/Hero";
import ProgramHighlights from "./components/home/ProgramHighlights";
import ImpactMetrics from "./components/home/ImpactMetrics";
import SuccessStoriesPreview from "./components/home/SuccessStoriesPreview";

export default function Home() {
  return (
    <>
      <Hero />
      <ImpactMetrics />
      <ProgramHighlights />
      <SuccessStoriesPreview />
    </>
  );
}
