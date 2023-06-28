import Api from '../utils/Api';

const api = new Api({ 
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-68', 
  headers: {
    Authorization: "03c31aba-d3c5-4738-8c0c-1ec3028f3f5d",
    "Content-Type": "application/json",
  },
});

function Card({ card, onCardClick }) {
  const handleCardClick = () => {
    onCardClick(card);
  };

  return (
    <li className="card">
      <img className="card__photo" src={card.link} alt={card.name} onClick={handleCardClick} />
      <div className="card__container">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__likes-container">
          <button className="card__button-like" type="button"></button>
          <span className="card__likes-counter">{card.likes.length}</span>
        </div>
      </div>
      <button className="card__button-delete" type="button"></button>
    </li>
  );
}

export default Card;
