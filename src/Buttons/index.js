import "./style.css";

const Buttons = ({tasks, hideDoneTask}) => (
    <div className="body__container body__container--buttons">
         {tasks.length > 0 && (
            <>
                <button 
                    className="body__buttons">
                    {hideDoneTask && tasks.some(({done}) => done) 
                    ? "Pokaż " : "Ukryj "} ukończone
                </button> 
                <button 
                    className= "body__buttons"
                    disabled={tasks.every(({done}) => done) 
                    ? "body__buttons:disabled" : "body__buttons"}
                >
                    Ukończ wszystkie  
                </button>
            </>
         )}  
    </div>
    
);
    

export default Buttons;