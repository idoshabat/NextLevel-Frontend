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
    title: "סופשים",
    eyebrow: "אימוני סוף שבוע",
    description:
      "רגעים מאימונים מרוכזים, עבודה בקצב גבוה וחוויית כדורסל אינטנסיבית בסופי שבוע.",
    folder: "NEXT LEVEL WEBSITE/Weekends",
    folders: ["NEXT LEVEL WEBSITE/Weekends"],
    publicId: "NEXT LEVEL WEBSITE/Weekends/DSC_0956_1_k5hnzk",
    image: cloudinaryFallback(
      "NEXT LEVEL WEBSITE/Weekends/DSC_0956_1_k5hnzk",
      "f_auto,q_auto,w_1100,h_760,c_fill,g_auto"
    ),
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
    publicId: "NEXT LEVEL WEBSITE/Camps/Summer (2025)/DSC_3706_xsxxo5",
    image: cloudinaryFallback(
      "NEXT LEVEL WEBSITE/Camps/Summer (2025)/DSC_3706_xsxxo5",
      "f_auto,q_auto,w_1100,h_760,c_fill,g_auto"
    ),
  },
  {
    slug: "premium-training",
    title: "אימונים אישיים",
    eyebrow: "עבודה אישית וממוקדת",
    description:
      "אימונים קטנים ומדויקים לשיפור יכולות אישיות, קליעה, שליטה בכדור וקבלת החלטות.",
    folder: "NEXT LEVEL WEBSITE/Personal",
    folders: ["NEXT LEVEL WEBSITE/Personal"],
    publicId: "NEXT LEVEL WEBSITE/Personal/DSC_0863_pykhho",
    image: cloudinaryFallback(
      "NEXT LEVEL WEBSITE/Personal/DSC_0863_pykhho",
      "f_auto,q_auto,w_1100,h_760,c_fill,g_auto"
    ),
  },
] as const;

