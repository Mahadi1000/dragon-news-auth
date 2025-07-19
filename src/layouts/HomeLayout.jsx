import React from "react";
import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import RightAside from "../Components/Home/RightAside";
import LeftAside from "../Components/Home/LeftAside";

const HomeLayout = () => {
  return (
    <div className="w-full">
      <header>
        <Header />
      </header>
      <section className="flex justify-center items-center">
        <LatestNews />
      </section>
      <nav className="flex justify-center items-center">
        <Navbar />
      </nav>

      <main className="flex justify-center items-center">
        <div className="grid grid-cols-12 gap-5  my-3 w-11/12 mx-auto">
          {/* left side */}
          <aside className="col-span-3 sticky top-0 h-fit">
            <LeftAside />
          </aside>

          <section className="col-span-6">
            <Outlet />
          </section>
          {/* right side */}
          <aside className="col-span-3 sticky top-0 h-fit">
            <RightAside />
          </aside>
        </div>
      </main>
    </div>
  );
};

export default HomeLayout;
