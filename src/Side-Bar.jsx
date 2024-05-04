import { FaRegAddressCard } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { DiStreamline } from "react-icons/di";
import { BiFilterAlt } from "react-icons/bi";
import { CiShop } from "react-icons/ci";
import { CgFileDocument } from "react-icons/cg";
import { CgColorPicker } from "react-icons/cg";
import { IoIosCash } from "react-icons/io";
import "./Side-Bar.css"
function SideBar () {
  return (
    <div className="Side-Bar">
      <div className="Dashboards">
        <h5 className="Dashboard-p">Dashboards</h5>
        <div className= "Dashboard-Icon" id="Patients">
          <CgProfile id="Patients-icon" className="Icons"/>
          <h5>Patients</h5>
        </div>
        <div className= "Dashboard-Icon" id="HR">
          <DiStreamline id="HR-icon" className="Icons"/>
          <h5>HR</h5>
        </div>
        <div className= "Dashboard-Icon" id="Labs">
          <BiFilterAlt id="Labs-icon" className="Icons"/>
          <h5>Labs</h5>
        </div>
        <div className= "Dashboard-Icon" id="Phrama">
          <CiShop  id="Pharma-icon" className="Icons"/>
          <h5>Pharma</h5>
        </div>
      </div>
      <div className="Processes">
      <h5 className="Processess-p">Processes</h5>
        <div className= "Dashboard-Icon" id="Registration">
          <FaRegAddressCard id="Registration-icon" className="Icons"/>
          <h5>Registration</h5>
        </div>
        <div className= "Dashboard-Icon" id="Consultation">
          <CgFileDocument  id="Consultation-icon" className="Icons"/>
          <h5>Consultation</h5>
        </div>
        <div className= "Dashboard-Icon" id="Tests">
          <CgColorPicker id="Tests-icon" className="Icons"/>
          <h5>Test & Reports</h5>
        </div>
        <div className= "Dashboard-Icon" id="Billing">
          <IoIosCash id="Billing-icon" className="Icons"/>
          <h5>Billing</h5>
        </div>
      </div>
      </div>
  )
}
export default SideBar;