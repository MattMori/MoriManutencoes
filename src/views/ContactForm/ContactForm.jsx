import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import ButtonA from "../../Components/ButtonA";
import styles from "./ContactForm.module.scss";

function ContactForm() {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
    descricao: "",
  });

  const WHATSAPP_NUMBER = "5519988896428";
  const GOOGLE_ADS_SEND_TO = "AW-18191638120/uDumCMqdhLQcEOi8ueJD";
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  };

  const abrirWhatsApp = (whatsappUrl) => {
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  const gtagReportConversion = (whatsappUrl) => {
    if (typeof window === "undefined" || typeof window.gtag !== "function") {
      abrirWhatsApp(whatsappUrl);
      return false;
    }

    let alreadyOpened = false;

    const callback = () => {
      if (alreadyOpened) return;

      alreadyOpened = true;
      abrirWhatsApp(whatsappUrl);
    };

    window.gtag("event", "conversion", {
      send_to: GOOGLE_ADS_SEND_TO,
      event_callback: callback,
    });

    setTimeout(callback, 800);

    return false;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const mensagem = `Olá, Milton! Vim pelo site da Mori Service e gostaria de solicitar um orçamento.

Nome: ${formData.nome}
Telefone: ${formData.telefone}
E-mail: ${formData.email}
Descrição do serviço: ${formData.descricao}`;

    const whatsappUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(
      mensagem,
    )}`;

    gtagReportConversion(whatsappUrl);
  };

  return (
    <div className={styles.pageWrapper}>
      <Navbar />

      <main className={styles.contactForm}>
        <form className={styles.cadastroContainer} onSubmit={handleSubmit}>
          <div className={styles.formHeader}>
            <span>Atendimento técnico</span>
            <h1>Solicitar Orçamento</h1>
            <p>
              Envie os dados principais e uma breve descrição do serviço. O
              contato será feito pelo WhatsApp para agilizar o atendimento.
            </p>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="nome">Nome completo</label>
            <input
              id="nome"
              name="nome"
              type="text"
              placeholder="Digite seu nome"
              value={formData.nome}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="telefone">Número de telefone</label>
            <input
              id="telefone"
              name="telefone"
              type="tel"
              placeholder="(19) 99999-9999"
              value={formData.telefone}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">E-mail corporativo ou pessoal</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="exemplo@email.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="descricao">Descrição do serviço</label>
            <textarea
              id="descricao"
              name="descricao"
              placeholder="Descreva brevemente o que você precisa. Ex: modernização de painel, diagnóstico de sobrecarga, instalação de ar-condicionado..."
              value={formData.descricao}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.submitWrapper}>
            <ButtonA type="submit" text="Enviar via WhatsApp" />
          </div>
        </form>
      </main>

      <Footer />
    </div>
  );
}

export default ContactForm;
