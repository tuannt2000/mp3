import LevelLeft from './LevelLeft'
import LevelRight from './LevelRight'

import './header.css'

function Header() {
    return (
        <header className="zm-header">
            <div className="level">
                <LevelLeft/>
                <LevelRight/>
            </div>
        </header>
    );
}

export default Header;