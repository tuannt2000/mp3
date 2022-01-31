import Main from "./components/Main";
import Vip from "./components/Vip";
import './Scrollbar.css'

function Scrollbar() {

    return (
        <div 
            className="zm-sidebar-scrollbar"
            style={
                {
                    position: 'absolute',
                    inset: 0,
                    overflow: 'hidden scroll',
                    marginRight: -6,
                    marginBottom: 0
                }
            }
        >
            <Main/>
            <Vip/>
        </div>
    )
}

export default Scrollbar;