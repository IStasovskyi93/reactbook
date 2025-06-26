import React from "react";
import "./EventPlanner.css"; // Import CSS file for styling

const EventPlanner = () => {
  return (
    <div className="event-planner-container">
      {/* Заголовок страницы */}
      <header>
        <h1>Welcome to Event Planner</h1>
      </header>
      {/* Секция для описания цели или обзора приложения */}
      <section className="description">
        {/* Краткое введение или маркетинговое сообщение */}
        <p>
          Планируйте и организуйте свои события без усилий с помощью Event
          Planner. От дней рождения до корпоративных встреч — мы позаботимся о
          вас.
        </p>
        {/* Основная кнопка призыва к действию */}
        <button className="get-started-button">Начать</button>
      </section>
      {/* Секция для перечисления или категоризации различных типов событий */}
      <section className="events_categories">
        <ul>
          <h2>Social Events:</h2>
          <li>Birthday parties</li>
          <li>Anniversary celebrations</li>
          <li>Wedding receptions</li>
          <li>Baby showers</li>
          <li>Graduation parties</li>
          <li>Family reunions</li>
        </ul>
        {/* Entertainment-based event types */}
        <ul>
          <h2>Entertainment Events:</h2>
          <li>Concerts</li>
          <li>Music festivals</li>
          <li>Film screenings</li>
          <li>Comedy shows</li>
          <li>Art exhibitions</li>
          <li>Cultural events</li>
        </ul>
        {/* Community-focused event types */}
        <ul>
          <h2>Community Events:</h2>
          <li>Fundraising events</li>
          <li>Charity galas</li>
          <li>Volunteer drives</li>
          <li>Neighborhood block parties</li>
          <li>Community festivals</li>
          <li>Cultural celebrations</li>
        </ul>
      </section>
      {/* Секция для выделения функций или возможностей приложения */}
      <section className="features">
        {/* Здесь будет содержимое функций */}
      </section>
      {/* Секция для демонстрации отзывов пользователей или рекомендаций */}
      <section className="testimonials">
        {/* Здесь будет содержимое отзывов */}
      </section>
      {/* Секция для предоставления контактной информации или формы обратной связи */}
      <section className="contact">
        {/* Здесь будет содержимое контактов */}
      </section>
    </div>
  );
};

export default EventPlanner;
