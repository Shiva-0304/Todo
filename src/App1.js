import{usestate}
import "./style.css";
export default function App1(){
    const [counter , setCounter]
    const handleClick = () =>{setCounter(counter +1);
    };
    return (
        <div className="App1"> {counter}
        <button onClick={handleClick}>click here</button>
        </div>
    );
}