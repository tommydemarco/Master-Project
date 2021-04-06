import { Fragment } from "react"
import PropTypes from 'prop-types'

const Pagination = ({ resultsNumber, itemsPerPage, activePaginationItem, setActivePaginationItem }) => {

    if(resultsNumber <= itemsPerPage) return <Fragment></Fragment>

    const onPaginationArrow = (direction) => {
        if(direction === "prev" && activePaginationItem !== 0) {
            setActivePaginationItem(activePaginationItem - 1)
        } else if (direction === "next" && activePaginationItem !== paginationItems) {
            setActivePaginationItem(activePaginationItem + 1)
        }
        console.log(activePaginationItem, paginationItems)
    }

    const paginationItems = Math.ceil(resultsNumber / itemsPerPage)

    const renderPagnationItems = () => {
        let paginationItemsList = []
        for (let i = 0; i < paginationItems - 1; i++) {
            paginationItemsList.push(
                <li 
                    className={activePaginationItem === i ? "page-item active" : "page-item"} 
                    key={i}
                >
                    <a
                        className="page-link"
                        href="/#"
                        onClick={(e) => {
                            e.preventDefault()
                            setActivePaginationItem(i)
                        }}
                    >
                        {i + 1}
                    </a>
                </li>
            )
        }
        return paginationItemsList
    }

    return (
        <div className="pagination-area">
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                    <li className="page-item">
                        <a
                            className="page-link page-link--no-focus"
                            href="/#"
                            onClick={(e) => {
                                e.preventDefault()
                                onPaginationArrow("prev")
                            }}
                        >
                            <i className="icofont-double-left"></i>
                        </a>
                    </li>
                    {renderPagnationItems()}
                    <li className="page-item">
                        <a
                            className="page-link page-link--no-focus"
                            href="/#"
                            onClick={(e) => {
                                e.preventDefault()
                                onPaginationArrow("next")
                            }}
                        >
                            <i className="icofont-double-right"></i>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

Pagination.propTypes = {
    resultsNumber: PropTypes.number.isRequired,
    itemsPerPage: PropTypes.number.isRequired,
    activePaginationItem: PropTypes.number.isRequired,
    setActivePaginationItem: PropTypes.func.isRequired,
}

export default Pagination
