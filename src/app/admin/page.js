"use client";

import { BsCalendarEvent } from "react-icons/bs";

import Form from "@/components/Form";
import { useState } from "react";
import AllData from "@/components/admin/AllData";

// import Loading from "@/components/buttons/Loading";

const AdminDashboard = () => {
  const [isAdd, setIsAdd] = useState(false);

  return (
    <section>
      <div
        className="  mb-10 rounded-none mt-20 cursor-pointer "
        onClick={() => setIsAdd((prev) => !prev)}
      >
        <p className=" text-sky-700 collapse-title inline-flex items-center gap-2  text-xl font-medium hover:font-semibold drop-shadow-md px-12">
          Add New Events <BsCalendarEvent />
        </p>
      </div>
      {isAdd && <Form />}
      <div>   <AllData /> </div>
    
    </section>
  );
};

export default AdminDashboard;
