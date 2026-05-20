import {
  getCloudinaryImageUrl,
  listCloudinaryFolderImages,
} from "@/lib/cloudinary";

export const galleryCategories = [
  {
    slug: "weekends",
    title: "סופשים",
    eyebrow: "אימוני סוף שבוע",
    description:
      "רגעים מאימונים מרוכזים, עבודה בקצב גבוה וחוויית כדורסל אינטנסיבית בסופי שבוע.",
    folder: "NEXT LEVEL WEBSITE/Weekends",
    folders: ["NEXT LEVEL WEBSITE/Weekends"],
    publicId: "NEXT LEVEL WEBSITE/Weekends/cover",
    image: "https://picsum.photos/seed/next-level-gallery-weekends-cover/1100/760",
  },
  {
    slug: "camps",
    title: "מחנות",
    eyebrow: "חוויה בארץ ובחו\"ל",
    description:
      "תיעוד ממחנות האקדמיה: אימונים, משחקים, קבוצתיות ורגעים שנשארים הרבה אחרי שהמחנה נגמר.",
    folder: "NEXT LEVEL WEBSITE/Camps",
    folders: [
      "NEXT LEVEL WEBSITE/Camps/Passover",
      "NEXT LEVEL WEBSITE/Camps/Serbia (2025)",
      "NEXT LEVEL WEBSITE/Camps/Summer (2025)",
    ],
    publicId: "NEXT LEVEL WEBSITE/Camps/cover",
    image: "https://picsum.photos/seed/next-level-gallery-camps-cover/1100/760",
  },
  {
    slug: "premium-training",
    title: "אימונים אישיים",
    eyebrow: "עבודה אישית וממוקדת",
    description:
      "אימונים קטנים ומדויקים לשיפור יכולות אישיות, קליעה, שליטה בכדור וקבלת החלטות.",
    folder: "NEXT LEVEL WEBSITE/Personal",
    folders: ["NEXT LEVEL WEBSITE/Personal"],
    publicId: "NEXT LEVEL WEBSITE/Personal/cover",
    image: "https://picsum.photos/seed/next-level-gallery-premium-cover/1100/760",
  },
] as const;

export const galleryItems = {
  weekends: [
    {
      title: "חימום לפני אימון",
      category: "סופשים",
      publicId: "next-level/gallery/weekends/01",
      image: "https://picsum.photos/seed/next-level-weekends-1/900/1100",
      width: 900,
      height: 1100,
    },
    {
      title: "משחקון פנימי",
      category: "סופשים",
      publicId: "next-level/gallery/weekends/02",
      image: "https://picsum.photos/seed/next-level-weekends-2/900/760",
      width: 900,
      height: 760,
    },
    {
      title: "עבודה קבוצתית",
      category: "סופשים",
      publicId: "next-level/gallery/weekends/03",
      image: "https://picsum.photos/seed/next-level-weekends-3/900/900",
      width: 900,
      height: 900,
    },
    {
      title: "אנרגיה על המגרש",
      category: "סופשים",
      publicId: "next-level/gallery/weekends/04",
      image: "https://picsum.photos/seed/next-level-weekends-4/900/1050",
      width: 900,
      height: 1050,
    },
    {
      title: "סיום אימון",
      category: "סופשים",
      publicId: "next-level/gallery/weekends/05",
      image: "https://picsum.photos/seed/next-level-weekends-5/900/720",
      width: 900,
      height: 720,
    },
    {
      title: "תחרות קליעה",
      category: "סופשים",
      publicId: "next-level/gallery/weekends/06",
      image: "https://picsum.photos/seed/next-level-weekends-6/900/980",
      width: 900,
      height: 980,
    },
  ],
  camps: [
    {
      title: "אימון בוקר",
      category: "מחנות",
      publicId: "next-level/gallery/camps/01",
      image: "https://picsum.photos/seed/next-level-camps-1/900/1000",
      width: 900,
      height: 1000,
    },
    {
      title: "רגע לפני משחק",
      category: "מחנות",
      publicId: "next-level/gallery/camps/02",
      image: "https://picsum.photos/seed/next-level-camps-2/900/740",
      width: 900,
      height: 740,
    },
    {
      title: "אימון יסודות",
      category: "מחנות",
      publicId: "next-level/gallery/camps/03",
      image: "https://picsum.photos/seed/next-level-camps-3/900/1080",
      width: 900,
      height: 1080,
    },
    {
      title: "שיחת צוות",
      category: "מחנות",
      publicId: "next-level/gallery/camps/04",
      image: "https://picsum.photos/seed/next-level-camps-4/900/860",
      width: 900,
      height: 860,
    },
    {
      title: "מחנה חופשה",
      category: "מחנות",
      publicId: "next-level/gallery/camps/05",
      image: "https://picsum.photos/seed/next-level-camps-5/900/1120",
      width: 900,
      height: 1120,
    },
    {
      title: "ערב קבוצתי",
      category: "מחנות",
      publicId: "next-level/gallery/camps/06",
      image: "https://picsum.photos/seed/next-level-camps-6/900/780",
      width: 900,
      height: 780,
    },
  ],
  "premium-training": [
    {
      title: "אימון קליעה",
      category: "אימונים אישיים",
      publicId: "next-level/gallery/premium-training/01",
      image: "https://picsum.photos/seed/next-level-premium-1/900/1100",
      width: 900,
      height: 1100,
    },
    {
      title: "שליטה בכדור",
      category: "אימונים אישיים",
      publicId: "next-level/gallery/premium-training/02",
      image: "https://picsum.photos/seed/next-level-premium-2/900/720",
      width: 900,
      height: 720,
    },
    {
      title: "עבודת רגליים",
      category: "אימונים אישיים",
      publicId: "next-level/gallery/premium-training/03",
      image: "https://picsum.photos/seed/next-level-premium-3/900/980",
      width: 900,
      height: 980,
    },
    {
      title: "קבלת החלטות",
      category: "אימונים אישיים",
      publicId: "next-level/gallery/premium-training/04",
      image: "https://picsum.photos/seed/next-level-premium-4/900/820",
      width: 900,
      height: 820,
    },
    {
      title: "אימון אישי",
      category: "אימונים אישיים",
      publicId: "next-level/gallery/premium-training/05",
      image: "https://picsum.photos/seed/next-level-premium-5/900/1080",
      width: 900,
      height: 1080,
    },
    {
      title: "שחרור זריקה",
      category: "אימונים אישיים",
      publicId: "next-level/gallery/premium-training/06",
      image: "https://picsum.photos/seed/next-level-premium-6/900/760",
      width: 900,
      height: 760,
    },
  ],
};

