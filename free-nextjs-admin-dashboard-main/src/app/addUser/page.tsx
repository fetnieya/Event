"use client";
import React, { useState } from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Link from 'next/link';
import axios from "axios";

const FormElements = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role: ""
  });

  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (e.target.name === "role") setSelectedOption(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/addUser', formData);
      // Redirect or show success message
      window.location.href = '/userList';
    } catch (error) {
      console.error("Error adding user:", error);
      // Handle error
    }
  };
  

  return (
    <>
      <Breadcrumb pageName="" />
      <DefaultLayout>
        <div className="flex justify-center items-center min-h-screen">
          <div className="w-full max-w-3xl mx-auto">
            <div className="grid grid-cols-1 gap-9">
              <div className="flex flex-col gap-9">
                <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark w-full">
                  <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                    <h3 className="font-medium text-black dark:text-white">
                      Add User
                    </h3>
                  </div>
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5.5 p-6.5">
                    <div>
                      <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                        User First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        placeholder="User First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                        required
                      />
                    </div>
                    <div>
                      <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                        User Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        placeholder="User Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                        required
                      />
                    </div>
                    <div>
                      <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="user@gmail.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                        required
                      />
                    </div>
                    <div>
                      <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                        Role
                      </label>
                      <select
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        className={`relative z-20 w-full appearance-none rounded border border-stroke bg-transparent px-5 py-3 outline-none transition focus:border-primary active:border-primary dark:border-strokedark dark:bg-form-input`}
                      >
                        <option value="" disabled className="text-body dark:text-bodydark">
                          Select Role
                        </option>
                        <option value="Administrator" className="text-body dark:text-bodydark">
                          Administrateur
                        </option>
                        <option value="Organizer" className="text-body dark:text-bodydark">
                          Organisateur
                        </option>
                        <option value="Participant" className="text-body dark:text-bodydark">
                          Participant
                        </option>
                      </select>
                    </div>
                    <div className="flex justify-center space-x-2 mt-6">
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center rounded-md border border-black px-10 py-4 text-center font-medium text-black hover:bg-opacity-90 lg:px-8 xl:px-10"
                      >
                        Add
                      </button>
                      <Link
                        href="/userList"
                        className="inline-flex items-center justify-center rounded-md border border-black px-10 py-4 text-center font-medium text-black hover:bg-opacity-90 lg:px-8 xl:px-10"
                      >
                        Cancel
                      </Link>
                    </div>
                  </form>
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
