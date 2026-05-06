import React from "react";
import { useState } from "react";


function Header({ name }) {
  return (
    <header className="text-center">
      <h1 className="text-4xl font-bold tracking-tight">
        {name}
      </h1>
      <p className="text-gray-500 mt-2">
        Thoughts, code, and experiments
      </p>
    </header>
  );
}

export default Header;