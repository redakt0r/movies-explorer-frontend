import "./Register.css";
import LogoLink from '../LogoLink/LogoLink';
import GreetingForm from '../GreetingForm/GreetingForm';
import InputWithLabel from '../InputWithLabel/InputWithLabel';
import useFormWithValidation from "../../hooks/useFormWithValidation";
import { useEffect } from "react";

function Register({ onRegister }) {
  const { values, handleChange, errors, resetForm, isValid } = useFormWithValidation();

  const onSubmit = (e) => {
    e.preventDefault();
    onRegister(values);
  }

  useEffect(() => {
    resetForm()
  }, [resetForm])

  return (
    <main className="register greeting-form">
      <LogoLink/>
      <GreetingForm greeting={'Добро пожаловать!'} question={'Уже зарегистрированы?'} button={'Зарегистрироваться'} link={{route:'/signin', text:'Войти'}} onSubmit={onSubmit} isValid={isValid}>
        <InputWithLabel inputName={'name'} handleChange={handleChange} label={'Имя'} type={'text'} minLength={2} maxLength={30} pattern='^[A-Za-zА-Яа-я\sё\-]*$' errorMessage={errors.name}/>
        <InputWithLabel inputName={'email'} handleChange={handleChange} label={'E-mail'} type={'email'} pattern='^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$' errorMessage={errors.email}/>
        <InputWithLabel inputName={'password'} handleChange={handleChange} label={'Пароль'} type={'password'} minLength={4} maxLength={30} errorMessage={errors.password}/>
      </GreetingForm>
    </main>
  );
}

export default Register;
