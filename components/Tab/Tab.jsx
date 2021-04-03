import { Fragment, useContext, useEffect } from "react";
import PropTypes from "prop-types"

import Link from "next/link"

import { tabsContext } from "../Tabs/Tabs"


const Tab = ({ id, title, subtitle, list, imageSrc, imageAlt, align, area, icon }) => {

    const { activeTab, setTabs } = useContext(tabsContext)

    useEffect(() => {
        setTabs((previousState) => ({...previousState, [id]: { title, icon }}))
    }, [])

    return (
        <div id={id} className="tabs_item" style={activeTab === id ? { display: "block"} : { display: "none"}}>
            <div className="row h-100 justify-content-center align-items-center">
                {align === "left" ? 
                <Fragment>
                    <TabContent title={title} subtitle={subtitle} list={list} area={area} />
                    <TabImage src={imageSrc} alt={imageAlt} />
                </Fragment> 
                : 
                <Fragment>
                    <TabImage src={imageSrc} alt={imageAlt} />
                    <TabContent title={title} subtitle={subtitle} list={list} area={area} />
                </Fragment>}            
            </div>
        </div>
    )
}

const TabContent = ({ title, subtitle, list, area }) => {
    return (
        <div className="col-lg-6 col-md-6">
            <div className="tabs_item_content mt-0">
                <h3>{title}</h3>
                <p>{subtitle}</p>
                <ul>
                    {list.map(listItem => (<li><i className="icofont-ui-check"></i>  {listItem}</li>))}
                </ul>
                <Link href={`/admin-area/${area}`}>
                    <a className="btn btn-primary">
                        Go to dedicated area
                    </a>    
                </Link>
            </div>
        </div>
    )
}

const TabImage = ({src, alt}) => {
    return (
        <div className="col-lg-6 col-md-6">
            <div className="tabs_item_img">
                <img src={src} alt={alt} />
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
    align: PropTypes.oneOf(["left", "right"]),
    area: PropTypes.string.isRequired,
}

Tab.defaultProps = {
    imageSrc: "/images/features-img1.png",
    imageAlt: "img",
    align: "left",
    icon: "icofont-dashboard-web",
    list: []
}

export default Tab
