import React from "react";
import { useState } from "react";


function Header({ name }) {
  const [headerName, setHeaderName] = useState(name);

  return (
    <header>
      <h1>{headerName}</h1>
    </header>
  );
}

export default Header;