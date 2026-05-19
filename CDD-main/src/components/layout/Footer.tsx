import { Link } from "react-router-dom";
import { GraduationCap, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="content-width">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="p-2 bg-primary rounded-lg">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-white italic">CDD Global</span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Leading the transformation of education through curriculum innovation, instructional design, and strategic academic partnerships worldwide.
            </p>
            <div className="flex space-x-4">
              <Link to="#" className="hover:text-primary transition-colors"><Twitter className="w-5 h-5" /></Link>
              <Link to="#" className="hover:text-primary transition-colors"><Linkedin className="w-5 h-5" /></Link>
              <Link to="#" className="hover:text-primary transition-colors"><Facebook className="w-5 h-5" /></Link>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-6 uppercase tracking-wider text-xs">Departments</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/curriculum" className="hover:text-white transition-colors">Higher Education</Link></li>
              <li><Link to="/curriculum" className="hover:text-white transition-colors">K-12 Frameworks</Link></li>
              <li><Link to="/curriculum" className="hover:text-white transition-colors">Vocational Training</Link></li>
              <li><Link to="/resources" className="hover:text-white transition-colors">Digital Learning</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-6 uppercase tracking-wider text-xs">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">Mission & Vision</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Service Directory</Link></li>
              <li><Link to="/partners" className="hover:text-white transition-colors">Global Partners</Link></li>
              <li><Link to="/news" className="hover:text-white transition-colors">Press & Updates</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-6 uppercase tracking-wider text-xs">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3 text-slate-400">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>123 Academic Plaza, Education District, Global City</span>
              </li>
              <li className="flex items-center space-x-3 text-slate-400">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+1 (555) 234-5678</span>
              </li>
              <li className="flex items-center space-x-3 text-slate-400">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>office@cddglobal.edu</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>© 2026 Curriculum Development Department. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="hover:text-white">Privacy Policy</Link>
            <Link to="#" className="hover:text-white">Terms of Service</Link>
            <Link to="#" className="hover:text-white">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
