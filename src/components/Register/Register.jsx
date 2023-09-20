import "./Register.css";
import LogoLink from '../LogoLink/LogoLink';
import GreetingForm from '../GreetingForm/GreetingForm';
import InputWithLabel from '../InputWithLabel/InputWithLabel';
import useForm from "../../hooks/useForm";

function Register({ onRegister }) {
  const { values, handleChange } = useForm({
    name: "",
    email: "",
    password: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    onRegister(values);
  }

  return (
    <main className="register greeting-form">
      <LogoLink/>
      <GreetingForm greeting={'Добро пожаловать!'} question={'Уже зарегистрированы?'} button={'Зарегистрироваться'} link={{route:'/signin', text:'Войти'}} onSubmit={onSubmit}>
        <InputWithLabel inputName={'name'} handleChange={handleChange} label={'Имя'} type={'text'} minLength={2} maxLength={20}/>
        <InputWithLabel inputName={'email'} handleChange={handleChange} label={'E-mail'} type={'email'}/>
        <InputWithLabel inputName={'password'} handleChange={handleChange} label={'Пароль'} type={'password'} minLength={4} maxLength={30}/>
      </GreetingForm>
    </main>
  );
}

export default Register;
