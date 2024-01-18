// No seu componente ContactForm.jsx

import { useState } from 'react';
import InputMask from 'react-input-mask';
import styles from './ContactForm.module.scss';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import ButtonA from '../../Components/ButtonA';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    // Remova caracteres não numéricos do número de telefone
    const formattedPhone = e.target.value.replace(/\D/g, '');
    setPhone(formattedPhone);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Adicione lógica para lidar com o envio do formulário aqui
    console.log('Nome:', name);
    console.log('Telefone:', phone);
    console.log('Email:', email);
    console.log('Descrição:', description);
  };

  return (
    <div>
      <Navbar />
      <div className={styles.contactForm}>
        <h1>Formulário de Contato</h1>
        <form onSubmit={handleSubmit} className={styles.cadastroContainer}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Nome:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="phone">Número de Telefone:</label>
            <InputMask
              mask="(99) 99999-9999"
              placeholder="(99) 99999-9999"
              id="phone"
              value={phone}
              onChange={handlePhoneChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="description">Descrição do Serviço:</label>
            <textarea
              id="description"
              value={description}
              onChange={handleDescriptionChange}
            />
          </div>
          <ButtonA type="submit" text='Enviar' />
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default ContactForm;
