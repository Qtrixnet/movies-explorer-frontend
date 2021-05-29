import './Register.css'

import React from "react";

import Input from '../Input';
import FormButton from '../FormButton';
import { Link } from 'react-router-dom';

export default function Register() {

  return (
    <>
      <div className="form__container ">
        <Link to="/" title="На главную" className="form__logo" />
        <h1 className="form__title">Добро пожаловать!</h1>
        <Input
          label={"Имя"}
          id={"name"}
          name={"name"}
          type={"text"}
          defaultValue={"Виталий"}
        />
        <Input
          label={"E-mail"}
          id={"email"}
          name={"email"}
          type={"email"}
          defaultValue={"pochta@yandex.ru"}
        />
        <Input
          label={"Пароль"}
          id={"password"}
          name={"password"}
          type={"password"}
          defaultValue={"••••••••••••••"}
        />
      </div>
      <FormButton
        buttonText={"Зарегистрироваться"}
        titleText={"Уже зарегистрированы? "}
        titleLink={"Войти"}
        linkUrl={"/sign-in"}
      />
    </>
  )
}
