import { useState } from "react";
import Overview from './Views/Overview';
import Chat from './Views/Chat';
import Settings from './Views/Settings';
import Messages from './Views/Messages';
import Folders from './Views/Folders';

const TabsObj = {
    Overview,
    Chat,
    Folders,
    Messages,
    Settings
  };

const getTabContent = tab => {
    const TabContent = TabsObj[tab];
    console.log(tab);
    console.log(TabContent);
    //style={{display: this.state.showStore ? 'block' : 'none' }}
     return <TabContent  style={{display:  'block'}} />
}
const Dashboard = () => {
    const [activeTab , setActiveTab] = useState(Object.keys(TabsObj)[0])
    return (  
        <main className="dashboard">
            <ul className="tabs">
                {Object.keys(TabsObj).map(tab => (
                    <li
                            key={tab}
                            active={activeTab === tab}
                            className={tab.toLowerCase()}
                            onClick={() => setActiveTab(tab)}
                    >
                     {/* {tab} */}
                    </li>
                )
                
                )}
            </ul>
            <div className="views">
                {Object.keys(TabsObj).map( tabContent =>(
                    getTabContent(tabContent)
                ))}
                {/* {getTabContent(activeTab)} */}
            </div>                
        </main>
    );
}

export default Dashboard;