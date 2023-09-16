import "./Register.css";
import LogoLink from '../LogoLink/LogoLink';
import GreetingForm from '../GreetingForm/GreetingForm';
import InputWithLabel from '../InputWithLabel/InputWithLabel';

function Register() {
  return (
    <section className="register">
      <LogoLink/>
      <GreetingForm greeting={'Добро пожаловать!'} question={'Уже зарегистрированы?'} button={'Зарегистрироваться'} link={{route:'/signin', text:'Войти'}}>
        <InputWithLabel label={'Имя'} type={'text'}/>
        <InputWithLabel label={'E-mail'} type={'email'}/>
        <InputWithLabel label={'Пароль'} type={'password'}/>
      </GreetingForm>
    </section>
  );
}

export default Register;
