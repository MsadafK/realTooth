import { motion } from 'framer-motion';
import { Reveal, Eyebrow, SectionTitle } from '../ui';
import { LOCATIONS } from '../../data';

function LocationCard({ loc, index }) {
  const isFeatured = loc.featured;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      style={{
        display: 'flex',
        gap: 24,
        alignItems: 'flex-start',
        padding: '36px',
        borderRadius: 20,
        background: isFeatured ? 'var(--navy)' : 'var(--white)',
        border: `1px solid ${isFeatured ? 'var(--navy)' : 'var(--border-light)'}`,
        boxShadow: isFeatured ? '0 20px 60px rgba(12,27,46,0.2)' : '0 2px 12px rgba(12,27,46,0.04)',
        transition: 'box-shadow 0.4s ease, transform 0.3s ease',
        cursor: 'default',
      }}
      onMouseEnter={e => !isFeatured && (e.currentTarget.style.boxShadow = '0 16px 50px rgba(12,27,46,0.12)')}
      onMouseLeave={e => !isFeatured && (e.currentTarget.style.boxShadow = '0 2px 12px rgba(12,27,46,0.04)')}
    >
      {/* Icon */}
      <div style={{
        width: 52, height: 52,
        borderRadius: 14,
        background: isFeatured ? 'rgba(246,241,233,0.1)' : 'var(--cream)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0,
      }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill={isFeatured ? 'var(--gold-2)' : 'var(--teal)'}>
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
        </svg>
      </div>

      <div style={{ flex: 1 }}>
        {/* Badge */}
        <span style={{
          display: 'inline-block',
          fontSize: 10, fontWeight: 600,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          padding: '3px 10px',
          borderRadius: '100px',
          marginBottom: 10,
          background: isFeatured ? 'var(--gold)' : 'var(--cream)',
          color: isFeatured ? 'var(--navy)' : 'var(--teal)',
        }}>
          {loc.badge}
        </span>

        <h3
          className="display-font mb-2"
          style={{ fontSize: 24, fontWeight: 400, color: isFeatured ? 'var(--cream)' : 'var(--navy)', lineHeight: 1.2 }}
        >
          {loc.name}
        </h3>
        <p style={{
          fontSize: 13, color: isFeatured ? 'rgba(246,241,233,0.5)' : 'var(--text-muted)',
          lineHeight: 1.65, fontWeight: 300, marginBottom: 18,
        }}>
          {loc.addr}
        </p>

        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <motion.a
            href={loc.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ gap: '12px' }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              fontSize: 13, fontWeight: 500,
              color: isFeatured ? 'var(--gold-2)' : 'var(--teal)',
              textDecoration: 'none',
              transition: 'gap 0.2s',
            }}
          >
            Get Directions →
          </motion.a>
          <a
            href={`tel:${loc.phone.replace(/\s/g, '')}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              fontSize: 13,
              color: isFeatured ? 'rgba(246,241,233,0.45)' : 'var(--text-muted)',
              textDecoration: 'none',
            }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
            </svg>
            {loc.phone}
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Locations() {
  return (
    <section id="locations" style={{ padding: '120px 0', background: 'var(--white)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 clamp(24px,4vw,64px)' }}>
        {/* Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            marginBottom: 64,
            gap: 40,
            flexWrap: 'wrap',
          }}
        >
          <div>
            <Reveal><Eyebrow>Find Us</Eyebrow></Reveal>
            <Reveal delay={0.1}>
              <SectionTitle>
                Four clinics<br/>
                <em style={{ color: 'var(--teal)', fontStyle: 'italic' }}>across Lucknow</em>
              </SectionTitle>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <p style={{
              fontSize: 16, color: 'var(--text-muted)', fontWeight: 300,
              lineHeight: 1.8, maxWidth: 360,
            }}>
              Wherever you are in the city, a Realtooth clinic is nearby. Every branch delivers the same internationally benchmarked standard of care.
            </p>
          </Reveal>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 20,
        }}>
          {LOCATIONS.map((loc, i) => (
            <LocationCard key={i} loc={loc} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
