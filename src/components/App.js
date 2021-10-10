import React from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import { api } from '../utils/api';
import CurrentUserContext from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';


function App() {
  const [currentUser, setCurrentUser] = React.useState({})
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState();

  React.useEffect(() => {
    api.getUserInfo()
    .then((data) => {
        setCurrentUser(data);
    })
    .catch((err) => {
        console.log(err);
    })
  }, [])

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

    function handleUpdateUser({name, about}) {
        api.setUserInfo(name, about)
        .then((data) => {
            setCurrentUser(data);
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            closeAllPopups();
        })
    }

  return (
    <CurrentUserContext.Provider value={currentUser}>
        <div>  
        <Header />
        <Main
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={handleCardClick}
        />
        <Footer />

        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
            
        <PopupWithForm title="Новое место" name="new-card" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} submitButtonText="Создать">
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

        <PopupWithForm title="Обновить аватар" name="avatar" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} submitButtonText="Сохранить">
            <div className="popup__container">
                    <label className="popup__label">
                        <input type="url" name="link" id="avatar-pic" className="popup__text" placeholder="Ссылка на аватар" required />
                        <span className="popup__error" id="avatar-pic-error"></span>
                    </label>
            </div>
        </PopupWithForm>
        

        <PopupWithForm title="Вы уверены?" name="delete-card" onClose={closeAllPopups} submitButtonText="Да">
        </PopupWithForm>

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
