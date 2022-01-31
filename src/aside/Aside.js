import Brand from './layouts/brand/Brand';
import Main from './layouts/main/Main';
import Scrollbar from './layouts/scrollbar/Scrollbar'
import Track from './layouts/scrollbar/Track'
import AddPlaylist from './layouts/addPlaylist/AddPlaylist';
import './Aside.css'

function Aside() {
    return (
        <div className="zm-sidebar">
            <div className="zm-sidebar-wrapper">
                <Brand/>
                <Main/>
                <div className="sidebar-divide"></div>
                <div style={
                    {
                        position: "relative", 
                        overflow: "hidden",
                        width: "100%",
                        height: "100%"
                    }
                }>
                    <Scrollbar/>
                    <Track/>
                </div>
                <AddPlaylist/>
            </div>
        </div>
    )
}

export default Aside;