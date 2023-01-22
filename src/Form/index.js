import "./style.css";

const Form = (props) => (
    <form id="form">
    <div className="form">
      <div className="form__item form__item--input">
        <input
          className="form__input"
          id="inputTask"
          placeholder="Co jest do zrobienia?"
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

export default Form;