import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const navElements = links.map((link, index) => {
    return <a key={link[index]} href={link}>{link}</a>
  })

  return <nav>{navElements}</nav>;
}

export default NavBar;
