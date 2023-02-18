import React from "react";

function Header({ title, bgColor, textColor, textAlign }) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
    textAlign,
  };
  return (
    <header style={headerStyles}>
      <h2>{title}</h2>
    </header>
  );
}

Header.defaultProps = {
  title: "Feedback UI",
  bgColor: "rgba(0, 0, 0, 0.4)",
  textColor: "#ff6a95",
  textAlign: "center",
};

export default Header;
