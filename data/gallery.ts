import {
  getCloudinaryImageUrl,
  listCloudinaryFolderImages,
} from "@/lib/cloudinary";

function cloudinaryFallback(publicId: string, transformation = "f_auto,q_auto,w_900,c_limit") {
  const encodedPublicId = publicId.split("/").map(encodeURIComponent).join("/");

  return `https://res.cloudinary.com/djud4xysp/image/upload/${transformation}/${encodedPublicId}`;
}

export const galleryCategories = [
  {
    slug: "weekends",
    title: "Weekend Sessions",
    eyebrow: "אימוני סוף שבוע",
    description:
      "רגעים מאימונים מרוכזים, עבודה בקצב גבוה וחוויית כדורסל אינטנסיבית בסופי שבוע.",
    folder: "NEXT LEVEL WEBSITE/weekends",
    folders: ["NEXT LEVEL WEBSITE/weekends"],
    publicId: "NEXT LEVEL WEBSITE/weekends/cover",
    includeInIndex: true,
    image: cloudinaryFallback(
      "NEXT LEVEL WEBSITE/weekends/cover",
      "f_auto,q_auto,w_1100,h_760,c_fill,g_auto"
    ),
  },
  {
    slug: "camps",
    title: "Camps",
    eyebrow: "חוויה בארץ ובחו\"ל",
    description:
      "תיעוד ממחנות האקדמיה: אימונים, משחקים, קבוצתיות ורגעים שנשארים הרבה אחרי שהמחנה נגמר.",
    folder: "NEXT LEVEL WEBSITE/camps",
    folders: [
      "NEXT LEVEL WEBSITE/camps/passover (2025)",
      "NEXT LEVEL WEBSITE/camps/summer (2025)",
      "NEXT LEVEL WEBSITE/camps/serbia (2024)",
      "NEXT LEVEL WEBSITE/camps/serbia (2025)",
    ],
    publicId: "NEXT LEVEL WEBSITE/camps/summer (2025)/cover",
    includeInIndex: true,
    image: cloudinaryFallback(
      "NEXT LEVEL WEBSITE/camps/summer (2025)/cover",
      "f_auto,q_auto,w_1100,h_760,c_fill,g_auto"
    ),
  },
  {
    slug: "passover-2025",
    title: "Passover Camp 2025",
    eyebrow: "קטורה פסח 2025",
    description:
      "גלריית מחנה פסח 2025: אימונים, גיבוש קבוצתי ורגעים מתוך המחנה.",
    folder: "NEXT LEVEL WEBSITE/camps/passover (2025)",
    folders: ["NEXT LEVEL WEBSITE/camps/passover (2025)"],
    publicId: "NEXT LEVEL WEBSITE/camps/passover (2025)/cover",
    includeInIndex: false,
    image: cloudinaryFallback(
      "NEXT LEVEL WEBSITE/camps/passover (2025)/cover",
      "f_auto,q_auto,w_1100,h_760,c_fill,g_auto"
    ),
  },
  {
    slug: "summer-2025",
    title: "Summer Camp 2025",
    eyebrow: "מחנה קיץ 2025",
    description:
      "גלריית מחנה קיץ 2025: עבודה מקצועית, קבוצתיות וחוויית אימון מרוכזת.",
    folder: "NEXT LEVEL WEBSITE/camps/summer (2025)",
    folders: ["NEXT LEVEL WEBSITE/camps/summer (2025)"],
    publicId: "NEXT LEVEL WEBSITE/camps/summer (2025)/cover",
    includeInIndex: false,
    image: cloudinaryFallback(
      "NEXT LEVEL WEBSITE/camps/summer (2025)/cover",
      "f_auto,q_auto,w_1100,h_760,c_fill,g_auto"
    ),
  },
  {
    slug: "serbia-2024",
    title: "Serbia Camp 2024",
    eyebrow: "בלגרד 2024",
    description:
      "גלריית מחנה בלגרד 2024: רגעים מהמחנה הבינלאומי הראשון של האקדמיה.",
    folder: "NEXT LEVEL WEBSITE/camps/serbia (2024)",
    folders: ["NEXT LEVEL WEBSITE/camps/serbia (2024)"],
    publicId: "NEXT LEVEL WEBSITE/camps/serbia (2024)/cover",
    includeInIndex: false,
    image: cloudinaryFallback(
      "NEXT LEVEL WEBSITE/camps/serbia (2024)/cover",
      "f_auto,q_auto,w_1100,h_760,c_fill,g_auto"
    ),
  },
  {
    slug: "serbia-2025",
    title: "Serbia Camp 2025",
    eyebrow: "בלגרד 2025",
    description:
      "גלריית מחנה בלגרד 2025: אימונים, תחרותיות וחוויה קבוצתית בסרביה.",
    folder: "NEXT LEVEL WEBSITE/camps/serbia (2025)",
    folders: ["NEXT LEVEL WEBSITE/camps/serbia (2025)"],
    publicId: "NEXT LEVEL WEBSITE/camps/serbia (2025)/cover",
    includeInIndex: false,
    image: cloudinaryFallback(
      "NEXT LEVEL WEBSITE/camps/serbia (2025)/cover",
      "f_auto,q_auto,w_1100,h_760,c_fill,g_auto"
    ),
  },
  {
    slug: "premium-training",
    title: "Personal Training",
    eyebrow: "עבודה אישית וממוקדת",
    description:
      "אימונים קטנים ומדויקים לשיפור יכולות אישיות, קליעה, שליטה בכדור וקבלת החלטות.",
    folder: "NEXT LEVEL WEBSITE/premium_training",
    folders: ["NEXT LEVEL WEBSITE/premium_training"],
    publicId: "NEXT LEVEL WEBSITE/premium_training/cover",
    includeInIndex: true,
    image: cloudinaryFallback(
      "NEXT LEVEL WEBSITE/premium_training/cover",
      "f_auto,q_auto,w_1100,h_760,c_fill,g_auto"
    ),
  },
] as const;

