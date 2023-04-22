"use client";

import { ChangeEvent, useEffect, useRef, useState } from "react";
import Form from "./Form";
import reserveAddress from "../utils/reserveAddress";

function FormWrapper() {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const userRef = useRef<{ email: string; username: string }>();

  function handleUsernameChange(e: ChangeEvent<HTMLInputElement>) {
    setUsername(e.target.value);
  }

  function handleEmailChange(e: ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }

  function submit() {
    if (!email || !username) return;

    setSuccess(false);
    setLoading(true);
    setError("");

    reserveAddress(email, username).then((res) => {
      setLoading(false);

      if (res.error) {
        const usernameTaken = res.error.message.includes("username");
        setError(
          usernameTaken
            ? "This username is taken. Please choose another one."
            : "This email is already in the waitlist."
        );
      } else {
        userRef.current = { email, username };
        setSuccess(true);
        setUsername("");
        setEmail("");
      }
    });
  }

  return (
    <Form
      username={username}
      email={email}
      handleUsernameChange={handleUsernameChange}
      handleEmailChange={handleEmailChange}
      submit={submit}
      loading={loading}
      error={error}
      success={success}
      userRef={userRef}
    />
  );
}

export default FormWrapper;
