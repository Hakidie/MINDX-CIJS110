import './TabBar.css';

const TabBar = ({ activeTab, setActiveTab }) => {
    return (
        <div className='tab-bar-container'>
            <div className='tab-bar-buttons-container'>
                <button className={`tab-button ${activeTab === "all" ? "active" : ""}`} onClick={() => setActiveTab('all')} >All</button>
                <button className={`tab-button ${activeTab === "active" ? "active" : ""}`} onClick={() => setActiveTab('active')} >Active</button>
                <button className={`tab-button ${activeTab === "completed" ? "active" : ""}`} onClick={() => setActiveTab('completed')} >Completed</button>
            </div>
        </div>
    );
};

export default TabBar;