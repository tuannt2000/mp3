import Main from "./components/Main";
import Vip from "./components/Vip";
import MyMusic from "./components/MyMusic";
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
            <MyMusic/>
        </div>
    )
}

export default Scrollbar;