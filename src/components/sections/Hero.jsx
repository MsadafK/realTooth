import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Eyebrow, StatCard, ButtonGhost } from '../ui';

const HERO_IMAGES = [
  'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1400&q=85&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1400&q=85&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=1400&q=85&auto=format&fit=crop',
];

const STATS = [
  { num: '20+', label: 'Years Practice' },
  { num: '4', label: 'Locations' },
  { num: '4.8★', label: '4,083 Reviews' },
];

function Counter({ target, suffix = '' }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const isFloat = String(target).includes('.');
    const end = parseFloat(target);
    const duration = 1800;
    const start = Date.now();
    const run = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(isFloat ? (end * ease).toFixed(1) : Math.round(end * ease));
      if (progress < 1) requestAnimationFrame(run);
    };
    const t = setTimeout(() => requestAnimationFrame(run), 300);
    return () => clearTimeout(t);
  }, [target]);
  return <>{count}{suffix}</>;
}

export default function Hero({ onBook }) {
  const [imgIdx, setImgIdx] = useState(0);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 120]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  useEffect(() => {
    const t = setInterval(() => setImgIdx(i => (i + 1) % HERO_IMAGES.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* LEFT PANEL */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 'clamp(100px, 10vw, 140px) clamp(32px, 5vw, 72px) 80px clamp(32px, 6vw, 88px)',
          position: 'relative',
          zIndex: 2,
          background: 'var(--cream)',
        }}
      >
        {/* Decorative lines */}
        <div
          style={{
            position: 'absolute',
            top: 0, left: 0, right: 0,
            height: '100%',
            backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 79px, rgba(12,27,46,0.025) 79px, rgba(12,27,46,0.025) 80px)',
            pointerEvents: 'none',
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <Eyebrow>Est. 2004 · Lucknow's Premier Dental Group</Eyebrow>
        </motion.div>

        <motion.h1
          className="display-font"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            fontSize: 'clamp(52px, 6vw, 92px)',
            fontWeight: 400,
            lineHeight: 1.03,
            color: 'var(--navy)',
            marginBottom: '28px',
          }}
        >
          Elevate your<br />
          smile to{' '}
          <em style={{ color: 'var(--teal)', fontStyle: 'italic' }}>its finest</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          style={{
            fontSize: '17px',
            color: 'var(--text-muted)',
            maxWidth: '420px',
            marginBottom: '44px',
            fontWeight: 300,
            lineHeight: 1.85,
          }}
        >
          Realtooth Dental Group brings two decades of clinical excellence and cutting-edge technology across four Lucknow clinics — care built around you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.48 }}
          className="flex items-center flex-wrap gap-5"
        >
          <motion.button
            onClick={onBook}
            whileHover={{ y: -2, boxShadow: '0 14px 40px rgba(27,122,138,0.38)' }}
            whileTap={{ scale: 0.97 }}
            style={{
              background: 'var(--navy)',
              color: 'var(--cream)',
              border: 'none',
              borderRadius: '100px',
              padding: '15px 36px',
              fontSize: '15px',
              fontWeight: 500,
              fontFamily: 'Outfit, sans-serif',
              letterSpacing: '0.02em',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              transition: 'background 0.3s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'var(--teal)'}
            onMouseLeave={e => e.currentTarget.style.background = 'var(--navy)'}
          >
            Book Appointment
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.button>
          <ButtonGhost href="#services">Explore Services</ButtonGhost>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="flex gap-10 flex-wrap"
          style={{
            marginTop: '64px',
            paddingTop: '40px',
            borderTop: '1px solid var(--border)',
          }}
        >
          {STATS.map((s, i) => (
            <StatCard key={i} num={s.num} label={s.label} />
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          style={{ opacity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            style={{ width: 1, height: 48, background: 'linear-gradient(to bottom, var(--navy), transparent)' }}
          />
        </motion.div>
      </div>

      {/* RIGHT PANEL — Hero image with parallax */}
      <div style={{ position: 'relative', overflow: 'hidden', background: 'var(--navy-2)' }}>
        <motion.div style={{ y, position: 'absolute', inset: '-10%', zIndex: 1 }}>
          {HERO_IMAGES.map((src, i) => (
            <motion.img
              key={src}
              src={src}
              alt="Realtooth Dental Care"
              initial={false}
              animate={{ opacity: i === imgIdx ? 1 : 0 }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'grayscale(15%)',
              }}
            />
          ))}
        </motion.div>

        {/* Gradient overlays */}
        <div
          style={{
            position: 'absolute', inset: 0, zIndex: 2,
            background: 'linear-gradient(135deg, rgba(27,122,138,0.35) 0%, transparent 50%, rgba(12,27,46,0.6) 100%)',
          }}
        />
        <div
          style={{
            position: 'absolute', left: 0, top: 0, bottom: 0,
            width: '120px', zIndex: 3,
            background: 'linear-gradient(to right, var(--cream), transparent)',
          }}
        />

        {/* Rating badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          whileHover={{ y: -4 }}
          style={{
            position: 'absolute',
            bottom: 48, left: 48,
            background: 'rgba(246,241,233,0.96)',
            backdropFilter: 'blur(16px)',
            borderRadius: '16px',
            padding: '20px 24px',
            zIndex: 10,
            boxShadow: '0 8px 40px rgba(12,27,46,0.2)',
            minWidth: '200px',
          }}
        >
          <div className="flex items-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#F59E0B"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            ))}
          </div>
          <span
            className="display-font block leading-none mb-1"
            style={{ fontSize: '36px', color: 'var(--navy)', fontWeight: 400 }}
          >
            4.8
          </span>
          <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>4,083 verified reviews</span>
        </motion.div>

        {/* Image dots indicator */}
        <div
          style={{
            position: 'absolute', bottom: 48, right: 48,
            display: 'flex', gap: '8px', zIndex: 10,
          }}
        >
          {HERO_IMAGES.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => setImgIdx(i)}
              animate={{ width: i === imgIdx ? 24 : 8, background: i === imgIdx ? 'var(--cream)' : 'rgba(246,241,233,0.45)' }}
              transition={{ duration: 0.3 }}
              style={{
                height: '8px',
                borderRadius: '4px',
                border: 'none',
                cursor: 'pointer',
              }}
            />
          ))}
        </div>
      </div>

      {/* Mobile: stack vertically */}
      <style>{`
        @media (max-width: 900px) {
          section#home {
            grid-template-columns: 1fr !important;
          }
          section#home > div:last-child {
            min-height: 55vw;
          }
          section#home > div:last-child > div:nth-child(4) {
            left: 24px !important;
            bottom: 24px !important;
          }
        }
        @media (max-width: 600px) {
          section#home > div:first-child {
            padding: 100px 24px 60px !important;
          }
        }
      `}</style>
    </section>
  );
}
