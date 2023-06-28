function PopupWithForm(props) {

  const handleClose = () => {
    props.onClose();
  };
  
  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_active' : ''}`}>
      <div className={`popup__container popup__container_${props.name}`}>
        <h2 className="popup__title">{props.title}</h2>
        <button
          className={`popup__button-close popup__button-close_${props.name}`}          
          type="button"
          onClick={handleClose}
        ></button>
        <form className={`popup__form popup__form_${props.name}`} name={props.name} noValidate>
          {props.children}
          <button className="popup__button-save" type="submit">
            Сохранить
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;


