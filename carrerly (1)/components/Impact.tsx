import React from 'react';

interface StatCardProps {
    value: string;
    label: string;
    description: string;
}

const StatCard: React.FC<StatCardProps> = ({ value, label, description }) => (
    <div className="bg-gray-900/50 p-8 rounded-lg text-center border border-gray-800 transition-all duration-300 hover:border-purple-500/50 hover:scale-105">
        <p className="text-5xl font-extrabold text-purple-400">{value}</p>
        <p className="mt-2 text-xl font-semibold text-white">{label}</p>
        <p className="mt-3 text-slate-400">{description}</p>
    </div>
);

const Impact: React.FC = () => {
    const stats = [
        {
            value: "10,000+",
            label: "Successful Placements",
            description: "Connecting talented individuals with roles where they can thrive and grow."
        },
        {
            value: "500+",
            label: "Partner Companies",
            description: "From innovative startups to Fortune 500s, our network is always expanding."
        },
        {
            value: "92%",
            label: "Satisfaction Rate",
            description: "Users love our platform for its intuitive design and effective results."
        }
    ];

    return (
        <section id="impact" className="py-20 bg-black">
            <div className="container mx-auto px-6">
                <div className="text-center">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-purple-400">Our Impact</h2>
                    <h3 className="mt-2 text-3xl md:text-4xl font-extrabold text-white">
                        Building Pathways to Potential
                    </h3>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-300">
                        Carrerly has already helped countless young professionals take their first steps toward fulfilling careers. We're not merely connecting people to jobs—we're creating opportunities.
                    </p>
                </div>
                <div className="mt-16 grid md:grid-cols-3 gap-8">
                    {stats.map((stat, index) => (
                        <StatCard key={index} {...stat} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Impact;