import { Link } from 'react-router-dom'
import clsx from 'clsx'
import './Main.css'

import { useStore,actions } from '../../../../store'

function Main({sidebarMain}) {
    const [state, dispatch] = useStore();

    const currentURL = window.location.pathname.split('/')[1];

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