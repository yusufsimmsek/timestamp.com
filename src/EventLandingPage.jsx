import { useState } from "react";

const speakers = [
    {
        name: "Ava Sinclair",
        title: "Chief Visionary, Lumen Labs",
        tag: "Opening Pulse Keynote",
        focus: "Adaptive Hospitality Systems",
        photo: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=600&q=80",
    },
    {
        name: "Dr. Orion Kade",
        title: "Head of AI Research, PulseWorks",
        tag: "Deep Signal Lab",
        focus: "Sentient Infrastructure",
        photo: "https://images.unsplash.com/photo-1544723795-432537f90319?auto=format&fit=crop&w=600&q=80",
    },
    {
        name: "Mira Quinn",
        title: "Experience Architect, NeonGrid",
        tag: "Design Futures Salon",
        focus: "Spatial Storycraft",
        photo: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=600&q=80",
    },
    {
        name: "Elias Rook",
        title: "Global Futurist, Beyond Labs",
        tag: "Capital Currents",
        focus: "Frontier Capital Flows",
        photo: "https://images.unsplash.com/photo-1544723795-432537f90319?auto=format&fit=crop&w=600&q=80",
    },
];

const highlights = [
    "Quantum-scale networking demos",
    "Immersive spatial computing lounge",
    "Private investor salon",
    "Curated culinary experience",
];

const stats = [
    { label: "Visionaries", value: "60+" },
    { label: "Countries", value: "24" },
    { label: "Investments Matched", value: "$180M" },
    { label: "Breakout Labs", value: "18" },
];

const experiences = [
    {
        title: "Immersion Hub",
        description: "Hands-on showcases featuring tactile AI tooling, volumetric capture, and haptic sandboxes.",
    },
    {
        title: "Signal Lounge",
        description: "Curated networking choreography with investor pairing, leadership circles, and founders-in-residence.",
    },
    {
        title: "After Dark",
        description: "Live audiovisual performance set against a skyline terrace with generative light sculpture.",
    },
];

const agenda = {
    day1: [
        { time: "09:00", title: "Opening Pulse", detail: "Keynote with Ava Sinclair" },
        { time: "11:00", title: "Signal Threads", detail: "Panels on adaptive intelligence" },
        { time: "14:00", title: "Velocity Labs", detail: "Hands-on prototyping sprints" },
        { time: "18:00", title: "Skyline Mixer", detail: "Private investor salon" },
    ],
    day2: [
        { time: "09:30", title: "Voltage Talks", detail: "Lightning stories from breakout founders" },
        { time: "12:00", title: "Sonic Lunch", detail: "Chef-led sensory dining" },
        { time: "15:00", title: "Capital Currents", detail: "Deal flow roundtables" },
        { time: "20:00", title: "Nova After Dark", detail: "Immersive closing performance" },
    ],
};

const sponsors = {
    titleSponsors: ["Aetherium", "Lumen Labs"],
    goldSponsors: ["PulseWorks", "CircuitSky", "NeonGrid"],
    partners: ["Fluxwell", "Halo Ventures", "Northwind Studio", "Oriel"],
};

const testimonials = [
    {
        quote:
            "Nova Pulse resets the bar. It's where future markets form before headlines catch on.",
        name: "Sasha Iden",
        role: "Managing Partner, Halo Ventures",
    },
    {
        quote:
            "Every conversation felt precision-matched. We closed two strategic alliances in 36 hours.",
        name: "Ravi Elan",
        role: "CEO, CircuitSky",
    },
    {
        quote:
            "The production quality was cinematic yet purposeful. Pure signal, zero noise.",
        name: "June Park",
        role: "Design Director, Fluxwell",
    },
];

const faq = [
    {
        question: "Who should attend?",
        answer:
            "Founders, investors, and product leaders shaping frontier technologies and premium experiences.",
    },
    {
        question: "Is there a dress code?",
        answer:
            "Future formal. Monochrome palettes with metallic accents are encouraged for evening events.",
    },
    {
        question: "Will sessions be recorded?",
        answer:
            "Keynotes and labs will be available on-demand to attendees 48 hours post-event.",
    },
    {
        question: "Are passes transferable?",
        answer:
            "Passes may be reassigned up to 10 days before the summit upon concierge approval.",
    },
];

