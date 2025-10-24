import React, { useState } from 'react';

// A simple array of dummy questions for the assessment
const assessmentQuestions = [
    "I am highly organized and enjoy planning complex projects.",
    "I prefer collaborating in a team environment rather than working alone.",
    "I feel comfortable taking calculated risks to achieve better outcomes.",
    "I enjoy diving deep into data to solve analytical problems.",
    "I often come up with creative and unconventional solutions to challenges."
];
const totalSteps = assessmentQuestions.length;


const SkillAssessment: React.FC = () => {
    const [assessmentStarted, setAssessmentStarted] = useState(false);
    const [assessmentComplete, setAssessmentComplete] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);

    const handleStart = () => {
        setAssessmentStarted(true);
        setAssessmentComplete(false);
        setCurrentStep(1);
    };

    const handleNext = () => {
        if (currentStep < totalSteps) {
            setCurrentStep(currentStep + 1);
        } else {
            setAssessmentStarted(false);
            setAssessmentComplete(true);
        }
    };

    const renderIntro = () => (
         <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center md:order-2">
                <div className="relative p-8 bg-gray-900 rounded-full border-4 border-purple-500/30 shadow-2xl shadow-purple-500/20">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-32 w-32 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <div className="absolute top-0 -left-4 w-16 h-16 bg-purple-500 rounded-full mix-blend-screen filter blur-xl opacity-70 animate-pulse"></div>
                    <div className="absolute bottom-0 -right-4 w-16 h-16 bg-purple-500 rounded-full mix-blend-screen filter blur-xl opacity-70 animate-pulse delay-1000"></div>
                </div>
            </div>
            <div className="text-center md:text-left md:order-1">
                <h2 className="text-sm font-bold uppercase tracking-widest text-purple-400">Skill Assessment</h2>
                <h3 className="mt-2 text-3xl md:text-4xl font-extrabold text-white">
                    Discover Your Strengths
                </h3>
                <p className="mt-6 text-lg text-slate-300">
                    Take our quick, AI-powered assessment to pinpoint your unique talents and identify growth opportunities. Get personalized recommendations for courses and roles that perfectly match your skill set.
                </p>
                <ul className="mt-6 space-y-4 text-slate-300 text-left max-w-md mx-auto md:mx-0">
                    <li className="flex items-start">
                        <svg className="w-6 h-6 text-purple-400 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        <span>Receive a detailed breakdown of your top skills in a personalized report.</span>
                    </li>
                    <li className="flex items-start">
                        <svg className="w-6 h-6 text-purple-400 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        <span>Get tailored suggestions for courses to upskill and roles where you'll excel.</span>
                    </li>
                        <li className="flex items-start">
                        <svg className="w-6 h-6 text-purple-400 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        <span>Gain confidence and clarity on your ideal career path.</span>
                    </li>
                </ul>
                <div className="mt-8">
                    <button onClick={handleStart} className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold px-8 py-3 rounded-lg text-lg transition-transform duration-300 ease-in-out transform hover:scale-105 shadow-lg shadow-purple-600/40">
                        Take the Assessment
                    </button>
                </div>
            </div>
        </div>
    );

    const renderAssessment = () => (
        <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-sm font-bold uppercase tracking-widest text-purple-400">Skill Assessment</h2>
            <p className="mt-4 font-semibold text-white text-xl">
                Step {currentStep} of {totalSteps}
            </p>
            <div className="mt-4 w-full bg-gray-700 rounded-full h-2.5">
                <div className="bg-purple-600 h-2.5 rounded-full transition-all duration-500 ease-in-out" style={{ width: `${(currentStep / totalSteps) * 100}%` }}></div>
            </div>

            <div className="mt-10 bg-gray-900 border border-gray-800 p-8 rounded-lg min-h-[200px] flex items-center justify-center">
                <p className="text-2xl font-semibold text-white">
                    {assessmentQuestions[currentStep - 1]}
                </p>
            </div>
             <div className="mt-8">
                <button onClick={handleNext} className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold px-8 py-3 rounded-lg text-lg transition-transform duration-300 ease-in-out transform hover:scale-105 shadow-lg shadow-purple-600/40 min-w-[200px]">
                    {currentStep < totalSteps ? 'Next Question' : 'Finish Assessment'}
                </button>
            </div>
        </div>
    );

    const renderCompletion = () => (
        <div className="max-w-3xl mx-auto text-center">
             <h2 className="text-3xl md:text-4xl font-extrabold text-white">Assessment Complete!</h2>
            <p className="mt-4 text-lg text-slate-300">
                Thank you for completing the assessment. We're now analyzing your results to create your personalized career report.
            </p>
             <div className="mt-8">
                <button onClick={handleStart} className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold px-8 py-3 rounded-lg text-lg transition-transform duration-300 ease-in-out transform hover:scale-105 shadow-lg shadow-purple-600/40">
                    Take Again
                </button>
            </div>
        </div>
    );

    return (
        <section id="assessment" className="py-20 bg-gray-950">
            <div className="container mx-auto px-6">
                {assessmentComplete ? renderCompletion() : (assessmentStarted ? renderAssessment() : renderIntro())}
            </div>
        </section>
    );
};

export default SkillAssessment;