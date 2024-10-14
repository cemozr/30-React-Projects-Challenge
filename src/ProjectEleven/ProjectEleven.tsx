import { useState } from "react";
//Types
type User = {
  email: string;
  password: string;
};
type Users = User[];

export const ProjectEleven = () => {
  //States
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isRegistered, setIsRegistered] = useState<boolean>(true);
  const [isLoggedin, setIsLoggedin] = useState<boolean>(false);
  const [users, setUsers] = useState<Users>([]);

  const handleAuth = () => {
    if (isRegistered) {
      const registeredUsers: Users = JSON.parse(localStorage.getItem("users")!);
      const user: User = registeredUsers.find(
        (user) => user.email === email && user.password === password
      )!;
      if (user) {
        setIsLoggedin(true);
      } else {
        alert("Login Failed");
      }
    } else {
      const newUser: User = { email, password };
      setUsers([...users, newUser]);
      localStorage.setItem("users", JSON.stringify([...users, newUser]));
      setIsLoggedin(true);
    }
  };
  const handleLogOut = () => {
    setIsLoggedin(false);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="container">
      {!isLoggedin ? (
        <div>
          <h1>{isRegistered ? "Login" : "Register"}</h1>
          <form className="auth-form">
            <input
              className="auth-form__input"
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
            <input
              className="auth-form__input"
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
            <button className="auth-form__button" onClick={handleAuth}>
              {isRegistered ? "Login" : "Register"}
            </button>
          </form>
          {isRegistered ? (
            <h4>
              Don't have an account yet?
              <span
                className="register-span"
                onClick={() => setIsRegistered(false)}
              >
                Register
              </span>{" "}
              now!
            </h4>
          ) : (
            <h4>
              Already have an account? Just{" "}
              <span
                className="register-span"
                onClick={() => setIsRegistered(true)}
              >
                Login
              </span>{" "}
              now!
            </h4>
          )}
        </div>
      ) : (
        <div>
          <h4>Welcome {email} we missed you!</h4>
          <button className="auth-form__button" onClick={handleLogOut}>
            Log Out
          </button>
        </div>
      )}
    </div>
  );
};
