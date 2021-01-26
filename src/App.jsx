//App.jsx
import react from 'react';
import { add, sub, mul,div } from './Cal';

const  project= " Calculator";

function App(){
    return(
        <>
        <h1> **Project Name: { project}** </h1>
        <ul>
            
            <li> Addition:  {add(10, 2)}  </li>
            <li> Subtraction:   {sub(15,5)}  </li>
            <li> Multiplication:    {mul(5,5)}  </li>
            <li> Division:   {div(10, 3)} </li>
        </ul>
        </>
    );
    
}
export default App;