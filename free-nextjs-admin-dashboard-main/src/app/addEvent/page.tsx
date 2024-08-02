"use client";
import React, { useState } from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DatePickerOne from "@/components/FormElements/DatePicker/DatePickerOne";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Link from 'next/link';

const FormElements = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");

  return (
    <>
      <Breadcrumb pageName="Add Event" />
      <DefaultLayout>
        <div className="flex justify-center items-center min-h-screen">
          <div className="w-full max-w-3xl p-10 bg-white rounded-lg shadow-lg dark:bg-boxdark">
            <h3 className="text-center font-medium text-black dark:text-white mb-6">
              Add Event
            </h3>
            <div className="flex flex-col gap-6">
              <div>
                <label className="mb-2 block text-sm font-medium text-black dark:text-white">
                  ID
                </label>
                <input
                  type="text"
                  placeholder="1"
                  disabled
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-black dark:text-white">
                  Event Photo
                </label>
                <input
                  type="file"
                  className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent transition file:mr-5 file:border-0 file:bg-whiter file:px-5 file:py-3 hover:file:bg-primary hover:file:bg-opacity-10"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-black dark:text-white">
                  Event Name
                </label>
                <input
                  type="text"
                  placeholder="Event"
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-black dark:text-white">
                  Description
                </label>
                <textarea
                  rows={6}
                  placeholder="Default textarea"
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white"
                ></textarea>
              </div>
              <div className="flex flex-col gap-5">
                <DatePickerOne />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-black dark:text-white">
                  Place
                </label>
                <input
                  type="text"
                  placeholder="Event Place"
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white"
                />
              </div>
              <div className="flex justify-center gap-5 mt-6">
                <Link
                  href="/tables"
                  className="inline-flex items-center justify-center rounded-md border border-black px-10 py-4 text-center font-medium text-black hover:bg-opacity-90"
                >
                  Add
                </Link>
                <Link
                  href="/tables"
                  className="inline-flex items-center justify-center rounded-md border border-black px-10 py-4 text-center font-medium text-black hover:bg-opacity-90"
                >
                  Cancel
                </Link>
              </div>
            </div>
          </div>
        </div>
      </DefaultLayout>
    </>
  );
};

export default FormElements;
