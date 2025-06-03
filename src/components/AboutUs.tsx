const AboutUs = () => {
  return (
    <div>
      <main  id="about" className="max-w-7xl mx-auto px-6 py-16 animate-fade-in-up">
        <section className="flex flex-col md:flex-row items-center md:items-start gap-12">
          <img 
            alt="Person standing on a hill with mountains in the background in grayscale" 
            className="rounded-lg w-full md:w-[600px] object-cover shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 ease-in-out animate-fade-in-left" 
            height="400" 
            src="https://storage.googleapis.com/a1aa/image/4d7ba0b2-1c40-4cbf-a00b-6c1d9ecd0e5f.jpg" 
            width="600"
          />
          <div className="max-w-xl animate-fade-in-right">
            <h2 className="text-4xl font-bold text-gray-900 py-4 animate-fade-in-up">About Us</h2>
            <p className="text-xs font-semibold tracking-widest mb-2 animate-fade-in-up delay-100">Who</p>
            <h1 className="text-3xl font-bold mb-4 leading-tight animate-fade-in-up delay-200">WE are QuikHR</h1>
            <p className="text-base leading-relaxed animate-fade-in-up delay-300">
              QuikHR was born out of a simple idea—small businesses deserve great HR too. We’re not just consultants; we become your HR team, embedding ourselves into your culture and operations so you can focus on building your business, while we build your people.
            </p>
          </div>
        </section>
      </main>
      <style>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(60px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInLeft {
          0% { opacity: 0; transform: translateX(-60px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInRight {
          0% { opacity: 0; transform: translateX(60px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s cubic-bezier(0.23, 1, 0.32, 1) both;
        }
        .animate-fade-in-left {
          animation: fadeInLeft 1.2s cubic-bezier(0.23, 1, 0.32, 1) both;
        }
        .animate-fade-in-right {
          animation: fadeInRight 1.2s cubic-bezier(0.23, 1, 0.32, 1) both;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
      `}</style>
    </div>
  );
};

export default AboutUs;
