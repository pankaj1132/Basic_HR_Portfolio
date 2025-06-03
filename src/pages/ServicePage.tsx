import React from 'react';

const serviceGroups = [
  {
    title: 'HR Setup & Compliance',
    items: [
      'HR policy design and implementation',
      'Employee handbook creation',
      'Statutory compliance (PF, ESI, Shops & Establishments, Gratuity, etc.)',
      'Drafting employment contracts and letters',
      'HR audits and process alignment',
    ],
  },
  {
    title: 'Hiring & Onboarding',
    items: [
      'End-to-end recruitment support',
      'Job descriptions and role clarity',
      'Screening and scheduling',
      'Offer letter generation',
      'Structured onboarding processes',
      'Background verification coordination',
    ],
  },
  {
    title: 'Payroll & HR Operations',
    items: [
      'Payroll processing',
      'Salary structuring and CTC breakdowns',
      'Leave & attendance tracking systems',
      'Reimbursements and F&F settlement',
      'Payroll compliance (TDS, PF, ESI, PT, etc.)',
    ],
  },
  {
    title: 'Performance Management',
    items: [
      'Setting up KRAs & KPIs',
      'Appraisal cycles and review frameworks',
      '360-degree feedback systems',
      'Performance improvement plans (PIPs)',
      'Growth path and promotion structures',
    ],
  },
  {
    title: 'Employee Engagement & Culture Building',
    items: [
      'Team-building games and HR-led bonding activities',
      'Birthday/anniversary celebrations',
      'Pulse surveys and feedback loops',
      'Employee recognition programs',
      'Monthly HR reports and health check-ins',
    ],
  },
  {
    title: 'Trainings & Development',
    items: [
      'Soft skills training (communication, collaboration, etc.)',
      'Leadership & managerial workshops',
      'HR policies & compliance awareness sessions',
      'Custom L&D programs based on team needs',
    ],
  },
  {
    title: 'Exit Management',
    items: [
      'Resignation handling and exit interviews',
      'Clearance processes',
      'Documentation & compliance',
      'Knowledge transfer facilitation',
      'Retention strategy analysis',
    ],
  },
  {
    title: 'HR Tech & Automation',
    items: [
      'HRMS tool recommendations and setup',
      'Digitizing attendance, leaves, documents',
      'Templates & trackers for processes',
      'Analytics dashboards and reporting',
    ],
  },
];

const pricing = [
  { team: '1 – 20 Employees', fee: '₹25,000' },
  { team: '21 – 30 Employees', fee: '₹35,000' },
  { team: '31 – 50 Employees', fee: '₹50,000' },
];

