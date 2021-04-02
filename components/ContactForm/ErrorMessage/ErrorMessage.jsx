import PropTypes from "prop-types"

import styles from "./ErrorMessage.module.scss"

const ErrorMessage = (format) => {
    return (
        <span className={styles["error-meessage"]}>
            {format ? "Invalid format" : "Required field"}
        </span>
    )
}

ErrorMessage.propTypes = {
    format: PropTypes.bool
}

export default ErrorMessage
