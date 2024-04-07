//UI definitions

import { Client } from "../clients/clients";

export interface TableActionsProps {
    onEdit:  () => void;
    onDelete: () => Promise<void>;
}

export interface ButtonAddProps {
    title: string
    to: string
}

export interface ClientDto{
  code: string;
  default_language?: string;
  name: string;
  subdomain: string;
  user_id?: number | null
  item_searched?: string;
  default_section?: string;
  client_items?: number | null;
  client_template?: null | string;

}

export interface ClientFormProps {
    formData?: ClientDto;
    isEditing: boolean;
    clientId?: number;
}

export interface TopButtonProps {
    to: string
}