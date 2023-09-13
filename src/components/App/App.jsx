import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SeacrhForm';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';

function App() {
  return (
    <div className='page'>
      <Header/>
      <Main/>
      <Footer/>
      <SearchForm/>
      <Movies/>
      <Profile/>
      <Register/>
      <Login/>
      <PageNotFound/>
    </div>
  );
}

export default App;
