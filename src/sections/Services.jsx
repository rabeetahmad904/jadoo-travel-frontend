import { CloudSun, Plane, Calendar, Settings } from "lucide-react";

const SERVICES_DATA = [
  { id: 1, Icon: CloudSun, title: "Calculated Weather", description: "Built Wicket longer admire do barton vanity itself do in it." },
  { id: 2, Icon: Plane, title: "Best Flights", description: "Engaged details & arrangements items dramatic jealousy." },
  { id: 3, Icon: Calendar, title: "Local Events", description: "Barton vanity itself do in it. Preferred to constants luxury is." },
  { id: 4, Icon: Settings, title: "Customization", description: "We deliver outsourced aviation services for global regions." },
];

export default function Services() {
  return (
    <section className="py-20 max-w-7xl mx-auto px-6 sm:px-12">
      <div className="text-center flex flex-col gap-3 mb-16">
        <span className="text-jadoo-gray font-semibold text-sm uppercase tracking-widest font-poppins">Category</span>
        <h2 className="text-3xl sm:text-4xl font-bold text-jadoo-purple font-volkhov">We Offer Best Services</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {SERVICES_DATA.map(({ id, Icon, title, description }) => (
          <div key={id} className="p-8 rounded-[2.25rem] bg-white shadow-md hover:shadow-xl transition-all duration-300 text-center flex flex-col items-center">
            <Icon className="w-12 h-12 text-jadoo-purple mb-4" />
            <h3 className="text-xl font-bold text-jadoo-purple mb-2">{title}</h3>
            <p className="text-jadoo-gray text-sm">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}