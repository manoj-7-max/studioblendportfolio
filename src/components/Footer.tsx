import { Instagram, Linkedin, Twitter, Mail } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import logo from "figma:asset/0f58fc00af79807b4dc2033200003759b625805d.png";

export function Footer() {
  return (
    <footer className="bg-[#36454F] text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <ImageWithFallback
                src={logo}
                alt="studioblend logo"
                className="h-12 w-12 object-contain rounded-md"
              />
              <h3 className="text-[#F8C94E]">studioblend</h3>
            </div>
            <p className="text-white/70 text-sm">
              Making brands stand out digitally with creative solutions.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-[#F8C94E] transition-colors duration-300"
                >
                  Video Editing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-[#F8C94E] transition-colors duration-300"
                >
                  Graphic Design
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-[#F8C94E] transition-colors duration-300"
                >
                  Social Media
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-[#F8C94E] transition-colors duration-300"
                >
                  Branding
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-[#F8C94E] transition-colors duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-[#F8C94E] transition-colors duration-300"
                >
                  Our Work
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-[#F8C94E] transition-colors duration-300"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-[#F8C94E] transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4">Get In Touch</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:studioblend0@gmail.com"
                  className="text-white/70 hover:text-[#F8C94E] transition-colors duration-300 flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  studioblend0@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/918610511096"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-[#F8C94E] transition-colors duration-300"
                >
                  +91 8610511096
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">
            © 2026 studioblend. All rights reserved.
            <a href="/admin" className="ml-4 text-xs text-white/20 hover:text-white/40">Admin</a>
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="text-white/60 hover:text-[#F8C94E] transition-colors duration-300"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-white/60 hover:text-[#F8C94E] transition-colors duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-white/60 hover:text-[#F8C94E] transition-colors duration-300"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
