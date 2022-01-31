import clsx from 'clsx'
import React,{ useEffect } from 'react'

import { Link } from 'react-router-dom'
import './Main.css'

import { useStore,actions } from '../../../store'

const sidebarMain = [
    {
        id : 1,
        title : "Cá nhân",
        icon : './images/icon1.svg',
        link : '/mymusic',
        documentTitle : 'Nhạc cá nhân | Xem bài hát, album, MV đang hot nhất hiện tại'
    },
    {
        id : 2,
        title : "Khám Phá",
        icon : './images/icon2.svg',
        link : '/',
        documentTitle : 'Zing MP3 | Nghe tải nhạc chất lượng cao trên desktop, mobile và TV'
    },
    {
        id : 3,
        title : "#zingchart",
        icon : './images/icon3.svg',
        link : '/zing-chart',
        documentTitle : '#zingchart | Xem bài hát, album, MV đang hot nhất hiện tại'
    },
    {
        id : 4,
        title : "Radio",
        icon : './images/icon4.svg',
        link : '/radio',
        documentTitle : 'Radio | Xem bài hát, album, MV đang hot nhất hiện tại'
    },
    {
        id : 5,
        title : "Theo dõi",
        icon : './images/icon5.svg',
        link : '/the-loai-nghe-si',
        documentTitle : 'Nghệ sĩ | Xem bài hát, album, MV đang hot nhất hiện tại'
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
        state.title ? document.title = state.title : document.title = firstTitle
    },[state.title])

    const handleClick = (title) => {
        dispatch(actions.setTitle(title))
    }

    return (
        <div className="zm-navbar zm-navbar-main">
            <ul className="zm-navbar-menu">
                {sidebarMain.map(value => {
                    return (
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