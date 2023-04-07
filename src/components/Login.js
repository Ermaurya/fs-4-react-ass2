import { useState, useContext } from "react";
import { UserContext }   from  "./Contexts";

const Login=(props)=> {
    const { setIsUserss } = useContext(UserContext);
  const [user, setUser] = useState({
    name: "",
    password: "",
  });

  const userAuthentication = () => {
    if (
      (user.name === "users" && user.password === "users123@users") ||
      (user.name === "admin" && user.password === "admin@123")
    ) {
      setIsUserss(true);
      alert("Logged in successfully");

    } else {
      alert("You have enter incurrect email or password");
    }
  };
  
  return (
    <div className="login-main">
      <h3>Login Form </h3>
      <div>
        <input type="text" placeholder="User Name" 
        onChange={(e) => {
            setUser({...user,name: e.target.value});
          }}      
        />
      </div>
      <br />
      <div>
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setUser({ ...user, password: e.target.value });
          }}
          />
      </div>
      <br />
      <div>
        <button onClick={userAuthentication}>Login</button>
      </div>
    </div>
  );
}

export default Login;