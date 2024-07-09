import React from 'react'
import "./About.scss"

const About = () => {
  return (
    <>
    <div className="about">
        <div className="container">
            <div className="about__wrapper">
                <div className="about__know">
                    <p className="about__text-orange">Полезно знать</p>
                </div>
                <div className="about__content">
                    <h1 className="about__title">Для кого подойдет удаленное ведение бухгалтерии?</h1>
                    <div className="about__desc">
                        <p className="about__text">Наши клиенты - юридические лица со всего Узбекистана, как крупные компании, так и начинающие предприниматели. Не важно, чем именно вы занимаетесь - веб-разработкой, выращиванием овощей или строительными материалами. Мы обслуживаем бизнес в любой отрасли.</p>
                        <p className="about__text1">Мы готовы помочь с открытием вашего бизнеса: проконсультируем по документации и налогообложению. Я Никогда до этого не работали с бухгалтером? Мы можем существенно сэкономить в дальнейшем!</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default About