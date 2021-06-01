import {useState} from "react";

const Task = ({task}) => {


    return (
     <>
         {task.map((tasks)=>tasks.sn)}

     </>
    )
}

export default Task;
