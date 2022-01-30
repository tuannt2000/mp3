import Brand from './layouts/brand/Brand';
import Main from './layouts/main/Main';
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

                </div>
            </div>
        </div>
    )
}

export default Aside;