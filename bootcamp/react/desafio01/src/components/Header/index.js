import React from "react";

import logo from "../../assets/logo.png";
import icon from "../../assets/icon-account.png";

import "./style.css";

function Header() {
  return (
    <header class="header">
      <img src={logo} />
      <div class="my-account">
        <span>Meu perfil</span>
        <img src={icon} />
      </div>
    </header>
  );
}

export default Header;
