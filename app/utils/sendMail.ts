import { API_URL } from "@/environments/environments";

async function sendMail(email: string, username: string) {
  const res = await fetch(
    `${API_URL}/api/mail?email=${email}&username=${username}`,
    {
      method: "GET",
      cache: "no-store",
    }
  );
  const json = await res.json();

  return json;
}

export default sendMail;
