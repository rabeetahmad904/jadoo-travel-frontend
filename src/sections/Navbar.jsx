import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["Destinations", "Hotels", "Flights", "Bookings"];

  return (
    <nav className="w-full bg-transparent absolute top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-6 flex justify-between items-center">
        
        {/* Brand Logo */}
        <div className="text-2xl font-bold text-jadoo-purple tracking-tight cursor-pointer">
          Jadoo<span className="text-jadoo-orange">.</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 font-poppins text-sm font-medium text-jadoo-purple">
          {navLinks.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="hover:text-jadoo-orange transition-colors">
              {link}
            </a>
          ))}
          <a href="#login" className="hover:text-jadoo-orange transition-colors">Login</a>
          <a href="#signup" className="border border-jadoo-purple rounded-md px-5 py-2 hover:bg-jadoo-purple hover:text-white transition-all">
            Sign up
          </a>
          
          {/* Language Selector Dropdown Mock */}
          <div className="flex items-center gap-1 cursor-pointer hover:text-jadoo-orange transition-colors">
            <span>EN</span>
            <Globe className="w-4 h-4" />
          </div>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-jadoo-purple focus:outline-none">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-jadoo-bg border-b border-gray-100 px-6 pt-4 pb-6 absolute w-full left-0 flex flex-col gap-4 font-medium shadow-lg">
          {navLinks.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setIsOpen(false)} className="text-jadoo-purple py-2 border-b border-gray-50">
              {link}
            </a>
          ))}
          <a href="#login" onClick={() => setIsOpen(false)} className="text-jadoo-purple py-2">Login</a>
          <a href="#signup" onClick={() => setIsOpen(false)} className="bg-jadoo-orange text-white text-center rounded-md py-2.5">
            Sign up
          </a>
        </div>
      )}
    </nav>
  );
}