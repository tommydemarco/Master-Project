import PropTypes from 'prop-types'

import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import styles from "./SliderContainerArrow.module.scss"

const SliderContainerArrow = ({ next, prev, onClick, disabled, highArrows }) => {
    const classes = [styles["slider-container-arrow"]]
    if(disabled) classes.push(styles["slider-container-arrow--disabled"])
    if(prev) classes.push(styles["slider-container-arrow--prev"])
    if(next) classes.push(styles["slider-container-arrow--next"])
    if(highArrows) classes.push(styles["slider-container-arrow--high"])

    return (
        <div className={classes.join(" ")} onClick={onClick ? onClick : null}>
            {prev && <ArrowBackIcon />}
            {next && <ArrowForwardIcon />}
        </div>
    )
}

SliderContainerArrow.propTypes = {
    next: PropTypes.bool.isRequired,
    prev: PropTypes.bool.isRequired,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    highArrows: PropTypes.bool,
}

SliderContainerArrow.defaultProps = {
    next: false,
    prev: false,
    onClick: null,
    disabled: false,
    highArrows: false
}

export default SliderContainerArrow
