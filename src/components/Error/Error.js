import './Error.css'

import React from "react";
import { Link, useHistory } from 'react-router-dom';

export default function Error({status, message}) {

  const history = useHistory();

  function handleClick() {
    history.goBack();
  };

  return (
    <section className="error">
      <span className="error__status">{status}</span>
      <h1 className="error__message">{message}</h1>
      <Link onClick={handleClick} className="error__link">Назад</Link>
    </section>
  )
}