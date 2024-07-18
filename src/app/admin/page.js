// import Alert from "@/components/alert/Alert";
// import Error from "@/components/alert/Error";
import Badge from "@/components/buttons/Badge";
import Delete from "@/components/buttons/Delete";
import Edit from "@/components/buttons/Edit";
// import Loading from "@/components/buttons/Loading";

const AdminDashboard = () => {
  return (
    <section>
      {/* <Alert/>
<Error/>
<Loading/> */}

      <details className="collapse bg-slate-50 mb-10 rounded-none mt-20">
        <summary className="collapse-title text-xl font-medium hover:font-semibold drop-shadow-md px-12">
          Add New
        </summary>

        <form
          action=""
          className="bg-pink-100 shadow-md collapse-content p-4 w-1/2 mx-auto mb-20 mt-12 gap-6 flex flex-col"
        >
          <div className="flex justify-between ">
            <div className="flex  items-center form-group gap-2 p-4 pl-0 w-full">
              <label htmlFor="occasion">Occation</label>
              <input
                id="occasion"
                type="text"
                name="occasion"
                placeholder="e.g.day trip"
                className="p-2 text-base text-orange-700 focus:outline-none"
              />
            </div>

            <div className="flex  items-center form-group gap-2 p-4 w-full">
              <label htmlFor="destination">Destination</label>
              <input
                id="destination"
                type="text"
                name="destination"
                className="p-2 text-base text-orange-700 focus:outline-none"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="address">Address</label>
            <textarea
              name="address"
              id=""
              className="p-2 resize-none text-base text-orange-700 focus:outline-none"
              rows="4"
            ></textarea>
          </div>
          <div className="flex justify-between ">
            <div className="flex  items-center form-group gap-2 p-4 pl-0 w-full">
              <label htmlFor="destination">Date</label>
              <input
                id="destination"
                type="date"
                name="date"
                className="p-2 text-base text-orange-700 focus:outline-none"
              />
            </div>
            <div className="flex  items-center form-group gap-2 p-4 pl-0 w-full">
              <label for="appt">Time</label>

              <input
                type="time"
                id="appt"
                name="appt"
                min="09:00"
                max="24:00"
                className="p-2 text-base text-orange-700 focus:outline-none"
              />
            </div>

            <div className="join mt-4">
              <input
                className="join-item btn"
                type="radio"
                name="options"
                aria-label="Active"
              />
              <input
                className="join-item btn"
                type="radio"
                name="options"
                aria-label="Inactive"
              />
            </div>
          </div>
        </form>
      </details>

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
