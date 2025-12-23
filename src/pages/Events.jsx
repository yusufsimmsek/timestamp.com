import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Code, Coins, Zap, Layers, ArrowRight } from 'lucide-react';

const EventModule = ({ title, desc, audience, icon: Icon, to, color }) => (
    <Link to={to} className="group flex flex-col md:flex-row gap-8 items-start md:items-center p-8 md:p-12 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/[0.07] transition-all duration-300">
        <div className={`p-6 rounded-2xl bg-gradient-to-br ${color} shrink-0`}>
            <Icon className="w-10 h-10 text-white" />
        </div>
        <div className="flex-1 space-y-4">
            <h3 className="text-3xl font-bold">{title}</h3>
            <p className="text-text-muted text-lg">{desc}</p>
            <div className="flex items-center gap-2 text-sm uppercase tracking-wide opacity-60">
                <span className="font-semibold text-white">Target Audience:</span>
                <span>{audience}</span>
            </div>
        </div>
        <div className="shrink-0 self-center">
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                <ArrowRight className="w-5 h-5" />
            </div>
        </div>
    </Link>
);

const Events = () => {
    return (
        <div className="pt-32 min-h-screen max-w-7xl mx-auto px-6 pb-24">
            <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-up">
                <h1 className="text-5xl md:text-7xl font-bold mb-6">The Ecosystem</h1>
                <p className="text-xl text-text-muted">
                    Timestamp 1337 isn't just a conference. It's a modular convergence of five distinct high-signal events.
                </p>
            </div>

            <div className="space-y-6 animate-fade-up" style={{ animationDelay: '0.2s' }}>
                <EventModule
                    to="/events/summit"
                    icon={Globe}
                    title="Main Summit"
                    desc="Two days of keynote excellence. The center of gravity for Web3 discourse in Eurasia."
                    audience="Founders, Executives, Policymakers"
                    color="from-blue-500/20 to-cyan-500/20"
                />
                <EventModule
                    to="/events/hack"
                    icon={Code}
                    title="Builder Hack"
                    desc="48-hour competitive sprint. Ship products, win bounties, get funded."
                    audience="Developers, Designers, Engineers"
                    color="from-purple-500/20 to-pink-500/20"
                />
                <EventModule
                    to="/events/dealflow"
                    icon={Coins}
                    title="Dealflow Den"
                    desc="Private capital matching. Direct meetings between allocators and vetted startups."
                    audience="VCs, Angel Investors, Series A+ Founders"
                    color="from-amber-500/20 to-orange-500/20"
                />
                <EventModule
                    to="/events/blockdown"
                    icon={Zap}
                    title="Blockdown Night"
                    desc="The cultural heartbeat. Music, art, and unfiltered networking after dark."
                    audience="All Attendees (VIP Access Available)"
                    color="from-green-500/20 to-emerald-500/20"
                />
                <EventModule
                    to="/events/workshops"
                    icon={Layers}
                    title="Workshops & Roundtables"
                    desc="Deep technical dives and closed-door regulatory discussions."
                    audience="Specialists, Legal Counsel, Architects"
                    color="from-red-500/20 to-rose-500/20"
                />
            </div>
        </div>
    );
};

export default Events;
