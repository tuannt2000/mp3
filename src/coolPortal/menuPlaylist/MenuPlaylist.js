import ChildMenuPlaylist from './ChildMenuPlaylist';
import { useStore,actions } from '../../store'

import './MenuPlaylist.css'

import useOnclickOutside from "react-cool-onclickoutside";

const menu = [
    {
        id: 1,
        title: 'Thêm vào danh sách phát',
        icon: 'fas fa-plus'
    },
    {
        id: 2,
        title: 'Bình luận',
        icon: 'far fa-comment'
    },
    {
        id: 3,
        title: 'Tải xuống',
        icon: 'fal fa-arrow-to-bottom'
    },
    {
        id: 4,
        title: 'Sao chép link',
        icon: 'fas fa-copy'
    },
    {
        id: 5,
        title: 'Chia sẻ',
        icon: 'far fa-share',
    },
    {
        id: 6,
        title: 'Chỉnh sửa playlist',
        icon: 'fas fa-pen'
    },
    {
        id: 7,
        title: 'Xóa playlist',
        icon: 'fas fa-trash-alt'
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
                                                <i className={value.icon}></i>
                                                <span>{value.title}</span>
                                            </button>
                                            {state.showChildMenuPlaylist && <ChildMenuPlaylist />}
                                        </div>
                                    )) || (
                                        <button className="zm-btn button">
                                            <i className={value.icon}></i>
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