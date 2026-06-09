import { NextResponse } from "next/server";
import {
  cloudinaryConfig,
  createCloudinaryUploadSignature,
} from "@/lib/cloudinary";

const allowedFolders = new Set([
  "NEXT LEVEL WEBSITE/home",
  "NEXT LEVEL WEBSITE/coaches",
  "NEXT LEVEL WEBSITE/weekends",
  "NEXT LEVEL WEBSITE/premium_training",
  "NEXT LEVEL WEBSITE/camps",
  "NEXT LEVEL WEBSITE/camps/passover (2025)",
  "NEXT LEVEL WEBSITE/camps/summer (2025)",
  "NEXT LEVEL WEBSITE/camps/serbia (2024)",
  "NEXT LEVEL WEBSITE/camps/serbia (2025)",
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
