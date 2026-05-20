const whatsappPhone = "972553090366";
const whatsappMessage = "שלום, אשמח לקבל פרטים על אקדמיית Next Level";

export function WhatsappButton() {
  const href = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <a
      className="fixed bottom-6 left-6 z-50 grid size-14 place-items-center rounded-full bg-[#25d366] text-white transition duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_18px_42px_rgba(37,211,102,0.48)] focus:outline-none focus:ring-2 focus:ring-white/80 focus:ring-offset-2 focus:ring-offset-[#030405] max-[560px]:bottom-4 max-[560px]:left-4 max-[560px]:size-13"
      href={href}
      aria-label="שליחת הודעת WhatsApp"
      title="WhatsApp"
      target="_blank"
      rel="noreferrer"
    >
      <svg
        width="34"
        height="34"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M22.5 11.6a10.4 10.4 0 0 1-15.2 9.3L2.3 22.3l1.4-5A10.4 10.4 0 1 1 22.5 11.6Z"
          stroke="currentColor"
          strokeWidth="1.45"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.4 8.4c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.4-.3.3-.9.9-.9 2.2s1 2.6 1.1 2.8c.1.2 2 3.1 4.9 4.2 2.4 1 2.9.8 3.5.7.5-.1 1.6-.7 1.9-1.3.2-.6.2-1.2.2-1.3-.1-.1-.3-.2-.6-.3l-1.7-.8c-.3-.1-.5-.1-.7.2-.2.3-.7.8-.9 1-.2.2-.3.2-.6.1-.3-.1-1.1-.4-2.1-1.3-.8-.7-1.3-1.6-1.5-1.9-.2-.3 0-.4.1-.6l.5-.5c.1-.2.2-.3.3-.5.1-.2.1-.4 0-.5l-.8-2Z"
          fill="currentColor"
          transform="translate(0 -0.7)"
        />
      </svg>
    </a>
  );
}
