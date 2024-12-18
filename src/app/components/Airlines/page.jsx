import React from "react";

const Airlines = [
  {
    id: 1,
    img: "/Airblue-removebg-preview.png",
    title: "Air Blue"
  },
  {
    id: 2,
    img: "/airsial-removebg-preview.png ",
  },
  {
    id: 3,
    img: "/British-removebg-preview.png ",
  },
  {
    id: 4,
    img: "/eithad-removebg-preview.png",
  },
  {
    id: 5,
    img: "/gulf-removebg-preview.png ",
  },
  {
    id: 6,
    img: "/KLM_logo-removebg-preview.png",
  },
  {
    id: 7,
    img: "/Malasyia-removebg-preview.png",
  },
  {
    id: 8,
    img: "/Oman-removebg-preview.png ",
  },
  {
    id: 9,
    img: "/PIA-removebg-preview.png",
  },
  {
    id: 10,
    img: "/qatar-removebg-preview.png ",
  },
  {
    id: 11,
    img: "/serene-removebg-preview.png",
  },
  {
    id: 12,
    img: "/sirilankkan-removebg-preview.png",
  },
  {
    id: 13,
    img: "/suadia-removebg-preview.png",
  },
  {
    id: 14,
    img: "/swiss-removebg-preview.png",
  },
  {
    id: 15,
    img: "/Thai_Airways.png ",
  },
  {
    id: 16,
    img: "/turkish-removebg-preview.png",
  },
  {
    id: 17,
    img: "/jinnah.png"
  },
  {
    id: 18,
    img: "/emirates.png"
  }
];

const page = () => {
  return (
    <>
      <div className=" mt-28 md:mx-16 mx-6" id="AirLines">
        <h2 className=" font-semibold text-xl text-center">
          Major Sellable Airlines
        </h2>
        <div className="flex flex-wrap gap-1 justify-center items-center md:justify-between lg:p-4">
          {Airlines.map((item) => (
            <div key={item.id} className=" shadow-lg p-1 w-[100px] md:w-[200px] h-[100px] flex justify-center  mt-6 hover:scale-105 cursor-pointer bg-white rounded-md">
              <img
                className="w-[100px] object-contain"
                src={item.img}
                alt="Air-lines"
                title={item.title}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default page;
