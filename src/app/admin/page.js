"use client";

import { BsCalendarEvent } from "react-icons/bs";

import Badge from "@/components/buttons/Badge";
import Delete from "@/components/buttons/Delete";
import Edit from "@/components/buttons/Edit";
import Form from "@/components/Form";
import { useState } from "react";

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
      <div className="overflow-x-auto  border mx-8">
        <table className="table">
          {/* head */}
          <thead className="pb-4">
            <tr className="bg-black text-white ">
              <th>Occation</th>
              <th>Destination</th>
              <th>Address</th>
              <th>Day</th>
              <th>Date</th>
              <th>Time</th>
              <th>Active</th>
              <th>Buttons</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>Day Trip</td>
              <td>Marbella</td>
              <td>Ocean Coffee night club</td>
              <td>Thurtday night</td>
              <td>12-07-2024</td>
              <td>12:12 pm</td>
              <td>Active</td>
              <th>
                <Delete />
                <Edit />
              </th>
            </tr>
            {/* row 2 */}
            <tr>
              <td>Clubbing</td>
              <td>Marbella</td>
              <td>Ocean Coffee night club</td>
              <td>Thurtday night</td>
              <td>12-07-2024</td>
              <td>12:12 pm</td>
              <td>
                <Badge text={"Inactive"} />
              </td>
            </tr>
            {/* row 3 */}
            <tr>
              <td>Day Trip</td>
              <td>Marbella</td>
              <td>Ocean Coffee night club</td>
              <td>Thurtday night</td>
              <td>12-07-2024</td>
              <td>12:12 pm</td>
              <td>
                <Badge text={"Active"} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AdminDashboard;
