import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';

// ── Reveal wrapper ──────────────────────────────────────────────
export function Reveal({ children, delay = 0, y = 30, className = '' }) {
  const [ref, inView] = useInView();
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ── Section Eyebrow ─────────────────────────────────────────────
export function Eyebrow({ children, light = false }) {
  return (
    <div
      className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.18em] uppercase mb-5"
      style={{ color: light ? 'var(--gold-2)' : 'var(--gold)' }}
    >
      <span
        className="block h-px w-6 flex-shrink-0"
        style={{ background: light ? 'var(--gold-2)' : 'var(--gold)' }}
      />
      {children}
    </div>
  );
}

// ── Section Title ───────────────────────────────────────────────
export function SectionTitle({ children, light = false, center = false, className = '' }) {
  return (
    <h2
      className={`display-font leading-[1.08] mb-6 ${center ? 'text-center' : ''} ${className}`}
      style={{
        fontSize: 'clamp(40px, 4.5vw, 62px)',
        color: light ? 'var(--cream)' : 'var(--navy)',
        fontWeight: 400,
      }}
    >
      {children}
    </h2>
  );
}

// ── Button Primary ──────────────────────────────────────────────
export function ButtonPrimary({ children, onClick, href, className = '', light = false }) {
  const styles = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    padding: '14px 32px',
    borderRadius: '100px',
    fontSize: '15px',
    fontWeight: 500,
    fontFamily: 'Outfit, sans-serif',
    letterSpacing: '0.02em',
    cursor: 'pointer',
    border: 'none',
    textDecoration: 'none',
    background: light ? 'var(--white)' : 'var(--navy)',
    color: light ? 'var(--teal)' : 'var(--cream)',
    transition: 'all 0.35s cubic-bezier(0.25,0.46,0.45,0.94)',
  };

  const Tag = href ? 'a' : 'button';
  return (
    <motion.div
      whileHover={{ y: -2, boxShadow: light ? '0 12px 40px rgba(0,0,0,0.2)' : '0 12px 40px rgba(27,122,138,0.35)' }}
      whileTap={{ scale: 0.97 }}
      style={{ display: 'inline-block' }}
    >
      <Tag style={styles} onClick={onClick} href={href} className={className}>
        {children}
      </Tag>
    </motion.div>
  );
}

// ── Ghost / Text Button ─────────────────────────────────────────
export function ButtonGhost({ children, onClick, href, light = false }) {
  return (
    <motion.a
      href={href || '#'}
      onClick={onClick}
      className="inline-flex items-center gap-2 font-medium text-[15px] cursor-pointer"
      style={{ color: light ? 'var(--cream)' : 'var(--navy)', textDecoration: 'none', letterSpacing: '0.02em' }}
      whileHover={{ gap: '14px' }}
      transition={{ duration: 0.25 }}
    >
      {children}
      <motion.span
        className="inline-flex items-center justify-center w-8 h-8 rounded-full border text-sm"
        style={{ borderColor: light ? 'rgba(246,241,233,0.3)' : 'var(--border)' }}
        whileHover={{ background: 'var(--navy)', color: 'var(--cream)', borderColor: 'var(--navy)' }}
      >
        →
      </motion.span>
    </motion.a>
  );
}

// ── Stat Card ───────────────────────────────────────────────────
export function StatCard({ num, label, light = false }) {
  return (
    <div>
      <span
        className="display-font block leading-none mb-1"
        style={{ fontSize: '44px', fontWeight: 400, color: light ? 'var(--cream)' : 'var(--navy)' }}
      >
        {num}
      </span>
      <span
        className="text-xs uppercase tracking-widest font-medium"
        style={{ color: light ? 'rgba(246,241,233,0.5)' : 'var(--text-muted)' }}
      >
        {label}
      </span>
    </div>
  );
}
