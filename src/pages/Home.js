import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import Card from "../components/Card";
import CardsContainer from "../components/CardsContainer";
import Loader from "../components/Loader";
import H2 from "../components/H2";

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const request = await fetch("http://localhost:8000/validation/");
    const response = await request.json();
    setUsers(response);
  };

  if (users.length === 0) {
    return <Loader />;
  }
  return (
    <>
      <H2>Users</H2>
      <CardsContainer>
        {users.map((user) => (
          <Link to={`/${user.slug}`}>
            <Card
              key={user.id}
              image={user.profile_picture}
              name={user.name}
              email={user.email}
            />
          </Link>
        ))}
      </CardsContainer>
    </>
  );
}

export default Home;
