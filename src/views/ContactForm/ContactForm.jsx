import { useState } from "react";
import axios from "axios";
import InputMask from "react-input-mask";
import styles from "./ContactForm.module.scss";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import ButtonA from "../../Components/ButtonA";
import Swal from "sweetalert2";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  const toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });

  const handleNameChange = (e) => setName(e.target.value);
  const handlePhoneChange = (e) => setPhone(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // 1. Salva no banco/planilha via SheetMonkey
      await axios.post(
        "https://api.sheetmonkey.io/form/wfB1ETpoMFNJUwbx8qEJS",
        { name, phone, email, description },
      );

      toast.fire({
        icon: "success",
        title: "Dados salvos! Redirecionando para o WhatsApp...",
      });

      // 2. Configuração do disparo para o WhatsApp do Milton
      const whatsappDoMilton = "5519986107539";
      const textoMensagem = encodeURIComponent(
        `🚨 *Nova Solicitação de Orçamento - Site*\n\n` +
          `👤 *Nome:* ${name}\n` +
          `📞 *Telefone:* ${phone}\n` +
          `✉️ *E-mail:* ${email}\n\n` +
          `📝 *Descrição do Serviço:* ${description}`,
      );

      const urlWhatsapp = `https://api.whatsapp.com/send?phone=${whatsappDoMilton}&text=${textoMensagem}`;

      setName("");
      setPhone("");
      setEmail("");
      setDescription("");

      window.open(urlWhatsapp, "_blank");
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      toast.fire({
        icon: "error",
        title: "Verifique os dados e tente novamente!",
      });
    }
  };

  return (
    <div>
      <Navbar />

      <main className={styles.contactForm}>
        <form onSubmit={handleSubmit} className={styles.cadastroContainer}>
          <h1>Solicitar Orçamento</h1>

          <div className={styles.formGroup}>
            <label htmlFor="name">Nome Completo</label>
            <input
              type="text"
              id="name"
              value={name}
              required
              onChange={handleNameChange}
              placeholder="Digite seu nome"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="phone">Número de Telefone</label>
            <InputMask
              mask="(99) 99999-9999"
              placeholder="(19) 99999-9999"
              id="phone"
              value={phone}
              required
              onChange={handlePhoneChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">E-mail Corporativo ou Pessoal</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
              placeholder="exemplo@email.com"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="description">Descrição do Serviço</label>
            <textarea
              id="description"
              value={description}
              required
              onChange={handleDescriptionChange}
              placeholder="Descreva brevemente o que você precisa (ex: modernização de painel, diagnóstico de sobrecarga, instalação de ar-condicionado...)"
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
};

export default ContactForm;
