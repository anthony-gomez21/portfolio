import { useState } from 'react';
import styles from './contact.module.css';

function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitButton, setSubmitButton] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://formspree.io/f/mnqevarw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, message }),
      });

      if (response.ok) {
        setSubmitButton(false);
        console.log('Formulario enviado exitosamente');
      } else {
        console.error('Error al enviar el formulario');
      }
    } catch (error) {
      console.error('Error al enviar la solicitud:', error);
    }

    setMessage('');
    setEmail('');
  };

  return (
    <div className={styles.container} id="contact">
      <h2 className={styles.title}>Trabajemos juntos !!</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setSubmitButton(true);
          }}
          placeholder="correo@correo.com"
          required
        />
        <textarea
          name="message"
          id="message"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            setSubmitButton(true);
          }}
          cols="30"
          rows="10"
          placeholder="Quiero trabajar contigo..."
          required
        ></textarea>

        <button
          id="buttonSubmit"
          className={submitButton ? styles.buttonSubmit : styles.enviado}
          type="submit"
        >
          {submitButton ? 'Enviar' : 'Enviado'}
        </button>
      </form>
    </div>
  );
}

export default Contact;
