"use client";

import { ChangeEvent, useRef, useState } from "react";
import Form from "./Form";
import reserveAddress from "../utils/reserveAddress";

function FormWrapper() {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const userRef = useRef<{ email: string; username: string }>();

  const validEmailRegex = /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const onlyLowerCaseLettersRegex = /^[a-z0-9]+$/;
  const isValidEmail = validEmailRegex.test(email);

  function handleUsernameChange(e: ChangeEvent<HTMLInputElement>) {
    const currentUsername = e.target.value.toLowerCase().trim();
    if (onlyLowerCaseLettersRegex.test(currentUsername)) {
      setUsername(currentUsername);
    }
    if (!e.target.value) {
      setUsername("");
    }
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
      isValidEmail={isValidEmail}
      submit={submit}
      loading={loading}
      error={error}
      success={success}
      userRef={userRef}
    />
  );
}

export default FormWrapper;