const SectionShell = ({ id, title, children }) => (
    <section id={id} className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center gap-4 mb-10">
                <span className="h-px flex-1 bg-gradient-to-r from-white/40 to-transparent" />
                <p className="uppercase tracking-[0.3em] text-xs text-white/60">{title}</p>
                <span className="h-px flex-1 bg-gradient-to-l from-white/40 to-transparent" />
            </div>
            {children}
        </div>
    </section>
);

function EventLandingPage() {
    const [activeDay, setActiveDay] = useState("day1");
    const [openFaq, setOpenFaq] = useState(null);

    return (
        <div className="min-h-screen bg-[#020617] text-white">
            <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/50 to-transparent">
                <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
                    <img src="/logos/1337 (3).png" alt="Cankaya Blockchain" className="h-12 w-auto object-contain" />
                    <nav className="hidden md:flex gap-8 text-sm text-white/80">
                        {["About", "Agenda", "Speakers", "Venue", "FAQ"].map((item) => (
                            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors duration-300">
                                {item}
                            </a>
                        ))}
                    </nav>
                    <button className="px-4 py-2 text-sm rounded-full border border-white/20 bg-white/5 hover:bg-white/10 transition">
                        Request Invite
                    </button>
                </div>
            </header>

            <main>
                <section className="min-h-screen flex items-center relative overflow-hidden">
                    <style>{`
            @keyframes fadeUp {
              0% { opacity: 0; transform: translateY(15px); }
              100% { opacity: 1; transform: translateY(0); }
            }
            @keyframes fadeInScale {
              0% { opacity: 0; transform: scale(0.95); }
              100% { opacity: 1; transform: scale(1); }
            }
            .animate-fade-up {
              animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            }
            .animate-fade-in-scale {
              animation: fadeInScale 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            }
          `}</style>

                    {/* Background Video */}
                    <video
                        className="absolute inset-0 w-full h-full object-cover z-0"
                        src="/videos/ankara_video.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                    />

                    {/* Dark Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-[#020617] z-10" />

                    <div className="max-w-6xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 relative z-20">
                        <div className="space-y-10">
                            <p className="uppercase tracking-[0.4em] text-xs text-white/60 animate-fade-up" style={{ animationDelay: '100ms' }}>Ankara</p>
                            <h1 className="text-5xl md:text-7xl font-semibold -tracking-tight leading-tight drop-shadow-[0_1px_45px_rgba(255,255,255,0.12)] animate-fade-up" style={{ animationDelay: '200ms' }}>
                                Cankaya Blockchain Summit
                                <span className="block text-white/70 text-xl md:text-2xl mt-6 font-normal tracking-wide leading-relaxed">
                                    Converging visionaries building premium human-centered futures.
                                </span>
                            </h1>
                            <div className="flex flex-wrap gap-4">
                                <button className="px-8 py-4 rounded-full bg-white text-black text-sm font-semibold tracking-wide shadow-lg shadow-white/5 hover:scale-[1.04] hover:shadow-white/10 transition-all duration-300 animate-fade-in-scale opacity-0" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
                                    Secure Access
                                </button>
                                <button className="px-8 py-4 rounded-full border border-white/20 backdrop-blur-md text-sm shadow-lg shadow-white/5 hover:bg-white/10 hover:scale-[1.04] hover:shadow-white/10 transition-all duration-300 animate-fade-in-scale opacity-0" style={{ animationDelay: '550ms', animationFillMode: 'forwards' }}>
                                    View Dossier
                                </button>
                            </div>
                            <div className="grid grid-cols-2 gap-6">
                                {stats.map((stat, index) => (
                                    <div key={stat.label} className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-[inset_0_0_25px_rgba(255,255,255,0.04),0_0_30px_rgba(255,255,255,0.06)] animate-fade-up opacity-0" style={{ animationDelay: `${700 + index * 100}ms`, animationFillMode: 'forwards' }}>
                                        <div className="text-4xl font-semibold text-white">{stat.value}</div>
                                        <p className="text-white/60 text-sm mt-2">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-white/10 to-transparent blur-3xl" />
                            <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl p-10 space-y-8 shadow-[0_0_35px_rgba(255,255,255,0.07)]">
                                <p className="text-sm uppercase tracking-[0.4em] text-white/60">Highlights</p>
                                <ul className="space-y-6 text-white/80">
                                    {highlights.map((highlight) => (
                                        <li key={highlight} className="flex items-center gap-4 text-lg leading-relaxed">
                                            <span className="w-3 h-3 rounded-full bg-white/70 shadow-[0_0_10px_rgba(255,255,255,0.4)]" />
                                            {highlight}
                                        </li>
                                    ))}
                                </ul>
                                <div className="p-8 rounded-2xl bg-gradient-to-br from-white/20 to-transparent text-black shadow-inner">
                                    <p className="uppercase text-xs tracking-[0.4em] text-black/70">Concierge Access</p>
                                    <p className="text-3xl font-semibold mt-2">Limited to 800 seats</p>
                                    <p className="text-black/70 text-base mt-2">Curated approvals within 72 hours.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <SectionShell id="about" title="About">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight">
                                Where premium innovation signals resonate.
                            </h2>
                            <p className="text-lg text-white/70 leading-relaxed">
                                Cankaya Blockchain curates a precision experience for leaders architecting next-era intelligence,
                                hospitality, and culture. The summit balances cinematic staging with intimate salons, ensuring
                                every conversation has intent and follow-through.
                            </p>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-6">
                            {stats.map((stat) => (
                                <div key={`about-${stat.label}`} className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-[inset_0_0_20px_rgba(255,255,255,0.03)] hover:bg-white/10 transition-colors duration-300">
                                    <p className="text-5xl font-semibold text-white">{stat.value}</p>
                                    <p className="text-sm uppercase tracking-widest text-white/50 mt-3">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </SectionShell>

                <SectionShell id="metrics" title="Signal Metrics">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {stats.map((stat) => (
                            <div key={`metric-${stat.label}`} className="p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-2xl shadow-[inset_0_0_30px_rgba(255,255,255,0.02)] hover:bg-white/10 transition-all duration-500 group text-center">
                                <div className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">{stat.value}</div>
                                <p className="text-sm uppercase tracking-[0.2em] text-white/50 mt-4">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </SectionShell>

                <SectionShell id="speakers" title="Speakers">
                    <div className="grid sm:grid-cols-2 gap-6">
                        {speakers.map((speaker, index) => (
                            <div
                                key={speaker.name}
                                className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-b from-white/10 via-[#050b1c]/60 to-[#01030a] backdrop-blur-xl shadow-[0_20px_60px_rgba(2,6,23,0.8)]"
                            >
                                <div className="absolute inset-0 opacity-60">
                                    <div
                                        className={`absolute -top-20 right-0 h-64 w-64 rounded-full blur-3xl ${[
                                            "bg-gradient-to-br from-purple-500/50 via-transparent to-transparent",
                                            "bg-gradient-to-br from-cyan-400/40 via-transparent to-transparent",
                                            "bg-gradient-to-br from-rose-400/40 via-transparent to-transparent",
                                            "bg-gradient-to-br from-amber-300/30 via-transparent to-transparent",
                                        ][index % 4]
                                            }`}
                                    />
                                </div>

                                <div className="relative flex flex-col h-full">
                                    <div className="flex items-center justify-between px-6 py-4 text-xs uppercase tracking-[0.4em] text-white/60">
                                        <span className="flex items-center gap-2">
                                            <span className="inline-flex h-2 w-2 rounded-full bg-white animate-pulse" />
                                            Cankaya Speaker
                                        </span>
                                        <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-[11px] tracking-[0.3em]">
                                            Elite
                                        </span>
                                    </div>

                                    <div className="px-6">
                                        <div className="rounded-3xl overflow-hidden border border-white/5 shadow-inner shadow-black/60">
                                            <img
                                                src={speaker.photo}
                                                alt={speaker.name}
                                                className="h-64 w-full object-cover transition duration-700 ease-out hover:scale-105"
                                            />
                                        </div>
                                    </div>

                                    <div className="px-6 py-6 space-y-4">
                                        <div>
                                            <p className="text-sm uppercase tracking-[0.35em] text-white/50">{speaker.tag}</p>
                                            <h3 className="text-2xl font-semibold mt-2">{speaker.name}</h3>
                                            <p className="text-white/70 text-sm mt-1">{speaker.title}</p>
                                        </div>

                                        <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/70 flex items-center justify-between">
                                            <div>
                                                <p className="uppercase text-[10px] tracking-[0.4em] text-white/40">Focus</p>
                                                <p className="text-white/80">{speaker.focus}</p>
                                            </div>
                                            <button className="px-4 py-2 text-xs tracking-[0.3em] uppercase rounded-full border border-white/30 hover:bg-white hover:text-black transition">
                                                Brief
                                            </button>
                                        </div>
                                    </div>

                                    <div className="mt-auto border-t border-white/10 px-6 py-4 flex items-center justify-between text-xs text-white/50">
                                        <div className="flex items-center gap-2">
                                            <span className="h-2 w-2 rounded-full bg-emerald-400" />
                                            Onsite Presence
                                        </div>
                                        <a href="#" className="text-white/80 hover:text-white tracking-[0.3em] uppercase">
                                            Profile →
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </SectionShell>

                <SectionShell id="experience" title="Experience">
                    <div className="grid gap-6 md:grid-cols-3">
                        {experiences.map((experience, index) => (
                            <div
                                key={experience.title}
                                className="relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-white/10 via-[#070e1f]/60 to-[#04070f] p-8 backdrop-blur-xl shadow-[0_25px_60px_rgba(0,0,0,0.45)] transition duration-500 hover:-translate-y-2"
                            >
                                <div
                                    className={`absolute inset-0 opacity-70 blur-3xl ${[
                                        "bg-gradient-to-tr from-cyan-400/20 via-transparent to-transparent",
                                        "bg-gradient-to-tr from-purple-400/20 via-transparent to-transparent",
                                        "bg-gradient-to-tr from-rose-400/20 via-transparent to-transparent",
                                    ][index % 3]
                                        }`}
                                />
                                <div className="relative space-y-6">
                                    <div className="flex items-center justify-between text-xs uppercase tracking-[0.4em] text-white/60">
                                        <span className="flex items-center gap-2">
                                            <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
                                            Exclusive
                                        </span>
                                        <span className="px-3 py-1 rounded-full border border-white/20 text-[10px] tracking-[0.5em]">
                                            Tier {index + 1}
                                        </span>
                                    </div>
                                    <div>
                                        <h3 className="text-3xl font-semibold">{experience.title}</h3>
                                        <p className="text-white/65 text-base leading-relaxed mt-3">{experience.description}</p>
                                    </div>
                                    <div className="flex items-center justify-between border-t border-white/10 pt-4">
                                        <div className="text-xs uppercase tracking-[0.4em] text-white/40">Concierge slot</div>
                                        <button className="px-4 py-2 rounded-full border border-white/30 text-xs tracking-[0.4em] hover:bg-white hover:text-black transition">
                                            Hold
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </SectionShell>

                <SectionShell id="agenda" title="Agenda">
                    <div className="rounded-[36px] border border-white/10 bg-gradient-to-b from-white/10 via-[#070d1d]/70 to-[#03060e] p-8 backdrop-blur-2xl shadow-[0_30px_80px_rgba(1,3,8,0.8)]">
                        <div className="flex flex-wrap gap-4 mb-10">
                            {["day1", "day2"].map((day) => (
                                <button
                                    key={day}
                                    onClick={() => setActiveDay(day)}
                                    className={`relative px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${activeDay === day
                                        ? "text-black"
                                        : "text-white/60 hover:text-white"
                                        }`}
                                >
                                    <span
                                        className={`absolute inset-0 rounded-full ${activeDay === day
                                            ? "bg-white shadow-[0_10px_30px_rgba(255,255,255,0.3)]"
                                            : "border border-white/20 bg-white/5"
                                            }`}
                                    />
                                    <span className="relative">{day === "day1" ? "Day 1" : "Day 2"}</span>
                                </button>
                            ))}
                        </div>
                        <div className="space-y-4">
                            {agenda[activeDay].map((slot) => (
                                <div
                                    key={`${activeDay}-${slot.time}`}
                                    className="group flex flex-col md:flex-row md:items-center md:justify-between rounded-[24px] border border-white/10 bg-gradient-to-r from-[#0c1324] to-[#050913] px-6 py-5 shadow-[inset_0_0_40px_rgba(255,255,255,0.02)] transition duration-500 hover:border-white/30"
                                >
                                    <div className="flex items-center gap-6">
                                        <div className="flex flex-col text-xs uppercase tracking-[0.4em] text-white/50">
                                            <span>{slot.time}</span>
                                        </div>
                                        <div>
                                            <p className="text-xl font-semibold">{slot.title}</p>
                                            <p className="text-white/60 text-sm">{slot.detail}</p>
                                        </div>
                                    </div>
                                    <button className="mt-4 md:mt-0 px-5 py-2 rounded-full border border-white/20 text-xs tracking-[0.4em] uppercase text-white/80 transition group-hover:bg-white group-hover:text-black group-hover:border-transparent">
                                        Reserve
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </SectionShell>

                <SectionShell id="sponsors" title="Sponsors">
                    <div className="space-y-8">
                        {Object.entries(sponsors).map(([tier, names]) => (
                            <div
                                key={tier}
                                className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-white/10 via-[#050b12]/60 to-[#02040a] p-8 backdrop-blur-2xl shadow-[0_35px_70px_rgba(0,0,0,0.55)]"
                            >
                                <div className="absolute inset-0 pointer-events-none">
                                    <div className="absolute -top-10 left-10 h-48 w-48 rounded-full bg-white/10 blur-3xl opacity-70" />
                                    <div className="absolute -bottom-16 right-16 h-48 w-48 rounded-full bg-purple-500/10 blur-[120px]" />
                                </div>
                                <div className="relative space-y-4">
                                    <div className="flex items-center justify-between text-xs uppercase tracking-[0.5em] text-white/50">
                                        <p>{tier.replace(/([A-Z])/g, " $1").trim()}</p>
                                        <span className="px-4 py-1 rounded-full border border-white/20 text-[10px] tracking-[0.6em]">
                                            Nova
                                        </span>
                                    </div>
                                    <div className="flex flex-wrap gap-6 text-2xl font-light text-white/85 tracking-[0.3em]">
                                        {names.map((name) => (
                                            <span key={name} className="hover:text-white transition">
                                                {name}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="pt-4 border-t border-white/10 text-xs uppercase tracking-[0.4em] text-white/40">
                                        Concierge liaison available 24/7
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </SectionShell>

                <SectionShell id="venue" title="Venue">
                    <div className="grid lg:grid-cols-2 gap-10">
                        <div className="space-y-4">
                            <h3 className="text-3xl font-light">Apex Atrium, Hudson Yards</h3>
                            <p className="text-white/70">
                                Multi-level pavilion with panoramic city lines, private terraces, and an integrated media ceiling
                                engineered for immersive content.
                            </p>
                            <div className="flex flex-wrap gap-4 text-sm text-white/60">
                                <span className="px-4 py-2 rounded-full border border-white/10">Private chauffeur entries</span>
                                <span className="px-4 py-2 rounded-full border border-white/10">On-site concierge</span>
                                <span className="px-4 py-2 rounded-full border border-white/10">Executive suites</span>
                            </div>
                        </div>
                        <div className="relative rounded-[2rem] overflow-hidden border border-white/10">
                            <img
                                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1400&q=80"
                                alt="Venue"
                                className="h-80 w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#020617]/80 to-transparent" />
                            <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-white/10 backdrop-blur">
                                <p className="text-sm uppercase tracking-[0.4em] text-white/70">Coordinates</p>
                                <p className="text-xl font-semibold">40.7531° N / 74.0018° W</p>
                            </div>
                        </div>
                    </div>
                </SectionShell>

                <SectionShell id="testimonials" title="Testimonials">
                    <div className="grid md:grid-cols-3 gap-6">
                        {testimonials.map((item) => (
                            <div key={item.name} className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur">
                                <p className="text-white/80 leading-relaxed">“{item.quote}”</p>
                                <div className="mt-6 text-sm text-white/60">
                                    <p className="text-white">{item.name}</p>
                                    <p>{item.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </SectionShell>

                <SectionShell id="newsletter" title="Stay Informed">
                    <div className="rounded-[2rem] border border-white/10 bg-gradient-to-r from-white/10 to-transparent p-10 flex flex-col lg:flex-row items-center gap-8">
                        <div>
                            <h3 className="text-3xl font-light">Receive the Nova Signal</h3>
                            <p className="text-white/60 mt-2">
                                Quarterly intelligence briefings, curated dossiers, and concierge alerts.
                            </p>
                        </div>
                        <form className="flex w-full lg:w-auto flex-col sm:flex-row gap-4">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="flex-1 rounded-full bg-black/40 border border-white/20 px-6 py-3 placeholder:text-white/40 focus:outline-none"
                            />
                            <button type="submit" className="px-8 py-3 rounded-full bg-white text-black text-sm font-semibold">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </SectionShell>

                <SectionShell id="faq" title="FAQ">
                    <div className="space-y-4">
                        {faq.map((item, index) => (
                            <div key={item.question} className="rounded-2xl border border-white/10 bg-white/5">
                                <button
                                    className="w-full flex items-center justify-between px-6 py-4 text-left"
                                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                >
                                    <div>
                                        <p className="text-lg font-medium">{item.question}</p>
                                        {openFaq === index && <p className="text-white/70 text-sm mt-2">{item.answer}</p>}
                                    </div>
                                    <span className="text-white/60">{openFaq === index ? "−" : "+"}</span>
                                </button>
                            </div>
                        ))}
                    </div>
                </SectionShell>
            </main>

            <footer className="relative mt-24 border-t border-white/10 bg-gradient-to-b from-transparent to-black/40">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-white/10 blur-[160px]" />
                </div>
                <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col gap-12 text-sm text-white/60">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                        <div>
                            <img src="/logos/1337 (3).png" alt="Cankaya Blockchain" className="h-16 w-auto object-contain opacity-60" />
                            <p className="text-2xl font-light text-white mt-2">Signals engineered for the few.</p>
                        </div>
                        <button className="self-start md:self-auto px-8 py-3 rounded-full border border-white/20 text-xs tracking-[0.4em] uppercase hover:bg-white hover:text-black transition">
                            Request dossier
                        </button>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-xs uppercase tracking-[0.3em]">
                        <p>© {new Date().getFullYear()} Cankaya Blockchain. All rights reserved.</p>
                        <div className="flex flex-wrap gap-6">
                            {["Privacy", "Terms", "Contact"].map((item) => (
                                <a key={item} href="#" className="hover:text-white">
                                    {item}
                                </a>
                            ))}
                            <div className="flex flex-col gap-2 mt-4 text-xs text-white/50">
                                <p>Addr: Ankara</p>
                                <p>Phone: +90-506-050-1029</p>
                                <p>Email: info@cankayablockchain.com</p>
                                <p>Web: cankayablockchain.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default EventLandingPage;
