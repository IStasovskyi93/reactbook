import React from "react";
import "./EventPlanner.css"; // Import CSS file for styling
import Footer from "./footer";

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
        <h2>Features</h2>
        {/* List of key platform features */}
        <ul>
          <li>Easy event creation and management</li>
          <li>Customizable event templates</li>
          <li>Guest list management</li>
          <li>Real-time collaboration</li>
          <li>Reminders and notifications</li>
        </ul>
      </section>
      {/* Секция для демонстрации отзывов пользователей или рекомендаций */}
      <section className="testimonials">
        <section className="testimonials">
          {/* Section heading */}
          <h2>Testimonials</h2>
          {/* Individual testimonial block */}
          <div className="testimonial">
            <p>
              "Event Planner made organizing my wedding a breeze. Highly
              recommended!"
            </p>
            <p className="author">- Emily Johnson</p>
          </div>
          {/* Another testimonial block */}
          <div className="testimonial">
            <p>
              "I use Event Planner for all my corporate events. It saves me so
              much time and effort!"
            </p>
            <p className="author">- John Smith</p>
          </div>
        </section>
      </section>
      {/* Секция для предоставления контактной информации или формы обратной связи */}
      <section className="contact">
        <h2>Свяжитесь с нами</h2>
        {/* Форма для контактов */}
        <form>
          {/* Поле ввода имени */}
          <input type="text" placeholder="Имя" />
          {/* Поле ввода электронной почты */}
          <input type="email" placeholder="Электронная почта" />
          {/* Текстовая область для сообщения */}
          <textarea placeholder="Сообщение"></textarea>
          {/* Кнопка отправки */}
          <button className="submit-button">Отправить</button>
        </form>
      </section>
      <Footer />
    </div>
  );
};

export default EventPlanner;
