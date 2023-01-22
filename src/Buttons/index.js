import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
    <div className="buttons buttons__buttonContainer">
        {tasks.length > 0 && (
            <>
                <button onClick={toggleHideDone} className="buttons__button">
                    {hideDone && tasks.some(({ done }) => done) 
                    ? "Pokaż " : "Ukryj "} ukończone
                </button> 
                <button 
                    onClick={setAllDone}
                    className= "buttons__button"
                    disabled={tasks.every(({ done }) => done)}
                >
                    Ukończ wszystkie  
                </button>
            </>
         )}  
    </div>
    
);
    

export default Buttons;