import React, { useState } from 'react';
import { Download, TrendingUp, Users, Target, Zap, MessageSquare } from 'lucide-react';

const SponsorCard = ({ icon: Icon, title, desc }) => (
    <div className="p-8 border border-white/10 bg-white/5 backdrop-blur-sm rounded-2xl hover:bg-white/10 transition-colors">
        <Icon className="w-8 h-8 text-secondary mb-6" />
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-text-muted text-sm leading-relaxed">{desc}</p>
    </div>
);

const ActivationCard = ({ title, goal, impact }) => (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-8 transition-all hover:border-primary/50">
        <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{title}</h3>
        <div className="space-y-4 text-sm">
            <div>
                <p className="text-white/40 uppercase tracking-widest text-xs mb-1">Goal</p>
                <p className="text-white/80">{goal}</p>
            </div>
            <div>
                <p className="text-white/40 uppercase tracking-widest text-xs mb-1">Impact</p>
                <p className="text-white/80">{impact}</p>
            </div>
        </div>
    </div>
);

const Sponsors = () => {
    const [formStatus, setFormStatus] = useState('idle');

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormStatus('sending');
        setTimeout(() => setFormStatus('success'), 1500);
    };

    return (
        <div className="pt-24 min-h-screen">
            {/* Hero */}
            <section className="relative py-24 px-6 overflow-hidden">
                <div className="absolute inset-0 bg-background-alt/50 z-0" />
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-tight">
                        Own the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Signal</span>
                    </h1>
                    <p className="text-xl text-text-muted max-w-2xl mx-auto mb-10">
                        Strategic brand exposure where Web3 meets AI. Position your organization in front of Ankara’s highest-intent audience.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="#inquiry" className="px-8 py-4 bg-white text-black font-bold text-sm rounded-full hover:scale-105 transition-transform">
                            BECOME A SPONSOR
                        </a>
                        <button className="px-8 py-4 border border-white/20 hover:bg-white/10 flex items-center gap-2 rounded-full font-bold text-sm transition-colors">
                            <Download className="w-4 h-4" />
                            DOWNLOAD DECK
                        </button>
                    </div>
                </div>
            </section>

            {/* Why Sponsor */}
            <section className="py-24 max-w-7xl mx-auto px-6">
                <h2 className="text-3xl font-bold mb-12">Why Timestamp 1337?</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <SponsorCard
                        icon={Target}
                        title="Brand Authority"
                        desc="Command the stage. Lead panels. Own the conversation alongside industry titans."
                    />
                    <SponsorCard
                        icon={Users}
                        title="Lead Generation"
                        desc="Direct access to VIP investor lists and curated dealflow matching sessions."
                    />
                    <SponsorCard
                        icon={Zap}
                        title="Community Activation"
                        desc="Host hackathon bounties, run demo zones, and engage builders directly."
                    />
                    <SponsorCard
                        icon={MessageSquare}
                        title="Thought Leadership"
                        desc="Shape the narrative. Participate in closed-door policy and tech roundtables."
                    />
                    <SponsorCard
                        icon={TrendingUp}
                        title="Content Distribution"
                        desc="Professional media coverage, recap videos, and social amplification."
                    />
                    <SponsorCard
                        icon={Download}
                        title="Recruiting Pipeline"
                        desc="Access the region's top developer talent pool through the Builder Hack."
                    />
                </div>
            </section>

            {/* Activation Concepts */}
            <section className="py-24 bg-white/5 border-y border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-12">Activation Concepts</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <ActivationCard
                            title="Timestamp Lounge (VIP)"
                            goal="Exclusive Networking"
                            impact="High-net-worth engagement in a private setting."
                        />
                        <ActivationCard
                            title="Signal Stage Naming"
                            goal="Maximum Visibility"
                            impact="Brand every keynote and panel for 2 full days."
                        />
                        <ActivationCard
                            title="Builder Recharge Zone"
                            goal="Developer Relations"
                            impact="Deep engagement with 500+ hackers during the sprint."
                        />
                    </div>
                </div>
            </section>

            {/* Inquiry Form */}
            <section id="inquiry" className="py-24 max-w-3xl mx-auto px-6">
                <div className="bg-background-alt border border-white/10 p-8 md:p-12 rounded-3xl">
                    <h2 className="text-3xl font-bold mb-6">Partnership Inquiry</h2>
                    <p className="text-text-muted mb-8">Tell us your objectives. We curate the package.</p>

                    {formStatus === 'success' ? (
                        <div className="p-8 bg-green-500/10 border border-green-500/20 rounded-xl text-center">
                            <h3 className="text-xl font-bold text-green-400 mb-2">Signal Received</h3>
                            <p>Our concierge team will contact you within 24 hours.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-white/50">Name</label>
                                    <input required type="text" className="w-full bg-black/40 border border-white/10 rounded-lg p-3 focus:border-primary outline-none transition-colors" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-white/50">Role</label>
                                    <input required type="text" className="w-full bg-black/40 border border-white/10 rounded-lg p-3 focus:border-primary outline-none transition-colors" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-white/50">Company Email</label>
                                <input required type="email" className="w-full bg-black/40 border border-white/10 rounded-lg p-3 focus:border-primary outline-none transition-colors" />
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-white/50">Budget Range</label>
                                    <select className="w-full bg-black/40 border border-white/10 rounded-lg p-3 focus:border-primary outline-none transition-colors text-white/80">
                                        <option>$5k - $15k (Startup)</option>
                                        <option>$15k - $50k (Growth)</option>
                                        <option>$50k - $100k+ (Enterprise)</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-white/50">Primary Goal</label>
                                    <select className="w-full bg-black/40 border border-white/10 rounded-lg p-3 focus:border-primary outline-none transition-colors text-white/80">
                                        <option>Brand Awareness</option>
                                        <option>Lead Generation</option>
                                        <option>Recruiting</option>
                                        <option>Product Launch</option>
                                    </select>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-white/50">Message</label>
                                <textarea rows={4} className="w-full bg-black/40 border border-white/10 rounded-lg p-3 focus:border-primary outline-none transition-colors" placeholder="Tell us about your activation ideas..."></textarea>
                            </div>
                            <button type="submit" disabled={formStatus === 'sending'} className="w-full py-4 bg-primary text-background font-bold rounded-lg hover:bg-white transition-colors">
                                {formStatus === 'sending' ? 'Transmitting...' : 'SUBMIT INQUIRY'}
                            </button>
                        </form>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Sponsors;
