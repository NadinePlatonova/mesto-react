import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditProfilePopup(props) {
    const [avatar, setAvatar] = React.useState('');
    const avatarRef = React.useRef();

    function handleEditAvatar(e) {
        setAvatar(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.onUpdateAvatar({
            avatar: avatarRef.current.value
        });
    }

    React.useEffect(() => {
        avatarRef.current.value = ''
    }, [props.isOpen])

    return (
        <PopupWithForm
        title="Обновить аватар"
        name="avatar"
        isOpen={props.isOpen}
        onClose={props.onClose}
        submitButtonText="Сохранить"
        onSubmit={handleSubmit}>
            <div className="popup__container">
                    <label className="popup__label">
                        <input ref={avatarRef} value={avatar} onChange={handleEditAvatar} type="url" name="link" id="avatar-pic" className="popup__text" placeholder="Ссылка на аватар" required />
                        <span className="popup__error" id="avatar-pic-error"></span>
                    </label>
            </div>
        </PopupWithForm>
    )
}

export default EditProfilePopup;