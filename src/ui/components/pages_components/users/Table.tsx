"use client"
import { DataClients } from '@/lib/definitions/clients/clients';
import TableActions from '../../common/Table/TableActions';
import { useRouter } from "next/navigation";
import { toast } from 'react-toastify';
import { Users } from '@/lib/definitions/users';

interface TableProps  {
  data: Users[]
}

const Table:React.FC<TableProps> = ({data}) => {
  const router = useRouter();
  return (
    <>
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                Id
              </th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                Name
              </th>
              <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                Username
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                Email
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((user) => (
              <tr key={user.id}>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {user.id}
                  </p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {user.name}
                  </p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {user.username}
                  </p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {user.email}
                  </p>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
   
    </>
    
  );
};

export default Table;
