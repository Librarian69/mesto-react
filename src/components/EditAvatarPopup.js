import React, { useRef } from "react";
import PopupWithForm from "./PopupWithForm";

export default function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const link = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: link.current.value,
    });
  }

  return (
    <PopupWithForm 
      title="Обновить аватар" 
      name="editAvatar" 
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText="Сохранить"
    >
      <input
        className="popup__input popup__input_type_avatar"
        type="url"
        name="linkForm"
        placeholder="Ссылка на картинку"
        id="input-linkMainFoto"
        ref={link}
        onChange={(e) => (link.current.value = e.target.value)}
        required
      />
      <span className="popup__input-error input-linkMainFoto-error"></span>
    </PopupWithForm>
   
  );
}
