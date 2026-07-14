export default function Footer() {
  return (
    <footer className="pt-20 pb-10 max-w-7xl mx-auto px-6 sm:px-12 font-poppins">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-gray-200 pb-12 mb-8">
        <div>
          <h3 className="text-3xl font-bold text-jadoo-purple font-volkhov mb-4">Jadoo.</h3>
          <p className="text-jadoo-gray text-sm font-medium leading-relaxed">Book your trip in minute, get full Control for much longer admire.</p>
        </div>
        <div>
          <h4 className="text-black font-bold text-lg mb-4">Company</h4>
          <div className="flex flex-col gap-3 text-jadoo-gray text-sm font-medium"><a href="#" className="hover:text-black transition-colors">About</a><a href="#" className="hover:text-black transition-colors">Careers</a><a href="#" className="hover:text-black transition-colors">Mobile</a></div>
        </div>
        <div>
          <h4 className="text-black font-bold text-lg mb-4">Contact</h4>
          <div className="flex flex-col gap-3 text-jadoo-gray text-sm font-medium"><a href="#" className="hover:text-black transition-colors">Help/FAQ</a><a href="#" className="hover:text-black transition-colors">Press</a><a href="#" className="hover:text-black transition-colors">Affilates</a></div>
        </div>
        <div>
          <h4 className="text-black font-bold text-lg mb-4">More</h4>
          <div className="flex flex-col gap-3 text-jadoo-gray text-sm font-medium"><a href="#" className="hover:text-black transition-colors">Airlinefees</a><a href="#" className="hover:text-black transition-colors">Airline</a><a href="#" className="hover:text-black transition-colors">Low fare tips</a></div>
        </div>
      </div>
      <p className="text-center text-jadoo-gray text-xs font-medium">All rights reserved @ Jadoo.co</p>
    </footer>
  );
}