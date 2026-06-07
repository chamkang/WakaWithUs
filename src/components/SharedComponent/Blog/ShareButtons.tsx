"use client";

type ShareButtonsProps = {
  title: string;
};

export default function ShareButtons({ title }: ShareButtonsProps) {
  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
  };

  return (
    <div className="flex gap-3 flex-wrap">
      <a
        href={`https://wa.me/?text=${encodeURIComponent(`${title} — Read on WakaWithUS`)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-light_green text-white px-4 py-2 rounded-lg text-15 font-medium hover:opacity-90 transition-opacity"
      >
        WhatsApp
      </a>
      <a
        href="#"
        className="flex items-center gap-2 bg-[#1877F2] text-white px-4 py-2 rounded-lg text-15 font-medium hover:opacity-90 transition-opacity"
      >
        Facebook
      </a>
      <button
        onClick={copyLink}
        className="flex items-center gap-2 border border-border text-caramel px-4 py-2 rounded-lg text-15 font-medium hover:border-primary hover:text-primary transition-colors duration-200"
      >
        Copy Link
      </button>
    </div>
  );
}
