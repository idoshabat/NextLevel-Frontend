export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://next-level-basketball-academy.vercel.app";

export const siteName = "Next Level Basketball Academy";
export const siteTitle =
  "נקסט לבל | Next Level Basketball Academy | אקדמיית כדורסל בנס ציונה";
export const siteDescription =
  "נקסט לבל - Next Level Basketball Academy: אקדמיית כדורסל לילדים, נוער ובוגרים בנס ציונה עם אימוני סוף שבוע, אימונים אישיים, תוכניות ליווי, ניתוח וידאו ומחנות בארץ ובחו״ל.";

export const contact = {
  phone: "+972553090366",
  displayPhone: "+972 55 309 0366",
  email: "Office@nextlevelacademy.co.il",
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
    title: "אודות נקסט לבל | About Next Level",
    description:
      "הכירו את נקסט לבל - Next Level Basketball Academy ואת צוות המאמנים: שחקני עבר והווה שמובילים תהליך מקצועי, אישי ומנטלי לשחקנים ושחקניות.",
    priority: 0.9,
  },
  {
    path: "/why-us",
    title: "Why Us? | למה לבחור בנקסט לבל",
    description:
      "למה לבחור בנקסט לבל - Next Level: תוכנית מותאמת תפקיד, קריאת משחק, ניתוח וידאו, ליווי מנטלי והוכחות מהשטח.",
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
      "מחנות כדורסל של נקסט לבל - Next Level בארץ ובחו״ל: בלגרד, סלובניה, מחנות קיץ, וינגייט וקטורה.",
    priority: 0.85,
  },
  {
    path: "/gallery",
    title: "Gallery | גלריית האקדמיה",
    description:
      "גלריית תמונות מאימוני סוף שבוע, מחנות ואימונים אישיים של נקסט לבל - Next Level Basketball Academy.",
    priority: 0.75,
  },
  {
    path: "/faq",
    title: "FAQ | שאלות ותשובות",
    description:
      "שאלות ותשובות על אימוני נקסט לבל - Next Level, תוכניות ליווי, אימונים אונליין, גילאים, סוכנים וקליעה למכללות.",
    priority: 0.7,
  },
  {
    path: "/contact",
    title: "Contact | יצירת קשר והרשמה",
    description:
      "השאירו פרטים או שלחו WhatsApp לתיאום שיחת התאמה, אימון ניסיון או הרשמה לתוכניות ומחנות נקסט לבל - Next Level.",
    priority: 0.85,
  },
  {
    path: "/privacy",
    title: "Privacy Policy | מדיניות פרטיות",
    description: "מדיניות הפרטיות של נקסט לבל - Next Level Basketball Academy.",
    priority: 0.25,
  },
  {
    path: "/terms",
    title: "Terms | תקנון ותנאי שימוש",
    description: "תקנון ותנאי השימוש באתר נקסט לבל - Next Level Basketball Academy.",
    priority: 0.25,
  },
  {
    path: "/accessibility",
    title: "Accessibility | הצהרת נגישות",
    description: "הצהרת הנגישות של אתר נקסט לבל - Next Level Basketball Academy.",
    priority: 0.25,
  },
] as const;

export function absoluteUrl(path = "/") {
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export function pageSeo(path: string) {
  return seoPages.find((page) => page.path === path) ?? seoPages[0];
}
