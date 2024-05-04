import Header from "./Header"
import SideBar from "./Side-Bar"
import Content from "./Content"
import "./App.css" 
function App() {
  return (
    <div className="React-Project">
      <Header/>
      <div className="Body-div">
         <SideBar/>
         <Content/>
      </div>
    </div>
  )
}
export default App
