

function Vip(){
    return (
        <a 
            className="setting-item"
            href={window.location.origin + '/vip'}
        >
            <button className="zm-btn zm-tooltip-btn is-hover-circle button">
                <i className="fas fa-lock"></i>
            </button>
        </a>
    );
}

export default Vip;