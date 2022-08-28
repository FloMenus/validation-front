import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import H2 from "../components/H2";

function User() {
  const { slug } = useParams();
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    const request = await fetch(`http://localhost:8000/validation/${slug}`);
    const response = await request.json();
    setUser(response);
  };

  return (
    <>
      <H2>User</H2>
      <aside class="overflow-hidden bg-gray-900 sm:grid sm:grid-cols-2">
        <div class="p-8 md:p-12 lg:px-16 lg:py-24">
          <div class="max-w-xl mx-auto text-center sm:text-left">
            <h3 class="text-2xl font-bold text-white md:text-3xl">
              {user.name}
            </h3>
            <ul>
              <li class="text-gray-300 md:mt-4 md:block">
                Email: {user.email}
              </li>
              <li class="text-gray-300 md:mt-4 md:block">
                Location: {user.city}
              </li>
            </ul>
            <div class="mt-4 md:mt-8"></div>
          </div>
        </div>

        <img
          alt={user.name}
          src={user.profile_picture}
          class="object-cover w-full h-56 sm:h-full"
        />
      </aside>
    </>
  );
}

export default User;
