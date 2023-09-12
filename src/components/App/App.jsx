import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SeacrhForm';

function App() {
  return (
    <div className='page'>
      <Header/>
      <Main/>
      <Footer/>
      <SearchForm/>
    </div>
  );
}

export default App;
