import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Reveal, Eyebrow, SectionTitle, ButtonGhost } from '../ui';
import { SERVICES } from '../../data';

const ICONS = {
  0: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M9 3C7.3 3 6 4.3 6 6c0 1.5.7 2.8.7 4.2C6.7 12.5 7.7 15 9.5 15s2.8-2.5 2.8-4.8c0-1.4.7-2.7.7-4.2C13 4.3 11.7 3 10 3H9z" strokeLinecap="round"/>
      <path d="M14.5 3c-1.7 0-3 1.3-3 3 0 1.5.7 2.8.7 4.2 0 2.3 1 4.8 2.8 4.8s2.8-2.5 2.8-4.8c0-1.4.7-2.7.7-4.2C18.5 4.3 17.2 3 15.5 3h-1z" strokeLinecap="round"/>
      <path d="M10 15c0 2.2.8 6 2 6s2-3.8 2-6" strokeLinecap="round"/>
    </svg>
  ),
  1: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M8 3C6 3 4.5 4.5 4.5 6.5c0 1.8.8 3.2.8 4.8C5.3 14 6.5 17 8.5 17s3.2-3 3.2-5.7c0-1.6.8-3 .8-4.8C12.5 4.5 11 3 9 3H8z" strokeLinecap="round"/>
      <path d="M16 3c-2 0-3.5 1.5-3.5 3.5 0 1.8.8 3.2.8 4.8 0 2.7 1.2 5.7 3.2 5.7s3.2-3 3.2-5.7c0-1.6.8-3 .8-4.8C20.5 4.5 19 3 17 3h-1z" strokeLinecap="round"/>
      <path d="M9 17c0 2.5 1 4 3 4s3-1.5 3-4" strokeLinecap="round"/>
      <path d="M6 10c1.5.5 2.5.5 3 .5M15 10c1.5.5 2.5.5 3 .5" strokeLinecap="round"/>
    </svg>
  ),
  2: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <rect x="3" y="11" width="18" height="10" rx="2"/>
      <path d="M7 11V7a5 5 0 0110 0v4" strokeLinecap="round"/>
      <circle cx="12" cy="16" r="1.5" fill="currentColor" stroke="none"/>
    </svg>
  ),
  3: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <circle cx="12" cy="12" r="9"/>
      <path d="M8.5 12l2.5 2.5 4.5-5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
};

function ServiceCard({ service, index, isActive, onClick }) {
  const isHovered = isActive;

  return (
    <motion.div
      layout
      onClick={onClick}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      style={{
        background: isHovered ? 'var(--navy)' : 'var(--white)',
        borderRadius: 20,
        padding: '40px 36px',
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
        transition: 'background 0.4s ease',
        border: `1px solid ${isHovered ? 'var(--navy)' : 'var(--border-light)'}`,
        boxShadow: isHovered ? '0 24px 60px rgba(12,27,46,0.2)' : '0 2px 12px rgba(12,27,46,0.04)',
      }}
    >
      {/* Accent bar */}
      <motion.div
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        style={{
          position: 'absolute',
          bottom: 0, left: 0, right: 0,
          height: 3,
          background: service.color,
          transformOrigin: 'left',
        }}
      />

      {/* Number watermark */}
      <span
        className="display-font absolute bottom-0 right-4 leading-none select-none pointer-events-none"
        style={{
          fontSize: 80,
          fontWeight: 400,
          color: isHovered ? 'rgba(246,241,233,0.05)' : 'rgba(12,27,46,0.04)',
          transition: 'color 0.4s',
        }}
      >
        {service.num}
      </span>

      {/* Icon */}
      <motion.div
        animate={{
          background: isHovered ? service.color : 'var(--cream)',
          color: isHovered ? '#fff' : service.color,
        }}
        style={{
          width: 54, height: 54,
          borderRadius: 14,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          marginBottom: 24,
          transition: 'all 0.35s ease',
        }}
      >
        {ICONS[index]}
      </motion.div>

      {/* Tag */}
      <span
        style={{
          display: 'inline-block',
          fontSize: 11,
          fontWeight: 500,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          padding: '3px 10px',
          borderRadius: '100px',
          marginBottom: 12,
          background: isHovered ? 'rgba(246,241,233,0.1)' : 'var(--cream)',
          color: isHovered ? 'rgba(246,241,233,0.6)' : 'var(--text-muted)',
          transition: 'all 0.4s',
        }}
      >
        {service.tag}
      </span>

      <h3
        className="display-font mb-3"
        style={{
          fontSize: 24,
          fontWeight: 400,
          color: isHovered ? 'var(--cream)' : 'var(--navy)',
          lineHeight: 1.2,
          transition: 'color 0.4s',
        }}
      >
        {service.title}
      </h3>

      <p
        style={{
          fontSize: 14,
          color: isHovered ? 'rgba(246,241,233,0.55)' : 'var(--text-muted)',
          lineHeight: 1.75,
          fontWeight: 300,
          marginBottom: 24,
          transition: 'color 0.4s',
        }}
      >
        {service.desc}
      </p>

      {/* Items */}
      <AnimatePresence>
        {isHovered && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8, overflow: 'hidden' }}
          >
            {service.items.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  fontSize: 13,
                  color: 'rgba(246,241,233,0.75)',
                  fontWeight: 400,
                }}
              >
                <span style={{
                  width: 18, height: 18,
                  borderRadius: '50%',
                  background: service.color,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 5l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                {item}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Services() {
  const [active, setActive] = useState(0);

  return (
    <section id="services" style={{ padding: '120px 0', background: 'var(--white)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 clamp(24px,4vw,64px)' }}>
        {/* Header */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '40px 80px',
            alignItems: 'end',
            marginBottom: 72,
          }}
        >
          <div>
            <Reveal>
              <Eyebrow>What We Offer</Eyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <SectionTitle>
                Complete care,<br />
                <em style={{ color: 'var(--teal)', fontStyle: 'italic' }}>every specialty</em>
              </SectionTitle>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <div>
              <p style={{ fontSize: 16, color: 'var(--text-muted)', fontWeight: 300, lineHeight: 1.85, marginBottom: 28 }}>
                From routine check-ups to advanced restorations, every treatment at Realtooth is performed by dedicated specialists using the latest technology.
              </p>
              <ButtonGhost href="#treatments">View all treatments</ButtonGhost>
            </div>
          </Reveal>
        </div>

        {/* Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 20,
          }}
        >
          {SERVICES.map((s, i) => (
            <ServiceCard
              key={i}
              service={s}
              index={i}
              isActive={active === i}
              onClick={() => setActive(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
