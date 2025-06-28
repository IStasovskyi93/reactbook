import React, { useState } from "react";
import "./FeedbackForm.css"; // Импорт CSS для стилизации

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
    rating: "", // Новое состояние для рейтинга
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const confirmationMessage = `
          Имя: ${formData.name}
          Электронная почта: ${formData.email}
          Отзыв: ${formData.feedback}
          Рейтинг: ${formData.rating}
        `;
    const isConfirmed = window.confirm(
      `Пожалуйста, подтвердите ваши данные:\n\n${confirmationMessage}`
    );
    if (isConfirmed) {
      console.log("Отправка отзыва:", formData);
      setFormData({
        name: "",
        email: "",
        feedback: "",
        rating: "", // Сброс рейтинга после отправки
      });
      alert("Спасибо за ваш ценный отзыв!");
    }
  };
  return (
    <>
      <nav>Сообщите нам, что вы думаете</nav>
      <form onSubmit={handleSubmit} className="feedback-form">
        <h2>Мы будем рады услышать вас!</h2>
        <p>Пожалуйста, поделитесь с нами своим отзывом.</p>
        <input
          type="text"
          name="name"
          placeholder="Ваше имя"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Ваш электронный адрес"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="feedback"
          placeholder="Ваш отзыв"
          value={formData.feedback}
          onChange={handleChange}
        ></textarea>
        <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
          <span>Оцените нас:</span>
          <p>
            <input
              type="radio"
              name="rating"
              value="1"
              onChange={handleChange}
            />{" "}
            1
          </p>
          <p>
            {" "}
            <input
              type="radio"
              name="rating"
              value="2"
              onChange={handleChange}
            />{" "}
            2
          </p>
          <p>
            {" "}
            <input
              type="radio"
              name="rating"
              value="3"
              onChange={handleChange}
            />{" "}
            3
          </p>
          <p>
            {" "}
            <input
              type="radio"
              name="rating"
              value="4"
              onChange={handleChange}
            />{" "}
            4
          </p>
          <p>
            <input
              type="radio"
              name="rating"
              value="5"
              onChange={handleChange}
            />{" "}
            5
          </p>
        </div>
        <button type="submit">Отправить отзыв</button>
      </form>
    </>
  );
};

export default FeedbackForm;
