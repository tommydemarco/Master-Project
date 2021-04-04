import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Swiper, SwiperSlide } from 'swiper/react';
import SliderArrow from "../SliderArrow"

import styles from "./SliderContainer.module.scss"

const SliderContainer = ({ children, spaceBetween, slidesPerView, highArrows }) => {

    const [index, setIndex ] = useState(0)
    const [slider, setSlider ] = useState(null)

    const slideNext = () => {
        if(slider === null) return
        slider.slideNext()
    }

    const slidePrev = () => {
        if(slider === null) return
        slider.slidePrev()
    }

    const disabledNext = slidesPerView === 1 ? index === children.length - 1 : index === children.length - 2

    return (
        <div className={styles["product-slider"]}>
            <Swiper
                spaceBetween={spaceBetween}
                slidesPerView={slidesPerView}
                onSlideChange={(swiper) => setIndex(swiper.activeIndex)}
                onSwiper={(swiper) => setSlider(swiper)}
            >
                {children.map((child, index) => {
                    return (<SwiperSlide key={index}>
                                {child}
                            </SwiperSlide>)
                    })}
            </Swiper>
            <SliderArrow prev highArrows={highArrows} disabled={index === 0} onClick={slidePrev} />
            <SliderArrow next highArrows={highArrows} disabled={disabledNext} onClick={slideNext} />
        </div>
    )
}

SliderContainer.propTypes = {
    children: PropTypes.node.isRequired,
    disableNext: PropTypes.bool,
    disablePrev: PropTypes.bool,
    clickNext: PropTypes.func.isRequired,
    clickPrev: PropTypes.func.isRequired,
}

export default SliderContainer
