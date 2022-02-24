import React from "react";
import { useDispatch } from "react-redux";
import { fetchUsers } from "../Actions/actions";

function Pagination({ page, total_pages }) {
  let pageNumbers = [];

  for (let i = 1; i <= total_pages; i++) {
    pageNumbers.push(i);
  }

  const dispatch = useDispatch();

  return (
    <div className="d-flex justify-content-evenly">
      {pageNumbers.map((item, index) => {
        return (
          <button
            onClick={() => dispatch(fetchUsers(item))}
            key={index}
            className={`btn pgn ${
              item === page ? `btn-primary` : `btn-light`
            } mx-2`}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}

export default Pagination;
