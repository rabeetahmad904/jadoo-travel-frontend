import { Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 md:pt-40 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-6 text-center lg:text-left">
          <span className="text-jadoo-orange font-bold text-xs md:text-sm uppercase tracking-widest font-poppins">
            Best Destinations around the world
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-jadoo-purple leading-[1.1] tracking-tight font-volkhov">
            Travel, enjoy and live a new and full life
          </h1>
          <p className="text-jadoo-gray text-base md:text-lg max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed font-poppins">
            Built Wicket longer admire do barton vanity itself do in it. Preferred to constants luxury is.
          </p>
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-4">
            <button className="bg-jadoo-yellow text-white font-medium px-7 py-4 rounded-xl shadow-lg shadow-jadoo-yellow/20 font-poppins text-sm">
              Find out more
            </button>
          </div>
        </div>
        <div className="relative flex justify-center items-center">
          <img 
            src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&q=80&w=800" 
            alt="Traveler" 
            className="w-full max-w-[480px] h-auto object-cover rounded-[2.5rem] shadow-2xl border-8 border-white"
          />
        </div>
      </div>
    </section>
  );
}