# Cloudinary Setup

Use Google Drive only for receiving files from the client. The website should serve
media from Cloudinary.

## Environment Variables

Create `.env.local` and fill these values from the Cloudinary dashboard:

```bash
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

Restart the dev server after changing `.env.local`.

## Folder Structure

Upload media using this structure:

```txt
NEXT LEVEL WEBSITE/
  Weekends/
    cover
    any-image-name
    another-image-name
  Camps/
    cover
    Passover/
      any-image-name
      another-image-name
    Serbia (2025)/
      any-image-name
      another-image-name
    Summer (2025)/
      any-image-name
      another-image-name
  Personal/
    cover
    any-image-name
    another-image-name
```

Example public ID:

```txt
NEXT LEVEL WEBSITE/Weekends/photo-from-training
```

## How The Site Works

The gallery loads every image inside each Cloudinary folder automatically.

You do not need to name files `01`, `02`, `03`.

Recommended:

- Name the category cover image `cover`.
- Upload the rest of the images with any clear name.
- The `cover` image is used only on the main gallery categories page.
- The category page shows every image in the folder except `cover`.
- The `camps` gallery also loads images from these subfolders:
  - `NEXT LEVEL WEBSITE/Camps/Passover`
  - `NEXT LEVEL WEBSITE/Camps/Serbia (2025)`
  - `NEXT LEVEL WEBSITE/Camps/Summer (2025)`
- The personal training gallery loads from:
  - `NEXT LEVEL WEBSITE/Personal`

If Cloudinary credentials are missing or the folder is empty, the site falls back
to dummy images from `data/gallery.ts`.

No Cloudinary secret is exposed to the browser.

## Future Upload UI

The project includes a server route for signed uploads:

```txt
POST /api/cloudinary/sign-upload
```

Body:

```json
{
  "folder": "next-level/gallery/weekends"
}
```

Allowed folders are defined in:

```txt
app/api/cloudinary/sign-upload/route.ts
```

Use this route later if you build an admin upload form.
