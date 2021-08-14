import React from 'react';
import './Home.css';
const Home = (props) => {
  return (
    <>
      <div className="content">
        <div className="card">
          <div
            name="beers"
            onClick={(e) => directTo(e, props)}
            className="img all"
          ></div>
          <h2>All Beers</h2>
          <div className="description">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              officiis corporis ullam voluptate quia maxime nulla, ad illo! Ab
              et officia assumenda aliquam voluptas? Quae impedit eius
              accusantium unde recusandae.
            </p>
          </div>
        </div>

        <div className="card">
          <div
            name="random-beer"
            onClick={(e) => directTo(e, props)}
            className="img random"
          ></div>
          <h2>Random Beer</h2>
          <div className="description">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              officiis corporis ullam voluptate quia maxime nulla, ad illo! Ab
              et officia assumenda aliquam voluptas? Quae impedit eius
              accusantium unde recusandae.
            </p>
          </div>
        </div>

        <div className="card">
          <div
            name="new-beer"
            onClick={(e) => directTo(e, props)}
            className="img new"
          ></div>
          <h2>New Beer</h2>
          <div className="description">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              officiis corporis ullam voluptate quia maxime nulla, ad illo! Ab
              et officia assumenda aliquam voluptas? Quae impedit eius
              accusantium unde recusandae.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

function directTo(e, props) {
  const name = '/' + e.target.getAttribute('name');
  props.history.push(name);
}

export default Home;
