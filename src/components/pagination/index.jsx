import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import "./pagination.css";

const Pagination = ({ itemsPerPage, items, setCurrentItems }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;

  const pageCount = Math.ceil(items?.length / itemsPerPage);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items?.length;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    setCurrentItems(items.slice(itemOffset, endOffset));
  }, [itemOffset, items]);
  return (
    <ReactPaginate
      activeClassName={"item-pagination active "}
      breakClassName={"item-pagination break-me "}
      breakLabel={"..."}
      containerClassName={"pagination"}
      disabledClassName={"disabled-page"}
      marginPagesDisplayed={2}
      nextClassName={"item-pagination next "}
      pageClassName={"item-pagination pagination-page "}
      previousClassName={"item-pagination previous"}
      nextLabel=">"
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      previousLabel="<"
      renderOnZeroPageCount={null}
      className="d-flex justify-content-center pagination"
    />
  );
};

export default Pagination;
