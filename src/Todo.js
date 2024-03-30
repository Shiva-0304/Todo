import "./App.css";
import { useState } from "react";
function Todo() {
  const [todo, setTodo] = useState("");
  const [todoArray, setTodoArray] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);
  const [updateTodo, setUpdateTodo] = useState("");
  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  const handleClick = () => {
    const array = todoArray;
    array.push(todo);
    setTodoArray(array);
  };
  const handleUpdateTask = (index) => {
    const array = todoArray;
    array[index] = updateTodo;
    setTodoArray(array);
    setEditIndex(-1);
    setUpdateTodo('');
  }
    const handleDeleteClick = (index) => {
        const array = todoArray;
        array.splice(index , 2);
        setTodoArray(array);
  }
  return (
    <div className="Todo">
      <p className="How">work to complete</p>
      <input
        className="task-input"
        type="text"
        placeholder="what is task today"
        onChange={handleChange}
      />
      <button className="Hello" onClick={handleClick}>
        Add Task
      </button>
      {console.log(editIndex)}
      {todoArray.length ? (
        <>
          {todoArray.map((element, index) => {
            return index !== editIndex ? (
              <div>
                {element}{" "}
                <button onClick={() => setEditIndex(index)}>Edit</button>{" "}
                <button onClick={() => handleDeleteClick(index)}>Delete</button>
              </div>
            ) : (
              <div>
                <input
                  value={updateTodo ? updateTodo : todoArray[index]}
                  onChange={(e) => setUpdateTodo(e.target.value)}
                />
                <button onClick={()=> handleUpdateTask(index)}>update task</button>
              </div>
            );
          })}
        </>
      ) : null}
    </div>
  );
}
export default Todo;
