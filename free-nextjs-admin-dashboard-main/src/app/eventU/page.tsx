/* eslint-disable @next/next/no-img-element */
'use client';
import Link from "next/link";
import { TECarousel, TECarouselItem } from "tw-elements-react";
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from "react";
import { Event } from "@/types/product";
import axios from "axios";
import {useRouter } from "next/navigation";

export default function Example() {
  const [open, setOpen] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [events, setEvents] = useState<Event[]>([]);
  const [cartCount,setCartCount]=useState(0)
  const router = useRouter()
useEffect(()=>{
  setInterval(()=>{
    localStorage.getItem("cart")?setCartCount(localStorage.getItem("cart").split("/").length):setCartCount(0)
  },1000)
  
})
  const getData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/eventList');
      setEvents(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleClick = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="bg-white">
      <header className="relative bg-white">
        <p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
          YOUR BEST EVENT SITE !!
        </p>

        <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
              >
                <span className="sr-only">Open menu</span>
                <Bars3Icon aria-hidden="true" className="h-6 w-6" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <Link href="/forms/form-layout">
                  <span className="sr-only">Your Company</span>
                  <img
                    alt="Event Logo"
                    src="/images/logo/Event-removebg-preview.png"
                    className="h-50 w-auto"
                  />
                </Link>
              </div>

              {/* Flyout menus */}
              <ul className="hidden items-center justify-center gap-6 md:flex">
                <li className="pt-1.5 font-dm text-sm font-medium text-slate-700">
                  <Link href="/eventU">Find event</Link>
                </li>
                <li className="pt-1.5 font-dm text-sm font-medium text-slate-700">
                  <Link href="/Cart">My event</Link>
                </li>
              </ul>

              {/* Login */}
              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-1">
                  <Link
                    href="/auth/signin"
                    className="bg-indigo-50 text-indigo-600 rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 py-3 px-6 text-sm hover:bg-indigo-100"
                  >
                    Login
                  </Link>
                  <span aria-hidden="true" className="h-3 w-px bg-gray-200" />
                  <Link
                    href="/auth/signup"
                    className="bg-indigo-600 text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 py-3 px-6 text-sm hover:bg-indigo-700"
                  >
                    Create account
                  </Link>
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <Link href="/Cart" className="group -m-2 flex items-center p-2">
                    <ShoppingBagIcon
                      aria-hidden="true"
                      className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">{cartCount}</span>
                    <span className="sr-only">items in cart, view bag</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <section className="py-24 relative">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center max-lg:gap-4 justify-between w-full">
            <div className="relative w-full max-w-sm ml-auto">
              <svg className="absolute top-1/2 -translate-y-1/2 left-4 z-50" width="20" height="20"
                viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16.5555 3.33203H3.44463C2.46273 3.33203 1.66675 4.12802 1.66675 5.10991C1.66675 5.56785 1.84345 6.00813 2.16004 6.33901L6.83697 11.2271C6.97021 11.3664 7.03684 11.436 7.0974 11.5068C7.57207 12.062 7.85127 12.7576 7.89207 13.4869C7.89728 13.5799 7.89728 13.6763 7.89728 13.869V16.251C7.89728 17.6854 9.30176 18.6988 10.663 18.2466C11.5227 17.961 12.1029 17.157 12.1029 16.251V14.2772C12.1029 13.6825 12.1029 13.3852 12.1523 13.1015C12.2323 12.6415 12.4081 12.2035 12.6683 11.8158C12.8287 11.5767 13.0342 11.3619 13.4454 10.9322L17.8401 6.33901C18.1567 6.00813 18.3334 5.56785 18.3334 5.10991C18.3334 4.12802 17.5374 3.33203 16.5555 3.33203Z"
                  stroke="black" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
              <select id="Offer"
                className="h-12 border border-gray-300 text-gray-900 pl-11 text-base font-normal leading-7 rounded-full block w-full py-2.5 px-4 appearance-none relative focus:outline-none bg-white transition-all duration-500 hover:border-gray-400 hover:bg-gray-50 focus-within:bg-gray-50">
                <option selected>Sort by </option>
                <option value="option 1">A to Z</option>
                <option value="option 2">Z to A</option>
                <option value="option 3">Ascending price</option>
                <option value="option 4">Decreasing price</option>
              </select>
              <svg className="absolute top-1/2 -translate-y-1/2 right-4 z-50" width="16" height="16"
                viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.0002 5.99845L8.00008 9.99862L3.99756 5.99609" stroke="#111827" strokeWidth="1.6"
                  strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
          <svg className="my-7 w-full" xmlns="http://www.w3.org/2000/svg" width="1216" height="2" viewBox="0 0 1216 2"
            fill="none">
            <path d="M0 1H1216" stroke="#E5E7EB" />
          </svg>
          <div className="grid grid-cols-12">
            <div className="col-span-12 md:col-span-3 w-full max-md:max-w-md max-md:mx-auto">
              {/* Placeholder for filters or additional content */}
            </div>
            <div className="col-span-12 md:col-span-9">
              {/* Placeholder for the main content */}
            </div>
          </div>
        </div>
      </section>

      <div className="flex space-x-4">
        <div className="flex flex-wrap gap-4">
          {events.map((event) => (
            <div
              key={event.name}
              className="relative flex flex-col p-6 bg-white rounded-xl shadow-md border border-gray-200 max-w-[300px] cursor-pointer"
            >
              <img
                src="/images/landscape/hero.png"
                alt={event.name}
                className="h-40 w-full object-cover rounded-t-md"
              />
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-900">{event.name}</h3>
                <p className="text-gray-500 mt-2">{event.description}</p>
              </div>
              <button
                onClick={()=>{
                  router.push(`overviewsEvent/${event._id}`)
                }}
                className="mt-4 py-2 px-4 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-700"
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
