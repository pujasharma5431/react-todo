import React, {useState} from "react";
import Header from "./components/Header/Header";
import Task from "./components/Task/Task";


function App() {
    const [task,setTask]=useState([

        {
            sn:1,
            text:"Learn React lynda",
            day:'jun 2 at 2:30pm',
            reminder:true,
        },
        {
            sn:2,
            text:"Learn GRE lynda",
            day:'jun 3 at 2:30pm',
            reminder:true,
        },
        {
            sn:3,
            text:"Learn React Baics ",
            day:'jun 5 at 2:30pm',
            reminder:true,
        },

    ])


    return (
        <div className='container'>
            <Header/>
            <Task task={task}/>

        </div>
    )
}


export default App;
