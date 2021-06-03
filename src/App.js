import React, {useState} from "react";
import Header from "./components/Header/Header";
import Tasks from "./components/Task/Tasks";
import AddTask from "./components/Form/AddTask";


function App() {
    const [showAddTask, setShowAddTask] = useState(true)
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
                reminder: false,
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
    //Add Task
    const addTask = (task) => {
        const sn = Math.floor(Math.random() * 10000) + 1
        const newTask = {sn, ...task}
        setTasks([...tasks, newTask])
    }


    //Delete Task
    const deleteTask = (sn) => {
        setTasks(tasks.filter((task) => task.sn !== sn))


    }

    //Toggle Remainder
    const toggleRemainder = (sn) => {
        setTasks(tasks.map((task) => task.sn === sn ? {
            ...task, reminder:
                !task.reminder
        } : task))
    }


    return (
        <div className='container'>
            <Header
                onAdd={() => setShowAddTask
                (!showAddTask)}
            showAdd={showAddTask} />
            {showAddTask && <AddTask onAdd={addTask}/>}

            {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleRemainder}/>) :
                (
                    'No Tasks To Show'
                )}


        </div>
    )

}


export default App
