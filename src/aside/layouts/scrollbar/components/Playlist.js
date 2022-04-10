import { Link } from 'react-router-dom'

import { useStore,actions } from '../../../../store'

function Playlist() {
    const [state, dispatch] = useStore();

    const handleClick = (title) => {
        dispatch(actions.setTitle(title));
    }

    const handleClickButtonMore = (e) => {
        dispatch(actions.setPositionMouse(e.pageX + 10,e.pageY - 290));
        dispatch(actions.setShowCoolPortal(true));
        dispatch(actions.setShowMenuPlaylist(true));
    }

    return (
        <div className="zm-navbar zm-navbar-my-playlist">
            <ul className="zm-navbar-menu playlist-personal">
                {state.playlists.map(value => {
                    return (
                        <li
                            key={value.id}
                            className="zm-navbar-item is-one-row"
                            onClick={() => handleClick(value.documentTitle)}
                        >
                            <Link to={value.link}>
                                <span>{value.title}</span>
                                <button 
                                    className="zm-btn zm-tooltip-btn is-hover-circle button"
                                    onClick={handleClickButtonMore}   
                                >
                                    <i className="fas fa-caret-down"></i>
                                </button>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Playlist;