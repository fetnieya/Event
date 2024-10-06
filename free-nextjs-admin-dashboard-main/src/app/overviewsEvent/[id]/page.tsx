"use client"
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Event } from "@/types/product";
import {
  Dialog,
  RadioGroup,
  Radio,
} from '@headlessui/react';
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline';
import axios from 'axios';

const product = {
  
  basePrice: 192,
  href: '#',
  images: [
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
      alt: 'Two each of gray, white, and black shirts laying flat.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
      alt: 'Model wearing plain black basic tee.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
      alt: 'Model wearing plain gray basic tee.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
      alt: 'Model wearing plain white basic tee.',
    },
  ],
  zones: [
    { name: 'A', inStock: true, priceModifier: 0 },
    { name: 'B', inStock: true, priceModifier: 20 },
    { name: 'C', inStock: true, priceModifier: 40 },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options...',
  highlights: [
    'Hand cut and sewn locally',
    'Dyed with our proprietary colors',
    'Pre-washed & pre-shrunk',
    'Ultra-soft 100% cotton',
  ],
  details: 'The 6-Pack includes two black, two white, and two heather gray Basic Tees...',
};

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Example({params}) {
  const router = useRouter();
 
  const [selectedZone, setSelectedZone] = useState(product.zones[0]);
  const [event,setEvent]=useState({})
  const getData=async()=>{
    const event= (await axios.get(`http://localhost:8080/eventList/${params.id}`)).data.data
    console.log('====================================');
    console.log(event);
    setEvent(event)
    console.log('====================================');
  }
 useEffect(()=>{
  getData()
  console.log('====================================');
  console.log({params});
  console.log('====================================');
 },[])
  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Dialog open={false} onClose={() => {}} className="relative z-40 lg:hidden">
        {/* Dialog components */}
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
                onClick={() => {}}
                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
              >
                <Bars3Icon aria-hidden="true" className="h-6 w-6" />
              </button>

              <div className="ml-4 flex lg:ml-0">
                <a href="/forms/form-layout">
                  <img
                    alt="Your Company"
                    src="/images/logo/Event-removebg-preview.png"
                    className="h-50 w-auto"
                  />
                </a>
              </div>

              <ul className="hidden items-center justify-center gap-6 md:flex">
                <li className="pt-1.5 font-dm text-sm font-medium text-slate-700">
                  <a href="/eventU">Find event</a>
                </li>
                <li className="pt-1.5 font-dm text-sm font-medium text-slate-700">
                  <a href="/Cart">My event</a>
                </li>
              </ul>

              <div className="ml-auto flex items-center">
                <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                  <MagnifyingGlassIcon aria-hidden="true" className="h-6 w-6" />
                </a>
                <a href="/Cart" className="group -m-2 flex items-center p-2 ml-4">
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
        </nav>
      </header>

      {/* Body */}
      <div className="bg-white">
        <div className="pt-6">
          {/* Image gallery */}
          <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:max-w-7xl lg:grid lg:grid-cols-3 lg:gap-x-8 lg:px-8">
            {/* Images */}
          </div>

          {/* Product info */}
          <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:max-w-7xl lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{event.name}</h1>
            </div>



            
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h6 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{event.description}</h6>
            </div>

            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl tracking-tight text-gray-900">
                ${event.price??0 + selectedZone.priceModifier}
              </p>

              <form className="mt-10" onSubmit={(e)=>{
                e.preventDefault()
                console.log('====================================');
                console.log({selectedZone,event,price:selectedZone.priceModifier+event.price});
                console.log('====================================');
                if (localStorage.getItem("cart")) {
                  let cart= localStorage.getItem("cart")
                  console.log('====================================');
                  console.log(cart);
                  
                  cart=cart+'/'+JSON.stringify({selectedZone,event,price:selectedZone.priceModifier+event.price})
                  console.log('====================================');
                  console.log(JSON.stringify({cart}));
                  console.log('====================================');
                  localStorage.setItem("cart",cart)
                }else{
                  localStorage.setItem("cart",JSON.stringify({selectedZone,event,price:selectedZone.priceModifier+event.price}))
                }
              }}>
                <div className="mt-10">
                  <h3 className="text-sm font-medium text-gray-900">Zone</h3>
                  <fieldset className="mt-4">
                    <RadioGroup
                      value={selectedZone}
                      onChange={setSelectedZone}
                      className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4"
                    >
                      {product.zones.map((zone) => (
                        <Radio
                          key={zone.name}
                          value={zone}
                          disabled={!zone.inStock}
                          className={classNames(
                            zone.inStock
                              ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
                              : 'cursor-not-allowed bg-gray-50 text-gray-200',
                            'group relative flex items-center justify-center rounded-md border px-4 py-3 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:flex-1 sm:py-6',
                          )}
                        >
                          <span>{zone.name}</span>
                          {zone.inStock && (
                            <span
                              aria-hidden="true"
                              className="pointer-events-none absolute -inset-px rounded-md border-2 border-transparent group-focus:border group-checked:border-indigo-500"
                            />
                          )}
                        </Radio>
                      ))}
                    </RadioGroup>
                  </fieldset>
                </div>

                <button
                  type="submit"
                  className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Add to bag
                </button>
              </form>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              {/* Description and details */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