const ServicePage = () => {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif', background: '#f8fafc', minHeight: '100vh', position: 'relative', overflow: 'hidden', paddingTop: 80 }}>
      
      <svg style={{ position: 'absolute', top: -120, left: -120, zIndex: 0, filter: 'blur(40px)' }} width="600" height="600" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="300" cy="300" rx="300" ry="300" fill="#6366F1" fillOpacity="0.18" />
      </svg>

      <section style={{ background: 'linear-gradient(120deg, #6366F1 0%, #818CF8 50%, #a5b4fc 100%)', color: '#fff', padding: '60px 0 40px 0', textAlign: 'center', position: 'relative', zIndex: 1, boxShadow: '0 8px 32px 0 rgba(99,102,241,0.10)' }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          background: 'radial-gradient(circle at 60% 40%, #818CF8 0%, transparent 70%)',
          opacity: 0.25,
          pointerEvents: 'none',
        }} />
        <h1 style={{ fontSize: '2.8rem', fontWeight: 700, marginBottom: 12, position: 'relative', zIndex: 1 }}>Our Services – QuikHR</h1>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 500, marginBottom: 10, position: 'relative', zIndex: 1 }}>Complete HR. One Retainer. Zero Headaches.</h2>
        <p style={{ fontSize: '1.1rem', maxWidth: 600, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          Whether you’re just starting out or scaling fast, QuikHR becomes your extended HR team—taking care of everything people-related while you grow your business.
        </p>
      </section>


      <section style={{ maxWidth: 1200, margin: '40px auto', padding: '0 20px', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 36 }}>
          {serviceGroups.map((group, idx) => (
            <div
              key={group.title}
              style={{
                background: '#fff',
                borderRadius: 18,
                boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
                padding: 32,
                transition: 'transform 0.3s, box-shadow 0.3s, border 0.3s',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden',
                animation: `fadeInUp 0.7s cubic-bezier(.23,1.01,.32,1) ${0.1 * idx}s both`,
                border: '2px solid transparent',
              }}
              onMouseOver={e => {
                e.currentTarget.style.transform = 'translateY(-10px) scale(1.04)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(99,102,241,0.18)';
                e.currentTarget.style.border = '2px solid #6366F1';
              }}
              onMouseOut={e => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.08)';
                e.currentTarget.style.border = '2px solid transparent';
              }}
            >
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#4F46E5', marginBottom: 16 }}>{group.title}</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {group.items.map((item, i) => (
                  <li key={i} style={{ color: '#334155', fontSize: '1.05rem', marginBottom: 10, display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                    <span style={{ color: '#6366F1', fontWeight: 700, fontSize: '1.1rem', marginRight: 6 }}>•</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section style={{ width: '100%', margin: '60px 0 0 0', background: '#fff', borderRadius: 16, boxShadow: '0 4px 24px rgba(0,0,0,0.07)', padding: 36, textAlign: 'center', position: 'relative', zIndex: 1, overflow: 'hidden', animation: 'fadeInWide 1s cubic-bezier(.23,1.01,.32,1) both' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 10, color: '#4F46E5', letterSpacing: 0.5 }}>💼 Simple Pricing. Full Support.</h2>
        <table style={{ width: '90%', maxWidth: 900, margin: '24px auto', borderCollapse: 'separate', borderSpacing: 0, borderRadius: 12, overflow: 'hidden', boxShadow: '0 2px 12px rgba(99,102,241,0.07)' }}>
          <thead>
            <tr style={{ background: '#f1f5f9', animation: 'fadeInRow 1.2s 0.2s both' }}>
              <th style={{ padding: 16, fontWeight: 600, color: '#334155', fontSize: '1.15rem', borderRadius: 8 }}>Team Size</th>
              <th style={{ padding: 16, fontWeight: 600, color: '#334155', fontSize: '1.15rem', borderRadius: 8 }}>Monthly Retainer Fee</th>
            </tr>
          </thead>
          <tbody>
            {pricing.map((row, idx) => (
              <tr key={row.team} style={{ background: idx % 2 === 0 ? '#f8fafc' : '#fff', transition: 'background 0.3s', animation: `fadeInRow 1s ${0.3 + idx * 0.1}s both` }}>
                <td style={{ padding: 16, fontWeight: 500 }}>{row.team}</td>
                <td style={{ padding: 16, fontWeight: 500 }}>{row.fee}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{ color: '#64748b', fontSize: '1rem', marginBottom: 8, animation: 'fadeInRow 1.2s 0.5s both' }}>No lock-ins. Just people-first HR support that grows with your team.</div>
        <style>{`
          @keyframes fadeInWide {
            0% { opacity: 0; transform: scaleX(0.95) translateY(40px); }
            100% { opacity: 1; transform: scaleX(1) translateY(0); }
          }
          @keyframes fadeInRow {
            0% { opacity: 0; transform: translateY(30px); }
            100% { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </section>


      <section style={{ textAlign: 'center', margin: '60px 0 40px 0', position: 'relative', zIndex: 1 }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 16 }}>Contact Us – Let’s Talk HR</h2>
        <p style={{ fontSize: '1.1rem', maxWidth: 600, margin: '0 auto 18px auto', color: '#334155' }}>
          We’re here to simplify your HR, so you can focus on what you do best—building your business.<br />
          Whether you’re ready to start or just exploring how QuikHR can help, let’s connect.
        </p>
        <a href="tel:+919999999999" style={{ background: '#4F46E5', color: '#fff', padding: '14px 36px', borderRadius: 8, fontWeight: 600, textDecoration: 'none', fontSize: '1.1rem', boxShadow: '0 2px 8px rgba(79,70,229,0.15)', display: 'inline-block', marginBottom: 8, transition: 'background 0.2s' }}
          onMouseOver={e => (e.currentTarget.style.background = '#6366F1')}
          onMouseOut={e => (e.currentTarget.style.background = '#4F46E5')}
        >
          📞 Book a Free HR Consultation
        </a>
        <div style={{ color: '#64748b', fontSize: '0.98rem', marginTop: 6 }}>
          Speak directly with our founder or a senior HR expert. We’ll understand your needs, show you what we do, and suggest the best retainer plan for your team.
        </div>
      </section>


      <style>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default ServicePage;