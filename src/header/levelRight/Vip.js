

function Vip(){
    return (
        <a 
            className="setting-item"
            href={window.location.origin + '/vip'}
        >
            <button className="zm-btn zm-tooltip-btn is-hover-circle button">
                <img src={window.location.origin + '/images/header/levelRight/vip.svg'}  alt="vip" />
            </button>
        </a>
    );
}

export default Vip;