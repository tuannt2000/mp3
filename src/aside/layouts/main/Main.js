import clsx from 'clsx'
import { useState } from 'react'

import { Link } from 'react-router-dom'
import './Main.css'

const sidebarMain = [
    {
        id : 1,
        title : "Cá nhân",
        icon : './images/icon1.svg',
        link : 'mymusic'
    },
    {
        id : 2,
        title : "Khám Phá",
        icon : './images/icon2.svg',
        link : '/'
    },
    {
        id : 3,
        title : "#zingchart",
        icon : './images/icon3.svg',
        link : '/zing-chart'
    },
    {
        id : 4,
        title : "Radio",
        icon : './images/icon4.svg',
        link : '/radio'
    },
    {
        id : 5,
        title : "Theo dõi",
        icon : './images/icon5.svg',
        link : '/the-loai-nghe-si'
    }
]

function Main() {
    const [sidebarId, setSidebarId] = useState(2);

    const handleClick = (id) => {
        setSidebarId(id)
    }

    return (
        <div className="zm-navbar zm-navbar-main">
            <ul className="zm-navbar-menu">
                {sidebarMain.map(value => {
                    return (
                        <li 
                            key={value.id} 
                            className={clsx('zm-navbar-item',{
                                'is-active': sidebarId === value.id,
                            })} 
                            onClick={() => handleClick(value.id)}
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