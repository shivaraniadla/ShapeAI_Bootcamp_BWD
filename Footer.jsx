import React from "react";
function Footer() {
  var currentYr = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright @ {currentYr}</p>
    </footer>
  );
}
export default Footer;
