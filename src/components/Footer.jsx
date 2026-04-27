import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="container-page py-14 grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="MH Septic — AOSS Certified"
              className="h-14 w-14 object-contain"
            />
            <div>
              <div className="font-display font-extrabold text-lg tracking-tight">MH SEPTIC</div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent-light">
                Veteran Owned
              </div>
            </div>
          </div>
          <p className="mt-4 text-sm text-white/75 leading-relaxed max-w-xs">
            VDH-compliant septic inspections, AOSS maintenance, and repairs across Central Virginia.
          </p>
          <span className="mt-4 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent-light">
            <span aria-hidden="true">🇺🇸</span> Veteran Owned &amp; Operated
          </span>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-accent-light">
            Services
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link to="/services#aoss" className="text-white/85 hover:text-accent-light">
                Septic Inspection &amp; AOSS Maintenance
              </Link>
            </li>
            <li>
              <Link to="/services#real-estate" className="text-white/85 hover:text-accent-light">
                Real Estate Inspection with Pumpout
              </Link>
            </li>
            <li>
              <Link to="/services#repair" className="text-white/85 hover:text-accent-light">
                Residential Septic Repair
              </Link>
            </li>
            <li>
              <Link to="/#service-area" className="text-white/85 hover:text-accent-light">
                Service Area
              </Link>
            </li>
            <li>
              <Link to="/blog" className="text-white/85 hover:text-accent-light">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-accent-light">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href="tel:+18048378746" className="flex items-center gap-2 text-white/90 hover:text-accent-light">
                <Phone className="h-4 w-4" /> (804) 837-8746
              </a>
            </li>
            <li>
              <a href="mailto:mhseptic804@gmail.com" className="flex items-center gap-2 text-white/90 hover:text-accent-light">
                <Mail className="h-4 w-4" /> mhseptic804@gmail.com
              </a>
            </li>
            <li className="flex items-start gap-2 text-white/85">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              <span>Cumberland County, VA — serving Central Virginia within ~1.5 hours.</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col md:flex-row items-center justify-between gap-3 py-5 text-xs text-white/60">
          <p className="flex items-center gap-2">
            <ShieldCheck className="h-3.5 w-3.5 text-accent-light" />
            &copy; {new Date().getFullYear()} MH Septic. Licensed in Virginia. VDH Compliant.
          </p>
          <p className="flex items-center gap-2">
            <span aria-hidden="true">🇺🇸</span> Proudly veteran-owned in Central Virginia.
          </p>
        </div>
      </div>
    </footer>
  );
}
