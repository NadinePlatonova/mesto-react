import React from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext';

function Card(props) {
    const user = React.useContext(CurrentUserContext);
    const isOwn = card.owner._id === currentUser._id;

    const cardDeleteButtonClassName = (
        `element__delete-button ${isOwn ? 'element__delete-button_visible' : 'element__delete-button'}`
    );

    const isLiked = card.likes.some(i => i._id === currentUser._id);
    const cardLikeButtonClassName = `...`;

    function handleClick() {
        props.onCardClick(props.card);
    }

    return (
        <li className="element">
            <button type="button" className="element__delete-button" aria-label="Удалить"></button>
            <img className="element__image" src={props.card.link} alt={props.card.name} onClick={handleClick} />
            <div className="element__info">
                <h2 className="element__title">{props.card.name}</h2>
                <button type="button" className="element__like-button" aria-label="Лайк">{props.card.likes.length}</button>
            </div>
        </li>
    )
}

export default Card