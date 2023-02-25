import './Cards.scss'
import React from 'react';
import CharacterDetail from '../CharacterDetail/CharacterDetail';

const API_URL = "https://api.disneyapi.dev/characters?page=";

const Cards = ({page}) => {

    const [cardsList, setCardsList] = React.useState([]);

    const [showDetails, setShowDetails] = React.useState();

    const fullScreenDetails = (card) => {
        setShowDetails(card);
    }

    React.useEffect(() => {

        // Llamada a la API
        fetch(API_URL + page)
            .then((response) => response.json())
            .then((data) => {
                setCardsList(data);
            });
    }, [page])
    

    return (
        <div className='cards'>
        {
            cardsList.data !== undefined ? (
            cardsList.data.map((card) => {
                return (
                    <div key={card._id} className='cards__item' onClick={ () => fullScreenDetails(card) } >
                        <img className='card__pic' src={card.imageUrl} alt="Character"/>
                        <p className='card__name'>{card.name}</p>
                    </div>
                )
            })) : ("No hay")
        }
        { showDetails && <CharacterDetail showDetails={ showDetails } setShowDetails={ setShowDetails } /> }
        </div>

    );
}

export default Cards;