export type GalleryCategory = (typeof galleryCategories)[number];
export type GalleryCategorySlug = keyof typeof galleryItems;

export function getGalleryCategoryImage(category: GalleryCategory) {
  return getCloudinaryImageUrl(category.publicId, category.image, {
    width: 1100,
    height: 760,
    crop: "fill",
    gravity: "auto",
  });
}

export function getGalleryItemImage(
  item: (typeof galleryItems)[GalleryCategorySlug][number]
) {
  return getCloudinaryImageUrl(item.publicId, item.image, {
    width: 900,
    crop: "limit",
  });
}

function isCoverImage(publicId: string) {
  return publicId.split("/").pop()?.toLowerCase() === "cover";
}

function getGalleryCategoryBySlug(slug: GalleryCategorySlug) {
  return galleryCategories.find((category) => category.slug === slug);
}

async function listGalleryCategoryImages(category: GalleryCategory) {
  const images = await Promise.all(
    category.folders.map((folder) => listCloudinaryFolderImages(folder))
  );

  return images.flat();
}

export async function getGalleryImagesForCategory(slug: GalleryCategorySlug) {
  const category = getGalleryCategoryBySlug(slug);

  if (!category) {
    return galleryItems[slug];
  }

  const cloudinaryImages = await listGalleryCategoryImages(category);
  const galleryImages = cloudinaryImages.filter(
    (image) => !isCoverImage(image.public_id)
  );

  if (galleryImages.length === 0) {
    return galleryItems[slug];
  }

  return galleryImages.map((image) => {
    const fileName = image.public_id.split("/").pop() ?? category.title;

    return {
      title: fileName,
      category: category.title,
      publicId: image.public_id,
      image: getCloudinaryImageUrl(image.public_id, image.secure_url, {
        width: 900,
        crop: "limit",
      }),
      width: image.width ?? 900,
      height: image.height ?? 900,
    };
  });
}

export async function getGalleryCategoryPreview(category: GalleryCategory) {
  const cloudinaryImages = await listGalleryCategoryImages(category);
  const cover =
    cloudinaryImages.find((image) => isCoverImage(image.public_id)) ??
    cloudinaryImages.find((image) => !isCoverImage(image.public_id));

  const count = cloudinaryImages.filter(
    (image) => !isCoverImage(image.public_id)
  ).length;

  return {
    image: cover
      ? getCloudinaryImageUrl(cover.public_id, cover.secure_url, {
          width: 1100,
          height: 760,
          crop: "fill",
          gravity: "auto",
        })
      : getGalleryCategoryImage(category),
    count: count || galleryItems[category.slug].length,
  };
}
