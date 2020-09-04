import React from 'react';
import TodoList from './TodoList/todoList';
import AddTodo from './AddTodo/addTodo';
import './App.css';


class App extends React.Component {
    
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
                
                <AddTodo addTodoFn={this.addTodo}></AddTodo>
                <TodoList updateTodoFn={this.updateTodo} todos= {this.state.todos}></TodoList>
                
            </div>
        );
    }
   
    componentDidMount = () => {
        const todos = localStorage.getItem('todos'); // man kan bara föra in en string i localStorage. Så innan man sätter in ett objekt så måste vi omvalda den till en string. 
        if(todos) {
           const savedTodos = JSON.parse(todos); // då använder vi oss utav JSON för att omvalda objektet till en string så vi kan lagra den i localStorage
           this.setState({todos: savedTodos});
        } else {
            console.log('no todos');

        }
    }

    addTodo = async (todo) => {
        console.log(todo);
       await this.setState({
            todos: [...this.state.todos, {
                text: todo,
                completed: false
            }]
        });
        localStorage.setItem('todos',JSON.stringify(this.state.todos));
        console.log(localStorage.getItem('todos'));
    }

    updateTodo = async (todo) => {
       const newTodos = this.state.todos.map(_todo => {
            if(todo === _todo)
            return {
                text: todo.text,
                completed: !todo.completed
            }
            else
            return _todo
        });
        await this.setState({ todos: newTodos });
        localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }
}   
    


export default App;
