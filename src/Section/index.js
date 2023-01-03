const Section = ({title, body, extraHeaderContent}) => (
    <section>
        <div className="body__container body__container--toDoListLabel">
            <label className="body__label body__label--toDoListLabel">{title}</label>
            {extraHeaderContent}
        </div>
        <div className="body__container body__container--toDoList">
            {body}
        </div>
    </section>
);

export default Section;