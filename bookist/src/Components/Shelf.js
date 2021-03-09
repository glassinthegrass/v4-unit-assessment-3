import React from "react";

function Shelf(props) {
  const { shelf } = props;

  let mappedTitles = shelf.map((elem) => {
    return (
      <div>
        <p>{elem}</p>
      </div>
    );
  });

  return (
    <section className="shelf">
      <h2>Your Shelf</h2>
      <button className="button" onClick={() => props.clearShelf()}>
        clear shelf
      </button>
      <p className="title-list">
        {mappedTitles.length === 0
          ? "Click the books you want to add!"
          : mappedTitles}
      </p>
    </section>
  );
}
export default Shelf