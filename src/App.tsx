import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import ScrollToTop from "@/components/ScrollToTop";

// Auth (kept non-localized for now)
import AuthCallback from "@/pages/AuthCallback";
import AuthError from "@/pages/AuthError";

import NotFound from "@/pages/NotFound";

// Shared blog pages (they should read :lang from the URL)
import { Blogg, BloggPost } from "@/pages/no/Blogg";

// Norwegian pages (moved to /no)
import IndexNo from "@/pages/no/Index";
import OmOssNo from "@/pages/no/OmOss";
import AktiviteterNo from "@/pages/no/Aktiviteter";
import ResultaterNo from "@/pages/no/Resultater";
import {
  Ressurser as RessurserNo,
  Nyheter as NyheterNo,
  PresseOgArrangementer as PresseOgArrangementerNo,
  ForOrganisasjoner as ForOrganisasjonerNo,
  Kontakt as KontaktNo,
} from "@/pages/no/SecondaryPages";

// English pages (optional; add when you have them)
import IndexEn from "@/pages/en/Index";
// import OmOssEn from "@/pages/en/OmOss";
// import AktiviteterEn from "@/pages/en/Aktiviteter";
// import ResultaterEn from "@/pages/en/Resultater";
// import {
//   Ressurser as RessurserEn,
//   Nyheter as NyheterEn,
//   PresseOgArrangementer as PresseOgArrangementerEn,
//   ForOrganisasjoner as ForOrganisasjonerEn,
//   Kontakt as KontaktEn,
// } from "@/pages/en/SecondaryPages";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <ScrollToTop />
        <Routes>
          {/* Root -> default language */}
          <Route path="/" element={<Navigate to="/no" replace />} />

          {/* ===========================
              Norwegian routes (/no)
             =========================== */}
          <Route path="/no" element={<IndexNo />} />
          <Route path="/no/om-oss" element={<OmOssNo />} />
          <Route path="/no/aktiviteter" element={<AktiviteterNo />} />
          <Route path="/no/aktiviteter/:slug" element={<AktiviteterNo />} />
          <Route path="/no/resultater" element={<ResultaterNo />} />
          <Route path="/no/ressurser" element={<RessurserNo />} />
          <Route path="/no/nyheter" element={<NyheterNo />} />
          <Route path="/no/presse-og-arrangementer" element={<PresseOgArrangementerNo />} />
          <Route path="/no/for-organisasjoner" element={<ForOrganisasjonerNo />} />
          <Route path="/no/kontakt" element={<KontaktNo />} />

          {/* Blog under /no */}
          <Route path="/no/blogg" element={<Blogg />} />
          <Route path="/no/blogg/:slug" element={<BloggPost />} />

          {/* ===========================
              English routes (/en)
              Add these when you have pages in src/pages/en/...
             =========================== */}

          {
          <Route path="/en" element={<IndexEn />} />
          /*<Route path="/en/om-oss" element={<OmOssEn />} />
          <Route path="/en/aktiviteter" element={<AktiviteterEn />} />
          <Route path="/en/aktiviteter/:slug" element={<AktiviteterEn />} />
          <Route path="/en/resultater" element={<ResultaterEn />} />
          <Route path="/en/ressurser" element={<RessurserEn />} />
          <Route path="/en/nyheter" element={<NyheterEn />} />
          <Route path="/en/presse-og-arrangementer" element={<PresseOgArrangementerEn />} />
          <Route path="/en/for-organisasjoner" element={<ForOrganisasjonerEn />} />
          <Route path="/en/kontakt" element={<KontaktEn />} />
          <Route path="/en/blogg" element={<Blogg />} />
          <Route path="/en/blogg/:slug" element={<BloggPost />} />
          */}

          {/* Auth routes (not localized) */}
          <Route path="/auth/callback" element={<AuthCallback />} />
          <Route path="/auth/error" element={<AuthError />} />

          {/* Backward-compat redirects (optional, helps while migrating links) */}
          <Route path="/om-oss" element={<Navigate to="/no/om-oss" replace />} />
          <Route path="/aktiviteter" element={<Navigate to="/no/aktiviteter" replace />} />
          <Route path="/aktiviteter/:slug" element={<Navigate to="/no/aktiviteter" replace />} />
          <Route path="/resultater" element={<Navigate to="/no/resultater" replace />} />
          <Route path="/ressurser" element={<Navigate to="/no/ressurser" replace />} />
          <Route path="/nyheter" element={<Navigate to="/no/nyheter" replace />} />
          <Route
            path="/presse-og-arrangementer"
            element={<Navigate to="/no/presse-og-arrangementer" replace />}
          />
          <Route
            path="/for-organisasjoner"
            element={<Navigate to="/no/for-organisasjoner" replace />}
          />
          <Route path="/kontakt" element={<Navigate to="/no/kontakt" replace />} />
          <Route path="/blogg" element={<Navigate to="/no/blogg" replace />} />
          <Route path="/blogg/:slug" element={<Navigate to="/no/blogg" replace />} />

          {/* Not found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;