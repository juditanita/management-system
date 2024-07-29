"use client";


import { RiDeleteBin6Line } from "react-icons/ri";

const Delete = ({ id }) => {
  const removeEvent = async () => {
    // console.log("its is clicked");
    const confirmed = confirm("Are you sure you want to delete it?");

    if (confirmed) {
      const res = await fetch(`http://localhost:3000/api/events?id=${id}`, {
        method: "DELETE",
      });
      // console.log(res);
      if (res.ok) {
        setTimeout(() => {
          window.location.reload();
        }, 100);
      }
    }
  };
  return (
    <button className="btn btn-outline btn-accent">
      <RiDeleteBin6Line
        size={25}
        color={"rgba(245, 0, 1, 0.8)"}
        onClick={removeEvent}
      />
    </button>

    


  );

};

export default Delete;
