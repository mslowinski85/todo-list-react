import "./style.css";

const Form = (props ) => (
    <form className="" id="form">
    <div className="flex">
      <div className="flex__item flex__item--input">
        <input
          className="flex__input"
          id="inputTask"
          placeholder="Co jest do zrobienia?"
          autofocus
        />
      </div>
      <div className="flex__item flex__item--button">
        <button className="flex__button" id="focusButton">
          Dodaj zadanie
        </button>
      </div>
    </div>
  </form>
);

export default Form;