import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Destinations from "./sections/Destinations";
import Bookings from "./sections/Bookings";
import Testimonials from "./sections/Testimonials";
import Subscribe from "./sections/Subscribe";
import Footer from "./sections/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen bg-jadoo-bg overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Destinations />
        <Bookings />
        <Testimonials />
        <Subscribe />
      </main>
      <Footer />
    </div>
  );
}