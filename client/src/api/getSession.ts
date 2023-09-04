import { API_URL } from "./config";
import { TSession } from "./getSessions";

export async function getSession(sessionId: string): Promise<TSession> {
  const response = await fetch(`${API_URL}/sessions/${sessionId}`);
  return response.json();
}
