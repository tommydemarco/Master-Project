import { createContext, useState } from 'react';

const Tabs = () => {

    const tabContext = createContext()

    const [ activeTab, setActiveTab ] = useState(0)
    const [ tabs, setTabs ] = useState([])

    const renderTabsHeader = () => {
        if(tabs.length === 0) return
        const tabsHeader = tabs.map((tab) => {
            return (
                <li
                    className={activeTab === tab.name ? "current" : ""}
                    onClick={() => setActiveTab(tab.id)}
                    key={tab.id}
                >
                    <a onClick={(e) => e.preventDefault()}>
                        <i className={tab.icon}></i>
                        <br />
                        {tab.name}
                    </a>
                </li>
            )
        })
        return tabsHeader
    }

    //"icofont-dashboard-web"
    // icofont-inbox
    // icofont-ui-calendar
    // icofont-copy-invert
    //icofont-wrench

    const openTabSection = (evt, tabNmae) => {
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabs_item");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByTagName("li");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace("current", "");
        }

        document.getElementById(tabNmae).style.display = "block";
        evt.currentTarget.className += "current";
    }

        return (
            <tabContext.Provider>
            <section className="saas-tools ptb-100 bg-gray">
                <div className="container">

                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="tab">
                                <ul className="tabs active">
                                    {renderTabsHeader()}
                                </ul>

                                <div className="tab_content">
                                    

                                    <div id="tab2" className="tabs_item">
                                        <div className="row h-100 justify-content-center align-items-center">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="tabs_item_img">
                                                    <img src='/images/features-img1.png' alt="img" />
                                                </div>
                                            </div>
                                            
                                            <div className="col-lg-6 col-md-6">
                                                <div className="tabs_item_content mb-0">
                                                    <h3>Inbox</h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
                                                    <ul>
                                                        <li><i className="icofont-ui-check"></i> Creative Design</li>
                                                        <li><i className="icofont-ui-check"></i> Retina Ready</li>
                                                        <li><i className="icofont-ui-check"></i> Modern Design</li>
                                                        <li><i className="icofont-ui-check"></i> Digital Marketing & Branding</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div id="tab3" className="tabs_item">
                                        <div className="row h-100 justify-content-center align-items-center">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="tabs_item_content mt-0">
                                                    <h3>Calendar</h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
                                                    <ul>
                                                        <li><i className="icofont-ui-check"></i> Creative Design</li>
                                                        <li><i className="icofont-ui-check"></i> Retina Ready</li>
                                                        <li><i className="icofont-ui-check"></i> Modern Design</li>
                                                        <li><i className="icofont-ui-check"></i> Digital Marketing & Branding</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            
                                            <div className="col-lg-6 col-md-6">
                                                <div className="tabs_item_img">
                                                    <img src='/images/features-img1.png' alt="img" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div id="tab4" className="tabs_item">
                                        <div className="row h-100 justify-content-center align-items-center">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="tabs_item_img">
                                                    <img src='/images/features-img1.png' alt="img" />
                                                </div>
                                            </div>
                                            
                                            <div className="col-lg-6 col-md-6">
                                                <div className="tabs_item_content mb-0">
                                                    <h3>Invoicing</h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
                                                    <ul>
                                                        <li><i className="icofont-ui-check"></i> Creative Design</li>
                                                        <li><i className="icofont-ui-check"></i> Retina Ready</li>
                                                        <li><i className="icofont-ui-check"></i> Modern Design</li>
                                                        <li><i className="icofont-ui-check"></i> Digital Marketing & Branding</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div id="tab5" className="tabs_item">
                                        <div className="row h-100 justify-content-center align-items-center">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="tabs_item_content mt-0">
                                                    <h3>Reporting</h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
                                                    <ul>
                                                        <li><i className="icofont-ui-check"></i> Creative Design</li>
                                                        <li><i className="icofont-ui-check"></i> Retina Ready</li>
                                                        <li><i className="icofont-ui-check"></i> Modern Design</li>
                                                        <li><i className="icofont-ui-check"></i> Digital Marketing & Branding</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            
                                            <div className="col-lg-6 col-md-6">
                                                <div className="tabs_item_img">
                                                    <img src='/images/features-img1.png' alt="img" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </tabContext.Provider>
        );

}

export default Tabs;
