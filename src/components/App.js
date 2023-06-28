import React, { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import '../index.css'

function App() {  

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({name: '', link: ''});

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({name: '', link: ''});
  }
  
  return (
    <>      
    <Header />
    <Main 
      onEditProfile={handleEditProfileClick}
      onAddPlace={handleAddPlaceClick}
      onEditAvatar={handleEditAvatarClick}
      onCardClick={handleCardClick}
    />
    
    <PopupWithForm 
      title="Редактировать профиль" 
      name="editProfileForm" 
      isOpen={isEditProfilePopupOpen} 
      onClose={closeAllPopups} 
      buttonText="Сохранить"
    >
      <input
        className="popup__input popup__input_type_name"
        type="text"
        name="userName"
        placeholder="Имя"
        minLength="2"
        id="input-userName"
        maxLength="40"
        required
      />
      <span className="popup__input-error input-userName-error"></span>
      <input
        className="popup__input popup__input_type_about"
        type="text"
        name="aboutUser"
        placeholder="О себе"
        minLength="2"
        id="input-aboutUser"
        maxLength="200"
        required
      />
      <span className="popup__input-error input-aboutUser-error"></span>
    </PopupWithForm>

    <PopupWithForm 
      title="Новое место" 
      name="addPhotoForm" 
      isOpen={isAddPlacePopupOpen} 
      onClose={closeAllPopups}
      buttonText="Сохранить"
    >
      <input
        className="popup__input popup__input_type_appellation"
        type="text"
        name="titleForm"
        id="input-titleForm"
        placeholder="Название"
        minLength="2"
        maxLength="30"
        required
      />
      <span className="popup__input-error input-titleForm-error"></span>
      <input
        className="popup__input popup__input_type_link"
        type="url"
        name="linkForm"
        id="input-linkForm"
        placeholder="Ссылка на картинку"
        required
      />
      <span className="popup__input-error input-linkForm-error"></span>
    </PopupWithForm>  
    
    <ImagePopup 
      card={selectedCard} 
      onClose={closeAllPopups} 
    />

    <PopupWithForm 
      title="Обновить аватар" 
      name="editAvatar" 
      isOpen={isEditAvatarPopupOpen} 
      onClose={closeAllPopups}
      buttonText="Сохранить"
    >
      <input
        className="popup__input popup__input_type_avatar"
        type="url"
        name="linkForm"
        placeholder="Ссылка на картинку"
        id="input-linkMainFoto"
        required
      />
      <span className="popup__input-error input-linkMainFoto-error"></span>
    </PopupWithForm>

      <PopupWithForm 
        title="Вы уверены?"
         name="delete"
      >
        <button className="popup__button-save" type="submit">Да</button>
      </PopupWithForm>  

    <Footer />
  </>
    
  );
}

export default App;