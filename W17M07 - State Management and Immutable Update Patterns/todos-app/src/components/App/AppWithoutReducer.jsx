import { useState } from 'react';
import './App.css';
import User from '../User/User';
import UserForm from '../UserForm/UserForm';

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

  const [users, setUsers] = useState(defaultUsers);
  let [counter, setCounter] = useState(1);

  const addNewUser = (newUser) => {
    /*
    const newUsersList = [];

    users.forEach((user) => {
      newUsersList.push(user);
    });
    newUsersList.push(newUser);
    setUsers(newUsersList);
    */
   const newUsersList = [...users, newUser];
   setUsers(newUsersList);
  }

  const updateCounter = () => {
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
}

  return (
    <div className="App">
      <h1> State Management and Immutable Update Patterns</h1>
      <h3> Counter = {counter} </h3>
      <button onClick={updateCounter}> Update counter </button>
      <UserForm addNewUser={addNewUser}/>
      <h2> List of users </h2>
      {
        users.map((user, index) => {
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
