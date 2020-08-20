import React from 'react';

const UserList = () => {



  const initialUsers = () => {
    return [
      {
        name: 'Israel',
        lastname: 'Vasquez'
      },
      {
        name: 'Jorge',
        lastname: 'Diaz'
      },
      {
        name: 'Carolina',
        lastname: 'Simba'
      },
      {
        name: 'David',
        lastname: 'Herrera'
      },
      {
        name: 'Andres',
        lastname: 'Guerrero'
      }

    ];
  }

  const [ users, setUsers ] = React.useState( initialUsers );


  const handleAddUser = () => {
    const name = document.querySelector( '#name' ).value;
    const lastname = document.querySelector( '#lastname' ).value;
    const newUser = {
      name,
      lastname
    };
    setUsers( ( prevState ) => [
      ...prevState,
      newUser
    ] );
  };



  return (
    <div>
      <div>
        <label htmlFor='name'>Nombre: </label>
        <input type='text' id='name' />

        <label htmlFor='lastname'>Apellido: </label>
        <input type='text' id='lastname' />

        <button onClick={ handleAddUser } style={{color:'#4CAF50'}} >Agregar usuario</button>
      </div>
      <h1>Lista de usuarios ({ users.length } en total)</h1>
      <ul>
        {
          users.map( ( user, index ) => (
              <li key={ index }>{ user.name } { user.lastname }</li>
            )
          )
        }
      </ul>
    </div>
  );
};

export default UserList;