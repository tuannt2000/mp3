import clsx from 'clsx'
import React,{ useEffect } from 'react'

import { Link } from 'react-router-dom'
import './Main.css'

import { useStore,actions } from '../../../store'

const sidebarMain = [
    {
        id : 1,
        title : 'Cá Nhân',
        icon : window.location.origin + '/images/icon1.svg',
        link : 'mymusic',
        documentTitle : 'Nhạc cá nhân | Xem bài hát, album, MV đang hot nhất hiện tại'
    },
    {
        id : 2,
        title : 'Khám Phá',
        icon : window.location.origin + '/images/icon2.svg',
        link : '',
        documentTitle : 'Zing MP3 | Nghe tải nhạc chất lượng cao trên desktop, mobile và TV'
    },
    {
        id : 3,
        title : "#zingchart",
        icon : window.location.origin + '/images/icon3.svg',
        link : 'zing-chart',
        documentTitle : '#zingchart | Xem bài hát, album, MV đang hot nhất hiện tại'
    },
    {
        id : 4,
        title : 'Radio',
        icon : window.location.origin + '/images/icon4.svg',
        link : 'radio',
        documentTitle : 'Radio | Xem bài hát, album, MV đang hot nhất hiện tại'
    },
    {
        id : 5,
        title : 'Theo Dõi',
        icon : window.location.origin + '/images/icon5.svg',
        link : 'the-loai-nghe-si',
        documentTitle : 'Nghệ sĩ | Xem bài hát, album, MV đang hot nhất hiện tại'
    }
]

function Main() {
    const [state, dispatch] = useStore();

    const currentURL = window.location.pathname.split('/')[1];

    useEffect(() => {
        let firstTitle;

        sidebarMain.forEach(element => {
            if(window.location.pathname.split('/')[1] === element.link)
                firstTitle = element.documentTitle
        });
        
        if(state.title) document.title = state.title 
        else if(firstTitle) document.title = firstTitle

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