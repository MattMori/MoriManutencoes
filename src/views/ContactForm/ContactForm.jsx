import { useState } from 'react';
import axios from 'axios';
import InputMask from 'react-input-mask';
import styles from './ContactForm.module.scss';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import ButtonA from '../../Components/ButtonA';
import Swal from 'sweetalert2';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');

  const toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });
  
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://api.sheetmonkey.io/form/wfB1ETpoMFNJUwbx8qEJS', {
        name,
        phone,
        email,
        description,
      });
      toast.fire({
        icon: "success",
        title: "Solicitação enviada com sucesso!"
      });
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      toast.fire({
        icon: "error",
        title: "verifique os dados e tente novamente!"
      });
    }
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
              required
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
              required
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
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="description">Descrição do Serviço:</label>
            <textarea
              id="description"
              value={description}
              required
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
