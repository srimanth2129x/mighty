import React from 'react';

interface FeatureCardProps {
    // Fix: Changed type from JSX.Element to React.ReactNode to resolve namespace error.
    icon: React.ReactNode;
    title: string;
    description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
    <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 transform hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-purple-500/20 hover:border-purple-500/30">
        <div className="flex items-center justify-center h-16 w-16 mb-6 bg-gray-800 rounded-full border border-gray-700 text-purple-400">
            {icon}
        </div>
        <h4 className="text-xl font-bold text-white mb-3">{title}</h4>
        <p className="text-slate-400 leading-relaxed">{description}</p>
    </div>
);

const HowItWorks: React.FC = () => {
    const features = [
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>,
            title: "Cutting-Edge AI Matching",
            description: "Our intelligent algorithms go beyond keywords to match your unique skills and personality with the perfect role."
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>,
            title: "Real-Time Application Visibility",
            description: "No more black holes. Track your application status from submission to decision and get real-time feedback."
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
            title: "Customized Career Support",
            description: "From resume building to interview prep, we provide the resources you need to stand out and succeed."
        },
    ];

    return (
        <section id="how-it-works" className="py-20 bg-gray-950">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-sm font-bold uppercase tracking-widest text-purple-400">How Carrerly Works</h2>
                <h3 className="mt-2 text-3xl md:text-4xl font-extrabold text-white">
                    Your Trusted Ally in the Job Market
                </h3>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-300">
                    We blend cutting-edge technology with personalized support to empower you at every step of your career journey.
                </p>
                <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <FeatureCard key={index} {...feature} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;