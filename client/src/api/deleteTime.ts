import { API_URL } from "./config";
import { TSession } from "./getSessions";

export async function deleteTime(
  sessionId: string,
  index: number
): Promise<TSession> {
  const response = await fetch(
    `${API_URL}/sessions/${sessionId}/times/${index}`,
    {
      method: "DELETE",
    }
  );
  return response.json();
}
