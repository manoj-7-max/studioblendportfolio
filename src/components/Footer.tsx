import { useSite } from "../context/SiteContext";

// ... inside the component ...
export function Footer() {
  const { siteContent } = useSite();

  return (
    <footer className="bg-[#36454F] text-white py-12 px-4 sm:px-6 lg:px-8">
      {/* ... other parts ... */}
      {/* Contact Info */}
      <div>
        <h4 className="mb-4">Get In Touch</h4>
        <ul className="space-y-2 text-sm">
          <li>
            <a
              href={`mailto:${siteContent.contactEmail}`}
              className="text-white/70 hover:text-[#F8C94E] transition-colors duration-300 flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              {siteContent.contactEmail}
            </a>
          </li>
          <li>
            <a
              href={`https://wa.me/${siteContent.contactPhone.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-[#F8C94E] transition-colors duration-300"
            >
              {siteContent.contactPhone}
            </a>
          </li>
        </ul>
      </div>
    </div>

        {/* Bottom Bar */ }
  <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
    <p className="text-white/60 text-sm">
      © 2026 studioblend. All rights reserved.
      <a href="/#/admin" className="ml-4 text-xs text-white/20 hover:text-white/40">Admin</a>
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
      </div >
    </footer >
  );
}
