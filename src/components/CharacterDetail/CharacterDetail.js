import React from 'react';
import DetailLists from '../DetailLists/DetailLists';
import './CharacterDetail.scss';

const API_URL = "https://api.disneyapi.dev/characters/";

const CharacterDetail = ({showDetails, setShowDetails}) => {

    const [appearances, setAppearances] = React.useState();

    const [characterDetails, setCharacterDetails] = React.useState();

    React.useEffect(() => {

        // Llamada a la API
        fetch(API_URL + showDetails._id)
            .then((response) => response.json())
            .then((data) => {
                setCharacterDetails(data);
                setAppearances([
                    {type: "Peliculas: ", list: data.films},
                    {type: "Series: ", list: data.tvShows},
                    {type: "Cortos: ", list: data.shortFilms},
                    {type: "Videojuegos: ", list: data.videoGames},
                    {type: "Atracciones: ", list: data.parkAttractions},
                    {type: "Aliados: ", list: data.allies},
                    {type: "Enemigos: ", list: data.enemies}
                ])
            });
    }, [showDetails])

    const closeModal = () => {
        setShowDetails(false);
    }

    return (
        <div className='cards__fullscreen' onClick={() => closeModal()}>
            {appearances && characterDetails &&
                <div className='cards__modal' key={ characterDetails._id } onClick={(event) => event.stopPropagation()}>
                    <h3 className='cards__title'>{ characterDetails.name }</h3>
                    <img className='cards__pic--big' src={ characterDetails.imageUrl } alt="Big character"/>
                    <DetailLists appearances={ appearances }/>
                </div>
            }
        </div>
        
    );
}

export default CharacterDetail;