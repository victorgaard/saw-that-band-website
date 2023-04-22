"use client";

import { ChangeEvent, useEffect, useState } from "react";
import Form from "./Form";

function FormWrapper() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  function handleUsernameChange(e: ChangeEvent<HTMLInputElement>) {
    setUsername(e.target.value);
  }

  useEffect(() => {
    let usernameTimeout: ReturnType<typeof setTimeout>;

    if (username) {
      usernameTimeout = setTimeout(() => {}, 700);
    }
    return () => clearTimeout(usernameTimeout);
  }, [username]);

  return (
    <Form
      username={username}
      email={email}
      handleUsernameChange={handleUsernameChange}
    />
  );
}

export default FormWrapper;
