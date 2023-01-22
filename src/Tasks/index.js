import "./style.css";

const deleteTask = (name) => {
    console.log(`Usunąłeś zadanie: ${name}`);
}

const Tasks = ({ tasks, hideDone }) => (
    <ul className="list">
        {tasks.map(task => (
             <li className=
                    {`${hideDone && task.done ? 
                    "list__item--hiden" : "list__item"}`} 
                    key={task.id}
                >
                <button className="list__button"> 
                    {task.done ? "✓" : ""}
                </button>
                <span className=
                    {`${task.done ? " list__item--done" : ""}`}
                >   
                    {task.content}
                </span> 
                <button 
                    className="list__button list__button--delete"
                    onClick={() => deleteTask(task.content)}
                >
                    🗑
                </button> 
            </li>  
        ))}   
    </ul>
);

export default Tasks;