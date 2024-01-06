import React from 'react';

const Todo = ({ todo, handleDelete, handleUpdate }) => {
  const { text, status } = todo;

  const handleChange = (e) => {
    const status = e.target.checked ? 'completed' : 'active';
    handleUpdate({ ...todo, status });
  };
  return (
    <>
      <div>
        <input
          type="checkbox"
          id="checkbox"
          checked={status === 'completed'}
          onChange={handleChange}
        />
        <label htmlFor="checkbox">{text}</label>
        <button onClick={() => handleDelete(todo)}>삭제</button>
      </div>
    </>
  );
};

export default Todo;
