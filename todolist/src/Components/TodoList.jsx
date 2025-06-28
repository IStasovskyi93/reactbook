import React, { useState } from "react";
import "./TodoList.css";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [headingInput, setHeadingInput] = useState("");
  const [listInputs, setListInputs] = useState({});
  const handleAddTodo = () => {
    if (headingInput.trim() !== "") {
      setTodos([...todos, { heading: headingInput, lists: [] }]);
      setHeadingInput("");
    }
  };

  // Функция для обработки добавления нового элемента списка к конкретному заголовку списка дел
  const handleAddList = (index) => {
    // Проверьте, что ввод для данного индекса не пустой и не содержит только пробелы
    if (listInputs[index] && listInputs[index].trim() !== "") {
      const newTodos = [...todos]; // Создайте копию текущего массива todos
      newTodos[index].lists.push(listInputs[index]); // Добавьте новый элемент списка в массив списков соответствующего заголовка
      setTodos(newTodos); // Обновите состояние todos с новым элементом списка
      setListInputs({ ...listInputs, [index]: "" }); // Очистите поле ввода для этого индекса
    }
  };
  // Функция для обновления значения ввода списка для конкретного индекса заголовка
  const handleListInputChange = (index, value) => {
    setListInputs({ ...listInputs, [index]: value }); // Обновите состояние listInputs для соответствующего индекса
  };

  const handleDeleteTodo = (index) => {
    // Create a shallow copy of the current todos array
    const newTodos = [...todos];
    // Remove the todo at the specified index
    newTodos.splice(index, 1);
    // Update the state with the new array (without the deleted todo)
    setTodos(newTodos);
  };

  return (
    <>
      <div className="todo-container">
        <h1 className="title">My Todo List</h1>
        <div className="input-container">
          <input
            type="text"
            className="heading-input" // CSS класс для стилизации
            placeholder="Введите заголовок" // Текст, отображаемый, когда ввод пуст
            value={headingInput}
            onChange={(e) => {
              setHeadingInput(e.target.value);
            }} // Добавьте обработчик события onChange для обновления состояния headingInput
          />
          {/* Кнопка для добавления введенного заголовка в список задач */}
          <button className="add-list-button" onClick={handleAddTodo}>
            Добавить заголовок
          </button>
        </div>
      </div>
      <div className="todo_main">
        {todos.map(
          (
            todo,
            index // Iterate over each todo item in the todos array
          ) => (
            <div key={index} className="todo-card">
              <div className="heading_todo">
                <ul>
                  {/* Перебирайте каждый элемент списка внутри текущего списка дел */}
                  {todo.lists.map((list, listIndex) => (
                    <li key={listIndex} className="todo_inside_list">
                      {/* Отобразите текстовое содержимое элемента списка */}
                      <p>{list}</p>
                    </li>
                  ))}
                </ul>
                <div className="add_list">
                  {/* Поле ввода для добавления нового элемента под конкретным заголовком */}
                  <input
                    type="text"
                    className="list-input"
                    placeholder="Добавить список"
                    value={listInputs[index] || ""} // Используйте значение из массива listInputs в зависимости от текущего индекса заголовка
                    onChange={(e) =>
                      handleListInputChange(index, e.target.value)
                    }
                  />
                  {/* Кнопка для добавления элемента списка к соответствующему заголовку */}
                  <button
                    className="add-list-button"
                    onClick={() => handleAddList(index)}
                  >
                    Добавить список
                  </button>
                </div>
                <h3>{todo.heading}</h3> {/* Display the heading here */}
                {/* Button to delete the current heading by passing its index */}
                <button
                  className="delete-button-heading"
                  onClick={handleDeleteTodo}
                >
                  Delete Heading
                </button>
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
};

export default TodoList;
