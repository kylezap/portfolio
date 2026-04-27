import Project from "@components/Project";

export default function Example() {
  return (
    <>
      <section id="projects" className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
            Projects
          </h2>
        </div>
      </section>
      <div className="py-8 sm:py-12">
        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <div className="mt-10 sm:mt-16 space-y-8">
          <Project
              title="Frontstead"
              description="An AI enabled real estate portal and CRM for small, nimble brokerages."
              image="/Frontstead.png"
              link="https://demo.frontstead.com"
            />
            {/* <Project
              title="Rightsize Meals"
              description="Full-stack application that allows users to discover calorie and food recommendations."
              image="/Rightsize.png"
              link="https://rightsize-meals-1.onrender.com"
            />
            <Project
              title="Book Search"
              description="An application that allows users to create accounts, search for books, and save a list."
              image="/Project4.png"
              link="https://book-search-engine-whc8.onrender.com/"
            />
            <Project
              title="All I Want for Christmas"
              description="Dynamic wishlist item tracker helping you plan the holidays better."
              image="/christmas.png"
              link="https://christmas-wishlist1.netlify.app/"
            />
            <Project
              title="House Compass"
              description="A real estate application that allows users to search and find out what direction any home faces."
              image="/house-compass.png"
              link="http://house-compass.com"
            /> */}
          </div>
        </div>
      </div>
    </>
  );
}
