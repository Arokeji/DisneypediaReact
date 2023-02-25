import React from 'react';
import './App.scss';
import Cards from './components/Cards/Cards';

function App() {

  const API_URL = "https://api.disneyapi.dev/characters?page=1";

  const [maxPage, setMaxPage] = React.useState();

  const [page, setPage] = React.useState(148); 

  const [previousPageVisible, setPreviousPageVisible] = React.useState(false);

  const [nextPageVisible, setNextPageVisible] = React.useState(true);

  React.useEffect(() => {

    // Llamada a la API
    fetch(API_URL)
        .then((response) => response.json())
        .then((data) => {
          setMaxPage(data.totalPages);
        });
  }, [])

  const nextPage = () => {
    console.log(maxPage + " y " + page);
    maxPage &&
      page === maxPage ? setNextPageVisible(false) : setPage(page + 1);

    setPreviousPageVisible(true);
  }

  const previousPage = () => {
    page > 1 ? setPage(page - 1) : console.log("No hay");
  }

  return (
    <div className="App">
      <header className='header'>
        <h1 className='header__title'>DISNEYPEDIA</h1>
      </header>
      <Cards page={ page }/>
      <nav>
        {previousPageVisible &&
          <button onClick={() => previousPage()}>Previous</button>
        }
        { page }
        {nextPageVisible &&
          <button onClick={() => nextPage()}>Next</button>
        }
      </nav>
    </div>
  );
}

export default App;
