import {FaPlus, FaRegBell} from "react-icons/fa";
import { IoNotificationsCircle } from "react-icons/io5";
import { HiMiniUserCircle } from "react-icons/hi2";
import "./Button.css"
function ButtonIcon () {
  return (
    <div className="Buttons">
      <button><FaPlus id="Pluse-Icon"/> &nbsp;  Add New</button>
      <div className="Button-Icon">
        <div className="Notification"><IoNotificationsCircle id = "Bell-Icon" /><div className="Superscript"></div> </div>
         <HiMiniUserCircle  id = "User"/>
      </div>
     </div>
  )
}
export default ButtonIcon;