import React,{useContext} from "react";
import { ThemeContext } from "../../assets/utils/ThemeContext";

function BurgerMenu() {
  const navState = useContext(ThemeContext);
  return (
    <div>
      <div className="burger-menu">
        <label className="nav-label" htmlFor="check" >
          <input type="checkbox" id="check" onClick={(e)=>{navState.setnavState(!navState.navToggleState);}}/>
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
    </div>
  );
}

export default BurgerMenu;
