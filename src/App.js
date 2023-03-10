import React from 'react';
import './App.scss';
import Cards from './components/Cards/Cards';

function App() {

  const API_URL = "https://api.disneyapi.dev/characters?page=1";

  const [maxPage, setMaxPage] = React.useState();

  const [page, setPage] = React.useState(1); 

  

  React.useEffect(() => {

    // Llamada a la API y loading
    fetch(API_URL)
        .then((response) => response.json())
        .then((data) => {
          setMaxPage(data.totalPages);
        });
  }, [])

  return (
    <div className="App">
      <header className='header'>
        <h1 className='header__title'>DISNEYPEDIA</h1>
      </header>
      <Cards page={ page }/>
      <nav className='nav'>
        <button className="nav__button" disabled={ page === 1 } onClick={() => setPage(page - 1)}>Previous</button>
        <span className="nav__page">{ page }</span>
        <button className="nav__button" disabled={ page === maxPage } onClick={() => setPage(page + 1)}>Next</button>
      </nav>
    </div>
  );
}

export default App;
