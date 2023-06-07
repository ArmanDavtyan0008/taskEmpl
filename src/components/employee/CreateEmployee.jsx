import React, { useState } from 'react';

export const CreateEmployee = () => {
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
      position,
    };

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

    setName('');
    setSurname('');
    setEmail('');
    setPosition('');
  };

  return (
    <div style={{'marginTop': 100}}>
      <h2> Create Employee </h2>
      <form onSubmit={handleSubmit}>
        <label > Name </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <label > Surname </label>
        <input
          type="text"
          id="surname"
          value={surname}
          onChange={(event) => setSurname(event.target.value)}
        />

        <label> Email </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <label > Position </label>
        <input
          type="text"
          id="position"
          value={position}
          onChange={(event) => setPosition(event.target.value)}
        />

        <button type="submit"> Create Employee </button>
      </form>
    </div>
  );
}
