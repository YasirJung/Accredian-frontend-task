import React from "react";
import NotificationBanner from "./components/NotificationBanner";
import Navbar from "./components/Navbar";
import RoundedNavbar from "./components/RoundedNavbar";
import LearnAndEarn from "./components/LearnAndEarn";
import ReferralProcess from "./components/ReferralProcess";
import ReferralBenefits from "./components/ReferralBenefits";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <NotificationBanner />
      <Navbar />
      <RoundedNavbar />
      <LearnAndEarn />
      <ReferralProcess />
      <ReferralBenefits />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default App;
