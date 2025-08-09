// BotaoZap.jsx
import { openWhatsApp } from "../src/utils/handleZap"; // supondo que sua função esteja aqui
import Button from "./components/Button";

const BotaoZap = () => {
  const whatsappNumber = "5511977154129"; // coloque seu número
  const message = "Olá, vim pelo site de tráfego pago, gostaria de mais informações.";

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
        onClick={() => openWhatsApp(whatsappNumber, message)}
      >
        Fale no WhatsApp
      </Button>
    </div>
  );
};

export default BotaoZap;
