'use client'

import Image from 'next/image'

export default function Hero() {
    return (
        <div className="relative isolate overflow-hidden ">
        
        <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-8 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
            <h1 className="max-w-2xl text-balance text-5xl font-semibold tracking-tight  sm:text-7xl lg:col-span-2 xl:col-auto">
              Bridging Software and Real Estate
            </h1>
            <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
              <p className="text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
                I&apos;m Kyle, a software developer and real estate broker. I love to build robust, high-quality apps and websites that are accessible, performant, and user-friendly. With a background in sales and marketing, I bring a unique perspective that helps me create solutions that are both technically sound and business-focused.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="/kyle-zapcic-resumé.pdf"
                  download
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Download Resumé <span aria-hidden="true">→</span>
                </a>
                {/* <a
                  href="https://github.com/kylezap"
                  
                  className="rounded-md bg-white text-black px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-slate-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  target = "_blank"
                >
                  Github <span aria-hidden="true">→</span>
                </a>
                <a
                  href="https://linkedin.com/in/kylezapcic/"
                  target = "_blank"
                  className="rounded-md bg-blue-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  LinkedIn <span aria-hidden="true">→</span>
                </a>
                <a href="#contact" className="rounded-md px-3.5 py-2.5 text-sm font-semibold bg-amber-500 shadow-sm hover:bg-amber-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  Email Me <span aria-hidden="true">→</span>
                </a> */}
              </div>
            </div>
            <Image
              alt="profile"
              src="/profile.jpg"
              width={1024}
              height={853}
              className="mt-20 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-24 lg:mt-10 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-48"
            />
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t  sm:h-32" />
      </div>
    )
}