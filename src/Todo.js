import './App.css';
function Todo(){
    return (
    <div className= 'Todo'>
        <p className='How'>work to complete</p>
        <input className='task-input'
        type='text'
        placeholder='what is task today'
                 />
        <button className='Hello'>Add Task</button>
    </div>
        )    
}
export default Todo;
