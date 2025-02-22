"use client";
import Delete from "@/components/buttons/Delete";
import Edit from "@/components/buttons/Edit";
import { getAllEvents } from "@/fetchingFunctions";
import { useEffect, useState } from "react";



const AllData = () => {
  const [events, setEventsAll] = useState(null);

  useEffect(() => {
    getAllEvents().then((data) => {
      // console.log(data.eventList);
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
            <th>Details</th>
            <th>Meeting Point</th>

            <th>Action Buttons</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}

          {events &&
            events.map &&
            events?.map((ev) => {
              const { occasion, details, address } = ev;
              return (
                <tr key={ev._id}>
                  <td>{occasion}</td>
                  <td>{details}</td>
                  <td>{address}</td>

                  <td>
                    <Delete  id={ev._id}/>
                    <Edit id={ev._id}
                     />
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
