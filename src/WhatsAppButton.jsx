import { openWhatsApp } from '../utils/handleWhatsApp';

export function ButtonWhatsApp() {
  const whatsappNumber = '5511977154129'; // seu número com DDD e código do país
  const message = 'Olá, vim pelo site de tráfego pago, gostaria de mais informações.';

  return (
    <Button
      icon="/images/zap.svg"
      onClick={() => openWhatsApp(whatsappNumber, message)}
    >
      Entre em contato
    </Button>
  );
}
