"use client";
import { ClientDto, ClientFormProps } from "@/lib/definitions/ui/ui";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { clientSchema } from "@/lib/validations/clients";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const BaseForm: React.FC<ClientFormProps> = ({
  isEditing,
  formData,
  clientId,
}) => {
  const router = useRouter();

  const form = useForm<ClientDto>({
    defaultValues: {
      code: formData?.code ?? "",
      default_language: formData?.default_language ?? "",
      name: formData?.name ?? "",
      subdomain: formData?.subdomain ?? "",
      user_id: formData?.user_id ?? null,
      item_searched: formData?.item_searched ?? "",
      default_section: formData?.default_language ?? "",
      client_items: formData?.client_items ?? null,
      client_template: formData?.client_template ?? "",
    },
    resolver: yupResolver(clientSchema),
  });

  const { register, handleSubmit, formState } = form;

  const { errors } = formState;

  const onSubmit = async (data: ClientDto) => {
    console.log(`my client id is ${clientId}`);
    console.log(data);
    // const client: Clients = {
    //   client_items: 1,
    //   client_template: "test",
    //   code: data.code,
    //   default_language: data.default_language,
    //   default_section: "main",
    //   item_searched: "locations",
    //   name: data.name,
    //   subdomain: data.subdomain,
    //   user_id: 1,
    // };

    if (isEditing) {
      toast.success("Client edited sucessfully", { autoClose: 2000 });
      // const response = await updateClientById(client, clientId);
      // if (response == "success") {
      //   setSnackMsg("Client edited sucessfully");
      //   setSnackOpen(true);
      // }
    } else {
      toast.success("Client added sucessfully", { autoClose: 2000 });
      // const response = await saveClient(client);
      // if (response == "success") {
      //   setSnackMsg("Client saved sucessfully");
      //   setSnackOpen(true);
      // }
    }
    //setTimeout(() => {
      router.push("/clients");
      router.refresh();
    //}, 3000);
    
  };
  return (
    <>
      {/* <!-- Contact Form --> */}
      <div className="mt-4 my-4">
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
            <h3 className="text-black dark:text-white">Clients Form</h3>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="p-6.5">
              <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Code <span className="text-meta-1">*</span>
                  </label>
                  <input
                    {...register("code")}
                    type="text"
                    placeholder="Enter client code"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                  {errors.code && (
                    <p className="text-xs italic text-red-500">
                      {errors.code.message}
                    </p>
                  )}
                </div>

                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Name <span className="text-meta-1">*</span>
                  </label>
                  <input
                    {...register("name")}
                    type="text"
                    placeholder="Enter client name"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                  {errors.name && (
                    <p className="text-xs italic text-red-500">
                      {errors.name.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Subdomain <span className="text-meta-1">*</span>
                  </label>
                  <input
                    {...register("subdomain")}
                    type="text"
                    placeholder="Enter client subdomain"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                  {errors.subdomain && (
                    <p className="text-xs italic text-red-500">
                      {errors.subdomain.message}
                    </p>
                  )}
                </div>

                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">
                    User Id
                  </label>
                  <input
                    {...register("user_id")}
                    type="text"
                    placeholder="Enter client User Id"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>
              </div>

              <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Default Language
                  </label>
                  <input
                    {...register("default_language")}
                    type="text"
                    placeholder="Enter client default language"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                  {errors.default_language && (
                    <p className="text-xs italic text-red-500">
                      {errors.default_language.message}
                    </p>
                  )}
                </div>

                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Item searched
                  </label>
                  <input
                    {...register("item_searched")}
                    type="text"
                    placeholder="Enter item searched"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>
              </div>

              <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Default Section
                  </label>
                  <input
                    {...register("default_section")}
                    type="text"
                    placeholder="Enter client default section"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>

                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Client Items
                  </label>
                  <input
                    {...register("client_items")}
                    type="text"
                    placeholder="Enter client items"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>
              </div>
              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Client Template
                </label>
                <input
                  {...register("client_template")}
                  type="text"
                  placeholder="Enter client template"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>
              <button
                type="submit"
                className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default BaseForm;
