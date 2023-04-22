import { API_URL } from "@/environments/environments";

async function reserveAddress(email: string, username: string) {
  const res = await fetch(
    `${API_URL}/api/username?email=${email}&username=${username}`,
    {
      method: "POST",
      cache: "no-store",
    }
  );
  const { data, error } = await res.json();

  return { data, error };
}

export default reserveAddress;
