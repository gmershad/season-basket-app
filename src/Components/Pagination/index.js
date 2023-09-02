import React, { useState, useEffect } from "react";

const Pagination = ({ data, totalElements, parentCallback }) => {
    const [posts, SetPosts] = useState(data.data);
    const [postPerPage, SetPostPerPage] = useState(10);
    const [currentPage, SetCurrentPage] = useState(1);

    const [pageItem, SetPageItem] = useState({
        start: 0,
        end: postPerPage
    })

    const onPageChangeEvent = (start, end) => {
        const pageStartEnd = {
            start: start,
            end: end
        }
        SetPageItem(pageStartEnd)
        parentCallback({ currentPage, postPerPage });
    }

    const handleSelectChange = (event) => {
        SetPostPerPage(event.target.value);
    };

    const OnPerPostChangeEvent = (e) => {
        SetPostPerPage(e.target.value);
        SetCurrentPage(1);
    }

    const numOfPages = Math.ceil(totalElements / postPerPage);
    const numOfButtons = [];
    for (let i = 1; i <= numOfPages; i++) {
        numOfButtons.push(i);
    }

    const prevPageClick = () => {
        if (currentPage === 1) {
            SetCurrentPage(currentPage);
        } else {
            SetCurrentPage(currentPage - 1);
        }
    }

    const nextPageClick = () => {
        if (currentPage === numOfButtons.length) {
            SetCurrentPage(currentPage);
        } else {
            SetCurrentPage(currentPage + 1);
        }
    }

    const [arrOfCurrButtons, setArrOfCurrButtons] = useState([]);
    useEffect(() => {
        let tempNumberOfButtons = [...arrOfCurrButtons]

        let dotsInitial = '...'
        let dotsLeft = '... '
        let dotsRight = ' ...'

        if (numOfButtons.length < 6) {
            tempNumberOfButtons = numOfButtons
        }

        else if (currentPage >= 1 && currentPage <= 3) {
            tempNumberOfButtons = [1, 2, 3, 4, dotsInitial, numOfButtons.length]
        } else if (currentPage === 4) {
            const sliced = numOfButtons.slice(0, 5)
            tempNumberOfButtons = [...sliced, dotsInitial, numOfButtons.length]
        } else if (currentPage > 4 && currentPage < numOfButtons.length - 2) {
            const sliced1 = numOfButtons.slice(currentPage - 2, currentPage)
            const sliced2 = numOfButtons.slice(currentPage, currentPage + 1)
            tempNumberOfButtons = ([1, dotsLeft, ...sliced1, ...sliced2, dotsRight, numOfButtons.length])
        } else if (currentPage > numOfButtons.length - 3) {
            const sliced = numOfButtons.slice(numOfButtons.length - 4)
            tempNumberOfButtons = ([1, dotsLeft, ...sliced])
        } else if (currentPage === dotsInitial) {
            SetCurrentPage(arrOfCurrButtons[arrOfCurrButtons.length - 3] + 1)
        } else if (currentPage === dotsRight) {
            SetCurrentPage(arrOfCurrButtons[3] + 2)
        } else if (currentPage === dotsLeft) {
            SetCurrentPage(arrOfCurrButtons[3] - 2)
        }

        setArrOfCurrButtons(tempNumberOfButtons);
        const value = currentPage * postPerPage;
        onPageChangeEvent(value - postPerPage, value)
    }, [currentPage, postPerPage, numOfPages]);


    return (
        <div className="col-lg-8 check">
            <div className="demo-inline-spacing">
                <nav aria-label="Page navigation">
                    <ul className="pagination justify-content-end">
                        <li className={`page-item prev ${currentPage === 1 ? 'disabled' : ''}`}>
                            <a className="page-link" onClick={prevPageClick}>
                                <i className="fa fa-angle-left"></i>
                                <i className="fa fa-angle-left"></i>
                            </a>
                        </li>
                        {
                            arrOfCurrButtons.map((data, index) => {
                                return (
                                    <li key={index} className={`page-item ${currentPage === data ? 'active' : ''}`}>
                                        <a className="page-link" onClick={() => SetCurrentPage(data)}>{data}</a>
                                    </li>
                                )
                            })
                        }
                        <li className={`page-item prev ${currentPage === numOfButtons.length ? 'disabled' : ''}`}>
                            <a className="page-link" onClick={nextPageClick}>
                                <i className="fa fa-angle-right"></i>
                                <i className="fa fa-angle-right"></i>
                            </a>
                        </li>
                        {/* <li className="page-item ms-4">
                            <a>
                                <select className="form-select form-select-md check"
                                    value={postPerPage}
                                    onChange={handleSelectChange}>
                                    <option>10</option>
                                    <option>20</option>
                                    <option>30</option>
                                    <option>50</option>
                                    <option>100</option>
                                </select>
                            </a>
                        </li> */}
                    </ul>
                </nav>
            </div>
        </div >
    );
}

export default Pagination;