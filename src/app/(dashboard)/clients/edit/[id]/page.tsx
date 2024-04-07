import { Client } from '@/lib/definitions/clients/clients';
import BaseForm from '@/ui/components/pages_components/clients/BaseForm';
import Breadcrumb from '@/ui/dashboard/components/Breadcrumbs/Breadcrumb';
import React from 'react'

const data:Client = {
  "client_items": 1,
  "client_template": "triptuner",
  "code": "triptuner",
  "default_language": "en",
  "default_section": "main",
  "id": 1,
  "item_searched": "locations",
  "name": "triptuner.com",
  "subdomain": "",
  "user_id": 1
};


export default function Edit({
  params,
}: {
  params: { slug: string; id: string };
}) {
  return (
    <>
      <Breadcrumb pageName="Create client"></Breadcrumb>
      <BaseForm isEditing={true} formData={data} clientId={1}></BaseForm>
    </>
  )
}
