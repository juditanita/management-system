import ToolTips from "./ToolTips"
import { RiDeleteBin6Line } from "react-icons/ri";


const Delete = () => {
  return (
    <ToolTips text={"delete"} >
        <RiDeleteBin6Line  size={25} color={"rgba(245, 0, 1, 0.8)"}/>
    </ToolTips>
  )
}

export default Delete