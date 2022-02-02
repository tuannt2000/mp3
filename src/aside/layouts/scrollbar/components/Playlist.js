import './Playlist.css'
import { Link } from 'react-router-dom'

import { useStore,actions } from '../../../../store'

function Playlist() {
    const [state, dispatch] = useStore();

    const handleClick = (title) => {
        dispatch(actions.setTitle(title));
    }

    return (
        <div className="zm-navbar zm-navbar-my-playlist">
            <ul className="zm-navbar-menu playlist-personal">
                {state.playlist.map(value => {
                    return (
                        <li
                            key={value.id}
                            className="zm-navbar-item is-one-row"
                            onClick={() => handleClick(value.documentTitle)}
                        >
                            <Link to={value.link}>
                                <span>{value.title}</span>
                                <button className="zm-btn zm-tooltip-btn is-hover-circle button">
                                    <img src={window.location.origin + '/images/more.svg'} alt="more" />
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