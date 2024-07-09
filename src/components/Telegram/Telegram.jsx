import './Telegram.scss';
import axios from 'axios';
import React, { useState } from 'react';
import { LuPencilLine } from 'react-icons/lu';
import { HiOutlineMail } from 'react-icons/hi';
import { IoPersonSharp } from 'react-icons/io5';
import { FaTelegramPlane } from 'react-icons/fa';

const Telegram = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [problem, setProblem] = useState('');
  const [error, setError] = useState('');

  const sendTelegramMessage = async () => {
    if (!name || !email || !problem) {
      setError('Все поля должны быть заполнены.');
      return;
    }

    const token = '6425936756:AAH5qqUlxJZ6FabA7UCGgu-8pPVVNurz-PU';
    const chatId = '-1002219547217';
    const urlApi = `https://api.telegram.org/bot${token}/sendMessage`;

    const fullMessage = `Имя: ${name}\nEmail: ${email}\nПроблема: ${problem}`;

    try {
      await axios.post(urlApi, {
        chat_id: chatId,
        text: fullMessage,
      });
      console.log('Message sent:', true);
      window.location.reload();
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
    setError('');
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setError('');
  };

  const handleProblemChange = (event) => {
    setProblem(event.target.value);
    setError('');
  };

  return (
    <>
      <div className="tg" id='contacts'>
        <div className="container">
          <div className="tg__wrapper">
            <h1 className="tg__title">Свяжитесь с нами</h1>
            <p className="tg__text">
              Если у вас есть дополнительные вопросы, пожалуйста, не стесняйтесь
              обращаться к нам.
            </p>

            {error && <p className="tg__error">{error}</p>}

            <form action="" className="tg__inps">
              <label className="tg__label" htmlFor="#">
                <IoPersonSharp className="tg__icon" />
                <input
                  required
                  value={name}
                  onChange={handleNameChange}
                  type="name"
                  className="tg__inp"
                  placeholder="Name"
                />
              </label>

              <label className="tg__label" htmlFor="#">
                <HiOutlineMail className="tg__icon" />
                <input
                  required
                  value={email}
                  onChange={handleEmailChange}
                  type="email"
                  className="tg__inp"
                  placeholder="Email"
                />
              </label>
            </form>

            <div className="tg__card">
              <label htmlFor="#" className="tg__lbl">
                <LuPencilLine className="tg__icon" />
                <textarea
                  required
                  value={problem}
                  onChange={handleProblemChange}
                  type="text"
                  className="tg__area"
                  placeholder="Ваше сообщение ... "
                />
              </label>

              <button onClick={sendTelegramMessage} className="tg__btn">
                <FaTelegramPlane className="tg__icon tg" />
                Отправить
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Telegram;
