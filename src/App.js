import React from 'react';
import ToDoList from './ToDoList/todolist';
import ToDoItem from './ToDoItem/todoitem';
import Addtodo from './AddToDo/addtodo';
import './App.css';

class App extends React.Component{
    
    constructor () {
        super();
        this.state = {
            todos: []
        };
    }

    render() {
        return(
            //använder mig utav en parent för att kunna lägga in flera elements.
            <div>
                {


                }
            </div>
        );
    }
   
    componentDidMount = () => {
        const todos = localStorage.getItem('todos'); // man kan bara föra in en string i localStorage. Så innan man sätter in ett objekt så måste vi omvalda den till en string. 
        if(todos) {

       
           const savedTodos = JSON.parse(todos); // då använder vi oss utav JSON för att omvalda objektet till en sting så vi kan lagra den i localStorage
           this.setState({todos: savedTodos});
        } else {
            console.log('No todos');

        }
    }
}
    


export default App;
