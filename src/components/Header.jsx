import React from 'react';
import Stats from './stats';

function Header(props) {
    return (
        <header>
            <Stats todos={props.todos}/>
            <h1>{props.title}</h1>
        </header>
    );
}

Header.propTypes = {
    title: React.PropTypes.string.isRequired,
    todos: React.PropTypes.arrayOf(React.PropTypes.shape({
        id: React.PropTypes.number.isRequired,
        title: React.PropTypes.string.isRequired,
        completed: React.PropTypes.bool.isRequired
    })).isRequired

};

export default Header;