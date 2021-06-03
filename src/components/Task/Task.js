import {FaTimes} from "react-icons/fa";

const Task = ({task, onDelete,onToggle}) => {
    return (
        <div className={`task ${task.reminder?'reminder':""}`}
             onDoubleClick={()=>
            onToggle(task.sn)}>
            <h2>{task.text}
                <FaTimes style={
                    {
                        float: "right",
                        color: "aliceblue",
                        cursor: "pointer",
                        height: "24px"
                    }}
                         onClick={() => onDelete(task.sn)}
                />

            </h2>
            <p>{task.day}</p>

        </div>
    )
}


export default Task
