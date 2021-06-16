import './AboutMe.css';

import React from "react";
import SectionTitle from '../SectionTitle';
import avatar from '../../images/avatar.jpg';

export default function AboutMe() {

  return (
    <section className="student">
        <SectionTitle id={"student"} text={"Студент"} />
        <article className="student__info">
          <div className="student__info-container">
            <h3 className="student__name">Кирилл</h3>
            <p className="student__profession">Фронтенд-разработчик, 28 лет</p>
            <p className="student__bio">Я родился и живу в г.Алматы (Казахстан), учился в АФ СпбГУП на специальности "прикладная информатика". Мой путь во фронтенд стартовал на первом курсе, когда только начинал изучать HTML и следующие несколько лет создание лендингов было обычным хобби. Настоящий интерес проявился на этапе создания сайта для дипломной работы, после чего было принято решение поступить в Яндекс.Практикум и целенаправленно развиваться в профессии.</p>
            <ul className="student__list">
              <li className="student__list-item"><a target="_blank" rel="noreferrer" href="https://www.facebook.com/" className="student__link">Facebook</a></li>
              <li className="student__list-item"><a target="_blank" rel="noreferrer" href="https://github.com/Qtrixnet" className="student__link">Github</a></li>
            </ul>
          </div>
          <img src={avatar} alt="Фотография студента" className="student__photo" />
        </article>
    </section>
  )
}