import React from 'react'
import NavBar from './NavBar'
import ToDoList from './ToDoList'

class App extends React.Component{
    render(){
        return(
            <section id="todo">
                <ToDoList />
                <NavBar />
            </section>
        )
    }
}

export default App