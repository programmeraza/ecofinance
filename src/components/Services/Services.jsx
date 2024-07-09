import React, { useEffect, useRef, useState } from 'react';
import './Services.scss';
import { useZIndex } from '../ZIndexContext/ZIndexContext';

const Services = () => {
  const { zIndex } = useZIndex();
  const [selectedCheckbox, setSelectedCheckbox] = useState(null);

  const services = [
    {
      id: 'accordion1',
      title: 'Ведение бухгалтерской отчетности',
      description:
        'Профессиональное ведение бухгалтерской отчетности для бизнеса. Надежное и точное ведение финансовых операций в соответствии с законодательством',
    },
    {
      id: 'accordion2',
      title: 'Подача и подготовка налоговой отчетности',
      description:
        'Подготовка и отправка отчетов в налоговую в срок, а также консультации по оптимизации налогообложения для бизнеса',
    },
    {
      id: 'accordion3',
      title: 'Учет денежных средств',
      description:
        'Мы разработаем и поможем внедрить различные формы управленческой отчетности с учетом специфики вашей отрасли. На их основе вы сможете легко отслеживать эффективность вашей бизнес-стратегии.',
    },
    {
      id: 'accordion4',
      title: 'Ведение первичной документации',
      description:
        'Первичная бухгалтерская документация включает в себя все первоначальные документы, которые фиксируют финансовые операции и события организации',
    },
    {
      id: 'accordion5',
      title: 'Услуги управленческого учета',
      description:
        'Мы разработаем и поможем внедрить различные формы управленческой отчетности с учетом специфики вашей отрасли. На их основе вы сможете легко отслеживать эффективность вашей бизнес-стратегии.',
    },
    {
      id: 'accordion6',
      title: 'Взаимодействие с контрагентами',
      description:
        'Предлагаем услуги по созданию и контролю актов сверок с вашими поставщиками и покупателями.',
    },
    {
      id: 'accordion7',
      title: 'Восстановление учета, консультации',
      description:
        'Мы исправим ошибки в ведении вашей бухгалтерии, если они имели место быть, и поможем наладить и восстановить учет за прошлый период',
    },
  ];

  const handleCheckboxChange = (id) => {
    setSelectedCheckbox(selectedCheckbox === id ? null : id);
  };

  const ServiceCard = ({ id, title, description }) => {
    const boxRef = useRef(null);

    useEffect(() => {
      if (selectedCheckbox === id) {
        boxRef.current.style.height = `${boxRef.current.scrollHeight}px`;
      } else {
        boxRef.current.style.height = '0';
      }
    }, [selectedCheckbox]);

    return (
      <div className="services__card">
        <input
          type="checkbox"
          id={id}
          checked={selectedCheckbox === id}
          onChange={() => handleCheckboxChange(id)}
        />
        <label htmlFor={id} className="services__title-card">
          {title}
        </label>
        <div className="box" ref={boxRef}>
          <p className="services__text-card">{description}</p>
        </div>
      </div>
    );
  };


  return (
    <>
      <div className="some-component" id='services' style={{ zIndex }}>
        <div className="services">
          <div className="container">
            <div className="services__wrapper">
              <div className="services__content">
                <p className="services__text-blue">Услуги</p>
                <h1 className="services__title">
                  Услуги, которые мы готовы вам предоставлять:
                </h1>
              </div>
              <div className="services__flex">
                <div className="services__img-flex">
                  <img src="/accouting.png" alt="acc" />
                </div>
                <div className="services__cards">
                  {services.map((service) => (
                    <ServiceCard
                      key={service.id}
                      id={service.id}
                      title={service.title}
                      description={service.description}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
