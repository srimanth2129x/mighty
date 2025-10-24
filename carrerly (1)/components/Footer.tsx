import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-black border-t border-gray-900">
            <div className="container mx-auto px-6 py-12">
                <div className="grid md:grid-cols-3 gap-8">
                    <div>
                        <div className="flex items-center space-x-2">
                            <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                            </svg>
                            <span className="text-2xl font-bold text-white">Carrerly</span>
                        </div>
                        <p className="mt-4 text-slate-400">Empowering the next generation of professionals.</p>
                    </div>
                    <div className="grid grid-cols-2 gap-8 md:col-span-2">
                        <div>
                            <h5 className="font-semibold text-white tracking-wider">Solutions</h5>
                            <ul className="mt-4 space-y-2">
                                <li><a href="#" className="text-slate-400 hover:text-purple-400">For Students</a></li>
                                <li><a href="#" className="text-slate-400 hover:text-purple-400">For Graduates</a></li>
                                <li><a href="#" className="text-slate-400 hover:text-purple-400">For Employers</a></li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="font-semibold text-white tracking-wider">Company</h5>
                            <ul className="mt-4 space-y-2">
                                <li><a href="#" className="text-slate-400 hover:text-purple-400">About Us</a></li>
                                <li><a href="#" className="text-slate-400 hover:text-purple-400">Careers</a></li>
                                <li><a href="#" className="text-slate-400 hover:text-purple-400">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mt-12 border-t border-gray-900 pt-8 text-center text-slate-500">
                    <p>&copy; {new Date().getFullYear()} Carrerly, Inc. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;