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
                    <button onClick={() => data.handlePagination(data.page - 1)} className="page-link">Previous</button>
                </li>


                {
                data.page===1?
                    <></>
                    :
                    <li key="left" className="page-item ">
                        <button onClick={() => data.handlePagination(1)} className="page-link">1</button>
                    </li>

            }
                {
                    data.page<3?
                        <></>
                        :
                        <li key="1" className="page-item ">
                            <button onClick={() => data.handlePagination(data.page-2)} className="page-link">...</button>

                        </li>

                }
                <li key="current" className="page-item active" aria-current="page">
                    <a className="page-link" onClick={() => data.handlePagination(data.page)}>{data.page}</a>
                </li>
                {
                    data.page>data.totalPages-2?
                        <></>
                        :
                        <li key="1" className="page-item ">
                            <button onClick={() => data.handlePagination(data.page+2)} className="page-link">...</button>
                        </li>

                }
                {
                    data.page===data.totalPages?
                        <></>
                        :
                        <li key="last" className="page-item ">
                            <button onClick={() => data.handlePagination(data.totalPages)} className="page-link">{data.totalPages}</button>
                        </li>

                }
                <li key="next" className={data.page===data.totalPages ? "page-item disabled" : "page-item"}>
                    <button className="page-link" onClick={() => data.handlePagination(data.page+1)} >Next</button>
                </li>
            </ul>
        </nav>
    );
}

export default Pagination;