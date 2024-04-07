export interface DataClients {
  data: Client[];
}

export interface Client {
  id: number;
  code: string;
  name: string;
  subdomain: string;
  user_id: number | null;
  default_language: string;
  item_searched: string;
  default_section: string;
  client_items: number;
  client_template: null | string;
}

