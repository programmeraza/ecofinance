import React from 'react';
import './Footer.scss';
import { FaTelegramPlane } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="footer__wrapper">
            <div className="footer__cards">
              <div className="footer__logos">
                <div className="footer__card-1">
                  <img width={100} src="/ecofinance.png" alt="broken" />
                  <h3 className="footer__logo">
                    <span> ECO</span>FINANCE
                  </h3>
                </div>
                <div className="footer__card-3">
                  <FaTelegramPlane className="footer__icon" />
                  <FaWhatsapp className="footer__icon" />
                  <FaInstagram className="footer__icon" />
                </div>
              </div>

              <div className="footer__map">
                <IoLocationSharp className="footer__loc" />
                <p className="footer__map-text">
                  Узбекистан, Ташкент, улица Алишера Навоий 16а
                </p>
              </div>

              <div className="footer__card-2">
                <h3 className="footer__nuber">+998 (97) 777 77 77</h3>
                <h3 className="footer__nuber">+998 (97) 777 77 77</h3>
              </div>
            </div>

            <div className="footer__footer">
              <h4 className="footer__footer-text">
                Политика конфиденциальности
              </h4>
              <h4 className="footer__footer-text">
                © 2024. Все права защищены
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
