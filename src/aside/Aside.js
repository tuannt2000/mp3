import Brand from './layouts/brand/Brand';
import Main from './layouts/main/Main';
import './Aside.css'

function Aside() {
    return (
        <div className="zm-sidebar">
            <div className="zm-sidebar-wrapper">
                <Brand/>
                <Main/>
            </div>
        </div>
    )
}

export default Aside;