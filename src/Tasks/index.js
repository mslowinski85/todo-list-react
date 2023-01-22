import "./style.css";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
    <ul className="list">
        {tasks.map(task => (
             <li className=
                    {`${hideDone && task.done ? 
                    "list__item--hiden" : "list__item"}`} 
                    key={task.id}
                >
                <button 
                    className="list__button"
                    onClick={() => toggleTaskDone(task.id)}
                > 
                    {task.done ? "✓" : ""}
                </button>
                <span className=
                    {`${task.done ? " list__item--done" : ""}`}
                >   
                    {task.content}
                </span> 
                <button
                    onClick={() => removeTask(task.id)} 
                    className="list__button list__button--delete"
                >
                    🗑
                </button> 
            </li>  
        ))}   
    </ul>
);

export default Tasks;