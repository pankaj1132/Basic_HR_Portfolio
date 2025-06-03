

const HeroSection = () => {
  return (
   <>
  <section className="relative w-full min-h-[300px] bg-gradient-to-b from-[#f9f7ff] to-[#8974e0] overflow-hidden">
   <div className="max-w-7xl mx-auto px-6 py-20 md:py-26 lg:py-32 pb-0 flex flex-col justify-center h-full">
    <h1 className="text-[3.5rem] md:text-[5rem] lg:text-[4rem] font-extrabold text-[#121232] leading-[1.1] max-w-lg">
     Your HR Department
     <br/>
     On Retainer On Demand
    </h1>
    <p className="mt-6 max-w-md text-[#2c2c4c] text-lg font-normal leading-relaxed">
     Affordable, expert-led HR services for growing businesses—without the need to hire an in-house team.
    </p>
    <div className="flex gap-4 mt-10">
      <a href="#book-consultation" className="bg-[#7c3aed] text-white text-lg font-semibold rounded-full px-8 py-3 w-max hover:bg-[#5000ca] transition-colors" type="button">
        Book a Free Consultation
      </a>
      <a href="#see-pricing" className="bg-white border border-[#7c3aed] text-[#7c3aed] text-lg font-semibold rounded-full px-8 py-3 w-max hover:bg-[#f3e8ff] transition-colors" type="button">
        See Pricing
      </a>
    </div>
   </div>
   <div className='h-fit w-full mt-10'>

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#5000ca" fill-opacity="0.5" d="M0,192L48,186.7C96,181,192,171,288,192C384,213,480,267,576,266.7C672,267,768,213,864,170.7C960,128,1056,96,1152,69.3C1248,43,1344,21,1392,10.7L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg> 
    </div>

  </section>
 </>

  )
}

export default HeroSection