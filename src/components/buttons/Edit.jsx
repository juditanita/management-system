import { MdOutlineEdit } from "react-icons/md";
import ToolTips from "./ToolTips"

const Edit = () => {
  return (
    <ToolTips text={"edit"} >
    <MdOutlineEdit  size={25} color={"rgba(255, 182, 0, 0.8)"}/>
</ToolTips>

  )
}

export default Edit