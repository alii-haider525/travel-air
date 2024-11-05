import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import airportData from "./data.json";

const Form = () => {
  const [formData, setFormData] = useState({
    fromLocation: null,
    toLocation: null,
    depart: null,
    return: null,
    travelers: "",
    cabinClass: "",
  });

  const cabinClassOptions = [
    { value: "Economy", label: "Economy" },
    { value: "Business", label: "Business" },
    { value: "First Class", label: "First Class" },
  ];

  const getLocationOptions = () => {
    return airportData.map((airport) => ({
      value: `${airport.city}, ${airport.country}`,
      label: `${airport.city}, ${airport.country}`,
    }));
  };

  const handleLocationChange = (selectedOption, field) => {
    if (field === "toLocation" && formData.fromLocation && formData.fromLocation.value === selectedOption.value) {
      toast.error("The 'From' and 'To' locations cannot be the same.");
      return;
    }

    if (field === "fromLocation" && formData.toLocation && formData.toLocation.value === selectedOption.value) {
      toast.error("The 'From' and 'To' locations cannot be the same.");
      return;
    }

    setFormData({
      ...formData,
      [field]: selectedOption,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.fromLocation?.value === formData.toLocation?.value) {
      toast.error("The 'From' and 'To' locations cannot be the same.");
    } else {
      toast.success("Form submitted successfully!");
      console.log(formData);
    }
  };

  const locationOptions = getLocationOptions();

  return (
    <section className="container mx-auto py-6 sm:px-2">
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <div className="border border-black flex flex-wrap gap-0 sm:gap-2 justify-center align-middle items-center bg-white lg:px-6 my-3 rounded-xl xl:flex-nowrap w-[100%]">
          
          <div className="rounded-2xl p-3 w-72 lg:w-52">
            <Select
              placeholder="From"
              value={formData.fromLocation}
              onChange={(option) => handleLocationChange(option, "fromLocation")}
              options={locationOptions}
              styles={{
                option: (provided, state) => ({
                  ...provided,
                  color: state.isSelected ? 'white' : 'black',
                  backgroundColor: state.isSelected ? '#1e3a8a' : 'white',
                }),
                singleValue: (provided) => ({
                  ...provided,
                  color: 'black',
                }),
              }}
            />
          </div>

          <div className="rounded-2xl p-3 w-72 lg:w-52">
            <Select
              placeholder="To"
              value={formData.toLocation}
              onChange={(option) => handleLocationChange(option, "toLocation")}
              options={locationOptions}
              styles={{
                option: (provided, state) => ({
                  ...provided,
                  color: state.isSelected ? 'white' : 'black',
                  backgroundColor: state.isSelected ? '#1e3a8a' : 'white',
                }),
                singleValue: (provided) => ({
                  ...provided,
                  color: 'black',
                }),
              }}
            />
          </div>

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

          <div className="rounded-2xl p-3 w-72 lg:w-52">
            <input
              type="number"
              id="travelers"
              name="travelers"
              value={formData.travelers}
              onChange={(e) => setFormData({ ...formData, travelers: e.target.value })}
              required
              className="w-full p-2 rounded-md outline-none text-black border border-gray-400"
              placeholder="Travelers"
            />
          </div>

          <div className="rounded-2xl p-3 w-72 lg:w-52">
          <Select
            placeholder="Cabin Class"
            name="cabinClass"
            id="cabinClass"
            value={cabinClassOptions.find(option => option.value === formData.cabinClass)}
            onChange={(selectedOption) => setFormData({ ...formData, cabinClass: selectedOption.value })}
            options={cabinClassOptions}
            styles={{
              option: (provided, state) => ({
                ...provided,
                color: state.isSelected ? 'white' : 'black',
                backgroundColor: state.isSelected ? '#1e3a8a' : 'white',
              }),
              singleValue: (provided) => ({
                ...provided,
                color: 'black',
              }),
            }}
            className="w-full p-2 rounded-xl outline-none"
            required
          />
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
  );
};

export default Form;
