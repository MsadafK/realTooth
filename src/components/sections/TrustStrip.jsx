import { motion } from 'framer-motion';
import { TRUST_ITEMS } from '../../data';

function Dot() {
  return (
    <span
      style={{
        width: 5, height: 5,
        borderRadius: '50%',
        background: 'var(--gold)',
        display: 'inline-block',
        flexShrink: 0,
      }}
    />
  );
}

const items = [...TRUST_ITEMS, ...TRUST_ITEMS, ...TRUST_ITEMS];

export default function TrustStrip() {
  return (
    <div
      style={{
        background: 'var(--navy)',
        padding: '18px 0',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Left/right fades */}
      <div style={{
        position: 'absolute', left: 0, top: 0, bottom: 0, width: 80, zIndex: 2,
        background: 'linear-gradient(to right, var(--navy), transparent)',
        pointerEvents: 'none',
      }}/>
      <div style={{
        position: 'absolute', right: 0, top: 0, bottom: 0, width: 80, zIndex: 2,
        background: 'linear-gradient(to left, var(--navy), transparent)',
        pointerEvents: 'none',
      }}/>

      <motion.div
        animate={{ x: ['0%', '-33.333%'] }}
        transition={{ duration: 30, ease: 'linear', repeat: Infinity }}
        style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap', willChange: 'transform' }}
      >
        {items.map((item, i) => (
          <span
            key={i}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 12,
              padding: '0 36px',
              fontSize: 12,
              fontWeight: 500,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'rgba(246,241,233,0.5)',
              flexShrink: 0,
            }}
          >
            <Dot />
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
