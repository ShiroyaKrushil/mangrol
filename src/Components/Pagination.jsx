import React from "react";
import ReactPaginate from 'react-paginate';
export default function pagination({
  onPaginationChange,
  recordPerPage,
  pageCount,
  currentPage,
  setRecordPerPage,
}) {
  console.log(recordPerPage);
  return (
    <>
      <div>
        <nav
          className="setPagination flex items-center gap-3 float-end d-flex"
          aria-label="Page navigation example"
        >
          <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={(e) => onPaginationChange(e)}
            pageRangeDisplayed={2}
            pageCount={pageCount}
            initialPage={currentPage - 1}
            previousLabel="<"
            renderOnZeroPageCount={null}
            containerClassName={"pagination"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextClassName={"page-item"}
            nextLinkClassName={"page-link"}
            activeClassName={"active"}
          />
          <div className="pagination_page">
            <select
              id="countries"
              className="form-select"
              value={recordPerPage}
              onChange={(e) => setRecordPerPage(e.target.value)}
            >
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
          </div>
        </nav>
      </div>
    </>
  );
}
