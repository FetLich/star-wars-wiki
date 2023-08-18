import React from 'react';
export interface IPaginationData {
    page: number;
    totalPages: number;
    handlePagination: (page: number) => void;
}
function Pagination (data: IPaginationData) {
    return (

        <nav aria-label="...">
            <ul className="pagination">
                <li key="prev" className={data.page===1 ? "page-item disabled" : "page-item"} >
                    <a onClick={() => data.handlePagination(data.page - 1)} className="page-link">Previous</a>
                </li>
                {
                    data.page===1?
                        <></>
                 :
                    <li key="1" className="page-item ">
                        <a onClick={() => data.handlePagination(1)} className="page-link">1</a>
                    </li>

                }
                <li key="current" className="page-item active" aria-current="page">
                    <a className="page-link" onClick={() => data.handlePagination(data.page)}>{data.page}</a>
                </li>
                {
                    data.page===data.totalPages?
                        <></>
                        :
                        <li key="last" className="page-item ">
                            <a onClick={() => data.handlePagination(data.totalPages)} className="page-link">{data.totalPages}</a>
                        </li>

                }
                <li key="next" className={data.page===data.totalPages ? "page-item disabled" : "page-item"}>
                    <a className="page-link" onClick={() => data.handlePagination(data.page+1)} >Next</a>
                </li>
            </ul>
        </nav>
    );
}

export default Pagination;