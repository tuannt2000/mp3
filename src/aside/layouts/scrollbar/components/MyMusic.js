import { Link } from 'react-router-dom'
import './MyMusic.css'

const navbarItem = [
    {
        id : 1,
        title : 'Bài hát',
        link : '/mymusic/library/song',
        icon : 'https://zjs.zadn.vn/zmp3-desktop/releases/v1.0.13/static/media/my-song.cf0cb0b4.svg'
    },
    {
        id : 2,
        title : 'Playlist',
        link : '/mymusic/library/playlist',
        icon : 'https://zjs.zadn.vn/zmp3-desktop/releases/v1.0.13/static/media/my-playlist.7e92a5f0.svg'
    },
    {
        id : 3,
        title : 'Gần đây',
        link : '/mymusic/history',
        icon : 'https://zjs.zadn.vn/zmp3-desktop/releases/v1.0.13/static/media/my-history.374cb625.svg'
    }
]

function MyMusic() {

    return (
        <div className="zm-navbar zm-navbar-my-music pad-t-15">
            <div className="main-title title">
                THƯ VIỆN
                <button className="zm-btn zm-tooltip-btn edit-btn is-hover-circle button">
                    <img src="./images/edit.svg" alt="edit" />
                </button>
            </div>
            <ul className="zm-navbar-menu library-personal">
                {navbarItem.map(value => {
                    return(
                        <li className="zm-navbar-item" key={value.id}>
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