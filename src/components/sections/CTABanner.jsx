import { motion } from 'framer-motion';
import { Reveal } from '../ui';

export default function CTABanner({ onBook }) {
  return (
    <section
      style={{
        padding: '100px 0',
        background: 'var(--teal)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative shapes */}
      <div style={{
        position: 'absolute', top: '-180px', right: '-120px',
        width: 520, height: 520,
        borderRadius: '50%',
        background: 'rgba(255,255,255,0.05)',
        pointerEvents: 'none',
      }}/>
      <div style={{
        position: 'absolute', bottom: '-120px', left: '-80px',
        width: 400, height: 400,
        borderRadius: '50%',
        background: 'rgba(0,0,0,0.06)',
        pointerEvents: 'none',
      }}/>
      <div style={{
        position: 'absolute', top: '30%', left: '50%',
        transform: 'translateX(-50%)',
        width: 800, height: 800,
        borderRadius: '50%',
        background: 'rgba(255,255,255,0.03)',
        pointerEvents: 'none',
      }}/>

      <div style={{
        maxWidth: 1280, margin: '0 auto',
        padding: '0 clamp(24px,4vw,64px)',
        position: 'relative', zIndex: 2,
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: 60,
        alignItems: 'center',
      }}>
        <div>
          <Reveal>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.6)',
              marginBottom: 20,
            }}>
              <span style={{ width: 24, height: 1, background: 'rgba(255,255,255,0.4)', display: 'block' }}/>
              Start Today
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2
              className="display-font"
              style={{
                fontSize: 'clamp(40px, 5vw, 64px)',
                fontWeight: 400,
                color: 'white',
                lineHeight: 1.08,
                marginBottom: 20,
              }}
            >
              Ready for the smile<br/>
              <em style={{ color: 'var(--gold-3)', fontStyle: 'italic' }}>you've always wanted?</em>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.65)', fontWeight: 300, lineHeight: 1.8 }}>
              Flexible appointments 6 days a week across all four Lucknow locations. No waiting lists. Book your consultation in under 2 minutes.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.25}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, alignItems: 'flex-start' }}>
            <motion.button
              onClick={onBook}
              whileHover={{ y: -3, boxShadow: '0 16px 48px rgba(12,27,46,0.3)' }}
              whileTap={{ scale: 0.97 }}
              style={{
                background: 'white',
                color: 'var(--teal)',
                border: 'none',
                borderRadius: '100px',
                padding: '18px 48px',
                fontSize: '16px',
                fontWeight: 600,
                fontFamily: 'Outfit, sans-serif',
                letterSpacing: '0.02em',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'var(--navy)';
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'white';
                e.currentTarget.style.color = 'var(--teal)';
              }}
            >
              Book a Consultation
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.button>

            <a
              href="tel:+918081151138"
              style={{
                fontSize: 14,
                color: 'rgba(255,255,255,0.6)',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'white'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
              </svg>
              or call +91 80811 51138
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
