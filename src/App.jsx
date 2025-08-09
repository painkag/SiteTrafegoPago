import Header from "./sections/Header.jsx";
import Hero from "./sections/Hero.jsx";
import Features from "./sections/Features.jsx";
import Pricing from "./sections/Pricing.jsx";
import Faq from "./sections/Faq.jsx";
import Testimonials from "./sections/Testimonial.jsx";
import Download from "./sections/Download.jsx";
import Footer from "./sections/Footer.jsx";
import BotaoZap from "./WhatsAppTelaFixa.jsx";

const App = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Faq />
      <Testimonials />
      <Download />
      <Footer />
      <BotaoZap/>
    </main>
  );
};
export default App;
