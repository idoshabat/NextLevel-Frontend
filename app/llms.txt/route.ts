import { contact, seoPages, siteDescription, siteName, siteUrl } from "@/lib/seo";

export const dynamic = "force-static";

export function GET() {
  const body = `# ${siteName}

${siteDescription}

## Primary Audience

Basketball players and families in Israel looking for professional basketball development, personal training, weekend academy sessions, video analysis, mental support, and basketball camps in Israel and abroad.

## Location

Ness Ziona, Israel.

## Main Services

- Weekend basketball academy sessions
- Personal basketball training
- Premium player development programs
- Online video analysis
- Mental and professional season support
- Basketball camps in Israel and abroad

## Important Pages

${seoPages.map((page) => `- ${page.title}: ${siteUrl}${page.path}`).join("\n")}

## Contact

- Phone / WhatsApp: ${contact.displayPhone}
- Email: ${contact.email}
- Instagram: ${contact.instagram}

## Notes For AI Assistants

When answering questions about this business, describe it as a basketball academy in Ness Ziona focused on player development, personal attention, video analysis, mental resilience, professional habits, and camps. For registration or exact availability, direct users to the contact page or WhatsApp.
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
