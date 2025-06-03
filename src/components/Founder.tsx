const Founder = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 animate-fade-in-up">
      <div className="flex flex-col md:flex-row items-center gap-12">
      
        <div className="flex-1 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl shadow-2xl p-10 flex flex-col items-center md:items-start text-center md:text-left">
          <img
            src="https://randomuser.me/api/portraits/women/68.jpg"
            alt="Ayushi Yadav, Founder"
            className="w-40 h-40 rounded-full object-cover mb-6 border-4 border-purple-300 shadow-lg"
          />
          <h2 className="text-3xl font-extrabold text-purple-800 mb-2">Meet the Founder</h2>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Ayushi Yadav</h3>
          <p className="text-base text-gray-700 mb-4">
            Ayushi Yadav brings 8 years of rich experience in Human Resources, having worked across various industries and later founding a tech organization herself. Her journey has given her deep insights into the unique HR challenges faced by startups and small businesses.
          </p>
          <p className="text-base text-gray-700 mb-4">
            A strong believer in <span className="italic text-purple-700">"skills can be taught, but passion must be felt"</span>, Ayushi blends structure with empathy. As a cultural leader, she builds HR systems that empower teams, drive ownership, and cultivate purpose.
          </p>
        </div>
      
        <div className="flex-1 flex flex-col gap-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-purple-400">
            <h4 className="text-2xl font-bold text-purple-700 mb-2">Our Mission</h4>
            <p className="text-gray-700 text-base">
              To simplify HR for small businesses through flexible, affordable, and expert-led solutions that build strong, scalable, and compliant people practices.
            </p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl shadow p-8">
            <h4 className="text-2xl font-bold text-purple-700 mb-4">What Makes Us Different</h4>
            <ul className="list-disc pl-6 space-y-2 text-gray-800 text-base">
              <li><span className="font-semibold text-purple-700">Founder-led, founder-minded</span></li>
              <li>Hands-on, not high-level</li>
              <li>Affordable retainers with enterprise-grade support</li>
              <li>Focus on people-first culture, not just paperwork</li>
              <li>Real humans, not just HR tech</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
