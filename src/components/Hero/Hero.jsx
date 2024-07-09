import React from 'react'
import "./Hero.scss"

const Hero = () => {
  return (
    <>
    <div className="hero">
        <div className="container">
            <div className="hero__wrapper">
                <div className="hero__content">
                    <h1 className="hero__title">Бухгалтерские услуги в Узбекистане</h1>
                    <p className="hero__text">Полное бухгалтерское сопровождение вашего бизнеса. Возьмем заботы на себя, освободив ваше время для важных дел.</p>
                </div>
                <div className="hero__cards">
                  <div className="hero__card">
                    <h1 className="hero__title-card">1</h1>
                    <p className="hero__text-card">в рейтинге лучших бухгалтерских услуг Узбекистана</p>
                  </div>
                  <div className="hero__card">
                    <h1 className="hero__title-card">5</h1>
                    <p className="hero__text-card">лет надёжности и опыта в бухгалтерской сфере</p>
                  </div>
                  <div className="hero__card">
                    <h1 className="hero__title-card">112+</h1>
                    <p className="hero__text-card">компаний мы ведем в Узбекистане на аутсорсе</p>
                  </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Hero