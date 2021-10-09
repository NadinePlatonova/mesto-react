import React from 'react';
import { api } from '../utils/api';
import Card from './Card';
import CurrentUserContext from '../contexts/CurrentUserContext';


function Main(props) {
    const user = React.useContext(CurrentUserContext);
    const [cards, setCards] = React.useState([])

    React.useEffect(() => {
        api.getInitialCards()
        .then(res => {
            setCards(res)
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])

    function handleCardLike(card) {
        const isLiked = card.likes.some(i => i._id === user._id);
        api.putLike(card._id, isLiked)
        .then((newCard) => {
            setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
        });
    }

    function handleCardDelete(card) {
        api.deleteCard(card._id)
        .then(() => {
            setCards((state) => state.filter(c => c._id !== card._id));
        });
    }

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__info">
                    <img className="profile__avatar" src={user.avatar} alt="Аватар профиля" />
                    <div className="profile__button-background">
                        <button type="button" className="profile__edit-avatar" aria-label="Редактировать аватар" onClick={props.onEditAvatar}></button>
                    </div> 
                    <h1 className="profile__name">{user.name}</h1>
                    <p className="profile__role">{user.about}</p>
                    <button type="button" className="profile__edit-button" aria-label="Редактировать профиль" onClick={props.onEditProfile}></button>
                </div>
                <button type="button" className="profile__add-button" onClick={props.onAddPlace}></button>
            </section>

            <section className="elements">
                <ul className="elements__list">
                    {cards.map((item) => {
                        return (
                            <Card key={item._id} card={item} onCardClick={props.onCardClick} onCardLike={handleCardLike} onCardDelete={handleCardDelete}/>
                        )
                    })}
                </ul>
            </section>
        </main>
    )
}

export default Main