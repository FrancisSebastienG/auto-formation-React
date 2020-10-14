import React from 'react'
import NavBar from './NavBar'
import ToDoList from './ToDoList'
import AddTask from './AddTask'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import initialData from '../initialData'

class App extends React.Component{

    state = {
        tasks: initialData
    }

    onToggleCompleted = (taskId) => {
        let taskToUpdate = this.state.tasks.find(task => task.id === taskId)
        taskToUpdate.completed = !taskToUpdate.completed

        this.setState(prevState => (
            prevState.tasks.map(task => {
                return task.id === taskId ?  taskToUpdate : task
            })
        ))
    }

    render(){
        return(
            <section id="todo">
                <BrowserRouter>
                    <Switch>
                        <Route path="/add-task" component={AddTask} />
                        <Route path="/:filter?" render={(props) => <ToDoList {...props} tasks={this.state.tasks} onToggleCompleted={this.onToggleCompleted} />} />
                    </Switch>
                    <NavBar />
                </BrowserRouter>
            </section>
        )
    }
}

export default App