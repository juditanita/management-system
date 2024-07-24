// "use client";

import EditForm from "@/components/EditForm";
import { getEventById } from "@/fetchingFunctions";
import Link from "next/link";
// import { useParams } from "next/navigation";
// import { useEffect, useState } from "react";

import { RiHome2Line } from "react-icons/ri";



const EditEvent = async ({params}) => {
  // const params = useParams();
  // console.log(params.id)
  const { id } = params;
  console.log(id);


  const {data} = await getEventById(id);
 
  // const [singleEv, setSingleEvent] = useState(null);

  // useEffect(() => {
  
  //   async function loadEventDetails() {
    
  //     try {
  //       const data = await getEventById(id);
       
  //       setSingleEvent(data);
  //     } catch (err) {
  //       console.log("Error occured during operation");
  //     }
  //   }
  //   loadEventDetails();
  // }, [id]);




 
  return (
    <section>
      <div>
        <Link href={"/admin"}>
          <p className="flex px-8 py-6 items-center justify-center w-1/3 gap-4 border-2">
            Admin <RiHome2Line size={25} />
          </p>
        </Link>
      </div>

      {/* {singleEv && <p>here comes the truth {singleEv.details}</p>} */}
      <EditForm />
    </section>
  );
};

export default EditEvent;
