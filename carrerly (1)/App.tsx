import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Mission from './components/Mission';
import HowItWorks from './components/HowItWorks';
import Impact from './components/Impact';
import SkillAssessment from './components/SkillAssessment';
import LinkedInTips from './components/LinkedInTips';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-black text-slate-300 overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Mission />
        <HowItWorks />
        <Impact />
        <SkillAssessment />
        <LinkedInTips />
      </main>
      <Footer />
    </div>
  );
};

export default App;