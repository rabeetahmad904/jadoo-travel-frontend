export default function Testimonials() {
  return (
    <section className="py-16 max-w-7xl mx-auto px-6 sm:px-12">
      {/* Testimonials Core Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
        {/* Left Side Copy */}
        <div>
          <span className="text-jadoo-gray font-semibold text-sm uppercase tracking-widest font-poppins">Testimonials</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-jadoo-purple font-volkhov mt-2 max-w-md leading-tight">
            What People Say About Us.
          </h2>
        </div>

        {/* Right Side Stacked Review Cards */}
        <div className="relative pt-8 flex justify-center lg:justify-start">
          {/* Back Card (Visual Stack Effect) */}
          <div className="absolute top-16 left-4 lg:left-12 w-full max-w-md bg-gray-50 border border-gray-100 p-6 rounded-2xl shadow-sm -z-10 transform translate-x-3 translate-y-3">
            <p className="text-transparent select-none text-sm">Placeholder content to match heights perfectly.</p>
            <h4 className="font-bold text-transparent select-none text-sm mt-4">Chris Thomas</h4>
            <p className="text-transparent select-none text-xs">CEO of Redux</p>
          </div>

          {/* Front Active Card */}
          <div className="w-full max-w-md bg-white border border-gray-100 p-8 rounded-2xl shadow-xl font-poppins relative">
            <img 
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200" 
              alt="User profile" 
              className="w-12 h-12 rounded-full object-cover absolute -top-6 -left-4 border-4 border-white shadow-md"
            />
            <p className="text-jadoo-gray text-sm font-medium leading-relaxed">
              "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no."
            </p>
            <h4 className="font-bold text-jadoo-purple text-sm mt-6">Mike Taylor</h4>
            <p className="text-jadoo-gray text-xs font-medium mt-0.5">Lahore, Pakistan</p>
          </div>
        </div>
      </div>

      {/* Partner Logos Strip */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center opacity-40 grayscale hover:grayscale-0 transition-all duration-500 pt-10">
        <span className="font-bold text-xl tracking-tight font-volkhov">Axon</span>
        <span className="font-bold text-xl tracking-tight font-volkhov">Jetstar</span>
        <span className="font-bold text-xl tracking-tight font-volkhov">Expedia</span>
        <span className="font-bold text-xl tracking-tight font-volkhov">Qantas</span>
        <span className="font-bold text-xl tracking-tight font-volkhov">Alitalia</span>
      </div>
    </section>
  );
}