import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function AddEmployee(props) {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [img, setImg] = useState('');

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow}
       class="m-2 block mx-auto px-4 py-1 text-sm text-white font-bold rounded hover:text-white bg-purple-600">
        +Add Employee
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            Employee Name
            <input 
              class="m-2 bg-white-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="text" 
              value={name}
              onChange={(e)=>{setName(e.target.value)}}
            />
            Employee role
            <input 
              class="m-2 bg-white-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="text" 
              value={role}
              onChange={(e)=>{setRole(e.target.value)}}            />
            Image link
            <input 
              class="m-2 bg-white-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="text" 
              value={img}
              onChange={(e)=>{setImg(e.target.value)}}
            />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>            
            Cancel
          </Button>
          <Button 
            variant="primary" 
            onClick={(e)=>{
              e.preventDefault();                                      
              props.NewEmployee(name, role, img);
              setName('');
              setRole('');
              setImg('');
              handleClose();
              }}
            >
                Add
            </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddEmployee;