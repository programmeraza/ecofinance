import React, { useState } from 'react';
import { useZIndex } from '../ZIndexContext/ZIndexContext';
import './Header.scss';

const Header = () => {
  //
  const [menuOpen, setMenuOpen] = useState(false);
  const { lowerZIndex, resetZIndex } = useZIndex();

  const toggleMenuZindex = () => {
    setMenuOpen((prevMenuOpen) => {
      const newMenuOpen = !prevMenuOpen;

      if (newMenuOpen) {
        lowerZIndex();
      } else {
        resetZIndex();
      }

      return newMenuOpen;
    });
  };
  //
  const [isOpen, setIsOpen] = useState(false);
  const [isBurgerX, setIsBurgerX] = useState(false);

  const toggleBurger = () => {
    toggleBurgerX();
    toggleMenu();
    toggleMenuZindex();
  };

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const toggleBurgerX = () => {
    setIsBurgerX((prev) => !prev);
  };

  const toggleCloseMenu = () => {
    toggleBurger();
  };

  return (
    <>
      <div className={`header ${isOpen ? 'menu-open' : ''}`}>
        <div className="container">
          <div className="header__wrapper">
            <div className="header__logo">
              <img width={50} src="/ecofinance.png" alt="logo" />
              <h3 className="header__title-logo"><span>ECO</span>FINANCE</h3>
            </div>
            <div className="header__navbar">
              <div className="header__location">
                <img width={30} src="./location-dark.png" alt="dark" />
                <p className="header__text">
                  Узбекистан, Ташкент, улица Алишера Навоий 16а
                </p>
              </div>
              <a href='tel:+998910010657' className="header__btn">+998 (91) 001-06-57</a>

              <button
                onClick={toggleBurger}
                className={
                  isBurgerX ? 'header__burger active' : 'header__burger'
                }
              >
                <span></span>
                <span></span>
              </button>

            <div className={toggleBurger ? 'header__overlay-bg active' : 'header__overlay-bg'}>

                  <div
                    className={
                      isOpen
                        ? 'header__menu active'
                        : 'header__menu style={{ zIndex: 0 }}'
                    }
                  >
                    <div className="bg_menu">
                    <a className='menu__link' href={"#services"} onClick={toggleCloseMenu}>
                      Услуги
                    </a>
                    <a className='menu__link' href={"#price"} onClick={toggleCloseMenu}>
                      Цены
                    </a>
                    <a className='menu__link' href={"#logos"} onClick={toggleCloseMenu}>
                      Преимущества
                    </a>
                    <a className='menu__link' href={"#contacts"} onClick={toggleCloseMenu}>
                      Контакты
                    </a>

                    <div className="header__tel-flex">
                      <div className="header__location1">
                        <img width={30} src="./location-wight.png" alt="white" />
                        <p className="header__text">
                          Узбекистан, Ташкент, улица Алишера Навоий 16а
                        </p>
                      </div>
                      <button className="header__btn1">
                        <a href='tel:+998910010657'>+998 (91) 001-06-57</a>
                      </button>
                    </div>
                  </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
