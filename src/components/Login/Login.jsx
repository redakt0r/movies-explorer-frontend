import "./Login.css";
import LogoLink from '../LogoLink/LogoLink';
import GreetingForm from '../GreetingForm/GreetingForm';
import InputWithLabel from '../InputWithLabel/InputWithLabel';

function Login() {
  return (
    <main className="login greeting-form">
      <LogoLink/>
      <GreetingForm greeting={'Рады видеть!'} question={'Ещё не зарегистрированы?'} button={'Войти'} link={{route:'/signup', text:'Регистрация'}}>
        <InputWithLabel label={'E-mail'} type={'email'}/>
        <InputWithLabel label={'Пароль'} type={'password'} minLength={4} maxLength={30}/>
      </GreetingForm>
    </main>
  );
}

export default Login;
