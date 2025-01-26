"use client";

import Navbar from "@components/Navbar";
import Hero from "@components/Hero";
import Footer from "@components/Footer";
import Tech from "@components/Tech";
import ProjectList from "@components/ProjectList";
import Education from "@components/Education";
import Experience from "@components/Experience";
import JobsList from "@components/JobsList";
import useIntersectionObserver from "./hooks/useIntersectionObserver";

export default function Home() {
  useIntersectionObserver(".fade-in-up");

  return (
    <>
      <Navbar />
      <div className="fade-in-up">
        <Hero />
      </div>
      <div className="fade-in-up">
        <Tech />
      </div>
      <div className="fade-in-up">
        <ProjectList />
      </div>
      <div className="fade-in-up">
        <Education />
      </div>
      <div className="fade-in-up">
        <Experience />
      </div>
      <div className="fade-in-up">
        <JobsList />
      </div>
      <Footer />
    </>
  );
}
