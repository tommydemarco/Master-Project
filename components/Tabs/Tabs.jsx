import { createContext, useState, useEffect, useMemo } from 'react';

export const tabsContext = createContext()

const Tabs = ({ children, active }) => {

    const [ activeTab, setActiveTab ] = useState(null)
    const [ tabs, setTabs ] = useState({})
    const [ tabsList, setTabsList ] = useState([])

    const pointerStyle = useMemo(() => ({ cursor: "pointer"}), [])

    const tabsState = {
        activeTab,
        setActiveTab,
        tabs,
        setTabs
    }

    useEffect(() => {
        if(Object.keys(tabs).length !== children.length) return
        setActiveTab(active)
        const list = []
        for(const tabId in tabs) {
            list.push({ id: tabId, ...tabs[tabId]})
        }
        setTabsList(list)
    }, [tabs])  

    const renderTabsHeader = () => {
        if(tabsList.length !== children.length) return
        const tabsHeader = tabsList.map((tab) => {
            return (
                <li
                    className={activeTab === tab.id ? "current" : ""}
                    onClick={() => setActiveTab(tab.id)}
                    key={tab.id}
                    style={pointerStyle}
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

    return (
        <tabsContext.Provider value={tabsState}>
            <section className="saas-tools ptb-100 bg-gray">
                <div className="container">

                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="tab">
                                <ul className="tabs active">
                                    {renderTabsHeader()}
                                </ul>
                                <div className="tab_content">
                                    {children}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </tabsContext.Provider>
    );
}

export default Tabs;
