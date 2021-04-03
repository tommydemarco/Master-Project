import { Fragment, useContext } from "react";
import PropTypes from "prop-types"


const Tab = ({ id, title, subtitle, list, imageSrc, imageAlt, align }) => {

    return (
        <div id={id} className="tabs_item">
            <div className="row h-100 justify-content-center align-items-center">
                {align === "left" ? 
                <Fragment>
                    <TabContent title={title} subtitle={subtitle} list={list} />
                    <TabImage src={imageSrc} alt={imageAlt} />
                </Fragment> 
                : 
                <Fragment>
                    <TabImage src={imageSrc} alt={imageAlt} />
                    <TabContent title={title} subtitle={subtitle} list={list} />
                </Fragment>}            
            </div>
        </div>
    )
}

const TabContent = ({ title, subtitle, list }) => {
    return (
        <div className="col-lg-6 col-md-6">
            <div className="tabs_item_content mt-0">
                <h3>{title}</h3>
                <p>{subtitle}</p>
                <ul>
                    {list.map(listItem => (<li><i className="icofont-ui-check"></i>  {listItem}</li>))}
                </ul>
            </div>
        </div>
    )
}

const TabImage = ({imageSrc, imageAlt}) => {
    return (
        <div className="col-lg-6 col-md-6">
            <div className="tabs_item_img">
                <img src={imageSrc} alt={imageAlt} />
            </div>
        </div>
    )
}   

Tab.propTypes = {
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    list: PropTypes.arrayOf(PropTypes.string).isRequired,
    imageSrc: PropTypes.string.isRequired,
    imageAlt: PropTypes.string.isRequired,
    align: PropTypes.oneOf(["left", "right"])
}

Tab.defaultProps = {
    imageSrc: "/images/features-img1.png",
    imageAlt: "img",
    align: "left"
}

export default Tab