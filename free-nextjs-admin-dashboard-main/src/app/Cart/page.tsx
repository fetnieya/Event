/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
} from "@headlessui/react";
import { TECarousel, TECarouselItem } from "tw-elements-react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

export default function Example() {
  const [count, setCount] = useState(0);
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [subtotal,setSubtotal]=useState(0);
  useEffect(() => {
    
    setCartCount(localStorage.getItem("cart")?.split("/").length);
    let card = [];
    localStorage
      .getItem("cart")
      ?.split("/")
      .map((c) => card.push(JSON.parse(c)));
    setCartItems(card);
    let total=0
    card.map(c=>{
      total+=c.price
    })
    setSubtotal(total)
  });
  const handleChange = () => {
    const value = Math.max(0, Number(e.target.value)); // Ensure value is non-negative
    setCount(value);
  };

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count > 0 ? count - 1 : 0);
  return (
    <div className="bg-white">
      <header className="relative bg-white">
        <p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
          YOUR BEST EVENT SITE !!
        </p>

        <nav
          aria-label="Top"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="border-gray-200 border-b">
            <div className="flex h-16 items-center">
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="text-gray-400 relative rounded-md bg-white p-2 lg:hidden"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <Bars3Icon aria-hidden="true" className="h-6 w-6" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <a href="/forms/form-layout">
                  <span className="sr-only">Your Company</span>
                  <img
                    alt=""
                    src="/images/logo/Event-removebg-preview.png"
                    className="h-50 w-auto"
                  />
                </a>
              </div>

              {/* Flyout menus */}
              <ul className="hidden items-center justify-center gap-6 md:flex">
                <li className="font-dm pt-1.5 text-sm font-medium text-slate-700">
                  <a href="/eventU">Find event</a>
                </li>
                <li className="font-dm pt-1.5 text-sm font-medium text-slate-700">
                  <a href="/Cart">My event</a>
                </li>
              </ul>

              {/* login */}
              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-1">
                  <a
                    href="/auth/signin"
                    className="shadow-xs cursor-pointer rounded-full bg-indigo-50 px-6 py-3 text-center text-sm font-semibold text-indigo-600 transition-all duration-500 hover:bg-indigo-100"
                  >
                    Login
                  </a>
                  <span aria-hidden="true" className="bg-gray-200 h-3 w-px" />
                  <a
                    href="/auth/signup"
                    className="shadow-xs cursor-pointer rounded-full bg-indigo-600 px-6 py-3 text-center text-sm font-semibold text-white transition-all duration-500 hover:bg-indigo-700"
                  >
                    Create account
                  </a>
                </div>
                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <a href="/Cart" className="group -m-2 flex items-center p-2">
                    <ShoppingBagIcon
                      aria-hidden="true"
                      className="text-gray-400 group-hover:text-gray-500 h-6 w-6 flex-shrink-0"
                    />
                    <span className="text-gray-700 group-hover:text-gray-800 ml-2 text-sm font-medium">
                      {cartCount}
                    </span>
                    <span className="sr-only">items in cart, view bag</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* SHOPPING CART */}
      <div className="bg-gray-100 h-screen py-8">
        <div className="container mx-auto px-4">
          <h1 className="mb-4 text-2xl font-semibold">Shopping Cart</h1>
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="md:w-3/4">
              <div className="mb-4 rounded-lg bg-white p-6 shadow-md">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="text-left font-semibold">Product</th>
                      <th className="text-left font-semibold">Price</th>
                      <th className="text-left font-semibold">Zone</th>
                      <th className="text-left font-semibold">Total</th>
                      {/* <th className="text-left font-semibold">Action</th> */}
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((c) => {
                      return (
                        <tr id={c.event._id}>
                          <td className="py-4">
                            <div className="flex items-center">
                             
                              <span className="font-semibold">
                                {c.event.name}
                              </span>
                            </div>
                          </td>
                          <td className="py-4">{c.price??0}</td>
                          <td className="py-4">{c.selectedZone.name}</td>
                          <td className="py-4">{c.price}</td>
                          {/* <td className="items-center py-4">
                            <Link href="/User_Update">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                />
                              </svg>
                            </Link>
                          </td> */}
                        </tr>
                      );
                    })}
                    {/* More product rows */}
                  </tbody>
                </table>
                <div className="mt-4">
                  <input
                    type="text"
                    placeholder="Enter promo code"
                    className="w-3/2 mb-5 rounded-md border px-3 py-1"
                  />
                  <button className="shadow-xs cursor-pointer rounded-full bg-indigo-50 px-7 py-2 text-center text-sm font-semibold text-indigo-600 transition-all duration-500 hover:bg-indigo-100">
                    Apply{" "}
                  </button>
                </div>
              </div>
              <a
                href="/forms/form-layout"
                className="mt-10 flex text-sm font-semibold text-indigo-600"
              >
                <svg
                  className="mr-2 w-4 fill-current text-indigo-600"
                  viewBox="0 0 448 512"
                >
                  <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                </svg>
                Continue Shopping
              </a>
            </div>

            <div className="md:w-1/4">
              <div className="rounded-lg bg-white p-6 shadow-md">
                <h2 className="mb-4 text-lg font-semibold">Summary</h2>
                <div className="mb-2 flex justify-between">
                  <span>Subtotal</span>
                  <span>{subtotal} TND</span>
                </div>
                <div className="mb-2 flex justify-between">
                  <span>Taxes</span>
                  <span>0 TND</span>
                </div>
                <div className="mb-2 flex justify-between">
                  <span>Shipping</span>
                  <span>0 TND</span>
                </div>
                <hr className="my-2" />
                <div className="mb-2 flex justify-between">
                  <span className="font-semibold">Total</span>
                  <span className="font-semibold">{subtotal} TND</span>
                </div>
                <a href="/Checkout" role="button">
                  <button className="shadow-xs mt-6 w-60 cursor-pointer rounded-full bg-indigo-50 px-6 py-4 text-center text-base font-semibold text-indigo-600 transition-all duration-500 hover:bg-indigo-100">
                    Checkout
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!--footer --> */}
      <footer className="bg-white text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left">
        <div className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between"></div>

        {/* <!-- Main container div: holds the entire content of the footer, including four sections (TW Elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins. --> */}
        <div className="mx-6 py-10 text-center md:text-left">
          <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* <!-- TW Elements section --> */}
            <div className="">
              <img
                src="/images/logo/Event-removebg-preview.png"
                alt="Description de l'image"
                className="h-80 w-full"
              />
            </div>
            {/* <!-- Useful links section --> */}
            <div className="">
              <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                Useful links
              </h6>

              <p className="mb-4">
                <Link
                  href="/orders"
                  className="text-neutral-600 dark:text-neutral-200"
                >
                  Orders
                </Link>
              </p>
              <p className="mb-4">
                <Link
                  href="/eventU"
                  className="text-neutral-600 dark:text-neutral-200"
                >
                  Find event
                </Link>
              </p>
              <p className="mb-4">
                <Link
                  href="/Contact"
                  className="text-neutral-600 dark:text-neutral-200"
                >
                  Contact us
                </Link>
              </p>
              <p>
                <Link
                  href="/help"
                  className="text-neutral-600 dark:text-neutral-200"
                >
                  Help
                </Link>
              </p>
            </div>
            {/* <!-- Contact section --> */}
            <div>
              <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                Contact
              </h6>
              <p className="mb-4 flex items-center justify-center md:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-3 h-5 w-5"
                >
                  <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                  <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                </svg>
                Tunisia, NY 10012, US
              </p>
              <p className="mb-4 flex items-center justify-center md:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-3 h-5 w-5"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
                Contact@event.tn
              </p>
              <p className="mb-4 flex items-center justify-center md:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-3 h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                    clipRule="evenodd"
                  />
                </svg>
                + 216 505050
              </p>
            </div>
          </div>

          {/* <!-- Social network icons container --> */}

          <div className="flex justify-center">
            <div className="mr-12 hidden lg:block">
              <span>Get connected with us on social networks:</span>
            </div>
            <a className="mr-6 text-neutral-600 dark:text-neutral-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
            <a className="mr-6 text-neutral-600 dark:text-neutral-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            <a className="mr-6 text-neutral-600 dark:text-neutral-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
                  fillRule="evenodd"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a className="mr-6 text-neutral-600 dark:text-neutral-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a className="mr-6 text-neutral-600 dark:text-neutral-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </a>
            <a className="text-neutral-600 dark:text-neutral-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>

        {/* <!--Copyright section--> */}
        <div className="bg-neutral-200 p-6 text-center dark:bg-neutral-700">
          <span>&copy; 2024 Event Management, Inc. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}
