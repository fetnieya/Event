"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import React, { useEffect, useState } from "react";
import axios from "axios";
import SelectGroupTwo from "@/components/SelectGroup/SelectGroupTwo";
import Link from "next/link";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

const FormElements = ({ params: { id } }) => {
  let [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const fetchData = async () => {
    const user = await axios.get(`http://localhost:8080/userList/${id}`);
    formData = user.data.data;
    setFormData(user.data.data);
    console.log({ formData });

    return user;
  };

  useEffect(() => {
    const user = fetchData();
  }, []);

  function handleChange(e: any) {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `http://localhost:8080/userList/${formData._id}`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      setSuccess("User updated successfully.");
      setError("");
    } catch (error) {
      setError("Error updating user. Please try again.");
      setSuccess("");
    }
  };

  return (
    <>
      <Breadcrumb pageName="User Update" />
      <DefaultLayout>
        <div className="flex min-h-screen items-center justify-center">
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
                    <form onSubmit={handleSubmit}>
                      <div>
                        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                          First Name
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder="Eya"
                          className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                        />
                      </div>
                      <div>
                        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                          Last Name
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          placeholder="Fetni"
                          className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                        />
                      </div>
                      <div>
                        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="fetnieya4@gmail.com"
                          className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                        />
                      </div>
                      <div className="flex flex-col gap-5.5 p-6.5">
                        <SelectGroupTwo selectedItem={formData.role} />
                      </div>
                      <div className="flex justify-center space-x-4">
                        <button
                          type="submit"
                          className="inline-flex items-center justify-center rounded-md border border-black px-10 py-4 text-center font-medium text-black hover:bg-opacity-90 lg:px-8 xl:px-10"
                        >
                          Update
                        </button>
                        <Link
                          href="/tables"
                          className="inline-flex items-center justify-center rounded-md border border-black px-10 py-4 text-center font-medium text-black hover:bg-opacity-90 lg:px-8 xl:px-10"
                        >
                          Cancel
                        </Link>
                      </div>
                    </form>
                    {error && <p className="text-red-500">{error}</p>}
                    {success && <p className="text-green-500">{success}</p>}
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
