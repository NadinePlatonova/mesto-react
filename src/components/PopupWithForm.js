import React from 'react';

function PopupWithForm(props) {
    return (
        <section className={`popup popup_type_${props.name}`}>
        <div className="popup__container">
            <button type="button" className="popup__close" aria-label="Закрыть попап"></button>
            <h2 className="popup__title">{props.title}</h2>
            <form className="popup__form" action="#" name={props.name} noValidate>
                {props.children}
                <button type="submit" className="popup__submit-button" aria-label="Сохранить">Сохранить</button>
            </form>
        </div>
        </section>
    )
}

export default PopupWithForm