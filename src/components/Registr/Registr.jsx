import React from 'react'
import "./Registr.scss"

const Registr = () => {
  return (
    <>
    <div className="registr" id='price'>
      <div className="container">
        <div className="registr__wrapper">
            <div className="registr__content">
              <p className="registr__text">
                Цены
              </p>
              <h1 className="registr__title">
                Цены которые мы можем посоветовать:
              </h1>
            </div>

            <div className="registr__term">
              <h2 className="registr__term-title">
                срок до 6 рабочих дней
              </h2>
              <div className="registr__term-flex">
                <h2 className="registr__term-title">
                  10 000 000 UZS
                </h2>
                <p className="registr__text1">Eдиноразово</p>
              </div>
            </div>
            
            <div className="registr__price">
              <h2 className="registr__title2">
                В наши тарифы включены ведение и подготовка кадровой документации, введение программы 1С, работа с банк клиентом, подготовка электронных счёт фактур:
              </h2>
              <div className="registr__cards">
                <div className="registr__card">
                  <h2 className="registr__title-card">Малый бизнес</h2>
                  <p className="registr__text-card">
                  — до 5 сотрудников <br />
                  — до 30 документов <br />
                  — до 10 банковских транзакций <br />
                  — налог с оборота, онлайн ОНКМ <br />
                  — оборот до 100 000 000 UZS
                  </p>
                  <div className="registr__card-flex">
                    <h2 className="registr__title-card-price">
                      от 2 500 000 UZS
                    </h2>
                    <p className="registr__text1">В месяц</p>
                  </div>
                </div>

                <div className="registr__card">
                  <h2 className="registr__title-card">Средний бизнес</h2>
                  <p className="registr__text-card">
                  — до 10 сотрудников <br />
                  — до 50 документов <br />
                  — до 15 банковских транзакций <br />
                 — налоги ОСН (НДС), онлайн ОНКМ <br />
                  — импорт/экспорт <br />
                  — оборот до 500 000 000 UZS
                  </p>
                  <div className="registr__card-flex">
                    <h2 className="registr__title-card-price">
                      от 4 500 000 UZS
                    </h2>
                    <p className="registr__text1">В месяц</p>
                  </div>
                </div>

                <div className="registr__card">
                  <h2 className="registr__title-card">Крупный бизнес</h2>
                  <p className="registr__text-card">
                  — от 10 сотрудников <br />
                  — от 50 документов и выше <br />
                  — от 15 банковских транзакций и выше <br />
                  — налоги ОСН (НДС), онлайн ОНКМ <br />
                  — импорт/экспорт <br />
                  — оборот от 500 000 000 UZS <br />
                  </p>
                  <div className="registr__card-flex">
                    <h2 className="registr__title-card-price">
                      от 7 000 000 UZS
                    </h2>
                    <p className="registr__text1">В месяц</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Registr