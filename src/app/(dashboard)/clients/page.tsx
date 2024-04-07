"use client";
import TopButtons from "@/ui/components/common/Buttons/TopButtons";
import Pagination from "@/ui/components/common/Table/Pagination";
import TablePagination from "@/ui/components/common/Table/TablePagination";
import Table from "@/ui/components/pages_components/clients/Table";
import Breadcrumb from "@/ui/dashboard/components/Breadcrumbs/Breadcrumb";
export default function Clients() {
  return (
    <>
      <Breadcrumb pageName="Clients"></Breadcrumb>
      <TopButtons to={""}></TopButtons>
      <div className="flex flex-col gap-10">
        <Table></Table>
      </div>
    </>
  );
}
