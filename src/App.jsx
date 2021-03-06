import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';
import Todo from './components/Todo';
import todos from './todos';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: this.props.initialData
        };
        this.handleStatusChange = this.handleStatusChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleStatusChange(id) {
        let todos = this.state.todos.map(todo => {
            if (todo.id == id) {
                todo.completed = !todo.completed;
            }

            return todo;
        });

        this.setState({todos});
    }

    handleDelete(id) {
        let todos = this.state.todos.filter(todo => todo.id != id);

        this.setState({todos});
    }

    render() {
        return (
            <main>
                <Header title={this.props.title} todos={this.state.todos}/>
                <section className="todo-list">
                    {this.state.todos.map((todo) =>
                        <Todo
                            key={todo.id}
                            id={todo.id}
                            title={todo.title}
                            completed={todo.completed}
                            onStatusChange={this.handleStatusChange}
                            onDelete={this.handleDelete}
                        />)
                    }
                </section>
            </main>
        );
    };
}

App.propTypes = {
    title: React.PropTypes.string,
    initialData: React.PropTypes.arrayOf(React.PropTypes.shape({
        id: React.PropTypes.number.isRequired,
        title: React.PropTypes.string.isRequired,
        completed: React.PropTypes.bool.isRequired
    })).isRequired
};

App.defaultProps = {
    title: 'React Todo',
};

ReactDOM.render(<App initialData={todos}/>, document.getElementById('root'));