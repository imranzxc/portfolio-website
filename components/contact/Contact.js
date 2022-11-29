import Heading from '../Heading';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { useState } from 'react';
import ContactContext from '../../context/ContactContext';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [msg, setMsg] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [dataReceived, setDataReceived] = useState(false);
  const submitForm = (event) => {
    event.preventDefault();
    const submitRequest = async () => {
      setFormSubmitted(true);
      emailjs
        .send(
          process.env.NEXT_EMAILJS_SERVICE_ENV_VARIABLE,
          process.env.NEXT_EMAILJS_TEMPLATE_ENV_VARIABLE,
          { name, email, subject, msg },
          process.env.NEXT_EMAILJS_KEY_ENV_VARIABLE
        )
        .then(
          (response) => {
            setFormSubmitted(false);
            setDataReceived(true);
            setName('');
            setEmail('');
            setSubject('');
            setMsg('');
            console.log('SUCCESS!', response.status, response.text);
          },
          (err) => {
            console.log('FAILED...', err);
          }
        );
    };
    submitRequest();
  };

  const animations = {
    nameInput: {
      initial: { opacity: 0, x: 20 },
      exit: { opacity: 0, x: 10, transition: { duration: 0.3 } },
      animate: { opacity: 1, x: 0, transition: { duration: 0.3, delay: 0.3 } },
    },
    emailInput: {
      initial: { opacity: 0, x: -20 },
      exit: { opacity: 0, x: -10, transition: { duration: 0.3 } },
      animate: { opacity: 1, x: 0, transition: { duration: 0.3, delay: 0.3 } },
    },
    subjectInput: {
      initial: { opacity: 0, y: -30 },
      exit: { opacity: 0, y: -10, transition: { duration: 0.3 } },
      animate: { opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.4 } },
    },
    msgInput: {
      initial: { opacity: 0, y: -30 },
      exit: { opacity: 0, y: -10, transition: { duration: 0.3 } },
      animate: { opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.5 } },
    },
    btn: {
      initial: { opacity: 0, y: -30 },
      exit: { opacity: 0, y: -10, transition: { duration: 0.3 } },
      animate: { opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.6 } },
    },
  };
  return (
    <>
      <ContactContext.Provider
        value={{ name, setName, email, setEmail, subject, setSubject, msg, setMsg }}
      >
        <div className="px-7">
          <Heading heading={'Связяться'} />
          <div className="mt-10 font-bodyText">
            <form onSubmit={submitForm} className="flex flex-col items-center justify-center">
              <div className="flex flex-row items-center justify-center">
                <motion.input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  variants={animations.nameInput}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="w-full mr-2 input"
                  type="text"
                  placeholder="Полное имя"
                  required
                />
                <motion.input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  variants={animations.emailInput}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="w-full ml-2 input"
                  type="email"
                  placeholder="Ваш электронный адрес"
                  required
                />
              </div>
              <motion.input
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                variants={animations.subjectInput}
                initial="initial"
                animate="animate"
                exit="exit"
                className="w-full m-4 input"
                type="text"
                placeholder="Заголовок"
                required
              />
              <motion.textarea
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                variants={animations.msgInput}
                initial="initial"
                animate="animate"
                exit="exit"
                className="w-full m-2 h-28 input"
                placeholder="Сообщение"
                name=""
                required
              ></motion.textarea>
              <motion.button
                variants={animations.btn}
                initial="initial"
                animate="animate"
                exit="exit"
                className="btn"
                type="submit"
              >
                {formSubmitted ? (
                  <>
                    <div className="loader"></div>
                  </>
                ) : dataReceived ? (
                  'Сообщение отправлено ✉️'
                ) : (
                  'Отправить'
                )}
              </motion.button>
            </form>
          </div>
        </div>
      </ContactContext.Provider>
    </>
  );
};

export default Contact;
