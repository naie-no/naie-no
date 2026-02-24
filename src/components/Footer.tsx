import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#3D148A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#FF7A1A] to-[#E85E00] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">NAIE</span>
              </div>
              <div>
                <span className="font-bold text-lg">NAIE</span>
                <span className="block text-xs text-purple-300 -mt-0.5">Norsk AI-Etikkforening</span>
              </div>
            </div>
            <p className="text-purple-200 text-sm leading-relaxed">
              Uavhengig, ideell forening som leverer statistikk og innsikt om Bias, Bærekraft og Ansvarlig AI.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 text-[#FF7A1A]">Sider</h3>
            <ul className="space-y-2">
              {[
                { label: "Om oss", path: "/om-oss" },
                { label: "Aktiviteter", path: "/aktiviteter" },
                { label: "Resultater", path: "/resultater" },
                { label: "Ressurser", path: "/ressurser" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-purple-200 hover:text-[#FF7A1A] text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Activities */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 text-[#FF7A1A]">Aktiviteter</h3>
            <ul className="space-y-2">
              {[
                { label: "Bias", path: "/aktiviteter/bias" },
                { label: "Ansvarlig AI", path: "/aktiviteter/ansvarlig-ai" },
                { label: "Bærekraft", path: "/aktiviteter/baerekraft" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-purple-200 hover:text-[#FF7A1A] text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 text-[#FF7A1A]">Kontakt</h3>
            <ul className="space-y-2 text-purple-200 text-sm">
              <li>
                <Link to="/kontakt" className="hover:text-[#FF7A1A] transition-colors">
                  Kontaktskjema
                </Link>
              </li>
              <li>
                <Link to="/for-organisasjoner" className="hover:text-[#FF7A1A] transition-colors">
                  For organisasjoner
                </Link>
              </li>
              <li>
                <Link to="/presse-og-arrangementer" className="hover:text-[#FF7A1A] transition-colors">
                  Presse & Arrangementer
                </Link>
              </li>
              <li>
                <Link to="/nyheter" className="hover:text-[#FF7A1A] transition-colors">
                  Nyheter
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-purple-300 text-xs">
            © {new Date().getFullYear()} Norsk AI-Etikkforening (NAIE). Innhold lisensiert under{" "}
            <a
              href="https://creativecommons.org/licenses/by/4.0/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FF7A1A] hover:underline"
            >
              CC BY 4.0
            </a>
            .
          </p>
          <p className="text-purple-300 text-xs">
            Org.nr: 932 552 728
          </p>
        </div>
      </div>
    </footer>
  );
}