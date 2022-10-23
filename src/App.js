import './App.css';
import Employee from './Components/Employee';
import {useState} from 'react';

function App() {
  
  const[role, setRole] = useState('dev');
  const show = true;
  
  return (
    <div className="App">
      {  show ? (
        <>
          <input type="text" onChange=
          {
            (e)=>
            {
              setRole(e.target.value);
            }
          }/>
          <Employee name= 'John' role='CEO'/>
          <br></br>
          <Employee name= 'wajdi' role={role}/>
          <br></br>
          <Employee name = 'Kevin'/>
        </>
        )
        :
        <p>You cannot see this</p>
      }
     </div>
  );
}

export default App;
