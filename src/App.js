import { useContext, useEffect } from 'react';
import './App.css';
import LogInForm from './components/LogInForm';
import ToDoList from './components/ToDoList';
import { userContext } from './context/userContext';

function App() {
  const {token}=useContext(userContext);
  return (
    <div className="App">
      {
        !token?<LogInForm></LogInForm>:<ToDoList></ToDoList>
      }
    </div>
  );
}

export default App;
