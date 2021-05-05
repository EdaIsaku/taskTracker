import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

export const Header = ({ title }) => {
  return (
    <header>
      <h1>{title}</h1>
      <Button text="Add" color="green" />
    </header>
  );
};

Header.defaultProps = {
  title: "Task trucker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

//CSS in JS
// const headingStyle = {
//   color: "green",
//   backgroundColor: "black",
// };

export default Header;
