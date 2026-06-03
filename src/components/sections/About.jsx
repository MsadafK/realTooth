import { motion } from 'framer-motion';
import { Reveal, Eyebrow, SectionTitle, ButtonPrimary } from '../ui';

const METRICS = [
  { num: '20+', label: 'Years in Practice', span: 1 },
  { num: '4', label: 'Lucknow Locations', span: 1 },
  { num: '15+', label: 'Specialisations', span: 1 },
  { num: '4.8★', label: 'Google Rating', span: 1 },
  { num: '4,083', label: 'Verified Patient Reviews', span: 2, accent: true },
];

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: '120px 0',
        background: 'var(--navy)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background glows */}
      <div style={{
        position: 'absolute', top: '-200px', right: '-200px',
        width: 600, height: 600,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(27,122,138,0.18) 0%, transparent 70%)',
        pointerEvents: 'none',
      }}/>
      <div style={{
        position: 'absolute', bottom: '-150px', left: '-100px',
        width: 500, height: 500,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(196,154,60,0.1) 0%, transparent 70%)',
        pointerEvents: 'none',
      }}/>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 clamp(24px,4vw,64px)', position: 'relative', zIndex: 2 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'clamp(48px, 8vw, 100px)',
            alignItems: 'center',
          }}
        >
          {/* Left: text */}
          <div>
            <Reveal>
              <Eyebrow light>Our Story</Eyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <SectionTitle light>
                Two decades of<br/>
                <em style={{ color: 'var(--teal-3)', fontStyle: 'italic' }}>clinical excellence</em>
              </SectionTitle>
            </Reveal>

            <Reveal delay={0.2}>
              <p style={{ fontSize: 16, color: 'rgba(246,241,233,0.6)', fontWeight: 300, lineHeight: 1.9, marginBottom: 22 }}>
                Realtooth Dental Group was founded in 2004 by Dr. Amit Anand and Dr. Arpita Anand — two of India's most distinguished dental professionals — with a single conviction: every patient deserves world-class oral care close to home.
              </p>
              <p style={{ fontSize: 16, color: 'rgba(246,241,233,0.6)', fontWeight: 300, lineHeight: 1.9, marginBottom: 44 }}>
                Today, across four Lucknow branches, we've built a reputation that goes beyond technical skill. We invest in the most advanced technology, maintain international hygiene standards, and continuously train to stay at the forefront of dental science.
              </p>
            </Reveal>

            {/* Founders */}
            <Reveal delay={0.3}>
              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 44 }}>
                {[
                  { initials: 'AA', name: 'Dr. Amit Anand', role: 'Co-Founder & Chief Dentist', color: 'var(--teal)' },
                  { initials: 'AA', name: 'Dr. Arpita Anand', role: 'Co-Founder & Orthodontist', color: 'var(--gold)' },
                ].map((f, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -3 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 12,
                      background: 'rgba(246,241,233,0.06)',
                      border: '1px solid rgba(246,241,233,0.1)',
                      borderRadius: '100px',
                      padding: '10px 20px 10px 10px',
                      backdropFilter: 'blur(10px)',
                    }}
                  >
                    <div style={{
                      width: 40, height: 40,
                      borderRadius: '50%',
                      background: f.color,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontFamily: 'DM Serif Display, serif',
                      fontSize: 16,
                      color: 'white',
                      flexShrink: 0,
                    }}>
                      {f.initials}
                    </div>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--cream)' }}>{f.name}</div>
                      <div style={{ fontSize: 11, color: 'rgba(246,241,233,0.45)', marginTop: 2 }}>{f.role}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right: metrics */}
          <Reveal delay={0.15}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 14,
              }}
            >
              {METRICS.map((m, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5, scale: 1.02 }}
                  style={{
                    gridColumn: m.span === 2 ? 'span 2' : 'span 1',
                    background: m.accent ? 'var(--teal)' : 'rgba(246,241,233,0.05)',
                    border: `1px solid ${m.accent ? 'var(--teal)' : 'rgba(246,241,233,0.09)'}`,
                    borderRadius: 16,
                    padding: m.accent ? '32px 36px' : '28px 24px',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  }}
                >
                  <span
                    className="display-font block leading-none mb-2"
                    style={{
                      fontSize: m.accent ? 56 : 44,
                      fontWeight: 400,
                      color: 'var(--cream)',
                    }}
                  >
                    {m.num}
                  </span>
                  <span style={{
                    fontSize: 13,
                    color: m.accent ? 'rgba(255,255,255,0.7)' : 'rgba(246,241,233,0.45)',
                    letterSpacing: '0.04em',
                    fontWeight: 400,
                  }}>
                    {m.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
