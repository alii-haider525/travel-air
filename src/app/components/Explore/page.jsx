import React from "react";

const ExplorePage = () => {
  return (
    <>
      <div className="container mx-auto py-16 px-4" id="AboutUs">
        <div className="flex justify-center mb-6">
          <img className="object-cover h-64 w-full rounded-lg shadow-md" src="/pexel.png" alt="Travel Experience" />
        </div>

        <div className="bg-blue-700 from-blue-500 to-blue-300 rounded-lg shadow-lg p-8 text-center mb-8">
          <h1 className="text-5xl font-bold text-white mb-4">Explore Travel Air International</h1>
          <div className="flex justify-center mb-6">
            <img src="/image 6.png" alt="Travel Air Logo" className="h-32 w-auto object-contain rounded-full border-4 border-white shadow-lg" />
          </div>
          <p className="text-lg text-white max-w-3xl mx-auto mb-6 leading-relaxed">
            TRAVELAIR INTERNATIONAL is one of the leading IATA accredited travel agencies of Islamabad (Pakistan), well established since 1974, offering airline reservations, ticketing of major international and domestic airlines, and a variety of other travel-related services.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-4xl font-semibold text-blue-800 mb-4">Welcome to Travel Air International</h2>
          
          <div className="mb-6">
            <h3 className="font-semibold text-xl text-blue-700">Vision:</h3>
            <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto mb-6 text-center">
              To see Travel Air International become a standard and aspire to be seen as the benchmark against which others are judged.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold text-xl text-blue-700">Mission & Objective:</h3>
            <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto text-center">
              Endeavor to expand the tourism potential and strive to excel in providing optimum value travel services to the travelers. We aim to enhance tourism-related services backed by efficient planning while seeking to enlarge their scope and dimension.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExplorePage;