import "./App.css";
import BuiltForEveryoneSection from "./components/BuiltForEveryoneSection";
import CapabilitiesSection from "./components/CapabilitiesSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import KeepingGuardianFreeSection from "./components/KeepingGuardianFreeSection";
import TeamSection from "./components/TeamSection";
import WhyGuardianMattersSection from "./components/WhyGuardianMattersSection";

function App() {
  const isComingSoon = import.meta.env.VITE_COMING_SOON === "true";
  const showFullPage =
    import.meta.env.DEV || import.meta.env.VITE_SHOW_FULL_PAGE === "true";
  const showSections = showFullPage && !isComingSoon;

  return (
    <main className="page-shell">
      <HeroSection />
      {isComingSoon && (
        <div className="coming-soon">
          <p>🛠 Site under development – coming soon...!</p>
        </div>
      )}
      {showSections && (
        <>
          <WhyGuardianMattersSection />
          <BuiltForEveryoneSection />
          <CapabilitiesSection />
          <KeepingGuardianFreeSection />
          <TeamSection />
          <Footer />
        </>
      )}
    </main>
  );
}

export default App;
