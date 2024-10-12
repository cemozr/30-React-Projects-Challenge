import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/info">
        {" "}
        <button>Info</button>
      </Link>
      <Link to="/contact">
        {" "}
        <button>Contact</button>
      </Link>
    </div>
  );
};
