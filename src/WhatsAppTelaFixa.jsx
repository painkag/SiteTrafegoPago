import { openWhatsApp } from "../src/utils/handleZap";
import Button from "./components/Button";

const BotaoZap = () => {
  const whatsappNumber = "5511977154129";
  const message = "Olá, vim pelo site de tráfego pago, gostaria de mais informações.";

  const handleClick = () => {
    if (typeof gtag_report_conversion === "function") {
      gtag_report_conversion();
    }
    openWhatsApp(whatsappNumber, message);
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 1000,
      }}
    >
      <Button
        icon="/images/whatsapp.png"
        onClick={handleClick}
      >
        Fale no WhatsApp
      </Button>
    </div>
  );
};

export default BotaoZap;
