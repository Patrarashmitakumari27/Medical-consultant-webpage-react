import { FaUsers } from "react-icons/fa6";
import { FaRegChartBar } from "react-icons/fa6";
import { RiCashFill } from "react-icons/ri";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import "./Card.css"
function Cards () {
  return (
    <div className="cards">
      <div className="card-1">
        <div className="cardmsg" id ="cardmsg-1">
          <h4>Consultant Count</h4>
          <h3>90 / 900</h3>
          <p>Today / Period</p>
        </div>
        <div className="cardlogo" id= "cardlogo-1">
          <FaUsers className="logo-1"/>
        </div>
      </div>
      <div className="card-2">
      <div className="cardmsg" id ="cardmsg-2">
          <h4>Consultations</h4>
          <h3>11 / 25</h3>
          <p>Today / Period</p>
        </div>
        <div className="cardlogo" id= "cardlogo-2">
          <FaRegChartBar className="logo-1" />
        </div>
      </div>
      <div className="card-3">
      <div className="cardmsg" id ="cardmsg-3">
          <h4>Labs</h4>
          <h3>25 / 560</h3>
          <p>Today / Period</p>
        </div>
        <div className="cardlogo" id= "cardlogo-3">
          <RiCashFill className="logo-1" />
        </div>
      </div>
      <div className="card-4">
      <div className="cardmsg" id ="cardmsg-4">
          <h4>DietPlans</h4>
          <h3>25 / 250</h3>
          <p>Today / Period</p>
        </div>
        <div className="cardlogo" id= "cardlogo-4">
          <FaMoneyCheckDollar className="logo-1"/>
        </div>
      </div>
    </div>
  )
}
export default Cards;