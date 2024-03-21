import { useReducer, useState } from 'react';
import './App.css';
import User from './../User/User';
import UserForm from '../UserForm/UserForm';
import appReducer from '../../reducers/appReducer';

const App = () => {
  const defaultUsers = [{
    firstName: 'Alex',
    lastName: 'Miller',
    email: 'alex@miller.com',
    id: 123
  },
  {
    firstName: 'Martha',
    lastName: 'Smith',
    email: 'martha@smith.com',
    id: 456
  },
  {
    firstName: 'Roger',
    lastName: 'Anderson',
    email: 'roger@anderson.com',
    id: 789
  }];

  const reducerState = {
    users: defaultUsers,
    counter: 0
  };

  const [state, dispatch] = useReducer(appReducer, reducerState);

  const addNewUser = (newUser) => {
    dispatch({type: 'add_new_user', data: newUser});
  }

  const updateCounter = () => {
    dispatch({type: 'update_counter', data: 5});
}

  return (
    <div className="App">
      <h1> State Management and Immutable Update Patterns</h1>
      <h2> This app is now working with a reducer!</h2>
      <h3> Counter = {state.counter} </h3>
      <button onClick={updateCounter}> Update counter </button>
      <UserForm addNewUser={addNewUser}/>
      <h2> List of users </h2>
      {
        state.users.map((user, index) => {
          return(<User firstName={user.firstName}
                       lastName={user.lastName}
                       email={user.email}
                       id={user.id}
                       key={index}/>);
        })
      }
    </div>
  );
};

export default App;
