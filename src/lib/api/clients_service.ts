import { APIROUTES, createPath, getAuthHeader } from "@/lib/utils/api_utils";
import { Client, DataClients } from "../definitions/clients/clients";

export async function getClients(): Promise<DataClients> {
  const res = await fetch(createPath(APIROUTES.CLIENTS), {
    cache: "no-store",
    headers: getAuthHeader(),
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = res.json();
  return data;
}

export async function deleteClient(
  clientId: number
): Promise<"failed" | "success"> {
  const res = await fetch(`${createPath(APIROUTES.CLIENTS)}/${clientId}`, {
    method: "DELETE",
    headers: getAuthHeader(),
  });

  if (res.status != 204) {
    return "failed";
  } else return "success";
}

export async function getClientById(clientId: number): Promise<DataClients> {
  const res = await fetch(`${createPath(APIROUTES.CLIENTS)}/${clientId}`, {
    cache: "no-store",
    headers: getAuthHeader(),
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = res.json();
  return data;
}

export async function saveClient(
  client: Client
): Promise<"failed" | "success"> {
  const res = await fetch(createPath(APIROUTES.CLIENTS), {
    method: "POST",
    headers: getAuthHeader(),
    body: JSON.stringify(client),
  });

  if (!res.ok) {
    return "failed";
  }
  return "success";
}

export async function updateClientById(
  client: Client,
  clientId: number
): Promise<"failed" | "success"> {
  const res = await fetch(`${createPath(APIROUTES.CLIENTS)}/${clientId}`, {
    method: "PATCH",
    headers: getAuthHeader(),
    body: JSON.stringify(client),
  });

  if (!res.ok) {
    return "failed";
  }
  return "success";
}
