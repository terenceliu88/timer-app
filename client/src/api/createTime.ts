import { API_URL } from "./config";
import { TSession } from "./getSessions";

export async function createTime(
  sessionId: string,
  text: string
): Promise<TSession> {
  const response = await fetch(`${API_URL}/sessions/${sessionId}/times`, {
    method: "POST",
    body: JSON.stringify({
      text,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
}
