import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SERVICES_LIST = [
  'General Check-Up & Consultation',
  'Braces / Clear Aligners',
  'Dental Implants',
  'Crowns & Bridges',
  'Veneers / Smile Design',
  'Teeth Cleaning & Whitening',
  'Emergency Dental Care',
  'Root Canal Treatment',
  'Tooth Extraction',
  'Other / Not Sure',
];

const BRANCHES = [
  'Mahanagar (Main Branch)',
  'Gomti Nagar',
  'Aliganj',
  'Butler Colony',
];

function Input({ label, type = 'text', placeholder, value, onChange, required }) {
  const [focused, setFocused] = useState(false);
  return (
    <div style={{ marginBottom: 18 }}>
      <label style={{
        display: 'block',
        fontSize: 11,
        fontWeight: 500,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: 'var(--text-muted)',
        marginBottom: 8,
      }}>
        {label}{required && <span style={{ color: 'var(--teal)', marginLeft: 3 }}>*</span>}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          width: '100%',
          padding: '13px 16px',
          border: `1px solid ${focused ? 'var(--teal)' : 'var(--border)'}`,
          borderRadius: 10,
          fontFamily: 'Outfit, sans-serif',
          fontSize: 15,
          color: 'var(--navy)',
          background: focused ? 'white' : 'var(--cream)',
          outline: 'none',
          transition: 'all 0.25s ease',
          boxShadow: focused ? '0 0 0 3px rgba(27,122,138,0.12)' : 'none',
        }}
      />
    </div>
  );
}

function Select({ label, options, value, onChange, required }) {
  const [focused, setFocused] = useState(false);
  return (
    <div style={{ marginBottom: 18 }}>
      <label style={{
        display: 'block',
        fontSize: 11,
        fontWeight: 500,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: 'var(--text-muted)',
        marginBottom: 8,
      }}>
        {label}{required && <span style={{ color: 'var(--teal)', marginLeft: 3 }}>*</span>}
      </label>
      <select
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          width: '100%',
          padding: '13px 16px',
          border: `1px solid ${focused ? 'var(--teal)' : 'var(--border)'}`,
          borderRadius: 10,
          fontFamily: 'Outfit, sans-serif',
          fontSize: 15,
          color: value ? 'var(--navy)' : 'var(--text-muted)',
          background: focused ? 'white' : 'var(--cream)',
          outline: 'none',
          transition: 'all 0.25s ease',
          boxShadow: focused ? '0 0 0 3px rgba(27,122,138,0.12)' : 'none',
          appearance: 'none',
          cursor: 'pointer',
        }}
      >
        <option value="">Select...</option>
        {options.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}

export default function BookingModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1); // 1 = form, 2 = success
  const [form, setForm] = useState({
    firstName: '', lastName: '', phone: '', email: '', branch: '', service: '',
  });

  const handleSubmit = () => {
    if (!form.firstName || !form.phone || !form.branch) return;
    setStep(2);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => { setStep(1); setForm({ firstName: '', lastName: '', phone: '', email: '', branch: '', service: '' }); }, 400);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            style={{
              position: 'fixed', inset: 0,
              background: 'rgba(12,27,46,0.65)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              zIndex: 500,
            }}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ type: 'spring', damping: 28, stiffness: 300 }}
            style={{
              position: 'fixed',
              top: '50%', left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 600,
              width: 'min(540px, 95vw)',
              maxHeight: '90vh',
              overflowY: 'auto',
              background: 'white',
              borderRadius: 24,
              boxShadow: '0 40px 100px rgba(12,27,46,0.35)',
            }}
          >
            {step === 1 ? (
              <div style={{ padding: 'clamp(28px, 5vw, 48px)' }}>
                {/* Close */}
                <motion.button
                  onClick={handleClose}
                  whileHover={{ background: 'var(--navy)', color: 'white' }}
                  style={{
                    position: 'absolute', top: 20, right: 20,
                    width: 36, height: 36,
                    borderRadius: '50%',
                    border: '1px solid var(--border)',
                    background: 'transparent',
                    fontSize: 18,
                    cursor: 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--text-muted)',
                    transition: 'all 0.2s',
                  }}
                >
                  ✕
                </motion.button>

                <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 8 }}>
                  Book an Appointment
                </div>
                <h3
                  className="display-font mb-8"
                  style={{ fontSize: 34, fontWeight: 400, color: 'var(--navy)', lineHeight: 1.2, marginBottom: 32 }}
                >
                  Secure your spot at<br/>Realtooth
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 16px' }}>
                  <Input label="First Name" placeholder="Rahul" value={form.firstName} onChange={e => setForm(f => ({ ...f, firstName: e.target.value }))} required />
                  <Input label="Last Name" placeholder="Sharma" value={form.lastName} onChange={e => setForm(f => ({ ...f, lastName: e.target.value }))} />
                </div>
                <Input label="Mobile Number" type="tel" placeholder="+91 98765 43210" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} required />
                <Input label="Email Address" type="email" placeholder="rahul@example.com" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
                <Select label="Preferred Branch" options={BRANCHES} value={form.branch} onChange={e => setForm(f => ({ ...f, branch: e.target.value }))} required />
                <Select label="Treatment Required" options={SERVICES_LIST} value={form.service} onChange={e => setForm(f => ({ ...f, service: e.target.value }))} />

                <motion.button
                  onClick={handleSubmit}
                  whileHover={{ y: -2, boxShadow: '0 12px 36px rgba(27,122,138,0.4)' }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    width: '100%',
                    padding: '16px',
                    background: 'var(--navy)',
                    color: 'var(--cream)',
                    border: 'none',
                    borderRadius: 100,
                    fontSize: 16,
                    fontWeight: 500,
                    fontFamily: 'Outfit, sans-serif',
                    cursor: 'pointer',
                    marginTop: 8,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                    transition: 'background 0.3s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = 'var(--teal)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'var(--navy)'}
                >
                  Confirm Appointment
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.button>

                <p style={{ fontSize: 12, color: 'var(--text-muted)', textAlign: 'center', marginTop: 14, fontWeight: 300 }}>
                  We'll confirm your appointment within 2 hours. No prepayment required.
                </p>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                style={{ padding: 'clamp(40px, 6vw, 60px)', textAlign: 'center' }}
              >
                <motion.div
                  initial={{ scale: 0, rotate: -10 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                  style={{
                    width: 80, height: 80,
                    borderRadius: '50%',
                    background: 'var(--teal)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 28px',
                    fontSize: 32, color: 'white',
                  }}
                >
                  ✓
                </motion.div>
                <h3
                  className="display-font mb-4"
                  style={{ fontSize: 36, fontWeight: 400, color: 'var(--navy)', lineHeight: 1.2 }}
                >
                  Appointment Requested!
                </h3>
                <p style={{ fontSize: 16, color: 'var(--text-muted)', fontWeight: 300, lineHeight: 1.8, marginBottom: 36 }}>
                  Thank you, {form.firstName}! Our team will call you within 2 hours to confirm your appointment at the {form.branch || 'selected'} branch.
                </p>
                <motion.button
                  onClick={handleClose}
                  whileHover={{ y: -2 }}
                  style={{
                    padding: '14px 40px',
                    background: 'var(--navy)',
                    color: 'var(--cream)',
                    border: 'none',
                    borderRadius: 100,
                    fontSize: 15,
                    fontWeight: 500,
                    fontFamily: 'Outfit, sans-serif',
                    cursor: 'pointer',
                  }}
                >
                  Back to Site
                </motion.button>
              </motion.div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
