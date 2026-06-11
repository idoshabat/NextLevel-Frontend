import crypto from "node:crypto";

const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
const apiKey = process.env.CLOUDINARY_API_KEY;
const apiSecret = process.env.CLOUDINARY_API_SECRET;

type CloudinaryImageOptions = {
  width?: number;
  height?: number;
  crop?: "fill" | "fit" | "limit" | "scale";
  gravity?: "auto" | "face" | "center";
  quality?: "auto" | "auto:eco" | "auto:good" | number;
  format?: "auto" | "webp" | "jpg" | "png";
};

export type CloudinaryResource = {
  public_id: string;
  secure_url: string;
  width?: number;
  height?: number;
};

export function getCloudinaryImageUrl(
  publicId: string | undefined,
  fallback: string,
  options: CloudinaryImageOptions = {}
) {
  if (!cloudName || !publicId) {
    return fallback;
  }

  const transformation = [
    options.width ? `w_${options.width}` : null,
    options.height ? `h_${options.height}` : null,
    options.crop ? `c_${options.crop}` : null,
    options.gravity ? `g_${options.gravity}` : null,
    `q_${options.quality ?? "auto"}`,
    `f_${options.format ?? "auto"}`,
  ]
    .filter(Boolean)
    .join(",");

  return `https://res.cloudinary.com/${cloudName}/image/upload/${transformation}/${publicId}`;
}

export function getCloudinaryVideoUrl(
  publicId: string | undefined,
  fallback: string,
  transformation = "q_auto"
) {
  if (!cloudName || !publicId) {
    return fallback;
  }

  return `https://res.cloudinary.com/${cloudName}/video/upload/${transformation}/${publicId}`;
}

export function createCloudinaryUploadSignature(params: Record<string, string>) {
  if (!apiSecret) {
    throw new Error("Missing CLOUDINARY_API_SECRET");
  }

  const payload = Object.entries(params)
    .filter(([, value]) => value !== "")
    .sort(([left], [right]) => left.localeCompare(right))
    .map(([key, value]) => `${key}=${value}`)
    .join("&");

  return crypto
    .createHash("sha1")
    .update(`${payload}${apiSecret}`)
    .digest("hex");
}

export const cloudinaryConfig = {
  cloudName,
  apiKey,
};

export async function listCloudinaryFolderImages(folder: string) {
  if (!cloudName || !apiKey || !apiSecret) {
    return [] as CloudinaryResource[];
  }

  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/resources/search`,
      {
        method: "POST",
        headers: {
          Authorization: `Basic ${Buffer.from(`${apiKey}:${apiSecret}`).toString(
            "base64"
          )}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          expression: `folder="${folder}" AND resource_type:image`,
          max_results: 100,
          sort_by: [{ public_id: "asc" }],
        }),
        next: {
          revalidate: 300,
        },
      }
    );

    if (!response.ok) {
      return [];
    }

    const data = (await response.json()) as {
      resources?: CloudinaryResource[];
    };

    return data.resources ?? [];
  } catch {
    return [];
  }
}
