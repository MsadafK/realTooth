import { motion } from 'framer-motion';

const LINKS = {
  Navigation: [
    { label: 'Services', href: '#services' },
    { label: 'About Us', href: '#about' },
    { label: 'Locations', href: '#locations' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'FAQ', href: '#faq' },
  ],
  Treatments: [
    { label: 'Dental Services', href: '#' },
    { label: 'Orthodontics', href: '#' },
    { label: 'Restorative Dentistry', href: '#' },
    { label: 'Teeth Cleaning', href: '#' },
    { label: 'Laser Dentistry', href: '#' },
    { label: 'Smile Design', href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer style={{ background: 'var(--navy)', color: 'var(--cream)', padding: '80px 0 40px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 clamp(24px,4vw,64px)' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '48px 64px',
          marginBottom: 64,
        }}>
          {/* Brand col */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
              <div style={{
                width: 36, height: 36,
                background: 'rgba(246,241,233,0.1)',
                borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold-2)" strokeWidth="1.5">
                  <path d="M9 3C7.3 3 6 4.3 6 6c0 1.5.7 2.8.7 4.2C6.7 12.5 7.7 15 9.5 15s2.8-2.5 2.8-4.8c0-1.4.7-2.7.7-4.2C13 4.3 11.7 3 10 3H9z" strokeLinecap="round"/>
                  <path d="M14.5 3c-1.7 0-3 1.3-3 3 0 1.5.7 2.8.7 4.2 0 2.3 1 4.8 2.8 4.8s2.8-2.5 2.8-4.8c0-1.4.7-2.7.7-4.2C18.5 4.3 17.2 3 15.5 3h-1z" strokeLinecap="round"/>
                  <path d="M10 15c0 2.2.8 6 2 6s2-3.8 2-6" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="display-font" style={{ fontSize: 22, fontWeight: 400, color: 'var(--cream)' }}>
                Realtooth
              </span>
            </div>

            <p style={{ fontSize: 14, color: 'rgba(246,241,233,0.45)', fontWeight: 300, lineHeight: 1.8, marginBottom: 28, maxWidth: 260 }}>
              Exceptional dental care across four Lucknow locations. Founded 2004 by Dr. Amit & Dr. Arpita Anand.
            </p>

            {/* Rating */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 16,
              background: 'rgba(246,241,233,0.06)',
              border: '1px solid rgba(246,241,233,0.1)',
              borderRadius: 12,
              padding: '14px 18px',
            }}>
              <div>
                <div className="display-font" style={{ fontSize: 22, color: 'var(--cream)', lineHeight: 1, fontWeight: 400 }}>4.8 ★</div>
                <div style={{ fontSize: 11, color: 'rgba(246,241,233,0.4)', marginTop: 4 }}>Google Rating</div>
              </div>
              <div style={{ width: 1, height: 36, background: 'rgba(246,241,233,0.1)' }}/>
              <div>
                <div className="display-font" style={{ fontSize: 22, color: 'var(--cream)', lineHeight: 1, fontWeight: 400 }}>4,083</div>
                <div style={{ fontSize: 11, color: 'rgba(246,241,233,0.4)', marginTop: 4 }}>Patient Reviews</div>
              </div>
            </div>
          </div>

          {/* Link cols */}
          {Object.entries(LINKS).map(([heading, links]) => (
            <div key={heading}>
              <div style={{
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'rgba(246,241,233,0.35)',
                marginBottom: 24,
              }}>
                {heading}
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
                {links.map(link => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      style={{
                        color: 'rgba(246,241,233,0.6)',
                        textDecoration: 'none',
                        fontSize: 15,
                        fontWeight: 300,
                        transition: 'color 0.2s',
                        letterSpacing: '0.01em',
                      }}
                      onMouseEnter={e => e.target.style.color = 'var(--cream)'}
                      onMouseLeave={e => e.target.style.color = 'rgba(246,241,233,0.6)'}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact col */}
          <div>
            <div style={{
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'rgba(246,241,233,0.35)',
              marginBottom: 24,
            }}>
              Contact
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              {[
                {
                  icon: <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>,
                  text: 'C-117 H Sector A, Mandir Marg,\nMahanagar, Lucknow 226006',
                  href: 'https://maps.google.com/maps?cid=5821700224026650857',
                },
                {
                  icon: <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>,
                  text: '+91 80811 51138',
                  href: 'tel:+918081151138',
                },
                {
                  icon: <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>,
                  text: 'ceo.realtooth@gmail.com',
                  href: 'mailto:ceo.realtooth@gmail.com',
                },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  style={{
                    display: 'flex',
                    gap: 12,
                    alignItems: 'flex-start',
                    textDecoration: 'none',
                  }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="var(--gold)" style={{ flexShrink: 0, marginTop: 2 }}>
                    {item.icon}
                  </svg>
                  <span style={{
                    fontSize: 14,
                    color: 'rgba(246,241,233,0.55)',
                    fontWeight: 300,
                    lineHeight: 1.65,
                    whiteSpace: 'pre-line',
                    transition: 'color 0.2s',
                  }}
                    onMouseEnter={e => e.target.style.color = 'var(--gold-2)'}
                    onMouseLeave={e => e.target.style.color = 'rgba(246,241,233,0.55)'}
                  >
                    {item.text}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          paddingTop: 32,
          borderTop: '1px solid rgba(246,241,233,0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 20,
          flexWrap: 'wrap',
        }}>
          <p style={{ fontSize: 13, color: 'rgba(246,241,233,0.3)', fontWeight: 300 }}>
            © 2026 Realtooth Dental Group. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: 24 }}>
            {[
              { label: 'Terms', href: 'https://zoca.com/terms-of-use' },
              { label: 'Privacy Policy', href: 'https://zoca.com/privacy' },
            ].map(link => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  fontSize: 13,
                  color: 'rgba(246,241,233,0.3)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.target.style.color = 'rgba(246,241,233,0.65)'}
                onMouseLeave={e => e.target.style.color = 'rgba(246,241,233,0.3)'}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
