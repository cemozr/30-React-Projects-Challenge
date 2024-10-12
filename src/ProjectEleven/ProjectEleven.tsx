import { useState } from "react";

type User = {
  email: string;
  password: string;
};
type Users = User[];

export const ProjectEleven = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isRegistered, setIsRegistered] = useState<boolean>(true);
  return (
    <div className="container">
      <h1>{isRegistered ? "Login" : "Register"}</h1>
      <form className="auth-form">
        <input className="auth-form__input" type="email" placeholder="email" />
        <input
          className="auth-form__input"
          type="password"
          placeholder="password"
        />
        <button className="auth-form__button">
          {isRegistered ? "Login" : "Register"}
        </button>
      </form>
      {isRegistered && (
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
      )}
    </div>
  );
};
