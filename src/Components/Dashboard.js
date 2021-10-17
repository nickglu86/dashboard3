import { useState, useEffect} from "react";
import Overview from './Views/Overview';
import Chat from './Views/Chat';
import Settings from './Views/Settings';
import Messages from './Views/Messages';
import Folders from './Views/Folders';

const views = {
    Overview,
    Chat,
    Folders,
    Messages,
    Settings
  };

const viewsKeys =  Object.keys(views);

const Dashboard = ({updateHeader}) => {
    const [activeTab , setActiveTab] = useState(viewsKeys[0]);

    useEffect(() => {
            updateHeader(activeTab);
    });

    const renderView = (label, index) => {
        const View = views[label];
        return <View 
                key={index} 
                activeClass={label === activeTab ? label.toLowerCase() : ''}            
                />
    }

    return (  
        <main className="dashboard">
            <ul className={`tabs ${activeTab}`} >
                {viewsKeys.map(label => (
                    <li
                            key={label}
                            className={`${label.toLowerCase()}  ${label === activeTab ? 'active' : ''}`}
                            onClick={() => setActiveTab(label)}
                    >
                    </li>
                ))}
            </ul>
            <div className="views">
                {viewsKeys.map( 
                    (label, index) => renderView(label,index)
                )}
            </div>                
        </main>
    );
}

export default Dashboard;