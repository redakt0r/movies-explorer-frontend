import "./Login.css";
import LogoLink from '../LogoLink/LogoLink';
import GreetingForm from '../GreetingForm/GreetingForm';
import InputWithLabel from '../InputWithLabel/InputWithLabel';
import useForm from "../../hooks/useForm";

function Login({ onLogin }) {
  const { values, handleChange } = useForm({
    name: "",
    email: "",
    password: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    onLogin(values);
  }

  return (
    <main className="login greeting-form">
      <LogoLink/>
      <GreetingForm greeting={'Рады видеть!'} question={'Ещё не зарегистрированы?'} button={'Войти'} link={{route:'/signup', text:'Регистрация'}} onSubmit={onSubmit}>
        <InputWithLabel inputName={'email'} handleChange={handleChange} label={'E-mail'} type={'email'}/>
        <InputWithLabel inputName={'password'} handleChange={handleChange} label={'Пароль'} type={'password'} minLength={4} maxLength={30}/>
      </GreetingForm>
    </main>
  );
}

export default Login;
