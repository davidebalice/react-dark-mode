import React from "react";

const Divider = ({ variant, changeTheme }) => {
  return (
    <>
      <section
        className={`divider ${
          variant === "light" ? "divider_light" : "divider_dark"
        }`}
      ></section>
    </>
  );
};

export default Divider;
