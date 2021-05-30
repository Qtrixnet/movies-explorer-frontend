import './SectionTitle.css';

import React from "react";

export default function SectionTitle({ text, id}) {

  return (
    <h2 id={id} className="section-title">{text}</h2>
  )
}