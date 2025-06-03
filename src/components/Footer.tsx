

const Footer = () => {
  return (
  
<div className="bg-black text-white">
  <footer id="footer" className="max-w-7xl mx-auto px-6 py-16">
    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-12 md:gap-0">
      <div className="md:flex-1">
        <h1 className="text-4xl font-extrabold flex items-center gap-1">
          <span className="text-[#E94B0A] font-extrabold">Quick</span>
          <span>Hire</span>
        </h1>
        <div>
          <h2 className="font-semibold text-lg mb-6">Contact Us – Let’s Talk HR</h2>
          <p className="text-gray-400 mb-4 leading-relaxed">
            We’re here to simplify your HR, so you can focus on what you do best—building your business.<br/>
            Whether you’re ready to start or just exploring how QuikHR can help, let’s connect.
          </p>
          <div className="mb-4">
            <span className="font-semibold">📞 Book a Free HR Consultation</span><br/>
            <span className="text-gray-400">Speak directly with our founder or a senior HR expert. We’ll understand your needs, show you what we do, and suggest the best retainer plan for your team.</span><br/>
            <a href="#" className="text-[#E94B0A] underline font-semibold">[Schedule a Call]</a>
          </div>
          <div className="mb-4">
            <span className="font-semibold">📬 Prefer Email?</span><br/>
            <span className="text-gray-400">Drop us a message at:</span><br/>
            <span className="font-semibold">📧 hello@quikhr.in</span><br/>
            <span className="text-gray-400">We’ll get back within 24 hours.</span>
          </div>
          <div className="mb-4">
            <span className="font-semibold">📍 Our Location (Optional)</span><br/>
            <span className="text-gray-400">Based in [City], serving small businesses across India.</span>
          </div>
          <div className="mb-4">
            <span className="font-semibold">🧠 Not sure where to start?</span>
            <ul className="list-disc ml-6 text-gray-400">
              <li>No HR policies? We’ll create your handbook.</li>
              <li>Trouble with hiring? We’ll manage it end-to-end.</li>
              <li>Confused about compliance? We’ve got it handled.</li>
            </ul>
          </div>
        </div>
        <div className="flex gap-4 mt-6">
          <a
            href="#"
            className="bg-purple-700 w-10 h-10 flex items-center justify-center rounded-sm"
            aria-label="Facebook"
          ><i className="fab fa-facebook-f text-white"></i>
          </a>
          <a
            href="#"
            className="bg-purple-700 w-10 h-10 flex items-center justify-center rounded-sm"
            aria-label="Instagram"
          ><i className="fab fa-instagram text-white"></i>
          </a>
          <a
            href="#"
            className="bg-purple-700 w-10 h-10 flex items-center justify-center rounded-sm"
            aria-label="Twitter"
          ><i className="fab fa-twitter text-white"></i>
          </a>
          <a
            href="#"
            className="bg-purple-700 w-10 h-10 flex items-center justify-center rounded-sm"
            aria-label="LinkedIn"
          ><i className="fab fa-linkedin-in text-white"></i>
          </a>
          <a
            href="#"
            className="bg-purple-700 w-10 h-10 flex items-center justify-center rounded-sm"
            aria-label="YouTube"
          ><i className="fab fa-youtube text-white"></i>
          </a>
        </div>
      </div>
      <div className="md:flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        <div>
          <h2 className="font-semibold text-lg mb-6">Useful Links</h2>
          <ul className="space-y-4 text-gray-400">
            <li>About us</li>
            <li>Industries</li>
            <li>Services</li>
            <li>Support</li>
          </ul>
        </div>
        <div>
          <h2 className="font-semibold text-lg mb-6">Core HR Services</h2>
          <ul className="space-y-2 text-gray-400">
            <li>HR policy design & employee handbooks</li>
            <li>Hiring support & onboarding</li>
            <li>Payroll processing & compliance</li>
            <li>Performance management systems</li>
            <li>Exit management</li>
          </ul>
        </div>
        <div>
          <h2 className="font-semibold text-lg mb-6">HR for Growth</h2>
          <ul className="space-y-2 text-gray-400">
            <li>Structuring KRAs & goal-setting frameworks</li>
            <li>Appraisal processes & performance feedback</li>
            <li>HR audits & compliance checklists</li>
          </ul>
        </div>
        <div>
          <h2 className="font-semibold text-lg mb-6">Get Latest Update</h2>
          <p className="text-gray-400 mb-6 leading-relaxed max-w-xs">
            Lorem ipsum dolor sit amet elit tel, lusinal luctusa nec ullamcorper
            mattis pulvin lan.
          </p>
          
        </div>
      </div>
    </div>
    <hr className="border-gray-800 mt-16" />
    <p className="text-gray-400 text-sm mt-6">
      Copyright © 2024 QuickHire | All Rights Reserved
    </p>
  </footer>
</div>

  );
};

export default Footer;
