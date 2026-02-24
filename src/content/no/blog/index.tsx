export type BlogMeta = {
  slug: string;
  title: string;
  date: string; // YYYY-MM-DD
  excerpt: string;
  file: () => Promise<{ default: string }>;
};

export const BLOGS: BlogMeta[] = [
  {
    slug: "maling-av-fordommer-i-ai-systemer-del-1",
    title: "Måling av fordommer i AI-systemer ved bruk av norsk språk og kontekst, del 1",
    date: "2025-09-15",
    excerpt: "Hvorfor norske bias-målinger gir andre utslag enn engelske.",
    file: () => import("./maling-av-fordommer-i-ai-systemer-del-1.md?raw"),
  },
  // add more posts here...
];