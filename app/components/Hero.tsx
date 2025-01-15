'use client'

import { Dialog, DialogPanel } from '@headlessui/react'
import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

export default function Hero() {
    return (
        <div className="relative isolate overflow-hidden ">
        
        <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-8 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
            <h1 className="max-w-2xl text-balance text-5xl font-semibold tracking-tight  sm:text-7xl lg:col-span-2 xl:col-auto">
              Software Engineer, <br className="hidden lg:inline" />Code Crafter <br className="hidden lg:inline" /> Marketing Master
            </h1>
            <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
              <p className="text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
                Hey! I&apos;m Kyle, a software engineer based in Charlotte. I love to build robust, high-quality apps and websites that are accessible, performant, and user-friendly. With a background in sales and marketing, I bring a unique perspective that helps me create solutions that are both technically sound and business-focused.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="/kyle-zapcic-resumé.pdf"
                  download
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Download Resumé
                </a>
                <a href="#contact" className="text-sm/6 font-semibold hover:text-indigo-600">
                  Contact Me <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <img
              alt=""
              src="https://images.unsplash.com/photo-1567532900872-f4e906cbf06a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1280&q=80"
              className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
            />
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t  sm:h-32" />
      </div>
    )
}