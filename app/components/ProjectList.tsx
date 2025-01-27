import Image from "next/image";

export default function Example() {
  return (
    <>
      <section id="projects" className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
            Projects
          </h2>
          <p className="mt-8 text-pretty text-lg font-medium text-gray-400 sm:text-xl/8">
            Here&apos;s a selection of projects I&apos;ve worked on. My work
            spans the full stack including finetuning front-end architecture,
            building robust back-ends with RESTful API development, and
            deploying to a variety of services like AWS with Github and Docker.
          </p>
        </div>
      </section>
      <div className="py-16 sm:py-24">
        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
            <div className="flex p-px lg:col-span-4">
              <div className="overflow-hidden rounded-lg bg-gray-800 ring-1 ring-white/15 max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]">
                <Image
                  alt=""
                  width={1024}
                  height={853}
                  src="/Rightsize.png"
                  className="h-80 object-cover object-left"
                />
                <div className="p-10">
                  <h3 className="text-sm/4 font-semibold text-gray-400">
                    Javascript, Node.js, Express, Postgres
                  </h3>
                  <p className="mt-2 text-lg font-medium tracking-tight text-white">
                    Rightsize Meals
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-400">
                    Full-stack application that allows users to discover calorie
                    and food recommendations.
                  </p>
                  <div className="pt-4">
                    <a
                      href="https://rightsize-meals-1.onrender.com"
                      className="hover:underline hover:text-gray-300"
                      target="_blank"
                    >
                      Live{" "}
                    </a>
                    <a
                      href="http://github.com/kylezap/rightsize-meals"
                      className="hover:underline hover:text-gray-300"
                      target="_blank"
                    >
                      Github
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex p-px lg:col-span-2">
              <div className="overflow-hidden rounded-lg bg-gray-800 ring-1 ring-white/15 lg:rounded-tr-[2rem] hover:shadow-white/10">
                <Image
                  alt="book search"
                  width={1024}
                  height={853}
                  src="/Project4.png"
                  className="h-80 object-cover"
                />
                <div className="p-10">
                  <h3 className="text-sm/4 font-semibold text-gray-400">
                    React, Node.js, MongoDB
                  </h3>
                  <p className="mt-2 text-lg font-medium tracking-tight text-white">
                    Book Search
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-400">
                    An application that allows users to create accounts, search for
                    books, and save a list.
                  </p>
                  <div className="pt-4">
                    <a
                      href="https://book-search-engine-whc8.onrender.com/"
                      className="hover:underline hover:text-gray-300"
                      target="_blank"
                    >
                      Live{" "}
                    </a>
                    <a
                      href="http://https://github.com/kylezap/book-search-engine-mern-stack"
                      className="hover:underline hover:text-gray-300"
                      target="_blank"
                    >
                      Github
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex p-px lg:col-span-2">
              <div className="overflow-hidden rounded-lg bg-gray-800 ring-1 ring-white/15 lg:rounded-bl-[2rem]">
                <Image
                  alt=""
                  width={1024}
                  height={853}
                  src="/christmas.png"
                  className="h-80 object-cover"
                />
                <div className="p-10">
                  <h3 className="text-sm/4 font-semibold text-gray-400">
                    React, Java, Spring Boot, Tailwind
                  </h3>
                  <p className="mt-2 text-lg font-medium tracking-tight text-white">
                    All I Want for Christmas
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-400">
                    Dynamic wishlist item tracker helping you plan the holidays
                    better.
                  </p>
                  <div className="pt-4">
                    <a
                      href="https://christmas-wishlist1.netlify.app/"
                      className="hover:underline hover:text-gray-300"
                      target="_blank"
                    >
                      Live{" "}
                    </a>
                    <a
                      href="http://github.com/kylezap/christmas-wishlist"
                      className="hover:underline hover:text-gray-300"
                      target="_blank"
                    >
                      Github
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex p-px lg:col-span-4 hover:shadow-white/10">
              <div className="overflow-hidden rounded-lg bg-gray-800 ring-1 ring-white/15 max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]">
                <Image
                  alt="house compass"
                  width={1024}
                  height={853}
                  src="/house-compass.png"
                  className="h-80 object-cover object-left"
                />
                <div className="p-10">
                  <h3 className="text-sm/4 font-semibold text-gray-400">
                    React, Tailwind
                  </h3>
                  <p className="mt-2 text-lg font-medium tracking-tight text-white">
                    House Compass
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-400">
                    A real estate application that allows users to search and
                    find out what direction any home faces.
                  </p>
                  <div className="pt-4">
                    <a
                      href="http://house-compass.com"
                      className="hover:underline hover:text-gray-300"
                      target="_blank"
                    >
                      Live{" "}
                    </a>
                    <a
                      href="http://github.com/kylezap/house-compass"
                      className="hover:underline hover:text-gray-300"
                      target="_blank"
                    >
                      Github
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
