import { useState } from "react";
import FetureDestinations from "./components/FetureDestinations";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import Hotel from "./components/Hotel";
import NeedHelp from "./components/NeedHelp";
import PlanTrip from "./components/PlanTrip";
import WhyChoosingUs from "./components/WhyChoosingUs";
function App() {
  return (
    <div className="main">
      <Homepage/>
      <WhyChoosingUs/>
      <PlanTrip/>
      <FetureDestinations/>
      <Hotel/>
      <NeedHelp />
      <Footer />
      
    </div>
  );
}

export default App;
