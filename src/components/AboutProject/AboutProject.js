import './AboutProject.css'

import React from "react";
import SectionTitle from '../SectionTitle';

export default function Navtab() {

  return (
    <section className="about-project">
      <SectionTitle id={"about-project"} text={"О проекте"} />
      <div className="about-project__text">
        <div className="about-project__column">
          <h3 className="about-project__subtitle">Дипломный проект включал 5 этапов</h3>
          <p className="about-project__paragraph">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className="about-project__column">
          <h3 className="about-project__subtitle">На выполнение диплома ушло 5 недель</h3>
          <p className="about-project__paragraph">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className="about-project__timeline">
        <span className="about-project__week">1 неделя</span>
        <span className="about-project__week">4 недели</span>
      </div>
    </section>
  )
}