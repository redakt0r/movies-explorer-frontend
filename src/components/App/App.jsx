import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SeacrhForm';
import Movies from '../Movies/Movies';

function App() {
  return (
    <div className='page'>
      <Header/>
      <Main/>
      <Footer/>
      <SearchForm/>
      <Movies/>
    </div>
  );
}

export default App;
