import BaseForm from "@/ui/components/pages_components/clients/BaseForm";
import Breadcrumb from "@/ui/dashboard/components/Breadcrumbs/Breadcrumb";
import React from "react";

export default function Create() {
  return (
    <>
      <Breadcrumb pageName="Create client"></Breadcrumb>
      <BaseForm isEditing={false}></BaseForm>
    </>
  );
}
