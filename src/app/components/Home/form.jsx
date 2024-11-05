import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { countries } from 'countries-list'; // Import country data
import Select from 'react-select';
const form = () => {
  const [formData, setFormData] = useState({
    fromCountry: null,
    fromCity: null,
    toCountry: null,
    toCity: null,
    depart: null,
    return: null,
    travelers: "",
    cabinClass: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  // Function to get city options based on selected country
  const getCityOptions = (selectedCountry) => {
    if (!selectedCountry) return [];

    const countryData = countries[selectedCountry.value];
    if (countryData && countryData.cities) {
      return countryData.cities.map((city) => ({
        value: city,
        label: city,
      }));
    }
    return [];
  };

  // Handle country selection changes
  const handleCountryChange = (selectedOption, field) => {
    setFormData({
      ...formData,
      [field]: selectedOption,
      // Reset city when country changes
      [field === 'fromCountry' ? 'fromCity' : 'toCity']: null,
    });
  };

  const handleCityChange = (selectedOption, field) => {
    setFormData({
      ...formData,
      [field]: selectedOption,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to API
    console.log(formData);
  };
  const countryOptions = Object.entries(countries).map(([code, country]) => ({
    value: code,
    label: country.name,
  }));

  return (
    <>
      <section className="container mx-auto py-6 sm:px-2">
        <form
          onSubmit={handleSubmit}
        >
          <div className="border border-black flex flex-wrap gap-0 sm:gap-2 justify-center align-middle items-center bg-white lg:px-6 my-3 rounded-xl xl:flex-nowrap w-[100%]">
          
          <div className="rounded-2xl p-3 w-72 lg:w-52">
              <Select
                placeholder="From Country"
                value={formData.fromCountry}
                onChange={(option) => handleCountryChange(option, 'fromCountry')}
                options={countryOptions}
              />
            </div>

            <div className="rounded-2xl p-3 w-72 lg:w-52">
              <Select
                placeholder="From City"
                value={formData.fromCity}
                onChange={(option) => handleCityChange(option, 'fromCity')}
                options={getCityOptions(formData.fromCountry)}
                isDisabled={!formData.fromCountry} // Disable until a country is chosen
              />
            </div> 

            {/* To Country and City */}
            <div className="rounded-2xl p-3 w-72 lg:w-52">
              <Select
                placeholder="To Country"
                value={formData.toCountry}
                onChange={(option) => handleCountryChange(option, 'toCountry')}
                options={countryOptions}
              />
            </div>

            <div className="rounded-2xl p-3 w-72 lg:w-52">
              <Select
                placeholder="To City"
                value={formData.toCity}
                onChange={(option) => handleCityChange(option, 'toCity')}
                options={getCityOptions(formData.toCountry)}
                isDisabled={!formData.toCountry} // Disable until a country is chosen
              />
            </div> 

            {/* Departure and Return Dates */}
            <div className="rounded-2xl p-3 w-72 lg:w-52"> 
              <DatePicker 
                id="depart" 
                name="depart" 
                selected={formData.depart} 
                onChange={(date) => setFormData({ ...formData, depart: date })} 
                className="w-full p-2 rounded-xl outline-none text-black border border-gray-400 block" 
                placeholderText="Depart Date"
                dateFormat="dd/MM/yyyy"
              /> 
            </div> 

            <div className="rounded-2xl p-3 w-72 lg:w-52"> 
              <DatePicker 
                id="return" 
                name="return" 
                selected={formData.return} 
                onChange={(date) => setFormData({ ...formData, return: date })} 
                className="w-full p-2 rounded-xl outline-none text-black border border-gray-400 block" 
                placeholderText="Return Date"
                dateFormat="dd/MM/yyyy"
              /> 
            </div> 

            {/* Number of Travelers and Cabin Class */}
            <div className="rounded-2xl p-3 w-72 lg:w-52">
              <input
                type="number"
                id="travelers"
                name="travelers"
                value={formData.travelers}
                onChange={handleChange}
                required
                className="w-full p-2 rounded-md outline-none text-black border border-gray-400"
                placeholder="Travelers"
              />
            </div>

            <div className="rounded-2xl p-3 w-72 lg:w-52">
              <select
                name="cabinClass"
                id="cabinClass"
                value={formData.cabinClass}
                onChange={handleChange}
                className="w-full p-2 rounded-xl outline-none text-black border border-gray-400 block"
                required
              >
                <option value="">Cabin Class</option>
                <option value="Economy">Economy</option>
                <option value="Business">Business</option>
                <option value="First Class">First Class</option>
              </select>
            </div>

            <div className="pb-2 sm:pb-0">
              <input
                type="submit"
                value="Send Query"
                className="w-full p-2 rounded-2xl outline-none bg-blue-600 hover:text-blue-500 duration-1000 hover:bg-transparent text-white border border-gray-400 cursor-pointer"
              />
            </div>
          
          </div>
        </form>
      </section>
    </>
  );
};

export default form;
