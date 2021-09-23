import React from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState();

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true);
    }

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true);
    }

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true);
    }

    function closeAllPopups() {
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
        setSelectedCard();
    }

    function handleCardClick (card) {
        setSelectedCard(card);
    }

  return (
    <div>
    <Header />
    <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
    />
    <Footer />
 
    <PopupWithForm title="Редактировать профиль" name="edit" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
        <div className="popup__container">
                <label className="popup__label">
                    <input type="text" name="name" id="owner-name" placeholder="Имя" className="popup__text popup__text_type_name" required minLength="2" maxLength="40" />
                    <span className="popup__error" id="owner-name-error"></span>
                </label>
                <label className="popup__label">
                    <input type="text" name="role" id="owner-role" placeholder="О себе" className="popup__text popup__text_type_role" required minLength="2" maxLength="200" />
                    <span className="popup__error" id="owner-role-error"></span>
                </label>          
        </div>
    </PopupWithForm>
    
    <PopupWithForm title="Новое место" name="new-card" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
        <div className="popup__container">
                <label className="popup__label">
                    <input type="text" name="place" id="place" placeholder="Название" className="popup__text popup__text_type_place" required minLength="2" maxLength="30" />
                    <span className="popup__error" id="place-error"></span>
                </label>
                 <label className="popup__label">
                    <input type="url" name="link" id="link" placeholder="Ссылка на картинку" className="popup__text popup__text_type_link" required />
                    <span className="popup__error" id="link-error"></span>
                </label>
        </div>
    </PopupWithForm>

    <PopupWithForm title="Обновить аватар" name="avatar" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
        <div className="popup__container">
                <label className="popup__label">
                    <input type="url" name="link" id="avatar-pic" className="popup__text" placeholder="Ссылка на аватар" required />
                    <span className="popup__error" id="avatar-pic-error"></span>
                </label>
        </div>
    </PopupWithForm>
    

    <PopupWithForm title="Вы уверены?" name="delete-card">
        <div className="popup__container">
            <button type="button" className="popup__close" aria-label="Закрыть попап"></button>
            <h2 className="popup__title popup__title_delete-card">Вы уверены?</h2>
            <button type="button" className="popup__submit-button popup__submit-button_type_confirm" aria-label="Создать">Да</button>
        </div>
    </PopupWithForm>

    <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    
    </div>
  );
}

export default App;
