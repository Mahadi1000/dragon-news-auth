import React, { Suspense } from "react";
import Categories from "../Categories";

const LeftAside = () => {
  return (
    <div>
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-screen">
            <div className="spinner-border animate-spin inline-block w-8 h-8 border-r-4 border-b-4 border-l-4 border-t-4 border-primary rounded-full"></div>
          </div>
        }
      >
        <Categories />
      </Suspense>
    </div>
  );
};

export default LeftAside;
