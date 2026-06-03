import { useState } from 'react';
import { motion } from 'framer-motion';
import { Reveal, Eyebrow, SectionTitle } from '../ui';
import { PROCESS_STEPS } from '../../data';

export default function Process() {
  const [active, setActive] = useState(0);

  return (
    <section style={{ padding: '120px 0', background: 'var(--cream)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 clamp(24px,4vw,64px)' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'clamp(48px, 8vw, 120px)',
            alignItems: 'center',
          }}
        >
          {/* Visual */}
          <Reveal>
            <div style={{ position: 'relative', height: 'clamp(380px, 45vw, 560px)' }}>
              {/* Main image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.6 }}
                style={{
                  position: 'absolute',
                  top: 0, left: 0,
                  width: '72%',
                  height: '80%',
                  borderRadius: 20,
                  overflow: 'hidden',
                  boxShadow: '0 24px 80px rgba(12,27,46,0.2)',
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80&auto=format&fit=crop"
                  alt="Dentist with patient"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(135deg, rgba(27,122,138,0.2), transparent)',
                }}/>
              </motion.div>

              {/* Accent image */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.7 }}
                whileHover={{ scale: 1.04 }}
                style={{
                  position: 'absolute',
                  bottom: 0, right: 0,
                  width: '50%',
                  height: '48%',
                  borderRadius: 16,
                  overflow: 'hidden',
                  boxShadow: '0 12px 40px rgba(12,27,46,0.18)',
                  border: '5px solid var(--white)',
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&q=80&auto=format&fit=crop"
                  alt="Dental equipment"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </motion.div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
                style={{
                  position: 'absolute',
                  top: '18%',
                  right: '-16px',
                  background: 'var(--navy)',
                  borderRadius: 14,
                  padding: '18px 22px',
                  boxShadow: '0 12px 40px rgba(12,27,46,0.25)',
                  zIndex: 10,
                }}
              >
                <span
                  className="display-font block leading-none mb-1"
                  style={{ fontSize: 40, color: 'var(--gold-2)', fontWeight: 400 }}
                >
                  4K+
                </span>
                <span style={{ fontSize: 12, color: 'rgba(246,241,233,0.6)', letterSpacing: '0.05em' }}>
                  Smiles transformed
                </span>
              </motion.div>

              {/* Dots decoration */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '12%',
                  left: '-20px',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(5,10px)',
                  gap: 6,
                  opacity: 0.25,
                }}
              >
                {Array.from({ length: 25 }).map((_, i) => (
                  <div key={i} style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--navy)' }}/>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Steps */}
          <div>
            <Reveal>
              <Eyebrow>Your Journey</Eyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <SectionTitle>
                From first visit<br/>
                <em style={{ color: 'var(--teal)', fontStyle: 'italic' }}>to lasting smile</em>
              </SectionTitle>
            </Reveal>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {PROCESS_STEPS.map((step, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <motion.div
                    onClick={() => setActive(i)}
                    whileHover={{ paddingLeft: 12 }}
                    style={{
                      display: 'flex',
                      gap: 20,
                      padding: '28px 0',
                      borderBottom: i < PROCESS_STEPS.length - 1 ? '1px solid var(--border)' : 'none',
                      cursor: 'pointer',
                      transition: 'padding 0.3s ease',
                    }}
                  >
                    {/* Step number */}
                    <motion.div
                      animate={{
                        background: active === i ? 'var(--navy)' : 'transparent',
                        color: active === i ? 'var(--cream)' : 'var(--text-muted)',
                        borderColor: active === i ? 'var(--navy)' : 'var(--border)',
                      }}
                      style={{
                        width: 48, height: 48,
                        borderRadius: '50%',
                        border: '1px solid var(--border)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        flexShrink: 0,
                        fontFamily: 'DM Serif Display, serif',
                        fontSize: 17,
                        fontWeight: 400,
                        transition: 'all 0.35s ease',
                      }}
                    >
                      {step.num}
                    </motion.div>

                    <div>
                      <h3
                        style={{
                          fontFamily: 'DM Serif Display, serif',
                          fontSize: 22,
                          fontWeight: 400,
                          color: active === i ? 'var(--teal)' : 'var(--navy)',
                          marginBottom: 8,
                          lineHeight: 1.2,
                          transition: 'color 0.3s',
                        }}
                      >
                        {step.title}
                      </h3>
                      <p style={{
                        fontSize: 14,
                        color: 'var(--text-muted)',
                        lineHeight: 1.75,
                        fontWeight: 300,
                      }}>
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
