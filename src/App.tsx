import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { Menu, X, ArrowUpRight, MapPin, Phone, Mail, ArrowRight, Maximize2, Wind, ShieldCheck, Zap, CheckCircle2 } from 'lucide-react';

// Shared Components
const Marquee = ({ text }: { text: string }) => (
  <div className="overflow-hidden whitespace-nowrap border-y border-white/5 py-10 bg-white/[0.02] text-white/70 backdrop-blur-sm">
    <motion.div 
      initial={{ x: 0 }}
      animate={{ x: "-50%" }}
      transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
      className="inline-block"
    >
      <span className="text-2xl md:text-4xl font-luxury italic font-light tracking-[0.25em] mx-16 uppercase">{text}</span>
      <span className="text-2xl md:text-4xl font-luxury italic font-light tracking-[0.25em] mx-16 uppercase">{text}</span>
      <span className="text-2xl md:text-4xl font-luxury italic font-light tracking-[0.25em] mx-16 uppercase">{text}</span>
      <span className="text-2xl md:text-4xl font-luxury italic font-light tracking-[0.25em] mx-16 uppercase">{text}</span>
    </motion.div>
  </div>
);

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen bg-bg text-fg selection:bg-accent selection:text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 mix-blend-difference px-6 py-8 flex justify-between items-center">
        <Link to="/" className="text-xl font-black tracking-tighter">
          MELLO
        </Link>
        
        <div className="hidden md:flex gap-12 text-xs font-bold tracking-widest uppercase">
          <Link to="/residences" className="hover:text-white/50 transition-colors">Residences</Link>
          <Link to="/amenities" className="hover:text-white/50 transition-colors">Amenities</Link>
          <Link to="/location" className="hover:text-white/50 transition-colors">Location</Link>
          <Link to="/contact" className="hover:text-white/50 transition-colors">Inquire</Link>
        </div>

        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 hover:bg-white/10 rounded-full transition-colors"
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-bg z-40 flex flex-col items-center justify-center gap-8 text-4xl font-black tracking-tighter uppercase"
          >
            <Link to="/residences">Residences</Link>
            <Link to="/amenities">Amenities</Link>
            <Link to="/location">Location</Link>
            <Link to="/contact">Inquire</Link>
          </motion.div>
        )}
      </AnimatePresence>

      <main>{children}</main>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-xs font-bold tracking-[0.5em] uppercase">MELLO</div>
          <div className="text-[10px] font-mono text-white/20 uppercase tracking-widest">
            © 2026 MELLO DEVELOPMENT GROUP. ALL RIGHTS RESERVED.
          </div>
          <div className="flex gap-8 text-[10px] font-mono uppercase tracking-widest text-white/40">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Legal Notice</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Pages
const Home = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  return (
    <>
      <section className="relative h-screen flex flex-col justify-center overflow-hidden">
        <motion.div style={{ scale }} className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/luxury-skyscraper/1920/1080?grayscale" 
            alt="Mello Hero" 
            className="w-full h-full object-cover opacity-60"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bg/20 via-transparent to-bg" />
        </motion.div>

        <motion.div style={{ opacity }} className="relative z-10 px-6 max-w-7xl w-full mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
            className="text-[18vw] leading-[0.8] font-black tracking-tighter uppercase"
          >
            MELLO <br />
            <span className="text-stroke">RESIDENCE</span>
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-12 flex flex-col md:flex-row gap-12 items-start md:items-center justify-between"
          >
            <p className="max-w-md text-xl text-white font-medium leading-tight drop-shadow-lg">
              A new standard of architectural elegance. 
              Mello Residences offers a sanctuary of light and space in the urban heart.
            </p>
            <Link to="/residences" className="group flex items-center gap-4 text-xs font-bold tracking-widest uppercase">
              Explore the sanctuary
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <Marquee text="Mello • Architecture • Luxury • Precision • Privacy • Landmark • " />

      <section className="px-6 py-32 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-white/40 mb-8">The Concept</h2>
          <h3 className="text-6xl font-black tracking-tighter uppercase mb-8">The Essence <br /> of Mello</h3>
          <p className="text-xl text-white/60 leading-relaxed mb-8">
            Designed by world-renowned architects, Mello stands as a testament to modern minimalism. 
            The name reflects our philosophy: a mellow, serene environment amidst the vibrant city pulse.
          </p>
          <Link to="/amenities" className="text-accent hover:underline underline-offset-8 font-bold uppercase tracking-widest text-xs">
            Discover Amenities
          </Link>
        </motion.div>
        <div className="relative aspect-[3/4] overflow-hidden">
          <img 
            src="https://picsum.photos/seed/architectural-minimalism/900/1200?grayscale" 
            alt="Architecture" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>
    </>
  );
};

