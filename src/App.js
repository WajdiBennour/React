import './Index.css';
import Employee from './Components/Employee';
import {useState} from 'react';

function App() {
  
  const[role, setRole] = useState('Unity Developper');
  const show = true;
  
  return (
    <div className="App">
      {  show ?
        <>
          <input type="text" onChange=
          {
            (e)=>
            {
              setRole(e.target.value);
            }
          }/>
        <div class='flex flex-wrap'>
          <Employee name= 'John' role='CEO' src='https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
          <br></br>
          <Employee name= 'Wajdi' role={role} class='decoration-red-300'/>
          <br></br>
          <Employee name = 'Kevin'/>
        </div>
        </>
        :
        <p>You cannot see this</p>
      }
     </div>
  );
}

export default App;
