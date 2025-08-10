import { openWhatsApp } from './utils/handleZap';
import Button from './components/Button';

export function ButtonWhatsApp() {
  const whatsappNumber = '5511977154129';
  const message = 'Olá, vim pelo site de tráfego pago, gostaria de mais informações.';

  const handleClick = () => {
    if (typeof gtag_report_conversion === 'function') {
      gtag_report_conversion();
    }
    openWhatsApp(whatsappNumber, message);
  };

  return (
    <Button
      icon="/images/zap.svg"
      onClick={handleClick}
    >
      Entre em contato
    </Button>
  );
}
