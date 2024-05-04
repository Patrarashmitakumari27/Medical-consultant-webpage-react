import SearchBar from "./Search-Bar";
import ButtonIcon from "./Button";
import "./Header.css"
import Button from "./Button";
function Header () {
  return(
    <div className="Header-Bar">
        <SearchBar/>
        <ButtonIcon/>
    </div>
  )
}
export default Header;