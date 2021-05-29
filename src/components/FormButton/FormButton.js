import './FormButton.css'

import React from "react";
import { Link } from 'react-router-dom';

export default function FormButton({buttonText, titleText, titleLink, linkUrl}) {

  return (
    <div className="form__button-container">
      <button type="submit" className="form__button">{buttonText}</button>
      <span className="form__subtitle">{titleText} <Link to={linkUrl} className="form__link">{titleLink}</Link></span>
    </div>
  )
}