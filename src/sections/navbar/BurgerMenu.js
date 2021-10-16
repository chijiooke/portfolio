import React from "react";

function BurgerMenu() {
  return (
    <div>
      <div className="burger-menu">
        <label className="nav-label" htmlFor="check">
          <input type="checkbox" id="check" />
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
    </div>
  );
}

export default BurgerMenu;
