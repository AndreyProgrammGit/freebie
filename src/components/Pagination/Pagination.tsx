import React, { useState } from "react";
import ReactPaginate from "react-paginate";

import "./Pagination.scss";

const PaginatedItems = ({ itemsPerPage, items, renderComponent }) => {
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      {renderComponent(currentItems)}

      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="nav-button"
        nextClassName="nav-button"
        activeClassName="active"
        breakClassName="break"
      />
    </>
  );
};

export default PaginatedItems;
