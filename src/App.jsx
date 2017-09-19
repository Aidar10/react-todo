import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Todo from './components/Todo';

function App(props) {
    return (
        <main>
            <Header title={props.title}/>
            <section className="todo-list">
               <Todo title="Изучить Javascript" completed={true}/>
                <Todo title="Изучить React" completed={false}/>
            </section>
        </main>
    );
}

App.defaultProps = {
    title: 'React Todo'
};

ReactDOM.render(<App />, document.getElementById('root'))