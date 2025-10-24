import React, { useState } from 'react';

const Logo: React.FC = () => (
    <a href="#" className="flex items-center space-x-2">
        <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
        <span className="text-2xl font-bold text-white">Carrerly</span>
    </a>
);

const NavLinks: React.FC<{ className?: string }> = ({ className }) => (
    <div className={className}>
        <a href="#mission" className="hover:text-purple-400 transition-colors">Our Mission</a>
        <a href="#how-it-works" className="hover:text-purple-400 transition-colors">How It Works</a>
        <a href="#impact" className="hover:text-purple-400 transition-colors">Our Impact</a>
        <a href="#assessment" className="hover:text-purple-400 transition-colors">Skill Assessment</a>
        <a href="#tips" className="hover:text-purple-400 transition-colors">Career Tips</a>
    </div>
);

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <Logo />
                <NavLinks className="hidden md:flex items-center space-x-8 text-slate-300" />
                <div className="hidden md:flex items-center space-x-4">
                    <a href="#" className="text-slate-300 hover:text-white transition-colors">Sign In</a>
                    <a href="#" className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-5 py-2 rounded-md transition-colors shadow-lg shadow-purple-600/30">
                        Get Started
                    </a>
                </div>
                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                        </svg>
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden bg-gray-900/90 py-4">
                    <NavLinks className="flex flex-col items-center space-y-4 text-slate-300" />
                    <div className="flex flex-col items-center space-y-4 mt-6">
                        <a href="#" className="text-slate-300 hover:text-white transition-colors w-full text-center py-2">Sign In</a>
                        <a href="#" className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-5 py-2 rounded-md transition-colors w-4/5 text-center shadow-lg shadow-purple-600/30">
                            Get Started
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;