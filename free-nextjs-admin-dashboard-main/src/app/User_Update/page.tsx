"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import SelectGroupTwo from "@/components/SelectGroup/SelectGroupTwo";
import React from "react";
import Link from 'next/link';
import DefaultLayout from "@/components/Layouts/DefaultLayout";

const FormElements = () => {
  return (
    <>
      <Breadcrumb pageName="" />
      <DefaultLayout>
        <div className="flex justify-center items-center min-h-screen">
          <div className="w-full max-w-6xl px-4">
            <div className="grid grid-cols-1 gap-9">
              <div className="flex flex-col gap-9">
                <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                  <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                    <h3 className="font-medium text-black dark:text-white">
                      User Update
                    </h3>
                  </div>
                  <div className="flex flex-col gap-5.5 p-6.5">
                    <div>
                      <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                        ID
                      </label>
                      <input
                        type="text"
                        placeholder="1"
                        disabled
                        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary dark:disabled:bg-black"
                      />
                    </div>
                    <div>
                      <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                        User Name
                      </label>
                      <input
                        type="text"
                        placeholder="Eya Fetni"
                        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                        Email
                      </label>
                      <input
                        type="text"
                        placeholder="fetnieya4@gmail.com"
                        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      />
                    </div>
                    <div className="flex flex-col gap-5.5 p-6.5">
                      <SelectGroupTwo />
                    </div>
                    <div className="flex justify-center space-x-4">
                      <Link
                        href="/tables"
                        className="inline-flex items-center justify-center rounded-md border border-black px-10 py-4 text-center font-medium text-black hover:bg-opacity-90 lg:px-8 xl:px-10"
                      >
                        Update
                      </Link>
                      <Link
                        href="/tables"
                        className="inline-flex items-center justify-center rounded-md border border-black px-10 py-4 text-center font-medium text-black hover:bg-opacity-90 lg:px-8 xl:px-10"
                      >
                        Cancel
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DefaultLayout>
    </>
  );
};

export default FormElements;
