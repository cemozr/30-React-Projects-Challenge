import { useEffect, useState } from "react";
import "../styles.scss";
//Types
type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
};

type Users = User[];

const baseUrl: string = "https://jsonplaceholder.typicode.com/";

export const ProjectFive = () => {
  const [users, setUsers] = useState<Users>([]);

  const fetchData = async () => {
    const response = await fetch(`${baseUrl}/users`).then((r) => r.json());
    setUsers(response);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <ul className="user-list">
        {users.map((user) => {
          return (
            <li className="user-list__item" key={user.id}>
              <p>{user.name}</p>
              <p>{user.email}</p>
              <p>
                {user.address.street +
                  " " +
                  user.address.suite +
                  " " +
                  user.address.city +
                  " " +
                  user.address.zipcode}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
