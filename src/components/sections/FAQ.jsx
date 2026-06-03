import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Reveal, Eyebrow, SectionTitle } from '../ui';
import { FAQS } from '../../data';

function FaqItem({ faq, index, isOpen, onToggle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      style={{ borderBottom: '1px solid var(--border)' }}
    >
      <button
        onClick={onToggle}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '26px 0',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          gap: 20,
          textAlign: 'left',
        }}
      >
        <span
          className="display-font"
          style={{
            fontSize: 20,
            fontWeight: 400,
            color: isOpen ? 'var(--teal)' : 'var(--navy)',
            lineHeight: 1.3,
            transition: 'color 0.3s',
          }}
        >
          {faq.q}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0, background: isOpen ? 'var(--navy)' : 'transparent' }}
          transition={{ duration: 0.3 }}
          style={{
            width: 34, height: 34,
            borderRadius: '50%',
            border: '1px solid var(--border)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0,
            fontSize: 20,
            color: isOpen ? 'var(--cream)' : 'var(--navy)',
            transition: 'color 0.3s',
          }}
        >
          +
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.38, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ overflow: 'hidden' }}
          >
            <p style={{
              paddingBottom: 28,
              fontSize: 15,
              color: 'var(--text-muted)',
              fontWeight: 300,
              lineHeight: 1.85,
            }}>
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" style={{ padding: '120px 0', background: 'var(--white)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 clamp(24px,4vw,64px)' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 'clamp(48px, 8vw, 120px)',
          alignItems: 'start',
        }}>
          {/* Left sticky panel */}
          <div style={{ position: 'sticky', top: 120 }}>
            <Reveal><Eyebrow>Got Questions?</Eyebrow></Reveal>
            <Reveal delay={0.1}>
              <SectionTitle>
                Everything<br/>
                <em style={{ color: 'var(--teal)', fontStyle: 'italic' }}>you need<br/>to know</em>
              </SectionTitle>
            </Reveal>
            <Reveal delay={0.2}>
              <p style={{ fontSize: 16, color: 'var(--text-muted)', fontWeight: 300, lineHeight: 1.8, marginBottom: 40 }}>
                Can't find your answer here? Our team is available 6 days a week to speak with you directly.
              </p>
            </Reveal>

            {/* Contact card */}
            <Reveal delay={0.3}>
              <div style={{
                background: 'var(--cream)',
                borderRadius: 20,
                padding: 36,
              }}>
                <h4
                  className="display-font mb-3"
                  style={{ fontSize: 22, fontWeight: 400, color: 'var(--navy)' }}
                >
                  Call us directly
                </h4>
                <p style={{ fontSize: 14, color: 'var(--text-muted)', fontWeight: 300, lineHeight: 1.7, marginBottom: 24 }}>
                  For appointments, emergencies, or general enquiries — we're here.
                </p>
                <motion.a
                  href="tel:+918081151138"
                  whileHover={{ color: 'var(--teal)' }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    textDecoration: 'none',
                    color: 'var(--navy)',
                    transition: 'color 0.2s',
                  }}
                >
                  <div style={{
                    width: 44, height: 44,
                    borderRadius: '50%',
                    background: 'var(--navy)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                    transition: 'background 0.2s',
                  }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--cream)">
                      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                    </svg>
                  </div>
                  <span className="display-font" style={{ fontSize: 22, fontWeight: 400 }}>
                    +91 80811 51138
                  </span>
                </motion.a>
              </div>
            </Reveal>
          </div>

          {/* FAQ list */}
          <div>
            {FAQS.map((faq, i) => (
              <FaqItem
                key={i}
                faq={faq}
                index={i}
                isOpen={open === i}
                onToggle={() => setOpen(open === i ? -1 : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
