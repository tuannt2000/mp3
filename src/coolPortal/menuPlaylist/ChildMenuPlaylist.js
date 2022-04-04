const child_menu = [
    {
        id: 1,
        title: 'Facebook',
        icon: window.location.origin + '/images/facebook-brands.svg',
    },
    {
        id: 2,
        title: 'Zalo',
        icon: window.location.origin + '/images/bolt-solid.svg',
    },
    {
        id: 3,
        title: 'Mã nhúng',
        icon: window.location.origin + '/images/arrows-rotate-solid.svg',
    }
]

function ChildMenuPlaylist() {
    return (
        <div 
            className="menu share-content submenu-content"
        >
            <ul className="menu-list">
                {child_menu.map(value => {
                        return (
                            <li 
                                key={value.id}
                            >
                                <button className="zm-btn button">
                                    <img src={value.icon} alt={value.title}/>
                                    <span>{value.title}</span>
                                </button>
                            </li>
                        )
                    }
                )}
            </ul>
        </div>
    );
}

export default ChildMenuPlaylist;