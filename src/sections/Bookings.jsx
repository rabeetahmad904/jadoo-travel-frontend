import { Compass, ShieldCheck, Heart } from "lucide-react";

export default function Bookings() {
  return (
    <section className="py-16 max-w-7xl mx-auto px-6 sm:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div>
        <span className="text-jadoo-gray font-semibold text-sm uppercase tracking-widest font-poppins">Easy and Fast</span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-jadoo-purple font-volkhov mt-2 mb-10 leading-tight">
          Book Your Next Trip In 3 Easy Steps
        </h2>
        <div className="flex flex-col gap-8 font-poppins">
          <div className="flex gap-5 items-start">
            <div className="bg-jadoo-yellow text-white p-3 rounded-xl shadow-md"><Compass className="w-6 h-6" /></div>
            <div><h4 className="font-bold text-jadoo-purple text-base">Choose Destination</h4><p className="text-jadoo-gray text-sm mt-1 max-w-sm">Pick where you want to go around the global horizons.</p></div>
          </div>
          <div className="flex gap-5 items-start">
            <div className="bg-jadoo-orange text-white p-3 rounded-xl shadow-md"><ShieldCheck className="w-6 h-6" /></div>
            <div><h4 className="font-bold text-jadoo-purple text-base">Make Payment</h4><p className="text-jadoo-gray text-sm mt-1 max-w-sm">Secure transactions with multi-banking pathways.</p></div>
          </div>
          <div className="flex gap-5 items-start">
            <div className="bg-transparent border-2 border-jadoo-purple text-jadoo-purple p-3 rounded-xl shadow-md"><Heart className="w-6 h-6" /></div>
            <div><h4 className="font-bold text-jadoo-purple text-base">Reach Airport on Selected Date</h4><p className="text-jadoo-gray text-sm mt-1 max-w-sm">Pass through check-in and launch your adventure.</p></div>
          </div>
        </div>
      </div>
      <div className="flex justify-center relative">
        <div className="absolute w-72 h-72 bg-jadoo-orange/10 filter blur-3xl rounded-full -z-10 animate-pulse"></div>
        <div className="bg-white p-6 rounded-3xl shadow-xl max-w-xs border border-gray-100 transform rotate-1">
          <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=400" alt="Trip Card" className="rounded-2xl w-full h-40 object-cover mb-4" />
          <h4 className="font-bold text-jadoo-purple font-poppins text-lg">Trip To Greece</h4>
          <p className="text-jadoo-gray font-medium font-poppins text-xs mt-1 mb-4">14-29 June | by Robbin joseph</p>
          <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden"><div className="bg-jadoo-purple w-2/5 h-full rounded-full"></div></div>
        </div>
      </div>
    </section>
  );
}