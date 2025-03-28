import { Facebook, Instagram, Twitter, Youtube, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-4 sm:px-6 md:px-8 py-12 overflow-hidden">
      <div className="max-w-screen-xl mx-auto">
        {/* Centered Grid Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-10 justify-center text-center">
          {/* 1. Name & Address */}
          <div>
            <h2 className="text-xl font-semibold mb-2">Vastrama</h2>
            <p className="text-sm text-gray-400">
              Anand Niwas 3-2580 Cross Road No. 1,<br />
              Ambala Cantt, HR, India - 133001<br />
              support@vastrama.com
            </p>
          </div>

          {/* 2. Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Company</h3>
            <ul className="text-sm text-gray-300 space-y-1">
              <li><a href="#about" className="hover:text-white">About Us</a></li>
              <li><a href="#careers" className="hover:text-white">Careers</a></li>
              <li><a href="#partners" className="hover:text-white">Business Partners</a></li>
              <li><a href="#terms" className="hover:text-white">Terms and Conditions</a></li>
              <li><a href="#return" className="hover:text-white">Return & Refund Policy</a></li>
            </ul>
          </div>

          {/* 3. Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex justify-center gap-4 mt-2">
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <Facebook className="hover:text-blue-400" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer">
                <Youtube className="hover:text-red-500" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <Instagram className="hover:text-pink-400" />
              </a>
              <a href="https://www.threads.net" target="_blank" rel="noreferrer">
                <Globe className="hover:text-white" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <Twitter className="hover:text-blue-300" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Vastrama. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;