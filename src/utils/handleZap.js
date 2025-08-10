export function openWhatsApp(number, message) {
  if (typeof window !== 'undefined') {
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${number}?text=${encodedMessage}`;

    console.log('openWhatsApp chamado com URL:', url);

    if (typeof gtag_report_conversion === 'function') {
      console.log('gtag_report_conversion existe, chamando...');
      gtag_report_conversion(url);
    } else {
      console.log('gtag_report_conversion NÃO está definida, abrindo WhatsApp direto');
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  } else {
    console.log('window indefinido, função não executada');
  }
}
