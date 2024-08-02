/* eslint-disable @next/next/no-img-element */
'use client';
import Link from "next/link";
import Image from "next/image";
import { useState } from 'react';
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  
} from '@headlessui/react';
import { TECarousel, TECarouselItem } from "tw-elements-react";
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline';

const products = [
  {
    id: 1,
    href: 'javascript:;',
    imageSrc: 'https://www.pcma.org/wp-content/uploads/2020/12/Covening-Asia-Pacific-Sydney-1.jpg',
    imageAlt: 'cream image',
    name: 'event 1',
    price: '$74.99',
  },
  {
    id: 2,
    href: 'javascript:;',
    imageSrc: 'https://www.vidyard.com/media/video-for-event-marketing.jpg',
    imageAlt: 'cream image',
    name: 'Event 2',
    price: '$25',
  },
  {
    id: 3,
    href: 'javascript:;',
    imageSrc: 'https://www.europeanbusinessreview.com/wp-content/uploads/2021/05/iStock-1170078981.jpg',
    imageAlt: 'serum bottle image',
    name: 'Event 3',
    price: '$199.99',
    discount: '20% Off',
  },
];

export default function Example() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Dialog open={open} onClose={() => setOpen(false)} className="relative z-40 lg:hidden">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
        />
        <div className="fixed inset-0 z-40 flex">
          <DialogPanel
            transition
            className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:-translate-x-full"
          >
            <div className="flex px-4 pb-2 pt-5">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>

            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              <a href="#" className="-m-2 block p-2 font-medium text-gray-900">Sign in</a>
              <a href="#" className="-m-2 block p-2 font-medium text-gray-900">Create account</a>
            </div>

            <div className="border-t border-gray-200 px-4 py-6">
              <a href="#" className="-m-2 flex items-center p-2">
                <img
                  alt=""
                  src="https://tailwindui.com/img/flags/flag-canada.svg"
                  className="block h-auto w-5 flex-shrink-0"
                />
                <span className="ml-3 block text-base font-medium text-gray-900">CAD</span>
                <span className="sr-only">, change currency</span>
              </a>
            </div>
          </DialogPanel>
        </div>
      </Dialog>

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
            <li className="pt-1.5 font-dm text-sm font-medium text-slate-700">
                <a href="/eventU">Find event</a>
            </li>
            <li className="pt-1.5 font-dm text-sm font-medium text-slate-700">
                <a href="/Cart">My event</a>
            </li>
            
        </ul>
  {/* login */}
  <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-1">
                <a
  href="/auth/signin" 
  className="bg-indigo-50 text-indigo-600 rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 py-3 px-6 text-sm hover:bg-indigo-100">
  Login
</a>
<span aria-hidden="true" className="h-3 w-px bg-gray-200" />
<a
  href="/auth/signup"
  className="bg-indigo-600 text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 py-3 px-6 text-sm hover:bg-indigo-700">
  Create account
