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

const sidebarScrollMain = [
    {
        id : 6,
        title : 'Nhạc Mới',
        icon : window.location.origin + '/images/icon6.svg',
        link : 'moi-phat-hanh',
        documentTitle : '#zingchart tuần, #zingchart Zing - Bài hát'
    },
    {
        id : 7,
        title : 'Thể Loại',
        icon : window.location.origin + '/images/icon7.svg',
        link : 'hub',
        documentTitle : 'Chủ Đề Nhạc Hot | Tuyển tập nhạc hay chọn lọc'
    },
    {
        id : 8,
        title : 'Top100',
        icon : window.location.origin + '/images/icon8.svg',
        link : 'top100',
        documentTitle : 'Top 100 | Tuyển tập nhạc hay chọn lọc'
    },
    {
        id : 9,
        title : 'MV',
        icon : window.location.origin + '/images/icon9.svg',
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
        <div className="zm-sidebar">
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
                        ref={scrollRef}
                    />
                    <Track ref={scrollRef} />
                </div>
                <AddPlaylist/>
            </div>
        </div>
    )
}

export default Aside;