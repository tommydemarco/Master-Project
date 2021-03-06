import PropTypes from "prop-types"

import styles from "./ErrorMessage.module.scss"

const ErrorMessage = ({format, absolute, message}) => {
    const classes = [styles["error-message"]]
    if (absolute) classes.push(styles["error-message--absolute"])

    return (
        <span className={classes.join(" ")}>
            {typeof message === "string" ? message : format ? "Invalid format" : "Required field"}
        </span>
    )
}

ErrorMessage.propTypes = {
    format: PropTypes.bool,
    absolute: PropTypes.bool
}

ErrorMessage.defaultProps = {
    format: false
}

export default ErrorMessage
