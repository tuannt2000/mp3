const child_menu = [
    {
        id: 1,
        title: 'Facebook',
        icon: 'fab fa-facebook'
    },
    {
        id: 2,
        title: 'Zalo',
        icon: 'fas fa-bolt'
    },
    {
        id: 3,
        title: 'Mã nhúng',
        icon: 'fas fa-expand-arrows'
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
                                    <i className={value.icon}></i>
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