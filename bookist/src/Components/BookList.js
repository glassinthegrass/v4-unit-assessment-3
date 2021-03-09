import React from "react";

 function BookList(props) {
  let { books } = props;

  let booksCopy = books.map((elem, i) => {
    return (
      <div>
        <section className="results">
          <img
            src={elem.img}
            alt={elem.title}
            height="240"
            width="200"
            onClick={() => props.addToShelf(elem.title)}
          />
          <div className="description">
            {elem.title} by {elem.author}
          </div>
        </section>
      </div>
    );
  });

  return <section className="list">{booksCopy}</section>;
}

export default BookList