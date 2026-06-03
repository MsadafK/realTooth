import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS } from '../../data';

const Logo = () => (
  <a href="#home" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex items-center justify-center rounded-full"
      style={{ width: 38, height: 38, background: 'var(--navy)', flexShrink: 0 }}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold-2)" strokeWidth="1.5">
        <path d="M9 3C7.3 3 6 4.3 6 6c0 1.5.7 2.8.7 4.2C6.7 12.5 7.7 15 9.5 15s2.8-2.5 2.8-4.8c0-1.4.7-2.7.7-4.2C13 4.3 11.7 3 10 3H9z" strokeLinecap="round"/>
        <path d="M14.5 3c-1.7 0-3 1.3-3 3 0 1.5.7 2.8.7 4.2 0 2.3 1 4.8 2.8 4.8s2.8-2.5 2.8-4.8c0-1.4.7-2.7.7-4.2C18.5 4.3 17.2 3 15.5 3h-1z" strokeLinecap="round"/>
        <path d="M10 15c0 2.2.8 6 2 6s2-3.8 2-6" strokeLinecap="round"/>
      </svg>
    </motion.div>
    <span className="display-font" style={{ fontSize: '20px', color: 'var(--navy)', fontWeight: 400 }}>
      Realtooth
    </span>
  </a>
);

export default function Navbar({ onBook }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 100,
          padding: scrolled ? '12px 48px' : '22px 48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          transition: 'all 0.4s cubic-bezier(0.25,0.46,0.45,0.94)',
          background: scrolled ? 'rgba(246,241,233,0.93)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          boxShadow: scrolled ? '0 2px 20px rgba(12,27,46,0.07)' : 'none',
        }}
      >
        <Logo />

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8" style={{ listStyle: 'none' }}>
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium transition-colors duration-200"
                style={{
                  color: 'var(--navy)',
                  opacity: 0.65,
                  textDecoration: 'none',
                  letterSpacing: '0.02em',
                }}
                onMouseEnter={e => e.target.style.opacity = '1'}
                onMouseLeave={e => e.target.style.opacity = '0.65'}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <motion.button
              onClick={onBook}
              whileHover={{ scale: 1.02, background: 'var(--teal)' }}
              whileTap={{ scale: 0.97 }}
              style={{
                background: 'var(--navy)',
                color: 'var(--cream)',
                border: 'none',
                borderRadius: '100px',
                padding: '10px 24px',
                fontSize: '14px',
                fontWeight: 500,
                fontFamily: 'Outfit, sans-serif',
                letterSpacing: '0.03em',
                cursor: 'pointer',
                transition: 'background 0.3s',
              }}
            >
              Book Appointment
            </motion.button>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-1 cursor-pointer border-none bg-transparent"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          {[0, 1, 2].map(i => (
            <span key={i} className="block h-[1.5px] w-6" style={{ background: 'var(--navy)' }} />
          ))}
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              style={{
                position: 'fixed', inset: 0,
                background: 'rgba(12,27,46,0.5)',
                backdropFilter: 'blur(4px)',
                zIndex: 200,
              }}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              style={{
                position: 'fixed',
                top: 0, right: 0,
                width: 'min(340px, 90vw)',
                height: '100vh',
                background: 'var(--navy)',
                zIndex: 300,
                padding: '72px 40px 40px',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <button
                onClick={() => setMenuOpen(false)}
                style={{
                  position: 'absolute', top: 20, right: 20,
                  width: 40, height: 40,
                  borderRadius: '50%',
                  border: '1px solid rgba(246,241,233,0.2)',
                  background: 'transparent',
                  color: 'var(--cream)',
                  fontSize: '20px',
                  cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
              >
                ✕
              </button>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column' }}>
                {NAV_LINKS.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 + 0.1 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="display-font block py-4 border-b"
                      style={{
                        fontSize: '32px',
                        fontWeight: 400,
                        color: 'rgba(246,241,233,0.65)',
                        textDecoration: 'none',
                        borderColor: 'rgba(246,241,233,0.08)',
                      }}
                      onMouseEnter={e => e.target.style.color = 'var(--cream)'}
                      onMouseLeave={e => e.target.style.color = 'rgba(246,241,233,0.65)'}
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45 }}
                style={{ marginTop: '40px' }}
              >
                <button
                  onClick={() => { setMenuOpen(false); onBook(); }}
                  style={{
                    width: '100%',
                    padding: '16px',
                    background: 'var(--teal)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '100px',
                    fontSize: '16px',
                    fontWeight: 500,
                    fontFamily: 'Outfit, sans-serif',
                    cursor: 'pointer',
                  }}
                >
                  Book Appointment →
                </button>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
