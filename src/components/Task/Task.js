import {FaTimes} from "react-icons/fa";

const Task = ({task,onDelete}) => {
    return (
        <div className="task">
            <h2>{task.text}
            <FaTimes style={
                {
                    float:"right",
                    color:"aliceblue",
                    cursor:"pointer",
                    height:"24px"
                } }
                onClick={()=> onDelete(task.sn)}
           />

            </h2>
            <p>{task.day}</p>

        </div>
    )
}


export default Task;
