import "./style.css";

const Tasks = ({ tasks, hideDoneTask }) => (
    <ul className="list">
        {tasks.map(task => (
             <li className=
                    {`${hideDoneTask && task.done ? 
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
                >
                    🗑
                </button> 
            </li>  
        ))}   
    </ul>
);

export default Tasks;