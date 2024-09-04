import React from "react";

function Logo() {
  return (
    <div>
      <img
        className="h-12 w-15 dark:hidden"
        src="/logoBlack.png"
        alt="Logo de Black Rock"
      />
      <img
        className="h-12 w-15 hidden dark:block"
        src="/logo.png"
        alt="Logo de Black Rock"
      />
    </div>
  );
}

export default Logo;
