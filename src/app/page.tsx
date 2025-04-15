import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Portfolio from "./sections/Portfolio";
import Tools from "./sections/Tools";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import ChatbotWrapper from "./components/ChatbotWrapper";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Tools />
      <Contact />
      <Footer />
      <ChatbotWrapper />
    </main>
  );
}
