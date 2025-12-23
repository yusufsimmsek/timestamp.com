import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Zap, Globe, Shield, Coins, Layers, Cpu, Users, Mic, Sparkles } from 'lucide-react';

const Hero = () => (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Abstract Background Object */}
        <div className="absolute top-1/2 right-[-10%] -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-[100px] animate-pulse-slow pointer-events-none" />
        <div className="absolute top-1/3 right-[5%] w-[400px] h-[400px] border border-white/5 rounded-full pointer-events-none animate-[spin_60s_linear_infinite]" />

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-up">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs tracking-widest uppercase text-primary font-medium">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                    Ankara, Türkiye
                </div>
                <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-[0.9]">
                    TIMESTAMP <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">1337</span>
                </h1>
                <p className="text-xl md:text-2xl text-text-muted leading-relaxed max-w-xl">
                    Corporate signal. Community energy. The future of Web3 & AI converges here.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                    <Link to="/tickets" className="px-8 py-4 bg-white text-black font-bold text-sm rounded-full hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                        BUY TICKETS
                    </Link>
                    <Link to="/sponsors" className="px-8 py-4 border border-white/20 bg-white/5 backdrop-blur-md text-white font-bold text-sm rounded-full hover:bg-white/10 transition-colors">
                        BECOME A SPONSOR
                    </Link>
                </div>
                <div className="flex gap-6 pt-8 text-sm text-text-muted font-medium tracking-wide">
                    <span>OCT 18-20, 2025</span>
                    <span>•</span>
                    <span>ÇANKAYA VENUE</span>
                </div>
            </div>

            {/* Visual Hero Element */}
            <div className="relative h-[600px] hidden lg:block perspective-[1000px]">
                {/* Simple CSS 3D Grid Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
                <div className="w-full h-full bg-[linear-gradient(rgba(49,230,227,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(49,230,227,0.1)_1px,transparent_1px)] bg-[size:40px_40px] [transform:rotateX(60deg)_scale(1.5)] opacity-30 animate-pulse-slow"></div>
            </div>
        </div>
    </section>
);

const TrustStrip = () => (
    <section className="py-12 border-y border-white/5 bg-background-alt/50">
        <div className="max-w-7xl mx-auto px-6 overflow-hidden">
            <p className="text-center text-xs uppercase tracking-[0.2em] text-white/30 mb-8">Trusted by builders, brands, and institutions</p>
            <div className="flex justify-between items-center opacity-40 grayscale mix-blend-screen">
                {/* Logo Placeholders */}
                {['ALPHA', 'NEXUS', 'CORE', 'VECTOR', 'PRIME', 'OASIS'].map((name) => (
                    <div key={name} className="text-xl font-black font-mono tracking-tighter">{name}</div>
                ))}
            </div>
        </div>
    </section>
);

const ModuleCard = ({ title, desc, icon: Icon, to }) => (
    <Link to={to} className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 overflow-hidden hover:border-primary/50 transition-all duration-300">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <Icon className="w-8 h-8 text-primary mb-6 group-hover:scale-110 transition-transform" />
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-text-muted text-sm leading-relaxed mb-6">{desc}</p>
        <div className="flex items-center text-primary text-sm font-bold uppercase tracking-wide group-hover:translate-x-2 transition-transform">
            View Details <ArrowRight className="w-4 h-4 ml-2" />
        </div>
    </Link>
);

const Modules = () => (
    <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-12">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">The Ecosystem</h2>
            <Link to="/events" className="text-white/60 hover:text-white transition-colors hidden md:block">View all events →</Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ModuleCard
                to="/events/summit"
                icon={Globe}
                title="Main Summit"
                desc="Two days of high-signal keynotes and panels defining the future of decentralized infrastructure."
            />
            <ModuleCard
                to="/events/hack"
                icon={Code}
                title="Builder Hack"
                desc="48-hour sprint for elite devs. $100k+ in bounties. Ship code, not slide decks."
            />
            <ModuleCard
                to="/events/dealflow"
                icon={Coins}
                title="Dealflow Den"
                desc="Curated matchmaking for Series A+ founders and institutional capital allocators."
            />
            <ModuleCard
                to="/events/blockdown"
                icon={Zap}
                title="Blockdown Night"
                desc="The official festival night. Sonic landscapes, digital art, and pure networking energy."
            />
            <ModuleCard
                to="/events/workshops"
                icon={Layers}
                title="Workshops"
                desc="Deep-dive technical sessions and boardroom roundtables for hands-on mastery."
            />
        </div>
    </section>
);

const Stat = ({ value, label }) => (
    <div className="text-center">
        <div className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50">{value}</div>
        <div className="text-sm uppercase tracking-widest text-text-muted mt-2">{label}</div>
    </div>
);

const Stats = () => (
    <section className="py-20 bg-white/5 border-y border-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
            <Stat value="3,000+" label="Attendees" />
            <Stat value="120+" label="Speakers" />
            <Stat value="45" label="Countries" />
            <Stat value="$50M+" label="Deal Flow" />
        </div>
    </section>
);

const Themes = () => (
    <section className="py-24 max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">Core Themes</h2>
        <div className="flex flex-wrap justify-center gap-4">
            {['AI Agents', 'RWA', 'DePIN', 'Zero Knowledge', 'Institutional DeFi', 'Gaming Infrastructure', 'Regulation', 'UX/UI', 'Data Availability'].map((theme) => (
                <div key={theme} className="px-6 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-primary/30 transition-all cursor-default">
                    <span className="text-sm font-medium text-white/80">{theme}</span>
                </div>
            ))}
        </div>
    </section>
);

const Home = () => {
    return (
        <>
            <Hero />
            <TrustStrip />
            <Modules />
            <Stats />
            <Themes />

            {/* Speakers Teaser */}
            <section className="py-24 border-t border-white/5 bg-background-alt/30">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold mb-16">Voices of Authority</h2>
                    <div className="grid md:grid-cols-4 gap-8 mb-12">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-white/5">
                                <div className="absolute inset-0 bg-neutral-800 animate-pulse group-hover:animate-none transition-all" />
                                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                                    <p className="font-bold text-lg">Speaker Name</p>
                                    <p className="text-xs text-primary uppercase tracking-wider">Role / Company</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <Link to="/apply/speaker" className="inline-block px-8 py-4 border border-white/20 rounded-full text-sm font-bold tracking-wide hover:bg-white hover:text-black transition-all">
                        APPLY TO SPEAK
                    </Link>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 pointer-events-none" />
                <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">
                        Ankara becomes the signal.
                    </h2>
                    <p className="text-xl text-text-muted mb-12 max-w-2xl mx-auto">
                        Join the architects of the next era. Secure your place at Timestamp 1337.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4 max-w-lg mx-auto">
                        <Link to="/tickets" className="px-8 py-4 bg-white text-black font-bold text-sm rounded-full hover:scale-105 transition-transform shadow-lg">
                            GET TICKETS
                        </Link>
                        <Link to="/sponsors" className="px-8 py-4 border border-white/20 bg-black/50 backdrop-blur text-white font-bold text-sm rounded-full hover:bg-white/10 transition-colors">
                            SPONSOR
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
