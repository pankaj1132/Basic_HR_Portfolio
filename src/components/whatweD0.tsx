

const WhatWeDo = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-0 animate-fade-in-up">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-4 text-purple-700 drop-shadow-lg tracking-wide">
          What We Do <span className="text-black">(And Do Really Well)</span>
        </h2>
        <p className="text-center text-lg text-gray-600 mb-10 max-w-2xl mx-auto italic">
          We take care of everything an HR department should—plus more:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         
          <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl shadow-lg p-8 flex flex-col items-center hover:scale-105 transition-transform duration-300">
            <span className="text-4xl mb-2 animate-bounce">✅</span>
            <h3 className="text-xl font-bold mb-4 text-purple-700">Core HR Services</h3>
            <ul className="text-gray-700 space-y-3 list-disc list-inside text-base">
              <li>HR policy design & employee handbooks</li>
              <li>Hiring support & onboarding</li>
              <li>Payroll processing & compliance</li>
              <li>Performance management systems</li>
              <li>Exit management</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl shadow-lg p-8 flex flex-col items-center hover:scale-105 transition-transform duration-300">
            <span className="text-4xl mb-2 animate-bounce">🎯</span>
            <h3 className="text-xl font-bold mb-4 text-purple-700">HR for Growth</h3>
            <ul className="text-gray-700 space-y-3 list-disc list-inside text-base">
              <li>Structuring KRAs & goal-setting frameworks</li>
              <li>Appraisal processes & performance feedback</li>
              <li>HR audits & compliance checklists</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl shadow-lg p-8 flex flex-col items-center hover:scale-105 transition-transform duration-300">
            <span className="text-4xl mb-2 animate-bounce">🎉</span>
            <h3 className="text-xl font-bold mb-4 text-purple-700">Team Building & Culture</h3>
            <ul className="text-gray-700 space-y-3 list-disc list-inside text-base">
              <li>Engagement activities & virtual games</li>
              <li>Monthly HR-led team bonding sessions</li>
              <li>Rewards & recognition programs</li>
              <li>Employee wellness and motivation drives</li>
              <li>Custom training & workshops (leadership, communication, etc.)</li>
            </ul>
          </div>
        </div>
        <p className="text-center text-xl text-purple-800 font-semibold mt-12 max-w-2xl mx-auto bg-purple-50 rounded-lg py-4 shadow-md">
          We believe a happy, aligned team is your biggest growth hack—and we help you create just that.
        </p>
      </div>
    </section>
  );
};

export default WhatWeDo;
