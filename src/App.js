import './Index.css';
import Employee from './Components/Employee';
import {useState} from 'react';

function App() {
  
  const[role, setRole] = useState('Unity Developper');
  const[Employees, setEmployees] = useState(
    [
      {
        id: 1,
        name: 'John',
        role: 'CEO',
        img: 'https://images.pexels.com/photos/270366/pexels-photo-270366.jpeg?auto=compress&cs=tinysrgb&w=1600',
      },
      {
        id: 2,
        name: 'Wajdi',
        role: 'Unity Developper',
        img: 'https://images.pexels.com/photos/270366/pexels-photo-270366.jpeg?auto=compress&cs=tinysrgb&w=1600',
      },
      {
        id: 3,
        name: 'Anna',
        role: 'Manager',
        img: 'https://images.pexels.com/photos/270366/pexels-photo-270366.jpeg?auto=compress&cs=tinysrgb&w=1600',
      },
      {
        id: 4,
        name: 'Kevin',
        role: 'HR Manager',
        img: 'https://images.pexels.com/photos/270366/pexels-photo-270366.jpeg?auto=compress&cs=tinysrgb&w=1600',
      },
      {
        id: 5,
        name: 'Marie',
        role: 'HR Manager',
        img: 'https://images.pexels.com/photos/270366/pexels-photo-270366.jpeg?auto=compress&cs=tinysrgb&w=1600',
      },
    ]
  )
function UpdateEmployee(id, newName, newRole){
  console.log("update function");
  console.log(id, newName, newRole);
}

  const show = true;
  
  return (
    <div className="App">
      {  show ?
        <>
          <input type="text" onChange=
          {
            (e) => { setRole(e.target.value); }
          }/>
          <div className='flex flex-wrap justify-center'>
            {Employees.map( (employee) => {
              return ( <Employee 
                          id={employee.id}
                          name={employee.name} 
                          role={employee.role} 
                          src={employee.img}
                          updateEmployee={UpdateEmployee}
                        />
                      )
                    })}
          </div>
        </>
        :
        <p>You cannot see this</p>
      }
     </div>
  );
}

export default App;
