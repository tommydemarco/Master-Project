import { Fragment } from "react"
import PropTypes from 'prop-types'

const Pagination = ({ resultsNumber, itemsPerPage, activePaginationItem, setActivePaginationItem }) => {

    if(resultsNumber <= itemsPerPage) return <Fragment></Fragment>

    const paginationItems = Math.floor(resultsNumber / itemsPerPage)

    const onPaginationArrow = (direction) => {
        if(direction === "prev" && activePaginationItem !== 0) {
            setActivePaginationItem(activePaginationItem - 1)
        } else if (direction === "next" && activePaginationItem !== paginationItems) {
            setActivePaginationItem(activePaginationItem + 1)
        }
    }

    const renderPagnationItems = () => {
        let paginationItemsList = []
        for (let i = 0; i < paginationItems; i++) {
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

    const disabledStyles = { opacity: "0.5", pointerEvents: "none"}

    return (
        <div className="pagination-area">
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                    <li className="page-item">
                        <a
                            className="page-link page-link--no-focus"
                            style={activePaginationItem === 0 ? disabledStyles : {}}
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
                            style={activePaginationItem === paginationItems - 1 ? disabledStyles : {}}
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
