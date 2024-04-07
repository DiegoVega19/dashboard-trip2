"use client"
import { DataClients } from '@/lib/definitions/clients/clients';
import TableActions from '../../common/Table/TableActions';
import { useRouter } from "next/navigation";
import { toast } from 'react-toastify';

const data: DataClients = {data:[
  {
    "id": 1,
    "code": "triptuner",
    "name": "triptuner.com",
    "subdomain": "",
    "user_id": 1,
    "default_language": "en",
    "item_searched": "locations",
    "default_section": "main",
    "client_items": 1,
    "client_template": "triptuner"
  },
  {
    "id": 5,
    "code": "france",
    "name": "france",
    "subdomain": "france",
    "user_id": 7,
    "default_language": "fr",
    "item_searched": "locations",
    "default_section": "main",
    "client_items": 5,
    "client_template": null
  },
  {
    "id": 12,
    "code": "bahamas",
    "name": "bahamas",
    "subdomain": "bahamas",
    "user_id": 4691,
    "default_language": "en",
    "item_searched": "locations",
    "default_section": "weddings",
    "client_items": 12,
    "client_template": "islandfinder"
  },
  {
    "id": 13,
    "code": "visitflorida",
    "name": "visitflorida",
    "subdomain": "visitflorida",
    "user_id": 5234,
    "default_language": "en",
    "item_searched": "locations",
    "default_section": "main",
    "client_items": 13,
    "client_template": null
  },
  {
    "id": 15,
    "code": "vfbeaches",
    "name": "VISIT FLORIDA Beach Finder",
    "subdomain": "vfbeaches",
    "user_id": 5234,
    "default_language": "en",
    "item_searched": "locations",
    "default_section": "beaches",
    "client_items": 15,
    "client_template": "visitflorida"
  },
  {
    "id": 25,
    "code": "ebookers",
    "name": "ebookers",
    "subdomain": "ebookers",
    "user_id": 6908,
    "default_language": "en",
    "item_searched": "locations",
    "default_section": "main",
    "client_items": 25,
    "client_template": null
  },
  {
    "id": 26,
    "code": "vfbeachesw",
    "name": "VF Beaches Widget",
    "subdomain": "vfbeachesw",
    "user_id": null,
    "default_language": "en",
    "item_searched": "locations",
    "default_section": "main",
    "client_items": 15,
    "client_template": null
  },
  {
    "id": 34,
    "code": "islandfinder",
    "name": "Bahamas Island Finder",
    "subdomain": "islandfinder",
    "user_id": null,
    "default_language": "en",
    "item_searched": "locations",
    "default_section": "main",
    "client_items": 34,
    "client_template": null
  },
  {
    "id": 37,
    "code": "hoteltuner",
    "name": "Hotel Tuner",
    "subdomain": "hoteltuner",
    "user_id": 1,
    "default_language": "en",
    "item_searched": "locations",
    "default_section": "main",
    "client_items": 37,
    "client_template": null
  },
  {
    "id": 38,
    "code": "restauranttuner",
    "name": "Restaurant Tuner",
    "subdomain": "restauranttuner",
    "user_id": 1,
    "default_language": "en",
    "item_searched": "locations",
    "default_section": "main",
    "client_items": 38,
    "client_template": "hoteltuner"
  },
]};


const Table = () => {
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
                Code
              </th>
              <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                Name
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                Subdomain
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                Options
              </th>
            </tr>
          </thead>
          <tbody>
            {data.data.map((client) => (
              <tr key={client.id}>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {client.id}
                  </p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {client.code}
                  </p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {client.name}
                  </p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {client.subdomain}
                  </p>
                </td>
                <TableActions onDelete={async()=> {
                  //router.refresh();
                  toast.success('The client was deleted', {autoClose:2000})
                  console.log(`deleting item with id ${client.id}`)
                }}
                onEdit={()=>{
                    console.log('Navigating and editing')
                    router.push(`/clients/edit/${client.id}`)
                }}
                ></TableActions>
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
