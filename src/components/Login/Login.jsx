import "./Login.css";
import LogoLink from '../LogoLink/LogoLink';
import GreetingForm from '../GreetingForm/GreetingForm';
import InputWithLabel from '../InputWithLabel/InputWithLabel';
import useFormWithValidation from "../../hooks/useFormWithValidation";
import { useEffect } from "react";

function Login({ onLogin }) {
  const { values, handleChange, errors, resetForm, isValid } = useFormWithValidation();

  const onSubmit = (e) => {
    e.preventDefault();
    onLogin(values);
  }

  useEffect(() => {
    resetForm()
  }, [resetForm])

  return (
    <main className="login greeting-form">
      <LogoLink/>
      <GreetingForm greeting={'Рады видеть!'} question={'Ещё не зарегистрированы?'} button={'Войти'} link={{route:'/signup', text:'Регистрация'}} onSubmit={onSubmit} isValid={isValid}>
        <InputWithLabel inputName={'email'} handleChange={handleChange} label={'E-mail'} type={'email'} errorMessage={errors.email} pattern='^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$'/>
        <InputWithLabel inputName={'password'} handleChange={handleChange} label={'Пароль'} type={'password'} minLength={4} maxLength={30} errorMessage={errors.password}/>
      </GreetingForm>
    </main>
  );
}

export default Login;
