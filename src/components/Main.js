import React from 'react';
import avatar from '../images/profile-avatar.jpg'

function Main(props) {

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__info">
                    <img className="profile__avatar" src={avatar} alt="Аватар профиля Жак-Ив Кусто" />
                    <div className="profile__button-background">
                        <button type="button" className="profile__edit-avatar" aria-label="Редактировать аватар" onClick={props.onEditAvatar}></button>
                    </div> 
                    <h1 className="profile__name">Жак-Ив Кусто</h1>
                    <p className="profile__role">Исследователь океана</p>
                    <button type="button" className="profile__edit-button" aria-label="Редактировать профиль" onClick={props.onEditProfile}></button>
                </div>
                <button type="button" className="profile__add-button" onClick={props.onAddPlace}></button>
            </section>

            <section className="elements">
                <ul className="elements__list">
                </ul>
            </section>
        </main>
    )
}

export default Main