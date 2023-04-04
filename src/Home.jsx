
import Footer from "./components/Footer";
import NeedHelp from "./components/NeedHelp";
import Hotel from "./components/Hotel";
import FeatureDestinations from "./components/FeatureDestinations";
import PlanTrip from "./components/PlanTrip";
import Homepage from "./components/Homepage";
import WhyChoosingUs from "./components/WhyChoosingUs";

function Home() {
  return (
    <div className="main">
      <Homepage />
      <WhyChoosingUs />
      <PlanTrip />
      <FeatureDestinations />
      <Hotel />
      <NeedHelp />

      <Footer />
    </div>
  );
}

export default Home;