export const galleryItems = {
  weekends: [
    {
      title: "Weekend Sessions",
      category: "סופשים",
      publicId: "NEXT LEVEL WEBSITE/weekends/cover",
      image: cloudinaryFallback("NEXT LEVEL WEBSITE/weekends/cover"),
      width: 1100,
      height: 760,
    },
  ],
  camps: [
    {
      title: "Passover Camp 2025",
      category: "מחנות",
      publicId: "NEXT LEVEL WEBSITE/camps/passover (2025)/cover",
      image: cloudinaryFallback("NEXT LEVEL WEBSITE/camps/passover (2025)/cover"),
      width: 1100,
      height: 760,
    },
    {
      title: "Summer Camp 2025",
      category: "מחנות",
      publicId: "NEXT LEVEL WEBSITE/camps/summer (2025)/cover",
      image: cloudinaryFallback("NEXT LEVEL WEBSITE/camps/summer (2025)/cover"),
      width: 1100,
      height: 760,
    },
    {
      title: "Serbia Camp 2024",
      category: "מחנות",
      publicId: "NEXT LEVEL WEBSITE/camps/serbia (2024)/cover",
      image: cloudinaryFallback("NEXT LEVEL WEBSITE/camps/serbia (2024)/cover"),
      width: 1100,
      height: 760,
    },
    {
      title: "Serbia Camp 2025",
      category: "מחנות",
      publicId: "NEXT LEVEL WEBSITE/camps/serbia (2025)/cover",
      image: cloudinaryFallback("NEXT LEVEL WEBSITE/camps/serbia (2025)/cover"),
      width: 1100,
      height: 760,
    },
  ],
  "passover-2025": [
    {
      title: "Passover Camp 2025",
      category: "קטורה פסח 2025",
      publicId: "NEXT LEVEL WEBSITE/camps/passover (2025)/cover",
      image: cloudinaryFallback("NEXT LEVEL WEBSITE/camps/passover (2025)/cover"),
      width: 1100,
      height: 760,
    },
  ],
  "summer-2025": [
    {
      title: "Summer Camp 2025",
      category: "מחנה קיץ 2025",
      publicId: "NEXT LEVEL WEBSITE/camps/summer (2025)/cover",
      image: cloudinaryFallback("NEXT LEVEL WEBSITE/camps/summer (2025)/cover"),
      width: 1100,
      height: 760,
    },
  ],
  "serbia-2024": [
    {
      title: "Serbia Camp 2024",
      category: "בלגרד 2024",
      publicId: "NEXT LEVEL WEBSITE/camps/serbia (2024)/cover",
      image: cloudinaryFallback("NEXT LEVEL WEBSITE/camps/serbia (2024)/cover"),
      width: 1100,
      height: 760,
    },
  ],
  "serbia-2025": [
    {
      title: "Serbia Camp 2025",
      category: "בלגרד 2025",
      publicId: "NEXT LEVEL WEBSITE/camps/serbia (2025)/cover",
      image: cloudinaryFallback("NEXT LEVEL WEBSITE/camps/serbia (2025)/cover"),
      width: 1100,
      height: 760,
    },
  ],
  "premium-training": [
    {
      title: "Personal Training",
      category: "אימונים אישיים",
      publicId: "NEXT LEVEL WEBSITE/premium_training/cover",
      image: cloudinaryFallback("NEXT LEVEL WEBSITE/premium_training/cover"),
      width: 1100,
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
