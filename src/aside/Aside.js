import Brand from './layouts/brand/Brand';
import Main from './layouts/main/Main';
import './Aside.css'

function Aside() {
    return (
        <div className="zm-sidebar">
            <Brand/>
            <Main/>
        </div>
    )
}

export default Aside;