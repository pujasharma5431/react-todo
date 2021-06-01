
import React from "react";
import './App.css';
import NavComp from './components/NavigationComp/navigationcomp';
import Todos from './components/Todos/Todos';
import TodoItem from './components/TodoItem/Todoitem';
import  Footer from './components/Footer/Footer';


function App() {
    return (
        <div className="App">
           < NavComp title="My Todo list" pricing={true}/>
           <Todos/>
           <TodoItem/>
           <Footer/>


        </div>
    );
}

export default App;
