

import HeroSection from '../components/HeroSection';
import Calender from '../components/Calender';
import AboutUs from '../components/AboutUs';
import WhatWeDo from '../components/whatweD0';
import Founder from '../components/Founder';
import Services from '../components/Services';

const HomePage: React.FC = () => {
  return (
    <>
     
      <HeroSection />
      <div id="book-consultation">
        <Calender />
      </div>
      <div id="see-pricing" />
      <Founder />
      <AboutUs />
      <WhatWeDo />
      <Services />
    
    </>
  );
};

export default HomePage;
