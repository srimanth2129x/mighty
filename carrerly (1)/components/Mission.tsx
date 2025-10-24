import React from 'react';

const Mission: React.FC = () => {
    return (
        <section id="mission" className="py-20 bg-black">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="text-center md:text-left">
                        <h2 className="text-sm font-bold uppercase tracking-widest text-purple-400">Our Mission</h2>
                        <h3 className="mt-2 text-3xl md:text-4xl font-extrabold text-white">
                            Eliminate Frustration from Your Job Search
                        </h3>
                        <p className="mt-6 text-lg text-slate-300">
                            Carrerly is designed to eliminate the frustration from job searching. Say goodbye to sifting through countless mismatched positions or submitting applications into the void. Our intelligent platform bridges the gap between talented youngsters and roles that truly align with their abilities, passions, and aspirations.
                        </p>
                         <p className="mt-4 text-lg text-slate-300">
                           Launching your career shouldn't require a roadmap to navigate broken systems. Young professionals deserve tools that work for them, not against them.
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <div className="p-8 bg-gray-900 rounded-full border-4 border-purple-500/30 shadow-2xl shadow-purple-500/20">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-32 w-32 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Mission;