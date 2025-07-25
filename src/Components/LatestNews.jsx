import React from "react";
import Marquee from "react-fast-marquee";
const LatestNews = () => {
  return (
    <div className="flex items-center gap-5 bg-base-200 p-3 w-11/12  my-3">
      <p className="text-base-100 bg-secondary px-3 py-2">Latest News</p>

      <Marquee className="flex items-center gap-5" pauseOnHover={true} speed={50}>
        <p className="font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
          accusantium?
        </p>
        <p className="font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
          accusantium?
        </p>
        <p className="font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
          accusantium?
        </p>
       
      </Marquee>
    </div>
  );
};

export default LatestNews;
