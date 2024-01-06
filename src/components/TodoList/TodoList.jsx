import React, { useState } from 'react';
import styles from './TodoList.module.css';
import clsx from 'clsx';
import { v4 as uuidv4 } from 'uuid';
import Todo from '../Todo/Todo';
const todoList = [
  { id: 1, text: '장보기', status: 'active' },
  { id: 2, text: '공부하기', status: 'active' },
];
const TodoList = () => {
  const [list, setList] = useState(todoList);
  const [newTodo, setNewTodo] = useState('');

  const handleChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleDelete = (todo) => {
    setList((prev) => prev.filter((item) => todo.id !== item.id));
  };

  const handleUpdate = (todo) => {
    setList((prev) =>
      prev.map((item) => {
        if (item.id === todo.id) {
          return todo;
        }
        return item;
      })
    );
  };

  const handleAdd = (e) => {
    e.preventDefault();

    if (newTodo) {
      const newItem = newTodo.trim();

      setList((prev) => [
        ...prev,
        { id: uuidv4(), text: newItem, status: 'active' },
      ]);
    }

    setNewTodo('');
  };

  return (
    <>
      <div className={styles.list}>
        <header>
          <button>All</button>
          <button>Active</button>
          <button>Completed</button>
        </header>
        <div className={styles.todo}>
          {list.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              handleUpdate={handleUpdate}
              handleDelete={handleDelete}
            />
          ))}
        </div>

        <div>
          <form onSubmit={handleAdd}>
            <input id="newTodo" value={newTodo} onChange={handleChange} />
            <button>Add</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default TodoList;
