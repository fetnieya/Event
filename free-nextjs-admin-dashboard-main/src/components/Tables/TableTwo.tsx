"use client";
import Image from "next/image";
import { Product } from "@/types/product";
import { format } from 'date-fns';
import Link from 'next/link';
import { useEffect, useState } from "react";
import axios from "axios";

const productData: Product[] = [
  {
    image: "/images/product/product-01.png",
    ID: 1,
    name: "party",
    description: "the best in tunisia",
    price: 150,
    date: new Date("2023-07-16"),
    place: "Cartage théatre",
  },
];



function TableTwo() {
  const [events,setEvents]= useState([])
  const getData=async()=>{
    try {
      const response = await axios.get('/eventList'); // Ensure this URL is correct
      console.log(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      console.log(false);
    }
  }
  useEffect(()=>{
   getData()
  },[])
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <Link
          href="/addEvent"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-primary px-6 py-2 text-center font-medium text-primary hover:bg-opacity-50 lg:px-4 xl:px-6 mb-4"
        >
          <span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

          </span>
          Add Event 
        </Link>
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="min-w-[220px] px-4 py-4 font-medium text-black dark:text-white xl:pl-11">Product name</th>
              <th className="min-w-[220px] px-4 py-4 font-medium text-black dark:text-white xl:pl-11">ID</th>
              <th className="min-w-[150px] px-4 py-4 font-medium text-black dark:text-white">Description</th>
              <th className="min-w-[120px] px-4 py-4 font-medium text-black dark:text-white">Date</th>
              <th className="min-w-[120px] px-4 py-4 font-medium text-black dark:text-white">Place</th>
              <th className="px-4 py-4 font-medium text-black dark:text-white">Actions</th>  
            </tr>
          </thead>
          <tbody>
            {productData.map((packageItem, key) => (
              <tr key={key}>
                <td className="border-b border-[#eee] px-4 py-5 pl-9 dark:border-strokedark xl:pl-11">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                    <div className="h-12.5 w-15 rounded-md">
                      <Image
                        src={packageItem.image}
                        width={60}
                        height={50}
                        alt="Product"
                      />
                    </div>
                    <p className="text-sm text-black dark:text-white">
                      {packageItem.name}
                    </p>
                  </div>
                </td>

                <td className="border-b border-[#eee] px-4 py-5 pl-9 dark:border-strokedark xl:pl-11">
                  <h5 className="font-medium text-black dark:text-white">{packageItem.ID}</h5>
                </td>

                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <p className="text-black dark:text-white">{packageItem.description}</p>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <p className="inline-flex rounded-full bg-opacity-10 px-3 py-1 text-sm font-medium bg-blue-500 text-blue-500">
                    {format(new Date(packageItem.date), 'dd/MM/yyyy')}
                  </p>
                </td>

                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <p className="text-black dark:text-white">{packageItem.place}</p>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <div className="flex items-center space-x-3.5">
                  <Link href="/eventUpdate">
  <button className="hover:text-primary">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
    </svg>
  </button>
</Link>
                    <button className="hover:text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
  
}

export default TableTwo;
