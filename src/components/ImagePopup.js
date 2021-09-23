import React from 'react';

function ImagePopup() {
    return (
        <section className="popup popup_dark popup_type_image">
            <div className="popup__image-container">
                <button type="button" className="popup__close" aria-label="Закрыть попап"></button>
                <img className="popup__image" src="#" alt="#" />
                <h2 className="popup__name"></h2>
            </div>
        </section>
    )
}

export default ImagePopup