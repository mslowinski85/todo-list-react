import { useState } from "react";
import "./style.css";

const Form = ({addNewTask}) => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    addNewTask(newTaskContent.trim());
    setNewTaskContent("");
  }

  return (
    <form id="form" onSubmit={onFormSubmit}>
    <div className="form">
      <div className="form__item form__item--input">
        <input
          value={newTaskContent}
          className="form__input"
          id="inputTask"
          placeholder="Co jest do zrobienia?"
          onChange={({ target }) => setNewTaskContent(target.value)}
          
          autofocus
        />
      </div>
      <div className="form__item form__item--button">
        <button className="form__button" id="focusButton">
          Dodaj zadanie
        </button>
      </div>
    </div>
  </form>
);
};

export default Form;