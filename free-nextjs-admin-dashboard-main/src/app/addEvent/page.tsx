"use client";
import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import axios from 'axios';
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import DatePickerOne from "@/components/FormElements/DatePicker/DatePickerOne";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";




const FormElements = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    place: "",
    price: "",
    date:"" ,
    photo: null as File | null
  });
  const [startDate, setStartDate] = useState("");

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    console.log({ name, value });
  };

  const handleDateChange = (date: Date | null) => {
    console.log('==================date change==================');
    console.log(date);
    console.log('====================================');
    setFormData(prev => ({ ...prev, date: date }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({ ...prev, photo: file }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = new FormData();
    data.append('name', formData.name);
    data.append('description', formData.description);
    data.append('place', formData.place);
    data.append('price', formData.price);
    data.append('date', startDate.toString());
    if (formData.photo) data.append('photo', formData.photo);

    console.log('Submitted Data:',{startDate} );

    try {
      // await axios.post('http://localhost:8080/eventList', data, {
      //   headers: {
      //     'Content-Type': 'multipart/form-data',
      //   },
      // });
      await axios({
        method: 'post',
        url: 'http://localhost:8080/eventList',
        data:formData
      });
      router.push('/eventList');
    } catch (error) {
      console.error("Error adding event:", error);
    }
  };

  return (
    <>
      <Breadcrumb pageName="Add Event" />
      <DefaultLayout>
        <div className="flex justify-center items-center min-h-screen">
          <div className="w-full max-w-3xl p-10 bg-white rounded-lg shadow-lg dark:bg-boxdark">
            <h3 className="text-center font-medium text-black dark:text-white mb-6">
              Add New Event
            </h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div>
                <label className="mb-2 block text-sm font-medium text-black dark:text-white">
                  Event Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Event Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-black dark:text-white">
                  Description
                </label>
                <textarea
                  name="description"
                  rows={6}
                  placeholder="Event Description"
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white"
                ></textarea>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-black dark:text-white">
                  Place
                </label>
                <input
                  type="text"
                  name="place"
                  placeholder="Event Place"
                  value={formData.place}
                  onChange={handleChange}
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-black dark:text-white">
                  Price
                </label>
                <input
                  type="text"
                  name="price"
                  placeholder="Event price"
                  value={formData.price}
                  onChange={handleChange}
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-black dark:text-white">
                  Event Date
                </label>
                  <DatePicker selected={formData.date} onChange={(date) => setFormData({...formData,date:date?date.toISOString():"TBD"})} />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-black dark:text-white">
                  Event Photo
                </label>
                <input
                  type="file"
                  name="photo"
                  onChange={handleFileChange}
                  className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent transition file:mr-5 file:border-0 file:bg-whiter file:px-5 file:py-3 hover:file:bg-primary hover:file:bg-opacity-10"
                />
              </div>
              <div className="flex justify-center gap-5 mt-6">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-md border border-black px-10 py-4 text-center font-medium text-black hover:bg-opacity-90"
                >
                  Add
                </button>
                <Link
                  href="/tables"
                  className="inline-flex items-center justify-center rounded-md border border-black px-10 py-4 text-center font-medium text-black hover:bg-opacity-90"
                >
                  Cancel
                </Link>
              </div>
            </form>
          </div>
        </div>
      </DefaultLayout>
    </>
  );
};

export default FormElements;
