import { API_URL } from "./config";

export async function deleteSession(sessionId: string) {
  const response = await fetch(`${API_URL}/sessions/${sessionId}`, {
    method: "DELETE",
  });
  return response.json();
}
