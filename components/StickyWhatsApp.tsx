export default function StickyWhatsapp() {
  const message =
    "Selamat sore, saya ingin bertanya mengenai program belajar di Creativo School.";

  const encodedMessage = encodeURIComponent(message);

  return (
    <a
      href={`https://wa.me/6285104971118?text=${encodedMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg hover:bg-green-600 transition
           block md:hidden"
    >
      WhatsApp
    </a>
  );
}
