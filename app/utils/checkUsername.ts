import { API_URL } from "@/environments/environments";

async function checkUsername(username: string) {
  const res = await fetch(`${API_URL}/api/username?username=${username}`, {
    cache: "no-store",
  });
  const data = await res.json();

  return data;
}

export default checkUsername;
