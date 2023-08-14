import React from 'react';
export interface IPaginationData {
    page: number;
    totalPages: number;
    handlePagination: (page: number) => void;
}
function Pagination (data: IPaginationData) {
    return (
        <div>
            <div>
                <button
                    onClick={() => data.handlePagination(data.page - 1)}
                    type="button"
                >
                    &lt;
                </button>

                <button
                    onClick={() => data.handlePagination(1)}
                    type="button"
                >
                    {1}
                </button>

                <div>...</div>

                <button
                    onClick={() => data.handlePagination(data.page - 1)}
                    type="button"
                >
                    {data.page - 1}
                </button>

                <button
                    onClick={() => data.handlePagination(data.page)}
                    type="button"
                >
                    {data.page}
                </button>

                <button
                    onClick={() => data.handlePagination(data.page + 1)}
                    type="button"
                >
                    {data.page + 1}
                </button>

                <div>...</div>

                <button
                    onClick={() => data.handlePagination(data.totalPages)}
                    type="button"
                >
                    {data.totalPages}
                </button>

                <button
                    onClick={() => data.handlePagination(data.page + 1)}
                    type="button"
                >
                    &gt;
                </button>
            </div>
        </div>
    );
}

export default Pagination;