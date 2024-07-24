"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { CiEdit } from "react-icons/ci";

const EditForm = ({ id, occasion, details, address }) => {

  const route = useRouter();
  const [newData, setNewData] = useState({
    occasion,
    details,
    address,
  });

  async function handleSubmit(e){
e.preventDefault();
try{
const res = await fetch(`http://localhost:3000/api/events/${id}`,{
  method:"PUT",
  headers:{
    "Content-type":"application/json"
  },body:
    JSON.stringify(newData),
  
} )
// console.log(res);
if(!res.ok){
  throw new Error("Failed to update Event");
}
// route.refresh();
route.back();
}catch(error){

}

  }

  function handleChange(e) {
    const { name, value } = e.target;

    setNewData((prev) => {
      return { ...prev, [name]: value };
    });
  }
  return (
    <form
      action=""
      className="bg-indigo-100 shadow-md  p-4 w-1/2 mx-auto mb-20 mt-12 gap-6 flex flex-col"
      onSubmit={handleSubmit}
    >
      <div className="flex justify-between  flex-col lg:flex-row">
        <div className="flex flex-wrap  items-center  gap-2 p-4 pl-0 ">
          <label htmlFor="occasion">Occation</label>
          <input
            id="occasion"
            type="text"
            name="occasion"
            placeholder="e.g.day trip"
            className="p-2 text-base  focus:outline-none  bg-white focus:bg-white"
            value={newData.occasion}
            onChange={handleChange}
          />
        </div>

        <div className="flex  items-center  gap-2 p-4 pl-0 flex-wrap">
          <label htmlFor="details">Details</label>
          <input
            id="details"
            type="text"
            placeholder="e.g. all inclusive"
            name="details"
            className="p-2 text-base  focus:outline-none"
            value={newData.details}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex flex-col gap-2 ">
        <label htmlFor="address">Address</label>
        <textarea
          name="address"
          id=""
          className="p-2 resize-none text-base  focus:outline-none"
          rows="4"
          value={newData.address}
          onChange={handleChange}
          placeholder="City, Street, ZipCode.."
        ></textarea>
      </div>
      <div className="flex justify-between flex-wrap">
        {/* <div className="flex  items-center  gap-2 p-4 pl-0 w-full">
        <label htmlFor="destination">Date</label>
        <input
          id="destination"
          type="date"
          name="date"
          className="p-2 text-base  focus:outline-none"
          onChange={setFormData}
        />
      </div>
      <div className="flex  items-center  gap-2 p-4 pl-0 w-full">
        <label htmlFor="appt">Time</label>

        <input
          type="time"
          id="appt"
          name="time"
          min="09:00"
          max="24:00"
          className="p-2 text-base  focus:outline-none"
          onChange={setFormData}
        />
      </div> */}

        {/* <div className="join mt-4 ml-auto mr-2">
        <input
          className="join-item btn"
          type="radio"
          name="active"
          aria-label="Active"
          onChange={setFormData}
        />
        <input
          className="join-item btn"
          type="radio"
          name="options"
          aria-label="Inactive"
          onChange={setFormData}
        />
      </div> */}
      </div>
      <div className="grid place-content-evenly">
        <button className="bg-black flex hover:bg-neutral-50 hover:text-black  justify-center items-center flex-grow px-6 rounded py-3 hover:ring-4 ring-sky-200 hover:shadow-md  text-green-50  text-center">
          Edit <CiEdit size={25} />
        </button>
      </div>
    </form>
  );
};

export default EditForm;
