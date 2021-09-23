import React from 'react';

function ImagePopup(props) {
    return (
        <section className={`popup popup_dark popup_type_image ${props.card ? 'popup_opened' : ''}`}>
            <div className="popup__image-container">
                <button type="button" className="popup__close" aria-label="Закрыть попап" onClick={props.onClose}></button>
                <img className="popup__image" src={props.card ? props.card.link : '#'} alt="#" />
                <h2 className="popup__name"> </h2>
            </div>
        </section>
    )
}

export default ImagePopup