import { NextResponse } from "next/server";
import {
  cloudinaryConfig,
  createCloudinaryUploadSignature,
} from "@/lib/cloudinary";

const allowedFolders = new Set([
  "next-level/gallery/weekends",
  "next-level/gallery/camps",
  "next-level/gallery/premium-training",
  "NEXT LEVEL WEBSITE/Weekends",
  "NEXT LEVEL WEBSITE/Camps",
  "NEXT LEVEL WEBSITE/Camps/Passover",
  "NEXT LEVEL WEBSITE/Camps/Serbia (2025)",
  "NEXT LEVEL WEBSITE/Camps/Summer (2025)",
  "NEXT LEVEL WEBSITE/Personal",
  "next-level/home",
  "next-level/coaches",
  "next-level/camps",
]);

export async function POST(request: Request) {
  const { folder } = (await request.json().catch(() => ({}))) as {
    folder?: string;
  };

  if (!cloudinaryConfig.cloudName || !cloudinaryConfig.apiKey) {
    return NextResponse.json(
      { error: "Cloudinary credentials are not configured" },
      { status: 500 }
    );
  }

  if (!folder || !allowedFolders.has(folder)) {
    return NextResponse.json({ error: "Invalid upload folder" }, { status: 400 });
  }

  const timestamp = Math.round(Date.now() / 1000).toString();
  const signature = createCloudinaryUploadSignature({
    folder,
    timestamp,
  });

  return NextResponse.json({
    cloudName: cloudinaryConfig.cloudName,
    apiKey: cloudinaryConfig.apiKey,
    folder,
    timestamp,
    signature,
  });
}
