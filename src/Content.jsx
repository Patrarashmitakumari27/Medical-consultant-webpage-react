import "./Content.css";
import { HiOutlineUserGroup } from "react-icons/hi";
import { HiArrowUturnRight } from "react-icons/hi2";
import { HiMiniArrowDown } from "react-icons/hi2";
import Cards from "./Card";
function Content () {
  return (
    <div className="Content">
      <div className="Content-1">
          <HiOutlineUserGroup id ="Multipuleuser-icon"/>
          <h3 id ="Multipuleuser-h">Consultants</h3>
      </div>
      <div className="Content-2">
          <p className="Content-2-p">Filters</p>
          <select name = "Range" id = "Range">
          <option value = "Select Range" selected>Select Range</option>
          </select>
          <input type="radio" value="summary" id="summary" name="mark" />
          <label for="summary">Summary</label>
          <input type="radio" value="branch" id="branch" name="mark" />
          <label for="branch">Branch Wise</label>
      </div>
      <div className="Content-3">
        <Cards/>
      </div>
      <div className="Content-4">
        <div className="Content-header">
          <h3 id="h">Consultants</h3>
          <div className="Content-icon-1">
          <HiArrowUturnRight id ="arrow-1" />
          </div>
          <div className="Content-icon-2">
          <HiMiniArrowDown id="arrow-2"/>
          </div>
        </div>
        <div className="Contentent-table">
          <table>
            <thead>
              <tr>
                <th>NAME</th>
                <th>PATIENT COUNT</th>
                <th>LABS</th>
                <th>DITE PLANS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>John Smith</td>
                <td>12</td>
                <td>3</td>
                <td>6</td>
              </tr>
              <tr>
                <td>Jane Doe</td>
                <td>8</td>
                <td>2</td>
                <td>4</td>
              </tr>
              <tr>
                <td>Mark Johnson</td>
                <td>6</td>
                <td>1</td>
                <td>2</td>
              </tr>
              <tr>
                <td>Mary Lee</td>
                <td>10</td>
                <td>4</td>
                <td>8</td>
              </tr>
              <tr>
                <td>David Chen</td>
                <td>14</td>
                <td>5</td>
                <td>9</td>
              </tr>
              <tr>
                <td>Emily Wana</td>
                <td>5</td>
                <td>2</td>
                <td>3</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
export default Content;