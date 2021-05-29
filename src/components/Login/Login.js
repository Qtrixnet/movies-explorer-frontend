import './Login.css';

import React from "react";
import Input from '../Input';
import FormButton from '../FormButton';
import { Link } from 'react-router-dom';

export default function Login() {

  return (
    <>
      <div className="form__container ">
        <Link to="/" title="На главную" className="form__logo"/>
        <h1 className="form__title">Рады видеть!</h1>
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
          defaultValue={"pochta@yandex.ru"}
        />
      </div>
      <FormButton
        buttonText={"Войти"}
        titleText={"Еще не зарегистрированы? "}
        titleLink={"Регистрация"}
        linkUrl={"/sign-up"}
      />
    </>
  )
}
