import React from 'react';

export default function TodoList({ todos, setTodos }) {
    const toggleStatus = (index) => {
        setTodos((prevTodos) => {
            const newTodos = prevTodos.map((todo, i) => {
                if (i === index) {
                    return { ...todo, status: !todo.status };
                }
                return todo;
            });
            localStorage.setItem('todos', JSON.stringify(newTodos));
            return newTodos;
        });
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
            {todos.map((todo, index) => (
                <div
                    key={index}
                    style={{
                        padding: '65px',
                        backgroundColor: 'white',
                        borderStyle: 'groove',
                        margin: '10px',
                        cursor: 'pointer',
                        display: 'flex',
                        flexDirection: 'row'
                    }}
                    onClick={() => toggleStatus(index)}
                >
                    <span style={{ textDecoration: todo.status ? 'line-through' : 'none', textDecorationColor: todo.status ? 'blue' : 'none', }}>
                        {todo.title}
                    </span>
                </div>
            ))}
        </div>
    );
}
