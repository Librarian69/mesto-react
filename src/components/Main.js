import React, { useState, useEffect } from 'react';
import Api from '../utils/Api';
import Card from './Card';

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const api = new Api({
      baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-68',
      headers: {
        Authorization: '03c31aba-d3c5-4738-8c0c-1ec3028f3f5d',
        'Content-Type': 'application/json',
      },
    });

    const fetchData = async () => {
      try {
        const userData = await api.getUserInfo();
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);

        const cardsData = await api.getAllCards();
        setCards(cardsData);
      } catch (error) {
        console.error('Ошибка при получении данных из API:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__info">
          <button
            className="profile__button-edit-avatar"
            type="button"
            onClick={onEditAvatar}
          >
            <img
              className="profile__avatar"
              src={userAvatar}
              alt="Фото профиля"
            />
          </button>
          <h1 className="profile__name">{userName}</h1>
          <p className="profile__description">{userDescription}</p>
          <button
            className="profile__button-edit"
            type="button"
            onClick={onEditProfile}
          ></button>
        </div>
        <button
          className="profile__button-add"
          type="button"
          onClick={onAddPlace}
        ></button>
      </section>
      <section className="cards-grid">
        <ul className="cards-grid__list">
          {cards.map((card, index) => (
            <Card key={index} card={card} onCardClick={onCardClick} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
