export function createPath(route: string, isCustom: boolean = false): string {
  if (!isCustom) {
    return `${process.env.NEXT_PUBLIC_HOST}${process.env.NEXT_PUBLIC_BASEURL}${route}`;
  }
  return `${process.env.NEXT_PUBLIC_HOST}${route}`;
}

export function getAuthHeader(): HeadersInit {
  return {
    "Content-type": "application/json",
  };
}

export enum APIROUTES {
  CLIENTS = "clients",
  CUSTOM = "/example/content",
  AIRPORTS = "airports",
}
