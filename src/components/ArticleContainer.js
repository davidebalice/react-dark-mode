import React from "react";
import data from "../data";
import Article from "./Article";

const ArticleContainer = ({ variant, changeTheme }) => {
  return (
    <>
      <section className="articleContainer">
        <div
          className="col-12 col-md-6 "
        >
          <Article
            variant={variant}
            title="dsfdsfsd"
            image="https://www.aroundweb.it/react/dark-mode/01.jpg"
            body="sdfsdf"
          />
        </div>

        <div className="col-12 col-md-6 ">
          <div className="row">
            {data.slice(1, 5).map((el, index) => (
              <div className="col-12 col-md-6" key={el.id}>
                <Article variant={variant} {...el} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ArticleContainer;
