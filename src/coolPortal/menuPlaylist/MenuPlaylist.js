import ChildMenuPlaylist from './ChildMenuPlaylist';
import { useStore,actions } from '../../store'

import './MenuPlaylist.css'

import useOnclickOutside from "react-cool-onclickoutside";

const menu = [
    {
        id: 1,
        title: 'Thêm vào danh sách phát',
        icon: window.location.origin + '/images/plus.svg'
    },
    {
        id: 2,
        title: 'Bình luận',
        icon: window.location.origin + '/images/comment.svg'
    },
    {
        id: 3,
        title: 'Tải xuống',
        icon: window.location.origin + '/images/download.svg'
    },
    {
        id: 4,
        title: 'Sao chép link',
        icon: window.location.origin + '/images/link.svg'
    },
    {
        id: 5,
        title: 'Chia sẻ',
        icon: window.location.origin + '/images/share.svg',
    },
    {
        id: 6,
        title: 'Chỉnh sửa playlist',
        icon: window.location.origin + '/images/edit.svg'
    },
    {
        id: 7,
        title: 'Xóa playlist',
        icon: window.location.origin + '/images/delete.svg'
    }
]

function MenuPlaylist() {
    const [state, dispatch] = useStore();

    const menuPlaylistRef = useOnclickOutside(() => {
        dispatch(actions.setShowMenuPlaylist(false));
        dispatch(actions.setShowCoolPortal(false));
    })

    const handleHover = () => {
        dispatch(actions.setShowChildMenuPlaylist())
    }

    const handleHoverOut = () => {
        dispatch(actions.setShowChildMenuPlaylist())
    }

    return (
        <div 
            className="zm-portal"
            style={
                {
                    left : state.positionMousePointerX,
                    top : state.positionMousePointerY
                }
            }
        >
            <div 
                className="zm-contextmenu playlist-menu"
                ref={menuPlaylistRef}    
            >
                <div className="menu">
                    <ul className="menu-list">
                        {menu.map(value => {
                            return(
                                <li 
                                    key={value.id}
                                >
                                    {(value.id===5 && (
                                        <div 
                                            className="menu-list--submenu" 
                                            onMouseEnter={handleHover}
                                            onMouseLeave={handleHoverOut}
                                        >
                                            <button className="zm-btn button">
                                                <img src={value.icon} alt={value.title}/>
                                                <span>{value.title}</span>
                                            </button>
                                            {state.showChildMenuPlaylist && <ChildMenuPlaylist />}
                                        </div>
                                    )) || (
                                        <button className="zm-btn button">
                                            <img src={value.icon} alt={value.title}/>
                                            <span>{value.title}</span>
                                        </button>
                                    )}
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MenuPlaylist;