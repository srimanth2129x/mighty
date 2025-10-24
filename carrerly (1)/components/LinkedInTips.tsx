import React from 'react';

interface TipCardProps {
    // Fix: Changed type from JSX.Element to React.ReactNode to resolve namespace error.
    icon: React.ReactNode;
    title: string;
    description: string;
}

const TipCard: React.FC<TipCardProps> = ({ icon, title, description }) => (
    <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 h-full transition-colors duration-300 hover:border-purple-500/30">
        <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 text-purple-400 mt-1">{icon}</div>
            <div>
                <h4 className="font-bold text-lg text-white">{title}</h4>
                <p className="mt-2 text-slate-400">{description}</p>
            </div>
        </div>
    </div>
);


const LinkedInTips: React.FC = () => {
    const tips = [
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>,
            title: "Authenticity & Consistency",
            description: "Avoid AI-heavy or spam-like posts. Share original, meaningful insights that spark genuine discussions and reflect your true professional self."
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4z" /></svg>,
            title: "Optimize Your Profile",
            description: "Complete all sections using strong keywords. Showcase key achievements in the “Featured” section to grab attention."
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2V10a2 2 0 012-2h8z" /></svg>,
            title: "Engage Meaningfully",
            description: "Go beyond simple views or likes. Post thoughtful comments to increase interaction depth and dwell time, which the algorithm rewards."
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>,
            title: "Content Strategy",
            description: "Post native content like videos, documents, and stories rather than external links to counter visibility drops. Use scheduling tools for consistency."
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
            title: "Technical Troubleshooting",
            description: "Regularly update the app and clear your browser cache. Use platform support channels for persistent login or page issues."
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21v-1a6 6 0 00-1.781-4.121" /></svg>,
            title: "Quality Networking",
            description: "Prioritize quality over quantity. Maintain real connections and avoid automated outreach to preserve your credibility and engagement."
        }
    ];

    return (
        <section id="tips" className="py-20 bg-gray-950">
            <div className="container mx-auto px-6">
                <div className="text-center">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-purple-400">Career Tips</h2>
                    <h3 className="mt-2 text-3xl md:text-4xl font-extrabold text-white">
                        Master the Modern Job Market
                    </h3>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-300">
                        Actionable advice to enhance your professional presence and navigate career platforms effectively.
                    </p>
                </div>
                <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {tips.map((tip, index) => (
                        <TipCard key={index} {...tip} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LinkedInTips;