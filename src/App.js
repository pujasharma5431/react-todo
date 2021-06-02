import React from "react";
import Header from "./components/Header/Header";
import Tasks from "./components/Task/Tasks";
import {useState} from "react";

// import DarkTheme from "./components/Theme/Theme";


function App() {
    const [tasks, setTasks] = useState(
    [
        {
            sn: 1,
            text: "Complete lynda React course",
            day: "Jan 11 at 2:14pm",
            reminder: true,
        },
        {
            sn: 2,
            text: "Complete Traversy React",
            day: "Jan 12 at 3:00pm",
            reminder: true,
        },
        {
            sn: 3,
            text: "Shopping in mall",
            day: "Jun 5 at 12:0am",
            reminder: true,
        },
        {
            sn: 4,
            text: "Complete Traversy React",
            day: "Jan 12 at 3:00pm",
            reminder: false,
        },
    ]
)
    //Delete Task
    const deleteTask=(sn)=>{
        setTasks(tasks.filter((task)=>task.sn!==sn))
    }

    //Toggle Remainder




    return (
        <div className='container'>
            <Header/>
            {/*<DarkTheme/>*/}
            {tasks.length>0?(   <Tasks tasks={tasks} onDelete={deleteTask}/>   ):(
                'No Tasks To Show'
            )}


        </div>
    )

}


export default App;
