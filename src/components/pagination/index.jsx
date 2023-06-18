import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';

const Pagination = ({itemsPerPage, items, setCurrentItems}) => {

    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    
    const pageCount = Math.ceil(items.length / itemsPerPage);
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        setItemOffset(newOffset);
    };

    useEffect(() => {
        setCurrentItems(items.slice(itemOffset, endOffset))
    }, [itemOffset])
    return(
        <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    )
}

export default Pagination;