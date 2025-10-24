import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="relative py-20 md:py-32 text-center text-white bg-black overflow-hidden">
            <div className="absolute inset-0 bg-dot-pattern [mask-image:linear-gradient(to_bottom,white_5%,transparent_90%)]"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>
            </div>
            <div className="container mx-auto px-6 relative z-10">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-200 to-white leading-tight">
                    Empowering Young Talent
                </h1>
                <p className="mt-4 text-lg md:text-2xl font-semibold text-purple-400">
                    Where Opportunity Meets Ambition
                </p>
                <p className="mt-6 max-w-2xl mx-auto text-slate-300 md:text-lg">
                    Job hunting doesn't have to be overwhelming. At Carrerly, we're revolutionizing how the next generation finds meaningful career opportunities and takes control of their professional journey.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
                    <a href="#" className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white font-bold px-8 py-4 rounded-lg text-lg transition-transform duration-300 ease-in-out transform hover:scale-105 shadow-lg shadow-purple-600/40">
                        Find Your Dream Job
                    </a>
                    <a href="#how-it-works" className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 text-white font-bold px-8 py-4 rounded-lg text-lg transition-transform duration-300 ease-in-out transform hover:scale-105">
                        Learn More
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;