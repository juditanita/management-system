"use client";

import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";

import { GoPlus } from "react-icons/go";

const initialValue ={
    details:"",
    occasion:"",
    address:""
}

const AddEvent = () => {
const router = useRouter();

  const {
    register,
    handleSubmit, 
  

    formState: { errors, isSubmitSuccessful, isSubmitting },
    reset,
  } = useForm({defaultValues:initialValue});



  async function onSubmit(data) {
    
  
    try {
      const res = await fetch("http://localhost:3000/api/events", {
        method: "POST",
        header: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Error occured while fetching" + res.status);
      }
     reset();
      router.push("/admin")
    } catch (error) {
      throw new Error("Error occured while submiting the data");
    }
  }

  return (
    <form
      action=""
      className="bg-sky-100 shadow-md  p-4 w-1/2 mx-auto mb-20 mt-12 gap-6 flex flex-col"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex justify-between  flex-col lg:flex-row">
        <div className="flex flex-wrap  items-center  gap-2 p-4 pl-0 ">
          <label htmlFor="occasion" >Occation</label>
          <input
            id="occasion"
            type="text"
           placeholder=" e.g Gala"
            className="p-2 text-base  focus:outline-none  bg-white focus:bg-white"
            {...register("occasion", {
              required: "Occasion is required",
              minLength: {
                value: 3,
                message: "Please add at least 3 characters",
              },
            })}
          />

          {errors.occasion && <p className="text-[#2F2D82] text-sm ">{errors.occasion.message}</p>}
        </div>

        <div className="flex  items-center  gap-2 p-4 pl-0 flex-wrap">
          <label htmlFor="details">Details</label>
          <input
            id="details"
            type="text"
            placeholder="e.g. Bring bikini"
            {...register("details", {
              required: false,
              minLength: {
                value: 3,
                message: "Please add at least 3 characters",
              },
            })}
            className="p-2 text-base  focus:outline-none"
          />
            {errors.details && <p className="text-[#2F2D82] text-sm">{errors.details.message}</p>}
        </div>
      </div>
      <div className="flex flex-col gap-2 ">
        <label htmlFor="address">Meeting Point</label>
        <textarea
          {...register("address", {
            required: "Address is required",
            minLength: {
              value: 8,
              message: "Please add at least 8 characters",
            },
          })}
          id=""
          className="p-2 resize-none text-base  focus:outline-none"
          rows="4"
          placeholder="City, Street, ZipCode.."
        ></textarea>
          {errors.address && <p className="text-[#2F2D82] text-sm">{errors.address.message}</p>}
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
      <div className="grid place-content-evenly ">
        <button 
        type="submit"
        disabled={isSubmitting}
          className="bg-black flex disabled:bg-gray-400 hover:bg-neutral-50 hover:text-black  justify-center items-center flex-grow px-6 rounded py-3 hover:ring-4 ring-sky-200 hover:shadow-md  text-green-50  text-center"
          
        >
          Add <GoPlus size={25} />
        </button>
        {isSubmitSuccessful && <p>New event added</p>}
      </div>
    </form>
  );
};

export default AddEvent;
