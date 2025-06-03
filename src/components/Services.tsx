import React from 'react';

const services = [
  {
    title: 'HR Setup & Compliance',
    icon: '🛡️',
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
    icon: '🤝',
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
    icon: '💸',
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
    icon: '📈',
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
    icon: '🎉',
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
    icon: '🎓',
    items: [
      'Soft skills training (communication, collaboration, etc.)',
      'Leadership & managerial workshops',
      'HR policies & compliance awareness sessions',
      'Custom L&D programs based on team needs',
    ],
  },
  {
    title: 'Exit Management',
    icon: '🚪',
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
    icon: '🤖',
    items: [
      'HRMS tool recommendations and setup',
      'Digitizing attendance, leaves, documents',
      'Templates & trackers for processes',
      'Analytics dashboards and reporting',
    ],
  },
];

const Services = () => {
  return (
    <section className="bg-gradient-to-b from-[#f9f7ff] to-[#e9e4fc] py-20 px-4 animate-fade-in-up">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-2 text-purple-800 drop-shadow-lg tracking-wide animate-fade-in-up">Our Services – QuikHR</h2>
        <p className="text-center text-lg text-gray-600 mb-8 max-w-2xl mx-auto italic animate-fade-in-up delay-100">Complete HR. One Retainer. Zero Headaches.</p>
        <p className="text-center text-base text-gray-700 mb-12 max-w-3xl mx-auto animate-fade-in-up delay-200">
          Whether you’re just starting out or scaling fast, QuikHR becomes your extended HR team—taking care of everything people-related while you grow your business.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, idx) => (
            <div
              key={service.title}
              className={`bg-white rounded-2xl shadow-xl p-8 flex flex-col items-start hover:scale-105 transition-transform duration-300 animate-fade-in-up`}
              style={{ animationDelay: `${100 * idx}ms` }}
            >
              <span className="text-4xl mb-3 animate-bounce">{service.icon}</span>
              <h3 className="text-xl font-bold mb-4 text-purple-700">{service.title}</h3>
              <ul className="text-gray-700 space-y-2 list-disc list-inside text-base">
                {service.items.map((item, i) => (
                  <li key={i} className="transition-opacity duration-500 opacity-80 hover:opacity-100">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(60px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s cubic-bezier(0.23, 1, 0.32, 1) both;
        }
      `}</style>
    </section>
  );
};

export default Services;
