'use client';

import React, { useEffect, useState } from "react";
import axios from 'axios';
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DatePickerOne from "@/components/FormElements/DatePicker/DatePickerOne";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Link from 'next/link';

const FormElements = ({params:{id}}) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    date: '',
    place: '',
    price:''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const fetchData=async ()=>{
    const event =await axios.get(`http://localhost:8080/eventList/${id}`)
    setFormData(event.data.data)
    return event
  }

  useEffect(()=>{
      const event = fetchData() 
    console.log('====================================');
    console.log({id});
    console.log('====================================');
  },[])

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    // if (!formData._id || !formData.name || !formData.date || !formData.place) {
    //   setError('Please fill in all required fields.');
    //   return;
    // }

    try {
      const response = await axios.put(`http://localhost:8080/eventList/${formData._id}`, formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      setSuccess('Event updated successfully');
      setError('');
      // Redirect or show success message
    } catch (error) {
      setError('Error updating event. Please try again.');
      setSuccess('');
    } 
  };

  return (
    <>
      <Breadcrumb pageName="Update Event" />
      <DefaultLayout>
        <div className="flex justify-center">
          <div className="w-full max-w-5xl p-4">
            <div className="grid grid-cols-1 gap-9">
              <div className="flex flex-col gap-10">
                <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                  <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                    <h3 className="font-medium text-black dark:text-white">
                      Event Update
                    </h3>
                  </div>
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5.5 p-6.5">
                    {error && <div className="text-red-500">{error}</div>}
                    {success && <div className="text-green-500">{success}</div>}
                   
                    <div>
                      <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                        Event Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Event Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      />
                    </div>
                    <div>
  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
    Description
  </label>
  <textarea
    rows={6}
    name="description"
    placeholder="Description"
    value={formData.description}
    onChange={handleChange}
    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
  ></textarea>
</div>
<div>
  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
    Date
  </label>
  <input
    type="date"
    name="date"
    value={formData.date}
    onChange={handleChange}
    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
  />
</div>

                    <div>
                      <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                        Place
                      </label>
                      <input
                        type="text"
                        name="place"
                        placeholder="Place"
                        value={formData.place}
                        onChange={handleChange}
                        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                       Price
                      </label>
                      <input
                        type="text"
                        name="price"
                        placeholder="price"
                        value={formData.price}
                        onChange={handleChange}
                        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      />
                    </div>
                    <div className="flex justify-center space-x-4 mt-4">
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center rounded-md border border-black px-10 py-4 text-center font-medium text-black hover:bg-opacity-90 lg:px-8 xl:px-10"
                      >
                        Update
                      </button>
                      <Link
                        href="/eventList"
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
function fetchData(arg0: string): any {
  throw new Error("Function not implemented.");
}

