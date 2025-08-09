export function openWhatsApp(number, message) {
  if (typeof window !== 'undefined') {
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${number}?text=${encodedMessage}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}
