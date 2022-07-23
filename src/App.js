import Analytics from "./Components/Analytics";
import Features from "./Components/Features";
import Footer from "./Components/Footer";
import Header from "./Components/Header"
import Services from "./Components/Services";
import Solutions from "./Components/Solutions";
import Subscriptions from "./Components/Subscriptions";
import Testemonials from "./Components/Testemonials";
import TrustedBySection from "./Components/TrustedBySection";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

function App() {

  useEffect(() => {
    AOS.init();
  }, [])

  useEffect(() => {
    setTimeout(() => { AOS.refresh();}, 200)
   
  })
  
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Features  />
      <TrustedBySection/>
      <Services />
      <Solutions />
      <Subscriptions />
      <Analytics />
      <Testemonials />
      <Footer />
    </div>
  );
}

export default App;
