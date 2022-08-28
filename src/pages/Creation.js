import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import H2 from "../components/H2";
import Input from "../components/Input";
import Form from "../components/Form";
import Button from "../components/Button";

function Creation() {
  const Navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userCity, setUserCity] = useState("");
  const [userImage, setUserImage] = useState("");

  const [errorName, setErrorName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorCity, setErrorCity] = useState("");
  const [errorImage, setErrorImage] = useState("");

  // USER ////////////////////////////////////////////////////////////////

  const handleChangeName = (e) => {
    setUserName(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setUserEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setUserPassword(e.target.value);
  };
  const handleChangeImage = (e) => {
    setUserImage(e.target.value);
  };
  const handleChangeCity = (e) => {
    setUserCity(e.target.value);
  };

  //////////////////////////////////////////////////////////////////

  const handleSubmit = async (e) => {
    e.preventDefault();
    resetErrors();

    const user = {
      name: userName,
      email: userEmail,
      password: userPassword,
      city: userCity,
      profile_picture: userImage,
    };

    const request = await fetch(`http://localhost:8000/validation`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const response = await request.json();

    if (request.status === 200) {
      Navigate("/");
    } else {
      response.map((res) => {
        if (res.param === "name") {
          setErrorName(res.msg);
        } else if (res.param === "email") {
          setErrorEmail(res.msg);
        } else if (res.param === "password") {
          setErrorPassword(res.msg);
        } else if (res.param === "city") {
          setErrorCity(res.msg);
        } else if (res.param === "image") {
          setErrorImage(res.msg);
        }
      });
    }
  };

  const resetErrors = () => {
    setErrorName("");
    setErrorEmail("");
    setErrorPassword("");
    setErrorCity("");
    setErrorImage("");
  };

  return (
    <>
      <H2>Add an user</H2>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Name"
          label="Name"
          onChange={handleChangeName}
          error={errorName}
        />
        <Input
          type="text"
          name="password"
          placeholder="Password"
          label="Password"
          onChange={handleChangePassword}
          error={errorPassword}
        />
        <Input
          type="text"
          name="email"
          placeholder="Email"
          label="Email"
          onChange={handleChangeEmail}
          error={errorEmail}
        />
        <Input
          type="text"
          name="profile_picture"
          placeholder="Image link"
          label="Profile picture"
          onChange={handleChangeImage}
          error={errorImage}
        />
        <label class="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2 md:mb-1">
          City
        </label>
        <select
          class="select select-bordered w-full max-w-xs"
          onChange={handleChangeCity}
          error={errorCity}
        >
          <option disabled selected>
            City
          </option>
          <option>Paris</option>
          <option>Tokyo</option>
          <option>Los Angeles</option>
        </select>
      </Form>
    </>
  );
}

export default Creation;