</a>

                </div>


                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <a href="/Cart" className="group -m-2 flex items-center p-2">
                    <ShoppingBagIcon
                      aria-hidden="true"
                      className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                    <span className="sr-only">items in cart, view bag</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
  
      <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full flex-col justify-start items-start gap-8 inline-flex">
          <div className="w-full flex-col justify-start items-start lg:gap-14 gap-8 flex">
            <div className="w-full text-center text-black text-3xl font-bold leading-normal">Order Confirmation</div>
            <div className="flex-col justify-start items-start gap-3 flex">
              <h4 className="text-black text-xl font-medium leading-8">Hello, John Smith</h4>
              <h5 className="text-gray-500 text-lg font-normal leading-8">Thank you for shopping</h5>
              <h5 className="text-gray-500 text-lg font-normal leading-8">Your order has been confirmed and will be shipped within two days.</h5>
            </div>
          </div>
          <div className="w-full justify-center items-start">
            <div className="w-full hidden md:grid grid-cols-2 p-4 bg-gray-50">
              <span className="text-gray-500 text-base font-normal leading-relaxed">Product</span>
              <p className="flex items-center justify-between">
                <span className="w-full max-w-[200px] text-center px-8 text-gray-500 text-base font-normal leading-relaxed">Size</span>
                <span className="w-full max-w-[260px] text-center px-8 text-gray-500 text-base font-normal leading-relaxed">Quantity</span>
                <span className="w-full max-w-[200px] text-center px-8 text-gray-500 text-base font-normal leading-relaxed">Price</span>
                <span className="w-full max-w-[200px] text-center"></span>
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 min-[550px]:gap-6 py-3 border-b border-gray-200 max-sm:max-w-xl max-xl:mx-auto">
              <div className="flex items-center flex-col min-[550px]:flex-row gap-3 min-[550px]:gap-4 w-full max-sm:justify-center max-sm:max-w-xl max-xl:mx-auto">
                <div className="w-[120px] h-[120px] img-box bg-gray-50 rounded-xl justify-center items-center inline-flex">
                  <Image src="/images/cards/1713334568.png" alt="Denim Shirt image" width={75} height={75} />
                </div>
                <div className="pro-data w-full max-w-sm flex-col justify-start items-start gap-2 inline-flex">
                  <h4 className="w-full text-black text-lg font-medium leading-8 max-[550px]:text-center">Top for Women</h4>
                  <h5 className="w-full text-gray-500 text-base font-normal leading-relaxed min-[550px]:my-0 my-2 max-[550px]:text-center">Product ID: 4553458120</h5>
                </div>
              </div>
              <div className="w-full flex items-center justify-between flex-col min-[550px]:flex-row w-full max-sm:max-w-xl max-xl:mx-auto gap-2">
                <h5 className="w-full max-w-[142px] text-center text-black text-lg font-medium leading-relaxed">L</h5>
                <button className="max-w-[160px] flex items-center w-full mx-0 justify-center gap-5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M18 12H6" stroke="#111827" strokeWidth="1.6" strokeLinecap="round"></path>
                  </svg>
                  <input type="text" className="w-12 h-12 focus:outline-none text-gray-900 placeholder-gray-900 text-lg font-medium leading-relaxed px-2.5 bg-white rounded-full border border-gray-200 justify-center items-center flex" placeholder="02" />
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 6V18M18 12H6" stroke="#111827" strokeWidth="1.6" strokeLinecap="round"></path>
                  </svg>
                </button>
                <h5 className="max-w-[142px] w-full text-center text-black text-lg font-medium leading-relaxed pl-5">$50.00</h5>
                <button className="group max-w-[176px] text-center w-full flex items-center justify-center transition-all duration-700 ease-in-out">
                  <svg className="text-gray-500 group-hover:text-gray-900 transition-all duration-700 ease-in-out mx-auto" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <g filter="url(#filter0_d_484_1442)">
                      <path d="M13.5 13.5L26.5 26.5M26.5 13.5L13.5 26.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"></path>
                    </g>
                    <defs>
                      <filter id="filter0_d_484_1442" x="-2" y="-1" width="44" height="44" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                        <feOffset dy="1"></feOffset>
                        <feGaussianBlur stdDeviation="1"></feGaussianBlur>
                        <feComposite in2="hardAlpha" operator="out"></feComposite>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0"></feColorMatrix>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_484_1442"></feBlend>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_484_1442" result="shape"></feBlend>
                      </filter>
                    </defs>
                  </svg>
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 min-[550px]:gap-6 py-3 border-b border-gray-200 max-sm:max-w-xl max-xl:mx-auto">
              <div className="flex items-center flex-col min-[550px]:flex-row gap-3 min-[550px]:gap-4 w-full max-sm:justify-center max-sm:max-w-xl max-xl:mx-auto">
                <div className="w-[120px] h-[120px] img-box bg-gray-50 rounded-xl justify-center items-center inline-flex">
                  <Image src="/images/cards/1713334568.png" alt="Blue T-shirt for Men image" width={75} height={75} />
                </div>
                <div className="pro-data w-full max-w-sm flex-col justify-start items-start gap-2 inline-flex">
                  <h4 className="w-full text-black text-lg font-medium leading-8 max-[550px]:text-center">Blue T-shirt for Men</h4>
                  <h5 className="w-full text-gray-500 text-base font-normal leading-relaxed min-[550px]:my-0 my-2 max-[550px]:text-center">Product ID: 8953458747</h5>
                </div>
              </div>
              <div className="flex items-center justify-between flex-col min-[550px]:flex-row w-full max-sm:max-w-xl max-xl:mx-auto gap-2">
                <h5 className="w-full max-w-[142px] text-center text-black text-lg font-medium leading-relaxed">M</h5>
                <button className="max-w-[160px] flex items-center w-full mx-0 justify-center gap-5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M18 12H6" stroke="#111827" strokeWidth="1.6" strokeLinecap="round"></path>
                  </svg>
                  <input type="text" className="w-12 h-12 focus:outline-none text-gray-900 placeholder-gray-900 text-lg font-medium leading-relaxed px-2.5 bg-white rounded-full border border-gray-200 justify-center items-center flex" placeholder="02" />
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 6V18M18 12H6" stroke="#111827" strokeWidth="1.6" strokeLinecap="round"></path>
                  </svg>
                </button>
                <h5 className="max-w-[142px] w-full text-center text-black text-lg font-medium leading-relaxed pl-5">$50.00</h5>
                <button className="group max-w-[176px] text-center w-full flex items-center justify-center transition-all duration-700 ease-in-out">
                  <svg className="text-gray-500 group-hover:text-gray-900 transition-all duration-700 ease-in-out mx-auto" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <g filter="url(#filter0_d_484_1442)">
                      <path d="M13.5 13.5L26.5 26.5M26.5 13.5L13.5 26.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"></path>
                    </g>
                    <defs>
                      <filter id="filter0_d_484_1442" x="-2" y="-1" width="44" height="44" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                        <feOffset dy="1"></feOffset>
                        <feGaussianBlur stdDeviation="1"></feGaussianBlur>
                        <feComposite in2="hardAlpha" operator="out"></feComposite>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0"></feColorMatrix>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_484_1442"></feBlend>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_484_1442" result="shape"></feBlend>
                      </filter>
                    </defs>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="w-full p-5 rounded-xl border border-gray-200 flex-col justify-start items-center gap-4 flex">
            <div className="w-full justify-between items-center gap-6 inline-flex">
              <h5 className="text-gray-600 text-lg font-normal leading-8">Subtotal:</h5>
              <h5 className="text-right text-gray-900 text-lg font-semibold leading-8">$100.00</h5>
            </div>
            <div className="w-full justify-between items-center gap-6 inline-flex">
              <h5 className="text-gray-600 text-lg font-normal leading-8">Delivery:</h5>
              <h5 className="text-right text-gray-900 text-lg font-semibold leading-8">Free</h5>
            </div>
            <div className="w-full justify-between items-center gap-6 inline-flex">
              <h5 className="text-gray-600 text-lg font-normal leading-8">Total:</h5>
              <h5 className="text-right text-gray-900 text-lg font-semibold leading-8">₹100.00</h5>
            </div>
          </div>
          <Link href="/eventU" className="text-primary">
                    Back to Event list 
                  </Link>
        </div>
      </div>
    </section>
  {/* <!--footer --> */}
  <footer
     className="bg-white text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left">
      <div
        className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between">
        
      </div>

      {/* <!-- Main container div: holds the entire content of the footer, including four sections (TW Elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins. --> */}
      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* <!-- TW Elements section --> */}
          <div className="">
  
  <img
    src="/images/logo/Event-removebg-preview.png"
    alt="Description de l'image"
    className="w-full h-80"
  />
