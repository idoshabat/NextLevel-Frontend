export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://next-level-basketball-academy.vercel.app";

export const siteName = "Next Level Basketball Academy";
export const siteTitle = "Next Level Basketball Academy | אקדמיית כדורסל בנס ציונה";
export const siteDescription =
  "אקדמיית כדורסל לילדים, נוער ובוגרים בנס ציונה: אימוני סוף שבוע, אימונים אישיים, תוכניות ליווי, ניתוח וידאו ומחנות בארץ ובחו״ל.";

export const contact = {
  phone: "+972553090366",
  displayPhone: "+972 55 309 0366",
  email: "Next.level.acadmy@gmail.com",
  instagram: "https://www.instagram.com/next_level_basketball_academy/",
  location: "נס ציונה, ישראל",
};

export const seoPages = [
  {
    path: "/",
    title: siteTitle,
    description: siteDescription,
    priority: 1,
  },
  {
    path: "/about",
    title: "About Next Level | צוות אקדמיית הכדורסל",
    description:
      "הכירו את Next Level Basketball Academy ואת צוות המאמנים: שחקני עבר והווה שמובילים תהליך מקצועי, אישי ומנטלי לשחקנים ושחקניות.",
    priority: 0.9,
  },
  {
    path: "/why-us",
    title: "Why Us? | למה לבחור ב-Next Level",
    description:
      "למה לבחור ב-Next Level: תוכנית מותאמת תפקיד, קריאת משחק, ניתוח וידאו, ליווי מנטלי והוכחות מהשטח.",
    priority: 0.9,
  },
  {
    path: "/programs",
    title: "Programs | תוכניות אימון וליווי בכדורסל",
    description:
      "תוכניות האקדמיה: Classic, כרטיסיית אימונים, תוכניות Premium, Video Online, אימונים אישיים ומחנות כדורסל.",
    priority: 0.9,
  },
  {
    path: "/camps",
    title: "Camps | מחנות כדורסל בארץ ובחו״ל",
    description:
      "מחנות כדורסל של Next Level בארץ ובחו״ל: בלגרד, סלובניה, מחנות קיץ, וינגייט וקטורה.",
    priority: 0.85,
  },
  {
    path: "/gallery",
    title: "Gallery | גלריית האקדמיה",
    description:
      "גלריית תמונות מאימוני סוף שבוע, מחנות ואימונים אישיים של Next Level Basketball Academy.",
    priority: 0.75,
  },
  {
    path: "/faq",
    title: "FAQ | שאלות ותשובות",
    description:
      "שאלות ותשובות על אימוני Next Level, תוכניות ליווי, אימונים אונליין, גילאים, סוכנים וקליעה למכללות.",
    priority: 0.7,
  },
  {
    path: "/contact",
    title: "Contact | יצירת קשר והרשמה",
    description:
      "השאירו פרטים או שלחו WhatsApp לתיאום שיחת התאמה, אימון ניסיון או הרשמה לתוכניות ומחנות Next Level.",
    priority: 0.85,
  },
  {
    path: "/privacy",
    title: "Privacy Policy | מדיניות פרטיות",
    description: "מדיניות הפרטיות של Next Level Basketball Academy.",
    priority: 0.25,
  },
  {
    path: "/terms",
    title: "Terms | תקנון ותנאי שימוש",
    description: "תקנון ותנאי השימוש באתר Next Level Basketball Academy.",
    priority: 0.25,
  },
  {
    path: "/accessibility",
    title: "Accessibility | הצהרת נגישות",
    description: "הצהרת הנגישות של אתר Next Level Basketball Academy.",
    priority: 0.25,
  },
] as const;

export function absoluteUrl(path = "/") {
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export function pageSeo(path: string) {
  return seoPages.find((page) => page.path === path) ?? seoPages[0];
}
