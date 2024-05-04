import {FaSearch} from "react-icons/fa";
import "./Search-Bar.css";
function SearchBar () {
  return (
    <div className="Search-Bar">
        <select name = "customer" id = "customer">
          <option value = "Patients" selected>Patients</option>
        </select>
        <div className="Search">
          <input type = "text" placeholder="Search" className="Search-Input"/>
          <FaSearch id="Search-Icons"/>
        </div>
    </div>
  )
}

export default SearchBar
