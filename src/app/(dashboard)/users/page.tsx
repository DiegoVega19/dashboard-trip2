import { getClients } from '@/lib/api/clients_service'
import { getUsers } from '@/lib/api/users_service'
import TopButtons from '@/ui/components/common/Buttons/TopButtons'
import Pagination from '@/ui/components/common/Table/Pagination'
import Table from '@/ui/components/pages_components/users/Table'
import Breadcrumb from '@/ui/dashboard/components/Breadcrumbs/Breadcrumb'
import React from 'react'

export default async function Users() {
  const data = await getUsers()
  console.log(data)
  return (
    <>
    <Breadcrumb pageName="Users"></Breadcrumb>
    <TopButtons to={""}></TopButtons>
    <div className="flex flex-col gap-10">
        <Table data={data}></Table>
        {/* <TablePagination></TablePagination> */}
        <Pagination totalPages={10}></Pagination>
      </div>
    </>
    
    
  )
}
