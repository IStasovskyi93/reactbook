import React from "react"; // Импортируйте хуки из React Redux
import { useDispatch, useSelector } from "react-redux"; //// Импортируйте CSS файл для стилизации
import { addItemToCart } from "./CartSlice"; // Создатель действия
import "./ProductList.css"; // CSS стили

const ProductList = () => {
  // Инициализируйте функцию dispatch для отправки действий в Redux store
  const dispatch = useDispatch();

  // Получите текущие товары в корзине из глобального состояния Redux
  const cartItems = useSelector((state) => state.cart.cartItems);

  // Пример списка продуктов
  const products = [
    { id: 1, name: "Продукт A", price: 60 },
    { id: 2, name: "Продукт B", price: 75 },
    { id: 3, name: "Продукт C", price: 30 },
  ];

  // Функция для добавления продукта в корзину
  const handleAddToCart = (product) => {
    dispatch(addItemToCart(product)); // Отправьте действие для добавления продукта в корзину
  };

  return (
    <div className="product-list">
      <h2 className="product-list-title">Продукты</h2>
      <ul className="product-list-items">
        {products.map((product) => {
          const isAlreadyInCart = cartItems.some(
            (item) => item.id === product.id
          ); // Проверьте, есть ли продукт уже в корзине

          return (
            <li key={product.id} className="product-list-item">
              <span>
                {product.name} - ${product.price}
              </span>
              <button
                className={`add-to-cart-btn ${
                  isAlreadyInCart ? "disabled" : ""
                }`}
                onClick={() => handleAddToCart(product)}
                disabled={isAlreadyInCart} // Отключите кнопку, если уже добавлено
              >
                {isAlreadyInCart ? "Добавлено" : "Добавить в корзину"}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductList;
