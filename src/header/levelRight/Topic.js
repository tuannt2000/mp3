

function Topic() {
    return (
        <div className="setting-item">
            <button 
                className="zm-btn zm-tooltip-btn is-hover-circle button" 
            >
                <img src={window.location.origin + "/images/header/levelRight/topic.svg"} alt="topic"/>
            </button>   
        </div>
    );
}

export default Topic;