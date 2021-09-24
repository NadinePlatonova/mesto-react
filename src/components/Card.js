import React from 'react';

function Card(props) {
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