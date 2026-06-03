import { motion } from 'framer-motion';
import { Reveal, Eyebrow, SectionTitle } from '../ui';
import { TESTIMONIALS } from '../../data';

function Stars() {
  return (
    <div style={{ display: 'flex', gap: 3, marginBottom: 16 }}>
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#F59E0B">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ review }) {
  const isDark = review.dark;
  return (
    <motion.div
      whileHover={{ y: -6 }}
      style={{
        flexShrink: 0,
        width: 340,
        background: isDark ? 'var(--navy)' : 'var(--white)',
        borderRadius: 20,
        padding: '32px',
        boxShadow: isDark ? '0 8px 40px rgba(12,27,46,0.2)' : '0 2px 16px rgba(12,27,46,0.06)',
        transition: 'transform 0.3s ease',
      }}
    >
      <Stars />
      <p
        className="display-font"
        style={{
          fontSize: 18,
          fontWeight: 400,
          fontStyle: 'italic',
          color: isDark ? 'var(--cream)' : 'var(--navy)',
          lineHeight: 1.55,
          marginBottom: 24,
        }}
      >
        "{review.text}"
      </p>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{
          width: 40, height: 40,
          borderRadius: '50%',
          background: review.color,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'DM Serif Display, serif',
          fontSize: 15, color: 'white',
          flexShrink: 0,
        }}>
          {review.initials}
        </div>
        <div>
          <div style={{ fontSize: 14, fontWeight: 500, color: isDark ? 'var(--cream)' : 'var(--navy)' }}>
            {review.name}
          </div>
          <div style={{ fontSize: 12, color: isDark ? 'rgba(246,241,233,0.45)' : 'var(--text-muted)', marginTop: 2 }}>
            {review.date}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ReviewRow({ reviews, direction = 'left', speed = 35 }) {
  const doubled = [...reviews, ...reviews];
  return (
    <div style={{ overflow: 'hidden', position: 'relative' }}>
      {/* Fades */}
      <div style={{
        position: 'absolute', left: 0, top: 0, bottom: 0, width: 100, zIndex: 2,
        background: 'linear-gradient(to right, var(--cream), transparent)',
        pointerEvents: 'none',
      }}/>
      <div style={{
        position: 'absolute', right: 0, top: 0, bottom: 0, width: 100, zIndex: 2,
        background: 'linear-gradient(to left, var(--cream), transparent)',
        pointerEvents: 'none',
      }}/>

      <motion.div
        animate={{
          x: direction === 'left'
            ? ['0%', '-50%']
            : ['-50%', '0%'],
        }}
        transition={{ duration: speed, ease: 'linear', repeat: Infinity }}
        style={{
          display: 'flex',
          gap: 20,
          paddingBottom: 4,
          willChange: 'transform',
          width: 'max-content',
        }}
      >
        {doubled.map((r, i) => (
          <ReviewCard key={i} review={r} />
        ))}
      </motion.div>
    </div>
  );
}

export default function Testimonials() {
  const row1 = TESTIMONIALS.slice(0, 3);
  const row2 = TESTIMONIALS.slice(3, 6);

  return (
    <section id="reviews" style={{ padding: '120px 0', background: 'var(--cream)', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 clamp(24px,4vw,64px)', marginBottom: 72 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 32 }}>
          <div>
            <Reveal><Eyebrow>Patient Stories</Eyebrow></Reveal>
            <Reveal delay={0.1}>
              <SectionTitle>
                Real results,<br/>
                <em style={{ color: 'var(--teal)', fontStyle: 'italic' }}>real smiles</em>
              </SectionTitle>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 20,
              padding: '20px 28px',
              background: 'var(--white)',
              borderRadius: 16,
              boxShadow: '0 2px 12px rgba(12,27,46,0.06)',
            }}>
              <div>
                <span className="display-font block" style={{ fontSize: 48, color: 'var(--navy)', fontWeight: 400, lineHeight: 1 }}>4.8</span>
                <div style={{ display: 'flex', gap: 3, marginTop: 6 }}>
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#F59E0B">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
              </div>
              <div style={{ width: 1, height: 50, background: 'var(--border)' }}/>
              <div>
                <div style={{ fontSize: 13, color: 'var(--text-muted)', fontWeight: 300 }}>Google Reviews</div>
                <div style={{ fontSize: 20, fontWeight: 600, color: 'var(--navy)', marginTop: 2 }}>4,083</div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <ReviewRow reviews={[...row1, ...row2]} direction="left" speed={40} />
        <ReviewRow reviews={[...row2, ...row1]} direction="right" speed={50} />
      </div>
    </section>
  );
}
