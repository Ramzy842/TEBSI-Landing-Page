import Analytics from "./Components/Analytics";
import Features from "./Components/Features";
import Footer from "./Components/Footer";
import Header from "./Components/Header"
import Services from "./Components/Services";
import Solutions from "./Components/Solutions";
import Subscriptions from "./Components/Subscriptions";
import Testemonials from "./Components/Testemonials";
import TrustedBySection from "./Components/TrustedBySection";

function App() {
  
  return (
    <div className="lg:w-4/5 lg:mx-auto ">
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
