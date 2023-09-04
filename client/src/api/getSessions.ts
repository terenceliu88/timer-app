import { API_URL } from "./config";

export type TSession = {
  title: string;
  times: string[];
  _id: string;
};

export async function getSessions(): Promise<TSession[]> {
  const response = await fetch(`${API_URL}/sessions`);
  return response.json();
}
