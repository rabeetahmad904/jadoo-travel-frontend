import { Navigation } from "lucide-react";

const DESTINATIONS = [
  { id: 1, title: "Rome, Italy", price: "$5.42k", days: "12 Days Trip", img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&q=80&w=600" },
  { id: 2, title: "London, UK", price: "$4.2k", days: "12 Days Trip", img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=600" },
  { id: 3, title: "Full Europe", price: "$15k", days: "28 Days Trip", img: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80&w=600" },
];

export default function Destinations() {
  return (
    <section className="py-16 max-w-7xl mx-auto px-6 sm:px-12">
      <div className="text-center flex flex-col gap-3 mb-16">
        <span className="text-jadoo-gray font-semibold text-sm uppercase tracking-widest font-poppins">Top Selling</span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-jadoo-purple font-volkhov">Top Destinations</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {DESTINATIONS.map(({ id, title, price, days, img }) => (
          <div key={id} className="rounded-3xl bg-white shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="h-80 overflow-hidden relative">
              <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6 font-poppins">
              <div className="flex justify-between items-center text-jadoo-gray font-semibold text-lg mb-4">
                <span className="text-jadoo-purple">{title}</span>
                <span>{price}</span>
              </div>
              <div className="flex items-center gap-3 text-jadoo-gray font-medium text-sm">
                <Navigation className="w-4 h-4 text-black fill-black" />
                <span>{days}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}