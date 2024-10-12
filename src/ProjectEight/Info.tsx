import { Link } from "react-router-dom";

export const Info = () => {
  return (
    <div>
      <h1>Info Page</h1>
      <Link to="/">
        <button>Return to home page</button>
      </Link>
    </div>
  );
};
