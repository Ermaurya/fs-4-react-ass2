import { useContext } from "react";
import { UserContext } from "./Contexts";

 const Nav=()=> {
    const { setIsUserss } = useContext(UserContext);
  return (
    <div className="navbar">
      <div className="title">
        <h2>React NavBar</h2>
      </div>
      <div className="menubar">
        <a href="./Home.js">Home</a>
        <a href="./NavBar.js">Profile</a>
        <a href="./NavBar.js">Products</a>
        <a href="./NavBar.js">Support</a>
        <button  onClick={() => {
            setIsUserss(false);
          }}>
          Logout
        </button>
        <div><p> user</p></div>
      </div>
    </div>
  );
}

export default Nav;