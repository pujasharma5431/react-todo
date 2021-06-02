import Task from "./Task";

const Tasks = ({tasks,onDelete}) => {


    return (
    < div >
    {tasks.map((task) => (
       <Task key ={task.sn} task={task} onDelete={onDelete}/>))}


</div>
)
}

export default Tasks;