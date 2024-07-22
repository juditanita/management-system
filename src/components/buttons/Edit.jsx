import { MdOutlineEdit } from "react-icons/md";
import ToolTips from "./ToolTips"
import Link from "next/link";

const Edit = ({id}) => {
  return (
    <Link href={`/admin/editEvent/${id}`}>
      <ToolTips text={"edit"} >
    <MdOutlineEdit  size={25} color={"rgba(255, 182, 0, 0.8)"}/>
</ToolTips>
    </Link>
    

  )
}

export default Edit