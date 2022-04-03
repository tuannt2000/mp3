import Main from "./components/Main";
import Vip from "./components/Vip";
import MyMusic from "./components/MyMusic";
import Playlist from "./components/Playlist";
import './Scrollbar.css'

import { useEffect,useRef } from 'react';

function Scrollbar({sidebarScrollMain,navbarItem,refTrask}) {
    const scrollRef = useRef();

    useEffect(() => {
        const scroll = scrollRef.current

        const handleScroll = () => {
            refTrask.current.style.transform = 'translateY(' + scroll.scrollTop + 'px)';
        }
        
        scroll.addEventListener('scroll', handleScroll);

        return () => {
            scroll.removeEventListener('scroll', handleScroll);
        }
    })

    return (
        <div 
            ref={scrollRef}
            className="zm-sidebar-scrollbar"
            style={
                {
                    position: 'absolute',
                    inset: 0,
                    overflow: 'hidden scroll',
                    marginRight: -6,
                    marginBottom: 0
                }
            }
        >
            <Main sidebarMain={sidebarScrollMain}/>
            <Vip/>
            <MyMusic navbarItem={navbarItem} />
            <Playlist/>
        </div>
    )
}

export default Scrollbar;