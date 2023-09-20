import "./Register.css";
import LogoLink from '../LogoLink/LogoLink';
import GreetingForm from '../GreetingForm/GreetingForm';
import InputWithLabel from '../InputWithLabel/InputWithLabel';
import { auth } from '../../utils/Auth';
import useForm from "../../hooks/useForm";

function Register() {
  const { values, handleChange } = useForm({
    name: "",
    email: "",
    password: "",
  });

  const handleRegister = ({ name, email, password }) => {
    auth
      .signUp(name, email, password)
      .then((res) => {
        console.log(res)
      })
  }

  const onSubmit = (e) => {
    e.preventDefault();
    handleRegister(values);
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
