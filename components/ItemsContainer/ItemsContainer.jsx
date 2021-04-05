import React from 'react'
import PropTypes from "prop-types"

import styles from "./ItemsContainer.module.scss"

const ItemsContainer = ({ isLoading, children }) => {
    const classes = [styles["items-container"]]
    if (isLoading) classes.push(styles["items-container--loading"])

    return (
        <div className={classes.join(" ")}>
            {children}
        </div>
    )
}

ItemsContainer.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired
}

export default ItemsContainer
