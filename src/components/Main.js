import React from 'react';
import { api } from '../utils/api';
import Card from './Card';

function Main(props) {
    const [userName, setUserName] = React.useState('')
    const [userDescription, setUserDescription] = React.useState('')
    const [userAvatar, setUserAvatar] = React.useState('')
    const [cards, setCards] = React.useState([])

    React.useEffect(() => {
        api.getUserInfo()
        .then(res => {
            setUserName(res.name)
            setUserDescription(res.about)
            setUserAvatar(res.avatar)
        })
        .catch((err) => {
            console.log(err);
        })
        api.getInitialCards()
        .then(res => {
            setCards(res)
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])


    return (
        <main className="content">
            <section className="profile">
                <div className="profile__info">
                    <img className="profile__avatar" src={userAvatar} alt="Аватар профиля Жак-Ив Кусто" />
                    <div className="profile__button-background">
                        <button type="button" className="profile__edit-avatar" aria-label="Редактировать аватар" onClick={props.onEditAvatar}></button>
                    </div> 
                    <h1 className="profile__name">{userName}</h1>
                    <p className="profile__role">{userDescription}</p>
                    <button type="button" className="profile__edit-button" aria-label="Редактировать профиль" onClick={props.onEditProfile}></button>
                </div>
                <button type="button" className="profile__add-button" onClick={props.onAddPlace}></button>
            </section>

            <section className="elements">
                <ul className="elements__list">
                    {cards.map((item) => {
                        return (
                            <Card key={item._id} card={item} onCardClick={props.onCardClick}/>
                        )
                    })}
                </ul>
            </section>
        </main>
    )
}

export default Main