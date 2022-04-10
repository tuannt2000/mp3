import { Link } from 'react-router-dom'

import { useStore,actions } from '../../../../store'

function MyMusic({navbarItem}) {
    const [state, dispatch] = useStore();

    const handleClick = () => {
        dispatch(actions.setTitle('Nhạc cá nhân | Xem bài hát, album, MV đang hot nhất hiện tại'))
    }

    return (
        <div className="zm-navbar zm-navbar-my-music pad-t-15">
            <div className="main-title title">
                THƯ VIỆN
                <button className="zm-btn zm-tooltip-btn edit-btn is-hover-circle button">
                    <i className="fas fa-pen"></i>
                </button>
            </div>
            <ul className="zm-navbar-menu library-personal">
                {navbarItem.map(value => {
                    return(
                        <li 
                            className="zm-navbar-item" 
                            key={value.id}
                            onClick={handleClick}
                        >
                            <Link to={value.link}>
                                <i className="icon">
                                    <img src={value.icon} alt={value.title} />
                                </i>
                                <span>{value.title}</span>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default MyMusic;