export const galleryItems = {
  weekends: [
    {
      title: "חימום לפני אימון",
      category: "סופשים",
      publicId: "NEXT LEVEL WEBSITE/Weekends/DSC_0956_1_k5hnzk",
      image: cloudinaryFallback("NEXT LEVEL WEBSITE/Weekends/DSC_0956_1_k5hnzk"),
      width: 3405,
      height: 5107,
    },
    {
      title: "משחקון פנימי",
      category: "סופשים",
      publicId: "NEXT LEVEL WEBSITE/Weekends/DSC_7212_fzgteo",
      image: cloudinaryFallback("NEXT LEVEL WEBSITE/Weekends/DSC_7212_fzgteo"),
      width: 3353,
      height: 5030,
    },
    {
      title: "עבודה קבוצתית",
      category: "סופשים",
      publicId: "NEXT LEVEL WEBSITE/Weekends/DSC_8458_rs9jtd",
      image: cloudinaryFallback("NEXT LEVEL WEBSITE/Weekends/DSC_8458_rs9jtd"),
      width: 3143,
      height: 4714,
    },
    {
      title: "אנרגיה על המגרש",
      category: "סופשים",
      publicId: "NEXT LEVEL WEBSITE/Weekends/DSC_8820_llzmmn",
      image: cloudinaryFallback("NEXT LEVEL WEBSITE/Weekends/DSC_8820_llzmmn"),
      width: 3029,
      height: 4543,
    },
    {
      title: "סיום אימון",
      category: "סופשים",
      publicId: "NEXT LEVEL WEBSITE/Weekends/DSC_9166_rvme8n",
      image: cloudinaryFallback("NEXT LEVEL WEBSITE/Weekends/DSC_9166_rvme8n"),
      width: 3133,
      height: 4700,
    },
    {
      title: "תחרות קליעה",
      category: "סופשים",
      publicId: "NEXT LEVEL WEBSITE/Weekends/DSC_0956_1_k5hnzk",
      image: cloudinaryFallback("NEXT LEVEL WEBSITE/Weekends/DSC_0956_1_k5hnzk"),
      width: 3405,
      height: 5107,
    },
  ],
  camps: [
    {
      title: "אימון בוקר",
      category: "מחנות",
      publicId: "NEXT LEVEL WEBSITE/Camps/Passover/DSC_8730_zzkvcy",
      image: cloudinaryFallback("NEXT LEVEL WEBSITE/Camps/Passover/DSC_8730_zzkvcy"),
      width: 6048,
      height: 4024,
    },
    {
      title: "רגע לפני משחק",
      category: "מחנות",
      publicId: "NEXT LEVEL WEBSITE/Camps/Passover/DSC_8363_ywv5h6",
      image: cloudinaryFallback("NEXT LEVEL WEBSITE/Camps/Passover/DSC_8363_ywv5h6"),
      width: 5593,
      height: 3721,
    },
    {
      title: "אימון יסודות",
      category: "מחנות",
      publicId: "NEXT LEVEL WEBSITE/Camps/Summer (2025)/DSC_3706_xsxxo5",
      image: cloudinaryFallback("NEXT LEVEL WEBSITE/Camps/Summer (2025)/DSC_3706_xsxxo5"),
      width: 6048,
      height: 4024,
    },
    {
      title: "שיחת צוות",
      category: "מחנות",
      publicId: "NEXT LEVEL WEBSITE/Camps/Summer (2025)/DSC_3908_ohowgk",
      image: cloudinaryFallback("NEXT LEVEL WEBSITE/Camps/Summer (2025)/DSC_3908_ohowgk"),
      width: 6048,
      height: 4024,
    },
    {
      title: "מחנה חופשה",
      category: "מחנות",
      publicId: "NEXT LEVEL WEBSITE/Camps/Summer (2025)/DSC_5705-3_djzvui",
      image: cloudinaryFallback("NEXT LEVEL WEBSITE/Camps/Summer (2025)/DSC_5705-3_djzvui"),
      width: 6048,
      height: 4024,
    },
    {
      title: "ערב קבוצתי",
      category: "מחנות",
      publicId: "NEXT LEVEL WEBSITE/Camps/Serbia (2025)/IMG_8522_sgteiu",
      image: cloudinaryFallback("NEXT LEVEL WEBSITE/Camps/Serbia (2025)/IMG_8522_sgteiu"),
      width: 5712,
      height: 4284,
    },
  ],
  "premium-training": [
    {
      title: "אימון קליעה",
      category: "אימונים אישיים",
      publicId: "NEXT LEVEL WEBSITE/Personal/DSC_0217_l5c1xf",
      image: cloudinaryFallback("NEXT LEVEL WEBSITE/Personal/DSC_0217_l5c1xf"),
      width: 3777,
      height: 5665,
    },
    {
      title: "שליטה בכדור",
      category: "אימונים אישיים",
      publicId: "NEXT LEVEL WEBSITE/Personal/DSC_0863_pykhho",
      image: cloudinaryFallback("NEXT LEVEL WEBSITE/Personal/DSC_0863_pykhho"),
      width: 4032,
      height: 6048,
    },
    {
      title: "עבודת רגליים",
      category: "אימונים אישיים",
      publicId: "NEXT LEVEL WEBSITE/Personal/DSC_7180_ulybx6",
      image: cloudinaryFallback("NEXT LEVEL WEBSITE/Personal/DSC_7180_ulybx6"),
      width: 3461,
      height: 5192,
    },
    {
      title: "קבלת החלטות",
      category: "אימונים אישיים",
      publicId: "NEXT LEVEL WEBSITE/Personal/DSC_7477_gb44ut",
      image: cloudinaryFallback("NEXT LEVEL WEBSITE/Personal/DSC_7477_gb44ut"),
      width: 2966,
      height: 4449,
    },
    {
      title: "אימון אישי",
      category: "אימונים אישיים",
      publicId: "NEXT LEVEL WEBSITE/Personal/DSC_0217_l5c1xf",
      image: cloudinaryFallback("NEXT LEVEL WEBSITE/Personal/DSC_0217_l5c1xf"),
      width: 3777,
      height: 5665,
    },
    {
      title: "שחרור זריקה",
      category: "אימונים אישיים",
      publicId: "NEXT LEVEL WEBSITE/Personal/DSC_0863_pykhho",
      image: cloudinaryFallback("NEXT LEVEL WEBSITE/Personal/DSC_0863_pykhho"),
      width: 4032,
      height: 6048,
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
