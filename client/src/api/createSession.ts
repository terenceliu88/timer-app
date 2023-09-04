import { API_URL } from "./config";

export async function createSession(title: string) {
  const response = await fetch(`${API_URL}/sessions`, {
    method: "POST",
    body: JSON.stringify({
      title,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
}
