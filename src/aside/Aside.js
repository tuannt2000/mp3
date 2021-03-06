import Brand from './layouts/brand/Brand';
import Main from './layouts/main/Main';
import Scrollbar from './layouts/scrollbar/Scrollbar'
import Track from './layouts/scrollbar/Track'
import AddPlaylist from './layouts/addPlaylist/AddPlaylist';
import './Aside.css'

import { useEffect,useRef } from 'react';

import { useStore} from '../store'

const sidebarMain = [
    {
        id : 1,
        title : 'Cá Nhân',
        icon : 'far fa-user',
        link : 'mymusic',
        documentTitle : 'Nhạc cá nhân | Xem bài hát, album, MV đang hot nhất hiện tại'
    },
    {
        id : 2,
        title : 'Khám Phá',
        icon : 'fab fa-discourse',
        link : '',
        documentTitle : 'Zing MP3 | Nghe tải nhạc chất lượng cao trên desktop, mobile và TV'
    },
    {
        id : 3,
        title : "#zingchart",
        icon : 'fal fa-chart-pie-alt',
        link : 'zing-chart',
        documentTitle : '#zingchart | Xem bài hát, album, MV đang hot nhất hiện tại'
    },
    {
        id : 4,
        title : 'Radio',
        icon : 'far fa-broadcast-tower',
        link : 'radio',
        documentTitle : 'Radio | Xem bài hát, album, MV đang hot nhất hiện tại'
    },
    {
        id : 5,
        title : 'Theo Dõi',
        icon : 'far fa-paper-plane',
        link : 'the-loai-nghe-si',
        documentTitle : 'Nghệ sĩ | Xem bài hát, album, MV đang hot nhất hiện tại'
    }
]

const sidebarScrollMain = [
    {
        id : 6,
        title : 'Nhạc Mới',
        icon : 'fas fa-music',
        link : 'moi-phat-hanh',
        documentTitle : '#zingchart tuần, #zingchart Zing - Bài hát'
    },
    {
        id : 7,
        title : 'Thể Loại',
        icon : 'fal fa-calendar',
        link : 'hub',
        documentTitle : 'Chủ Đề Nhạc Hot | Tuyển tập nhạc hay chọn lọc'
    },
    {
        id : 8,
        title : 'Top100',
        icon : 'far fa-star',
        link : 'top100',
        documentTitle : 'Top 100 | Tuyển tập nhạc hay chọn lọc'
    },
    {
        id : 9,
        title : 'MV',
        icon : 'fas fa-film',
        link : 'the-loai-video',
        documentTitle : 'Video | Tuyển tập nhạc hay chọn lọc'
    }
]

const navbarItem = [
    {
        id : 10,
        title : 'Bài hát',
        link : 'mymusic/library/song',
        icon : 'https://zjs.zadn.vn/zmp3-desktop/releases/v1.0.13/static/media/my-song.cf0cb0b4.svg',
        documentTitle : 'Nhạc cá nhân | Xem bài hát, album, MV đang hot nhất hiện tại'
    },
    {
        id : 11,
        title : 'Playlist',
        link : 'mymusic/library/playlist',
        icon : 'https://zjs.zadn.vn/zmp3-desktop/releases/v1.0.13/static/media/my-playlist.7e92a5f0.svg',
        documentTitle : 'Nhạc cá nhân | Xem bài hát, album, MV đang hot nhất hiện tại'
    },
    {
        id : 12,
        title : 'Gần đây',
        link : 'mymusic/history',
        icon : 'https://zjs.zadn.vn/zmp3-desktop/releases/v1.0.13/static/media/my-history.374cb625.svg',
        documentTitle : 'Nhạc cá nhân | Xem bài hát, album, MV đang hot nhất hiện tại'
    }
]

function Aside() {
    const [state] = useStore();

    const scrollRef = useRef();

    useEffect(() => {
        let firstTitle;

        const sidebar = sidebarMain.concat(sidebarScrollMain,navbarItem,state.playlists);

        sidebar.forEach(element => {
            if(window.location.pathname === '/' + element.link)
                firstTitle = element.documentTitle
        });
        
        if(state.title) document.title = state.title 
        else if(firstTitle) document.title = firstTitle

    },[state.title,state.playlists])

    return (
        <aside className="zm-sidebar">
            <div className="zm-sidebar-wrapper">
                <Brand/>
                <Main sidebarMain={sidebarMain}/>
                <div className="sidebar-divide"></div>
                <div style={
                    {
                        position: "relative", 
                        overflow: "hidden",
                        width: "100%",
                        height: "100%"
                    }
                }>
                    <Scrollbar 
                        sidebarScrollMain={sidebarScrollMain}
                        navbarItem={navbarItem}
                        refTrask={scrollRef}
                    />
                    <Track ref={scrollRef} />
                </div>
                <AddPlaylist/>
            </div>
        </aside>
    )
}

export default Aside;