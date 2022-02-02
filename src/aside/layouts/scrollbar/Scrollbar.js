import Main from "./components/Main";
import Vip from "./components/Vip";
import MyMusic from "./components/MyMusic";
import Playlist from "./components/Playlist";
import './Scrollbar.css'

function Scrollbar({sidebarScrollMain}) {

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
            <Main sidebarMain={sidebarScrollMain}/>
            <Vip/>
            <MyMusic/>
            <Playlist/>
        </div>
    )
}

export default Scrollbar;