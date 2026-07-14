import { Mail } from "lucide-react";

export default function Subscribe() {
  return (
    <section className="py-16 max-w-7xl mx-auto px-6 sm:px-12">
      <div className="bg-[#DFD7F9]/20 rounded-3xl rounded-tl-[5rem] px-6 py-16 md:py-24 text-center relative overflow-hidden flex flex-col items-center justify-center border border-purple-50/50">
        
        {/* Subtle Decorative Background Ring */}
        <div className="absolute -top-12 -right-12 w-48 h-48 border border-jadoo-orange/10 rounded-full pointer-events-none"></div>
        
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-jadoo-purple font-volkhov max-w-2xl leading-tight mb-12 relative z-10">
          Subscribe to get information, latest news and other interesting offers about Jadoo
        </h2>

        {/* Input Form Wrapper */}
        <form onSubmit={(e) => e.preventDefault()} className="w-full max-w-xl flex flex-col sm:flex-row gap-4 relative z-10 font-poppins">
          <div className="flex-1 relative flex items-center">
            <Mail className="absolute left-5 w-5 h-5 text-gray-400" />
            <input 
              type="email" 
              placeholder="Your email" 
              className="w-full bg-white pl-14 pr-6 py-4 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-jadoo-purple/20 text-black placeholder-gray-400 shadow-sm"
            />
          </div>
          <button className="bg-gradient-to-b from-jadoo-orange to-orange-600 text-white font-semibold text-sm px-8 py-4 rounded-xl shadow-lg shadow-jadoo-orange/20 hover:opacity-95 transition-opacity whitespace-nowrap">
            Subscribe
          </button>
        </form>
        
      </div>
    </section>
  );
}