import { useMemo, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

type Lang = "no" | "en";

const navItems = [
  { label: "Hjem", path: "/" },
  { label: "Om oss", path: "/om-oss" },
  {
    label: "Aktiviteter",
    path: "/aktiviteter",
    children: [
      { label: "Bias", path: "/aktiviteter/bias" },
      { label: "Ansvarlig AI", path: "/aktiviteter/ansvarlig-ai" },
      { label: "Bærekraft", path: "/aktiviteter/baerekraft" },
    ],
  },
  {
    label: "Innsikt",
    path: "/resultater",
    children: [
      { label: "Resultater", path: "/resultater" },
      { label: "Blogg", path: "/blogg" },
      { label: "Ressurser", path: "/ressurser" },
      { label: "Nyheter", path: "/nyheter" },
      { label: "Presse & Arrangementer", path: "/presse-og-arrangementer" },
    ],
  },
  { label: "For organisasjoner", path: "/for-organisasjoner" },
  { label: "Kontakt", path: "/kontakt" },
];

function getLangFromPath(pathname: string): Lang {
  const first = pathname.split("/")[1];
  return first === "en" ? "en" : "no";
}

/**
 * Prefix a path with /no or /en.
 * Special-case "/" so it becomes "/no" or "/en".
 */
function withLang(lang: Lang, path: string): string {
  if (path === "/") return `/${lang}`;
  return `/${lang}${path}`;
}

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const location = useLocation();
  const navigate = useNavigate();

  const baseUrl = import.meta.env.BASE_URL.replace(/\/$/, ""); // "/naie-no" in prod, "" in dev
  const pathAfterBase = location.pathname.startsWith(baseUrl)
    ? location.pathname.slice(baseUrl.length) || "/"
    : location.pathname;
  
  const lang = useMemo(() => getLangFromPath(pathAfterBase), [pathAfterBase]);
  const base = `/${lang}`;

  const currentPathNoLang = useMemo(() => {
    // "/no/kontakt" -> "/kontakt"
    // "/no" -> "/"
    const parts = location.pathname.split("/");
    const maybeLang = parts[1];
    if (maybeLang === "no" || maybeLang === "en") {
      const rest = "/" + parts.slice(2).join("/");
      return rest === "/" ? "/" : rest.replace(/\/$/, "") || "/";
    }
    return location.pathname;
  }, [location.pathname]);

  const isActive = (rawPath: string) => {
    // Compare against current path WITHOUT language prefix
    const normalize = (p: string) => (p === "/" ? "/" : p.replace(/\/$/, ""));
    return normalize(currentPathNoLang) === normalize(rawPath);
  };

  const isChildActive = (children?: { path: string }[]) =>
    children?.some((c) => isActive(c.path)) ?? false;

  const switchLang = (next: Lang) => {
    // Replace /no or /en at the start of the path
    const newPath = location.pathname.replace(/^\/(no|en)(\/|$)/, `/${next}$2`);
    navigate(newPath);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to={base} className="flex items-center gap-2 shrink-0">
            <div className="w-10 h-10 bg-gradient-to-br from-[#3D148A] to-[#5A23C9] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">NAIE</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-[#3D148A] font-bold text-lg leading-tight">NAIE</span>
              <span className="block text-[10px] text-gray-500 leading-tight -mt-0.5">
                Norsk AI-Etikkforening
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                      isChildActive(item.children)
                        ? "text-[#FF7A1A] bg-[#FF7A1A]/10"
                        : "text-gray-700 hover:text-[#5A23C9] hover:bg-[#ECE7FF]"
                    }`}
                  >
                    {item.label}
                    <ChevronDown className="w-3 h-3" />
                  </button>
                  {activeDropdown === item.label && (
                    <div className="absolute top-full left-0 mt-0 w-52 bg-white rounded-lg shadow-lg border border-gray-100 py-1 animate-in fade-in slide-in-from-top-2 duration-200">
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={withLang(lang, child.path)}
                          className={`block px-4 py-2 text-sm transition-colors ${
                            isActive(child.path)
                              ? "text-[#FF7A1A] bg-[#FF7A1A]/5"
                              : "text-gray-700 hover:text-[#5A23C9] hover:bg-[#ECE7FF]"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.path}
                  to={withLang(lang, item.path)}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive(item.path)
                      ? "text-[#FF7A1A] bg-[#FF7A1A]/10"
                      : "text-gray-700 hover:text-[#5A23C9] hover:bg-[#ECE7FF]"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          {/* Language Switcher + Mobile Toggle */}
          <div className="flex items-center gap-2">
            {/* Language Switcher */}
            <div className="flex items-center bg-[#F6F6F6] rounded-lg p-0.5">
              <button
                onClick={() => switchLang("no")}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-medium transition-all ${
                  lang === "no"
                    ? "bg-white text-[#3D148A] shadow-sm"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                <span className="text-base leading-none">🇳🇴</span>
                <span className="hidden sm:inline">NO</span>
              </button>
              <button
                onClick={() => switchLang("en")}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-medium transition-all ${
                  lang === "en"
                    ? "bg-white text-[#3D148A] shadow-sm"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                <span className="text-base leading-none">🇬🇧</span>
                <span className="hidden sm:inline">EN</span>
              </button>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="px-4 py-3 space-y-1 max-h-[70vh] overflow-y-auto">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <>
                    <div className="px-3 py-2 text-sm font-medium text-gray-400 uppercase tracking-wider">
                      {item.label}
                    </div>
                    {item.children.map((child) => (
                      <Link
                        key={child.path}
                        to={withLang(lang, child.path)}
                        onClick={() => setMobileOpen(false)}
                        className={`block pl-6 pr-3 py-2 text-sm rounded-md transition-colors ${
                          isActive(child.path)
                            ? "text-[#FF7A1A] bg-[#FF7A1A]/5"
                            : "text-gray-600 hover:text-[#5A23C9] hover:bg-[#ECE7FF]"
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </>
                ) : (
                  <Link
                    to={withLang(lang, item.path)}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                      isActive(item.path)
                        ? "text-[#FF7A1A] bg-[#FF7A1A]/10"
                        : "text-gray-700 hover:text-[#5A23C9] hover:bg-[#ECE7FF]"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}