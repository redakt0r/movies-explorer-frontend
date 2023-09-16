import "./Register.css";
import LogoLink from '../LogoLink/LogoLink';
import GreetingForm from '../GreetingForm/GreetingForm';
import InputWithLabel from '../InputWithLabel/InputWithLabel';

function Register() {
  return (
    <section className="register greeting-form">
      <LogoLink/>
      <GreetingForm greeting={'Добро пожаловать!'} question={'Уже зарегистрированы?'} button={'Зарегистрироваться'} link={{route:'/signin', text:'Войти'}}>
        <InputWithLabel label={'Имя'} type={'text'} minLength={2} maxLength={20}/>
        <InputWithLabel label={'E-mail'} type={'email'}/>
        <InputWithLabel label={'Пароль'} type={'password'} minLength={4}/>
      </GreetingForm>
    </section>
  );
}

export default Register;
