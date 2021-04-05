import PropTypes from 'prop-types'

const Pagination = ({ resultsNumber, itemsPerPage, activePaginationItem, setActovePaginationItem }) => {

    const onPaginationArrow = (direction) => {
        if(direction === "prev" && activePaginationItem !== 0) {
            setActovePaginationItem(activePaginationItem - 1)
        } else if (direction === "next" && activePaginationItem !== paginationItems) {
            setActovePaginationItem(activePaginationItem + 1)
        }
    }

    const paginationItems = Math.ceil(resultsNumber / itemsPerPage)

    const renderPagnationItems = () => {
        let paginationItems = []
        for (let i = 0; i < paginationItems; i++) {
            paginationItems.push(
                <li 
                    className={activePaginationItem === item ? "page-item active" : "page-item"} 
                >
                    <a
                        className="page-link"
                        href="/#"
                        onClick={() => setActovePaginationItem(item)}
                    >
                        {item + 1}
                    </a>
                </li>
            )
        }
        return paginationItems
    }

    return (
        <div className="pagination-area">
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                    <li className="page-item">
                        <a
                            className="page-link"
                            href="/#"
                            onClick={() => onPaginationArrow("prev")}
                        >
                            <i className="icofont-double-left"></i>
                        </a>
                    </li>
                    {renderPagnationItems()}
                    <li className="page-item">
                        <a
                            className="page-link"
                            href="/#"
                            onClick={() => onPaginationArrow("next")}
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
    setActovePaginationItem: PropTypes.func.isRequired,
}

export default Pagination