</div>
          {/* <!-- Useful links section --> */}
          <div className="">
            <h6
              className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Useful links
            </h6>
           
            <p className="mb-4">
    <Link href="/orders" className="text-neutral-600 dark:text-neutral-200">
      Orders
    </Link>
  </p>
  <p className="mb-4">
    <Link href="/eventU" className="text-neutral-600 dark:text-neutral-200">
      Find event
    </Link>
  </p>
  <p className="mb-4">
    <Link href="/Contact" className="text-neutral-600 dark:text-neutral-200">
      Contact us
    </Link>
  </p>
  <p>
    <Link href="/help" className="text-neutral-600 dark:text-neutral-200">
      Help
    </Link>
  </p>
          </div>
          {/* <!-- Contact section --> */}
          <div>
            <h6
              className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Contact
            </h6>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-3 h-5 w-5">
                <path
                  d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                <path
                  d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
              </svg>
              Tunisia, NY 10012, US
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-3 h-5 w-5">
                <path
                  d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path
                  d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
              Contact@event.tn
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-3 h-5 w-5">
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                  clipRule="evenodd" />
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
              viewBox="0 0 24 24">
              <path
                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
          </a>
          <a className="mr-6 text-neutral-600 dark:text-neutral-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24">
              <path
                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
          </a>
          <a className="mr-6 text-neutral-600 dark:text-neutral-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24">
              <path
                d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
                fillRule="evenodd"
                clipRule="evenodd" />
            </svg>
          </a>
          <a className="mr-6 text-neutral-600 dark:text-neutral-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24">
              <path
                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
          <a className="mr-6 text-neutral-600 dark:text-neutral-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24">
              <path
                d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
            </svg>
          </a>
          <a className="text-neutral-600 dark:text-neutral-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24">
              <path
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
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