"use client";

import { BsCalendarEvent } from "react-icons/bs";


import AllData from "@/components/admin/AllData";
import Link from "next/link";

// import Loading from "@/components/buttons/Loading";

const AdminDashboard = () => {
  return (
    <section>
      <div className=" ml-4 mb-10 rounded-none mt-20 cursor-pointer inline-block  ">
        <Link href={"/admin/addEvent"}>
          <button className=" text-sky-700 collapse-title inline-flex items-center gap-2  text-xl font-medium hover:font-semibold drop-shadow-md">
            Add New Events <BsCalendarEvent />
          </button>
        </Link>
      </div>

      <div>
     
        <AllData />
      </div>
    </section>
  );
};

export default AdminDashboard;
