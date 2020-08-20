import React from 'react';

const TodoList = () => {

  const [ all, setAll ] = React.useState( [] );
  const [ completed, setCompleted ] = React.useState( [] );


  const handleAddTask = () => {
    const task = document.querySelector( '#task' ).value;
    setAll( prevState => [ ...prevState, task ] );
    document.querySelector( '#task' ).value = '';
  };

  const handleDeleteTask = ( index ) => {
    setAll( ( prevState ) => {
      return prevState.filter( ( task, i ) => i !== index );
    } );
  };

  const handleCompleteTask = ( index ) => {
    setCompleted( ( prevState ) => [
      ...prevState,
      all[ index ]
    ] );

    handleDeleteTask( index );
  };


  return (
    <div>
      <div>
        <label htmlFor='task'>Tarea: </label>
        <input type='text' id='task' />

        <button onClick={ handleAddTask } style={{color:'#4CAF50'}}>Agregar nueva tarea</button>
      </div>
      <h2>Lista de tareas pendientes ({ all.length })</h2>
      <table>
        <thead>
        <tr>
          <th>Nombre</th>
          <th>Eliminar</th>
          <th>Completar</th>
        </tr>
        </thead>
        <tbody>
        {
          all.map( ( task, index ) => (
              <tr key={ index }>
                <td>{ task }</td>
                <td>
                  <button onClick={ () => handleDeleteTask( index ) }>Eliminar</button>
                </td>
                <td>
                  <button onClick={ () => handleCompleteTask( index ) }>Completada</button>
                </td>
              </tr>
            )
          )
        }
        </tbody>
      </table>

      <h2>Lista de tareas completadas ({ completed.length })</h2>
      <table>
        <thead>
        <tr>
          <th>Nombre</th>
        </tr>
        </thead>
        <tbody>
        {
          completed.map( ( task, index ) => (
              <tr key={ index }>
                <td>{ task }</td>
              </tr>
            )
          )
        }
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;