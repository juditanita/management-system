"use client";
import Delete from "@/components/buttons/Delete";
import Edit from "@/components/buttons/Edit";
import { useEffect, useState } from "react";

const getAllEvents = async () => {
  try {
    const res = await fetch(
      "http://localhost:3000/api/events",

      {
        cache: "no-store",
      }
    );
    if (!res.ok) {
      throw new Error("Failed to load data");
    }

    const result = res.json();

    return result;
  } catch (error) {
    console.log(error);
  }
};

const AllData = () => {
  const [events, setEventsAll] = useState(null);

  useEffect(() => {
    getAllEvents().then((data) => {
      console.log(data.eventList);
      setEventsAll(data.eventList);
    });
  }, []);

  return (
    <div className="overflow-x-auto  border mx-8">
      <table className="table">
        {/* head */}
        <thead className="pb-4">
          <tr className="bg-black text-white ">
            <th>Occation</th>
            <th>Destination</th>
            <th>Address</th>

            <th>Buttons</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}

          {events &&
            events.map &&
            events?.map((ev) => {
              const { occasion, destination, address } = ev;
              return (
                <tr>
                  <td>{occasion}</td>
                  <td>{destination}</td>
                  <td>{address}</td>

                  <td>
                    <Delete />
                    <Edit />
                  </td>
                </tr>
              );
            })}

       

        
        </tbody>
      </table>
    </div>
  );
};

export default AllData;
