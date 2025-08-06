import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Linkedin, 
  Twitter, 
  Facebook, 
  Mail, 
  MapPin, 
  Phone,
  ChevronDown
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const featuresLinks = [
    { name: "Recruitment Management", href: "/features/recruitment-management" },
    { name: "Attendance and Leave", href: "/features/attendance-and-leave" },
    { name: "Payroll and Compliance", href: "/features/payroll-and-compliance" },
    { name: "Performance Appraisal", href: "/features/performance-appraisal" },
    { name: "Self Service Portal", href: "/features/self-service-portal" },
    { name: "Exit Management", href: "/features/exit-management" },
    { name: "Mobile App", href: "/features/mobile-app" },
  ];

  const resourcesLinks = [
    { name: "Blog", href: "/resources/blog" },
    { name: "Use Cases", href: "/resources/use-cases" },
    { name: "Community", href: "/resources/community" },
  ];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    setEmail("");
  };

  return (
    <footer className="bg-gray-900 text-gray-100">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/2aaf2fda-9fcb-425a-86fc-4b2bc5b1ead0.png" 
                alt="OfficeKit" 
                className="h-8 w-auto brightness-0 invert"
              />
            </Link>
            
            <p className="text-gray-300 leading-relaxed">
              Simplifying HR for everyone with smart, fast, and intuitive solutions that help your team focus on what truly matters.
            </p>
            
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-800"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-800"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-800"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <div className="space-y-3">
              <Link to="/about-us" className="block text-gray-300 hover:text-white transition-colors">
                About Us
              </Link>
              <Link to="/pricing" className="block text-gray-300 hover:text-white transition-colors">
                Pricing
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-white transition-colors">
                Contact Us
              </Link>
              
              {/* Features Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors">
                  <span>Features</span>
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-64 bg-gray-800 border-gray-700">
                  {featuresLinks.map((link) => (
                    <DropdownMenuItem key={link.href} asChild>
                      <Link 
                        to={link.href}
                        className="text-gray-300 hover:text-white hover:bg-gray-700"
                      >
                        {link.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Resources */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Resources</h3>
            <div className="space-y-3">
              {resourcesLinks.map((link) => (
                <Link 
                  key={link.href}
                  to={link.href} 
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Stay Updated</h3>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="h-4 w-4" />
                <span className="text-sm">support@officekithr.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+1 (800) 123-4567</span>
              </div>
              <div className="flex items-start space-x-3 text-gray-300">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span className="text-sm">
                  123 Business Ave, Suite 456<br />
                  San Francisco, CA 94102
                </span>
              </div>
            </div>
            
            {/* Newsletter */}
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                required
              />
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                Subscribe to Newsletter
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 OfficeKit. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;