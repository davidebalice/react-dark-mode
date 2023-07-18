import React from "react";
import data from "../data";
import Card from "./Card";

const CardContainer = ({ variant, changeTheme }) => {
  return (
    <>
      {" "}
      <section className="cardContainer">
        {data.map((el) => (
          <Card variant={variant} key={el.id} {...el} />
        ))}
      </section>
    </>
  );
};

export default CardContainer;
