import React, { useState } from 'react';
import { Button } from '@mui/material';

export const CreateEmployee = ({isEditingMode,setisEditingMode, updatedId,setUpdatedId}) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [position, setPosition] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();

    const employee = {
      name,
      surname,
      email,
      position
    };

    if (isEditingMode){
      fetch(`https://rocky-temple-83495.herokuapp.com/employees/${updatedId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(employee),
  })
    .then((response) => response.json())
    .then((data) => {
    })
    .catch((error) => {
      console.error(error);
    });

  setUpdatedId('')
  setName('');
  setSurname('');
  setEmail('');
  setPosition('');
  setisEditingMode(!isEditingMode)
} else { 
  fetch('https://rocky-temple-83495.herokuapp.com/employees', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(employee),
  })
    .then((response) => response.json())
    .catch(({message}) => {
      console.error(message);
    });
  }
  
  setName('');
  setSurname('');
  setEmail('');
  setPosition('');
}

  return (
    <div style={{'marginTop': 100}}>
      <h1 style={{"color": '#1976D2'}}> { isEditingMode? "Update Employee ":"Create Employee "}</h1>
      <form onSubmit={handleSubmit} style={{"marginTop":50}}>
        <label style={{'color':'#1976D2'}} > Name </label>
        <input 
        required
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <label style={{'color':'#1976D2'}}> Surname </label>
        <input
        required
          type="text"
          id="surname"
          value={surname}
          onChange={(event) => setSurname(event.target.value)}
        />

        <label style={{'color':'#1976D2'}}> Email </label>
        <input
        required
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <label style={{'color':'#1976D2'}}> Position </label>
        <input
        required
          type="text"
          id="position"
          value={position}
          onChange={(event) => setPosition(event.target.value)}
        />

        <Button sx={{width:100}} variant = 'contained'style={{"marginLeft":20}} type="submit" value={isEditingMode}> { isEditingMode? "Update": "Create"} </Button>
      </form>
    </div>
  );
}

