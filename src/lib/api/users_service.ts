import { Users } from "../definitions/users";
import { getAuthHeader } from "../utils/api_utils";

export async function getUsers(): Promise<Users[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    cache: "no-store",
    headers: getAuthHeader(),
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = res.json();
  return data;
}