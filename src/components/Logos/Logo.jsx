import React from 'react';
import './Logo.scss';
import { IoPersonOutline } from 'react-icons/io5';
import { MdLocalPhone } from 'react-icons/md';
import { FaRegCheckCircle } from 'react-icons/fa';
import { HiDocumentCheck } from 'react-icons/hi2';
import { MdManageAccounts } from 'react-icons/md';
import { AiOutlineFileProtect } from 'react-icons/ai';

const Logo = () => {
  return (
    <>
      <div className="logo" id='logos'>
        <div className="container">
          <div className="logo__wrapper">
            <h6 className="logo__text-blue">Преимущество</h6>
            <h1 className="logo__title">Принципы работы:</h1>

            <div className="logo__cards">
              <div className="logo__card">
                <IoPersonOutline className="logo__icon" />
                <h2 className="logo__card-title">Личный бухгалтер</h2>
                <p className="logo__card-text">
                  За каждым клиентом мы закрепляем персонального главного
                  бухгалтера. Подбирая сотрудника, мы всегда учитываем специфику
                  вашего бизнеса. Сотрудник ведет вашу фирму и не меняется.
                </p>
              </div>

              <div className="logo__card">
                <MdManageAccounts className="logo__icon" />
                <h2 className="logo__card-title">Упорядоченная документация</h2>
                <p className="logo__card-text">
                  Для этого мы детально продумываем все стратегии обмена
                  документами. Наличие собственной курьерской доставки
                  документов помогает решать вопросы максимально быстро.
                </p>
              </div>

              <div className="logo__card">
                <FaRegCheckCircle className="logo__icon" />
                <h2 className="logo__card-title">Качественные услуги</h2>
                <p className="logo__card-text">
                  Все наши услуги исполняются на исключительно высоком
                  профессиональном уровне с соблюдением принципа материальной
                  ответственности за результат.
                </p>
              </div>

              <div className="logo__card">
                <MdLocalPhone className="logo__icon" />
                <h2 className="logo__card-title">Всегда на связи</h2>
                <p className="logo__card-text">
                  Все наши каналы коммуникации всегда доступны. Телефонные
                  номера, электронная почта, наш Telegram - всегда в вашем
                  распоряжении.
                </p>
              </div>

              <div className="logo__card">
                <HiDocumentCheck className="logo__icon" />
                <h2 className="logo__card-title">1C-бухгалтерия</h2>
                <p className="logo__card-text">
                  Предлагаем различные варианты управления вашими базами данных
                  1С. Берем на себя администрирование и обновление
                  бухгалтерского ПО.
                </p>
              </div>

              <div className="logo__card">
                <AiOutlineFileProtect className="logo__icon" />
                <h2 className="logo__card-title">Защита информации</h2>
                <p className="logo__card-text">
                  Мы гарантируем 100% соблюдение конфиденциальности информации,
                  касающейся любых аспектов ведения вашего бизнеса.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Logo;
