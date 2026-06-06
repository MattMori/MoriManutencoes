import { useEffect, useState } from "react";
import styles from "./Form.module.css";
import ButtonA from "../ButtonA";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://d335luupugsy2.cloudfront.net/js/loader-scripts/7d1897c6-e72c-4c2d-b15a-36916776e5e7-loader.js";
    script.async = true;
    script.id = "rd-station-loader";

    if (!document.getElementById("rd-station-loader")) {
      document.body.appendChild(script);
    }

    return () => {
      const existingScript = document.getElementById("rd-station-loader");

      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const mensagem = `Olá, Milton! Vim pelo site da MoriService e gostaria de solicitar um orçamento.

Nome: ${formData.name}
Email: ${formData.email}
Telefone: ${formData.phone || "Não informado"}
Mensagem: ${formData.message || "Não informado"}`;

    const whatsappUrl = `https://wa.me/5519988896428?text=${encodeURIComponent(
      mensagem,
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section className={styles.formSection}>
      <div className={styles.formCard}>
        <div className={styles.header}>
          <span>Orçamento</span>

          <h1>Solicite uma avaliação técnica</h1>

          <p>
            Envie seus dados e explique rapidamente o que precisa. A MoriService
            entra em contato para entender o serviço e orientar o melhor
            caminho.
          </p>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Nome</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Seu nome completo"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="seuemail@exemplo.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="phone">Telefone / WhatsApp</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="(19) 99999-9999"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message">O que você precisa?</label>
            <textarea
              id="message"
              name="message"
              placeholder="Ex: instalação elétrica, troca de disjuntor, poste padrão CPFL, painel, manutenção..."
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <div className={styles.submitWrapper}>
            <ButtonA type="submit" text="Solicitar orçamento" />
          </div>
        </form>
      </div>
    </section>
  );
}
