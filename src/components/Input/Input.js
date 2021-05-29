import './Input.css';

import React from "react";

export default function Input({ label, id, name, type, defaultValue }) {
  const errors = {
    name: 'Что-то пошло не так...',
    // name: false,
  }

  return (
    <>
      <label className="form__label">{label}
        <input autoComplete="on" className="form__input" id={id} name={name} type={type} minLength="2" maxLength="40" required defaultValue={defaultValue} />
        <span
          id="form__input-error"
          className={`${errors.name ? 'form__input-error form__input-error_visible' : 'form__input-error'}`}
        >{errors.name}</span>
      </label>
    </>
  )
}