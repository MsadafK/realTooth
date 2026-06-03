import { motion } from 'framer-motion';
import { Reveal, Eyebrow, SectionTitle } from '../ui';

const TREATMENTS = [
  {
    num: '01',
    tag: 'Orthodontics',
    title: 'Braces & Clear Aligners',
    desc: 'Straighten teeth discreetly or traditionally. We offer metal braces, ceramic braces, and Invisalign-style clear aligners with custom timelines for teens and adults.',
    features: ['Traditional & ceramic braces', 'Clear aligner systems', 'Digital treatment planning', 'Retainers & aftercare'],
    gradient: 'linear-gradient(135deg, #152840 0%, #1B7A8A 100%)',
    img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80&auto=format&fit=crop',
  },
  {
    num: '02',
    tag: 'Cosmetic',
    title: 'Veneers & Smile Design',
    desc: 'Digital smile design technology and precision-crafted porcelain veneers that close gaps, correct shapes, and deliver a naturally radiant, camera-ready smile.',
    features: ['Porcelain & composite veneers', 'Digital Smile Design (DSD)', 'Gap closure & reshaping', 'Smile makeovers'],
    gradient: 'linear-gradient(135deg, #1A2F3A 0%, #C49A3C 100%)',
    img: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=600&q=80&auto=format&fit=crop',
  },
  {
    num: '03',
    tag: 'Restorative',
    title: 'Implants & Crowns',
    desc: 'Permanent titanium implants and precision ceramic crowns that integrate naturally, restoring both the function and aesthetics of your original teeth.',
    features: ['Titanium dental implants', 'Zirconia & ceramic crowns', 'Bone grafting', 'Same-visit options'],
    gradient: 'linear-gradient(135deg, #0C1B2E 0%, #1E3A57 100%)',
    img: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&q=80&auto=format&fit=crop',
  },
];

function TreatmentCard({ t, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: i * 0.12 }}
      whileHover={{ y: -10 }}
      style={{
        background: 'var(--white)',
        borderRadius: 22,
        overflow: 'hidden',
        boxShadow: '0 4px 24px rgba(12,27,46,0.07)',
        transition: 'box-shadow 0.4s ease',
      }}
      onMouseEnter={e => e.currentTarget.style.boxShadow = '0 24px 80px rgba(12,27,46,0.18)'}
      onMouseLeave={e => e.currentTarget.style.boxShadow = '0 4px 24px rgba(12,27,46,0.07)'}
    >
      {/* Card header */}
      <div
        style={{
          height: 200,
          background: t.gradient,
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img
          src={t.img}
          alt={t.title}
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover',
            opacity: 0.2,
          }}
        />
        <span
          className="display-font absolute bottom-0 right-4 leading-none select-none"
          style={{ fontSize: 96, color: 'rgba(255,255,255,0.06)', fontWeight: 400 }}
        >
          {t.num}
        </span>
        <div style={{
          position: 'relative', zIndex: 2,
          width: 68, height: 68,
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.1)',
          border: '1px solid rgba(255,255,255,0.2)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="rgba(246,241,233,0.9)" strokeWidth="1.3">
            <path d="M9 3C7.3 3 6 4.3 6 6c0 1.5.7 2.8.7 4.2C6.7 12.5 7.7 15 9.5 15s2.8-2.5 2.8-4.8c0-1.4.7-2.7.7-4.2C13 4.3 11.7 3 10 3H9z" strokeLinecap="round"/>
            <path d="M14.5 3c-1.7 0-3 1.3-3 3 0 1.5.7 2.8.7 4.2 0 2.3 1 4.8 2.8 4.8s2.8-2.5 2.8-4.8c0-1.4.7-2.7.7-4.2C18.5 4.3 17.2 3 15.5 3h-1z" strokeLinecap="round"/>
            <path d="M10 15c0 2.2.8 6 2 6s2-3.8 2-6" strokeLinecap="round"/>
          </svg>
        </div>
      </div>

      {/* Card body */}
      <div style={{ padding: '32px 32px 36px' }}>
        <span style={{
          display: 'inline-block',
          background: 'var(--cream-2)',
          color: 'var(--gold)',
          fontSize: 11,
          fontWeight: 500,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          padding: '4px 12px',
          borderRadius: '100px',
          marginBottom: 14,
        }}>
          {t.tag}
        </span>

        <h3
          className="display-font mb-3"
          style={{ fontSize: 26, fontWeight: 400, color: 'var(--navy)', lineHeight: 1.2 }}
        >
          {t.title}
        </h3>
        <p style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.8, fontWeight: 300, marginBottom: 24 }}>
          {t.desc}
        </p>

        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 9 }}>
          {t.features.map((f, fi) => (
            <li
              key={fi}
              style={{
                display: 'flex', alignItems: 'center', gap: 10,
                fontSize: 13, color: 'var(--navy)', fontWeight: 400,
              }}
            >
              <span style={{
                width: 18, height: 18,
                borderRadius: '50%',
                background: 'var(--teal)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M2 5l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              {f}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function Treatments() {
  return (
    <section
      id="treatments"
      style={{ padding: '120px 0', background: 'var(--cream-2)' }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 clamp(24px,4vw,64px)' }}>
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <Reveal>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Eyebrow>Specialist Services</Eyebrow>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionTitle center>
              Treatments built<br/>
              <em style={{ color: 'var(--teal)', fontStyle: 'italic' }}>for your goals</em>
            </SectionTitle>
          </Reveal>
          <Reveal delay={0.2}>
            <p style={{
              fontSize: 17, color: 'var(--text-muted)', fontWeight: 300,
              lineHeight: 1.8, maxWidth: 520, margin: '0 auto',
            }}>
              Every procedure at Realtooth combines clinical expertise with a patient-first philosophy — and a commitment to outcomes that last.
            </p>
          </Reveal>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 24,
        }}>
          {TREATMENTS.map((t, i) => (
            <TreatmentCard key={i} t={t} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
