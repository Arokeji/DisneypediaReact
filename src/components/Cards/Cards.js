import './Cards.scss'
import React from 'react';
import CharacterDetail from '../CharacterDetail/CharacterDetail';
import Loading from '../Loading/Loading';

const API_URL = "https://api.disneyapi.dev/characters?page=";

const Cards = ({page}) => {

    const [cardsList, setCardsList] = React.useState([]);

    const [showDetails, setShowDetails] = React.useState();

    const [loadingStatus, setLoadingStatus] = React.useState(false);

    const fullScreenDetails = (card) => {
        setShowDetails(card);
    }

    React.useEffect(() => {

        setLoadingStatus(true);
        // Llamada a la API
        fetch(API_URL + page)
            .then((response) => response.json())
            .then((data) => {
                setCardsList(data);
                setLoadingStatus(false);
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
        {loadingStatus && <Loading></Loading>}
        </div>

    );
}

export default Cards;