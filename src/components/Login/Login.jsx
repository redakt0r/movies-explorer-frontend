import "./Login.css";
import LogoLink from '../LogoLink/LogoLink';
import GreetingForm from '../GreetingForm/GreetingForm';
import InputWithLabel from '../InputWithLabel/InputWithLabel';

function Login() {
  return (
    <section className="login greeting-form">
      <LogoLink/>
      <GreetingForm greeting={'Рады видеть!'} question={'Ещё не зарегистрированы?'} button={'Войти'} link={{route:'/signup', text:'Регистрация'}}>
        <InputWithLabel label={'E-mail'} type={'email'}/>
        <InputWithLabel label={'Пароль'} type={'password'} minLength={4}/>
      </GreetingForm>
    </section>
  );
}

export default Login;
