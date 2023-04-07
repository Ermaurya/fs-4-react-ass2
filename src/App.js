
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import NavBar from './components/NavBar';
import { useContext } from "react";
import {UserContext}  from "./components/Contexts";
function App() {
  const { isUserss } = useContext(UserContext);
  return (
    <div className="App">

      {isUserss ? (
        <div>
          <NavBar/>
          <Home />
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
