import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Download, ExternalLink } from 'lucide-react';

const NavLink = ({ to, children, dropdown }) => {
    if (dropdown) {
        return (
            <div className="relative group h-full flex items-center">
                <button className="flex items-center gap-1 text-sm font-medium text-white/80 hover:text-primary transition-colors py-4">
                    {children}
                    <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute top-full left-0 w-56 bg-background-alt border border-white/10 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 overflow-hidden z-50">
                    {dropdown.map((item) => (
                        <Link
                            key={item.label}
                            to={item.to}
                            className="block px-4 py-3 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            </div>
        );
    }
    return (
        <Link to={to} className="text-sm font-medium text-white/80 hover:text-primary transition-colors">
            {children}
        </Link>
    );
};

const Layout = ({ children }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
        setMobileMenuOpen(false);
    }, [location.pathname]);

    return (
        <div className="min-h-screen bg-background text-text font-sans selection:bg-primary/30 relative">
            {/* Background Pattern */}
            <div className="fixed inset-0 bg-scanline opacity-[0.03] z-50 pointer-events-none" />
            <div className="fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-0 pointer-events-none" />
            {/* Ankara Skyline Hint (Subtle) */}
            <div className="fixed bottom-0 left-0 right-0 h-64 opacity-[0.05] pointer-events-none bg-[url('https://images.unsplash.com/photo-1594143286026-6d63499126d4?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-bottom blend-overlay z-0" />

            {/* Top Ribbon */}
            <div className="bg-gradient-to-r from-secondary/20 to-primary/20 backdrop-blur-sm border-b border-white/5">
                <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between text-xs md:text-sm">
                    <div className="flex items-center gap-2 text-white/90">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        <span className="font-semibold tracking-wide">TIMESTAMP 1337 REPORT</span>
                        <span className="hidden sm:inline text-white/60">— Download the insider recap</span>
                    </div>
                    <button className="flex items-center gap-2 text-primary hover:text-white transition-colors">
                        <Download className="w-3 h-3" />
                        <span>Download PDF</span>
                    </button>
                </div>
            </div>

            {/* Navbar */}
            <nav className={`sticky top-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-lg border-b border-white/10 py-3' : 'bg-transparent py-5'}`}>
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2 z-50">
                        {/* Logo Placeholder */}
                        <div className="text-2xl font-bold tracking-tighter text-white">
                            TIMESTAMP<span className="text-primary">1337</span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center gap-8">
                        <NavLink to="/about">About</NavLink>
                        <NavLink
                            to="/events"
                            dropdown={[
                                { label: 'Main Summit', to: '/events/summit' },
                                { label: 'Builder Hack', to: '/events/hack' },
                                { label: 'Dealflow Den', to: '/events/dealflow' },
                                { label: 'Blockdown Night', to: '/events/blockdown' },
                                { label: 'Workshops', to: '/events/workshops' },
                            ]}
                        >
                            Events
                        </NavLink>
                        <NavLink to="/agenda">Agenda</NavLink>
                        <NavLink to="/sponsors">Sponsors</NavLink>
                        <NavLink
                            to="/apply"
                            dropdown={[
                                { label: 'Apply as Speaker', to: '/apply/speaker' },
                                { label: 'Sponsorship Inquiry', to: '/apply/media' },
                                { label: 'Media Application', to: '/apply/media' },
                                { label: 'Pitch to Investors', to: '/apply/pitch' },
                            ]}
                        >
                            Apply
                        </NavLink>
                        <NavLink to="/gallery">Gallery</NavLink>
                    </div>

                    <div className="hidden lg:flex items-center gap-4">
                        <Link to="/tickets" className="px-6 py-2.5 bg-primary text-background font-bold text-sm rounded-full hover:bg-white hover:scale-105 transition-all shadow-[0_0_20px_rgba(49,230,227,0.3)]">
                            BUY TICKETS
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button className="lg:hidden z-50 p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className={`fixed inset-0 bg-background/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-300 lg:hidden ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <Link to="/" className="text-2xl font-medium">Home</Link>
                    <Link to="/about" className="text-2xl font-medium">About</Link>
                    <Link to="/events" className="text-2xl font-medium">Events</Link>
                    <Link to="/agenda" className="text-2xl font-medium">Agenda</Link>
                    <Link to="/tickets" className="px-8 py-3 bg-primary text-background font-bold text-lg rounded-full">BUY TICKETS</Link>
                </div>
            </nav>

            {children}

            {/* Footer */}
            <footer className="bg-background-alt border-t border-white/5 pt-20 pb-10 mt-32 relative overflow-hidden">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/10 blur-[120px] rounded-full pointer-events-none" />
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid md:grid-cols-4 gap-12 mb-16">
                        <div className="col-span-1 md:col-span-2 space-y-6">
                            <div className="text-3xl font-bold tracking-tighter text-white">
                                TIMESTAMP<span className="text-primary">1337</span>
                            </div>
                            <p className="text-text-muted max-w-md">
                                Ankara becomes the signal. The premier convergence of Web3 and AI in the heart of Eurasia.
                                Where code meets capital.
                            </p>
                            <div className="flex gap-4">
                                {/* Socials Placeholders */}
                                {[1, 2, 3, 4, 5].map(i => (
                                    <div key={i} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer">
                                        <ExternalLink className="w-4 h-4" />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h4 className="font-semibold text-white mb-6">Explore</h4>
                            <ul className="space-y-4 text-text-muted text-sm">
                                <li><Link to="/about" className="hover:text-primary transition">About</Link></li>
                                <li><Link to="/events" className="hover:text-primary transition">Events</Link></li>
                                <li><Link to="/agenda" className="hover:text-primary transition">Agenda</Link></li>
                                <li><Link to="/sponsors" className="hover:text-primary transition">Sponsors</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-white mb-6">Legal</h4>
                            <ul className="space-y-4 text-text-muted text-sm">
                                <li><Link to="#" className="hover:text-primary transition">Privacy Policy</Link></li>
                                <li><Link to="#" className="hover:text-primary transition">Terms of Service</Link></li>
                                <li><Link to="/contact" className="hover:text-primary transition">Contact Us</Link></li>
                                <li><Link to="/brand" className="hover:text-primary transition">Brand Kit</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-text-muted">
                        <p>© 2025 Timestamp 1337. All rights reserved.</p>
                        <p className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-green-500"></span>
                            Systems Operational
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
