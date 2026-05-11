export const galleryCategories = [
  {
    slug: "weekends",
    title: "סופשים",
    eyebrow: "אימוני סוף שבוע",
    description:
      "רגעים מאימונים מרוכזים, עבודה בקצב גבוה וחוויית כדורסל אינטנסיבית בסופי שבוע.",
    image: "https://picsum.photos/seed/next-level-gallery-weekends-cover/1100/760",
  },
  {
    slug: "camps",
    title: "מחנות",
    eyebrow: "חוויה בארץ ובחו\"ל",
    description:
      "תיעוד ממחנות האקדמיה: אימונים, משחקים, קבוצתיות ורגעים שנשארים הרבה אחרי שהמחנה נגמר.",
    image: "https://picsum.photos/seed/next-level-gallery-camps-cover/1100/760",
  },
  {
    slug: "premium-training",
    title: "אימוני פרימיום",
    eyebrow: "עבודה אישית וממוקדת",
    description:
      "אימונים קטנים ומדויקים לשיפור יכולות אישיות, קליעה, שליטה בכדור וקבלת החלטות.",
    image: "https://picsum.photos/seed/next-level-gallery-premium-cover/1100/760",
  },
] as const;

export const galleryItems = {
  weekends: [
    {
      title: "חימום לפני אימון",
      category: "סופשים",
      image: "https://picsum.photos/seed/next-level-weekends-1/900/1100",
    },
    {
      title: "משחקון פנימי",
      category: "סופשים",
      image: "https://picsum.photos/seed/next-level-weekends-2/900/760",
    },
    {
      title: "עבודה קבוצתית",
      category: "סופשים",
      image: "https://picsum.photos/seed/next-level-weekends-3/900/900",
    },
    {
      title: "אנרגיה על המגרש",
      category: "סופשים",
      image: "https://picsum.photos/seed/next-level-weekends-4/900/1050",
    },
    {
      title: "סיום אימון",
      category: "סופשים",
      image: "https://picsum.photos/seed/next-level-weekends-5/900/720",
    },
    {
      title: "תחרות קליעה",
      category: "סופשים",
      image: "https://picsum.photos/seed/next-level-weekends-6/900/980",
    },
  ],
  camps: [
    {
      title: "אימון בוקר",
      category: "מחנות",
      image: "https://picsum.photos/seed/next-level-camps-1/900/1000",
    },
    {
      title: "רגע לפני משחק",
      category: "מחנות",
      image: "https://picsum.photos/seed/next-level-camps-2/900/740",
    },
    {
      title: "אימון יסודות",
      category: "מחנות",
      image: "https://picsum.photos/seed/next-level-camps-3/900/1080",
    },
    {
      title: "שיחת צוות",
      category: "מחנות",
      image: "https://picsum.photos/seed/next-level-camps-4/900/860",
    },
    {
      title: "מחנה חופשה",
      category: "מחנות",
      image: "https://picsum.photos/seed/next-level-camps-5/900/1120",
    },
    {
      title: "ערב קבוצתי",
      category: "מחנות",
      image: "https://picsum.photos/seed/next-level-camps-6/900/780",
    },
  ],
  "premium-training": [
    {
      title: "אימון קליעה",
      category: "אימוני פרימיום",
      image: "https://picsum.photos/seed/next-level-premium-1/900/1100",
    },
    {
      title: "שליטה בכדור",
      category: "אימוני פרימיום",
      image: "https://picsum.photos/seed/next-level-premium-2/900/720",
    },
    {
      title: "עבודת רגליים",
      category: "אימוני פרימיום",
      image: "https://picsum.photos/seed/next-level-premium-3/900/980",
    },
    {
      title: "קבלת החלטות",
      category: "אימוני פרימיום",
      image: "https://picsum.photos/seed/next-level-premium-4/900/820",
    },
    {
      title: "אימון אישי",
      category: "אימוני פרימיום",
      image: "https://picsum.photos/seed/next-level-premium-5/900/1080",
    },
    {
      title: "שחרור זריקה",
      category: "אימוני פרימיום",
      image: "https://picsum.photos/seed/next-level-premium-6/900/760",
    },
  ],
};

export type GalleryCategory = (typeof galleryCategories)[number];
export type GalleryCategorySlug = keyof typeof galleryItems;
