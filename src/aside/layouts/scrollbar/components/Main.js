import { Link } from 'react-router-dom'
import clsx from 'clsx'
import React,{ useEffect } from 'react'
import './Main.css'

import { useStore,actions } from '../../../../store'

const sidebarMain = [
    {
        id : 1,
        title : 'Nhạc Mới',
        icon : './images/icon6.svg',
        link : '/moi-phat-hanh',
        documentTitle : '#zingchart tuần, #zingchart Zing - Bài hát'
    },
    {
        id : 2,
        title : 'Thể Loại',
        icon : './images/icon7.svg',
        link : '/hub',
        documentTitle : 'Chủ Đề Nhạc Hot | Tuyển tập nhạc hay chọn lọc'
    },
    {
        id : 3,
        title : 'Top100',
        icon : './images/icon8.svg',
        link : '/top100',
        documentTitle : 'Top 100 | Tuyển tập nhạc hay chọn lọc'
    },
    {
        id : 4,
        title : 'MV',
        icon : './images/icon9.svg',
        link : '/the-loai-video',
        documentTitle : 'Video | Tuyển tập nhạc hay chọn lọc'
    }
]

function Main() {
    const [state, dispatch] = useStore();

    const currentURL = window.location.pathname;

    useEffect(() => {
        let firstTitle;

        sidebarMain.forEach(element => {
            if(window.location.pathname === element.link) firstTitle = element.documentTitle
        });

        if(state.title) document.title = state.title 
        else if(firstTitle) document.title = firstTitle
    },[state.title])

    const handleClick = (title) => {
        dispatch(actions.setTitle(title))
    }

    return (
        <div className="zm-navbar zm-navbar-main mar-t-5 mar-b-0">
            <ul className="zm-navbar-menu">
                {sidebarMain.map(value => {
                    return(
                        <li 
                            key={value.id}
                            className={clsx('zm-navbar-item',{
                                'is-active': currentURL === value.link,
                            })} 
                            onClick={() => handleClick(value.documentTitle)}    
                        >
                            <Link to={value.link}>
                                <img src={value.icon} alt={value.title} />
                                <span>{value.title}</span>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Main;