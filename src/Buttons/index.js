import "./style.css";

const Buttons = ({ tasks, hideDoneTask }) => (
    <div className="buttons buttons__buttonContainer">
         {tasks.length > 0 && (
            <>
                <button 
                    className="buttons__button">
                    {hideDoneTask && tasks.some(({ done }) => done) 
                    ? "Pokaż " : "Ukryj "} ukończone
                </button> 
                <button 
                    className= "buttons__button"
                    disabled={tasks.every(({ done }) => done) 
                    ? "buttons__button:disabled" : "buttons__button"}
                >
                    Ukończ wszystkie  
                </button>
            </>
         )}  
    </div>
    
);
    

export default Buttons;