const Residences = () => {
  const units = [
    { id: 1, title: "PENTHOUSE A", category: "4 Bedrooms / 450 sqm", floor: "Level 42", image: "https://picsum.photos/seed/luxury-penthouse-interior/1200/800" },
    { id: 2, title: "SKY VILLA", category: "3 Bedrooms / 320 sqm", floor: "Level 38", image: "https://picsum.photos/seed/modern-luxury-bedroom/1200/800" },
    { id: 3, title: "GARDEN SUITE", category: "2 Bedrooms / 180 sqm", floor: "Level 02", image: "https://picsum.photos/seed/luxury-garden-terrace/1200/800" }
  ];

  return (
    <section className="px-6 py-32 max-w-7xl mx-auto">
      <h2 className="text-7xl md:text-8xl lg:text-[10vw] font-black tracking-tighter uppercase mb-24 leading-[0.9]">The <br /> Residences</h2>
      <div className="flex flex-col gap-32">
        {units.map((unit) => (
          <motion.div 
            key={unit.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative border-b border-white/10 pb-12 last:border-0"
          >
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-8">
              <div className="flex-1">
                <span className="text-xs font-mono text-white/50 mb-4 block">{unit.floor} — {unit.category}</span>
                <h3 className="text-5xl md:text-8xl font-black tracking-tighter group-hover:italic transition-all duration-500">{unit.title}</h3>
              </div>
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors duration-300">
                <Maximize2 size={20} />
              </div>
            </div>
            <div className="overflow-hidden aspect-[16/9] relative">
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                src={unit.image} 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Amenities = () => {
  const amenities = [
    { title: "Sky Pool", desc: "A 25-meter infinity pool overlooking the city skyline.", icon: <Wind /> },
    { title: "Private Gym", desc: "State-of-the-art equipment with personal training suites.", icon: <Zap /> },
    { title: "24/7 Concierge", desc: "Dedicated staff to manage every aspect of your lifestyle.", icon: <ShieldCheck /> },
    { title: "Wine Cellar", desc: "Climate-controlled storage and private tasting room.", icon: <ArrowRight /> }
  ];

  return (
    <section className="px-6 py-32 max-w-7xl mx-auto">
      <h2 className="text-7xl md:text-8xl lg:text-[10vw] font-black tracking-tighter uppercase mb-24 leading-[0.9]">Amenities</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {amenities.map((amenity, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white/5 p-12 border border-white/10 group hover:bg-white hover:text-black transition-all duration-500"
          >
            <div className="mb-8 opacity-50 group-hover:opacity-100 transition-opacity">{amenity.icon}</div>
            <h3 className="text-4xl font-black tracking-tighter uppercase mb-4">{amenity.title}</h3>
            <p className="text-white/60 group-hover:text-black/60 transition-colors">{amenity.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Location = () => (
  <section className="px-6 py-32 max-w-7xl mx-auto">
    <h2 className="text-7xl md:text-8xl lg:text-[10vw] font-black tracking-tighter uppercase mb-24 leading-[0.9]">Location</h2>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div className="relative aspect-video bg-white/5 overflow-hidden">
        <img src="https://picsum.photos/seed/metropolis-cityscape/1200/800?grayscale" className="w-full h-full object-cover grayscale opacity-50" referrerPolicy="no-referrer" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-4 h-4 bg-accent rounded-full animate-ping" />
          <div className="absolute w-2 h-2 bg-accent rounded-full" />
        </div>
      </div>
      <div>
        <h3 className="text-6xl font-black tracking-tighter uppercase mb-8">The Heart <br /> of the City</h3>
        <p className="text-xl text-white/60 leading-relaxed mb-8">
          Situated in the most prestigious district, Mello offers immediate access to world-class dining, culture, and business hubs.
        </p>
        <div className="flex items-center gap-4 text-white/80">
          <MapPin className="text-accent" />
          <span className="font-mono text-sm tracking-widest uppercase">12 PRESTIGE BLVD, CENTRAL DISTRICT</span>
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const res = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section className="px-6 py-32 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        <div className="flex flex-col justify-between py-4">
          <div>
            <h2 className="text-7xl md:text-8xl lg:text-[8vw] font-black tracking-tighter uppercase mb-12 leading-[0.9]">Inquire</h2>
            <p className="text-xl text-white/60 mb-12 max-w-md">Experience the vision in person. Our sales gallery is open daily by appointment only.</p>
          </div>
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <Phone className="text-accent" />
              <span className="font-mono text-sm">+1 (234) 567-890</span>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="text-accent" />
              <span className="font-mono text-sm">sales@mello-residence.com</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white/5 p-12 border border-white/10">
          {status === 'success' ? (
            <div className="h-full flex flex-col items-center justify-center text-center">
              <CheckCircle2 size={64} className="text-accent mb-6" />
              <h3 className="text-3xl font-black uppercase tracking-tighter mb-4">Thank You</h3>
              <p className="text-white/60">Your inquiry has been received. Our team will contact you shortly.</p>
              <button onClick={() => setStatus('idle')} className="mt-8 text-xs font-bold uppercase tracking-widest underline underline-offset-8">Send another message</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase text-white/30">Full Name</label>
                <input 
                  required
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-transparent border-b border-white/20 py-4 focus:border-accent outline-none transition-colors" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase text-white/30">Email Address</label>
                <input 
                  required
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-transparent border-b border-white/20 py-4 focus:border-accent outline-none transition-colors" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase text-white/30">Phone Number</label>
                <input 
                  type="tel" 
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-transparent border-b border-white/20 py-4 focus:border-accent outline-none transition-colors" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase text-white/30">Message</label>
                <textarea 
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-transparent border-b border-white/20 py-4 focus:border-accent outline-none transition-colors resize-none" 
                />
              </div>
              <button 
                disabled={status === 'submitting'}
                className="w-full bg-white text-black py-6 font-black uppercase tracking-widest hover:bg-accent hover:text-white transition-all disabled:opacity-50"
              >
                {status === 'submitting' ? 'Sending...' : 'Submit Inquiry'}
              </button>
              {status === 'error' && <p className="text-accent text-xs font-mono">Something went wrong. Please try again.</p>}
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/residences" element={<Residences />} />
          <Route path="/amenities" element={<Amenities />} />
          <Route path="/location" element={<Location />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}
