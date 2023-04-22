import { SignUpWithPasswordCredentials } from "@supabase/supabase-js";
import supabase from "./supabase";

function generatePassword(length: number): string {
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
  const passwordArray = Array.from(
    { length },
    () => charset[Math.floor(Math.random() * charset.length)]
  );
  return passwordArray.join("");
}

async function signUp(email: string, username: string) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password: generatePassword(8),
    username,
  } as SignUpWithPasswordCredentials);

  console.log(data, error);
}

export default signUp;
