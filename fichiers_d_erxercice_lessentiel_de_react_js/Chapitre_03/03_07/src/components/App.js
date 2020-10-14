import React from 'react'
import NavBar from './NavBar'
import ToDoList from './ToDoList'

class App extends React.Component{
    render(){
        return(
            <section id="todo">
                <h1 className="m-3">Liste de tâches</h1>
                <ToDoList />
                <NavBar />
            </section>
        )
    }
}

export default App