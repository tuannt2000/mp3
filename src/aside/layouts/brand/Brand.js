import { Link } from 'react-router-dom'

import { useStore,actions } from '../../../store'

import './Brand.css'

function Brand() {
    const [state, dispatch] = useStore();

    const handleClick = () => {
        dispatch(actions.setTitle('Zing MP3 | Nghe tải nhạc chất lượng cao trên desktop, mobile và TV'))
    }

    return (
        <div className="zm-navbar">
            <div className="zm-navbar-brand">
                <div className="zm-navbar-item">
                    <button className="zm-btn button" onClick={handleClick}>
                        <Link to='/'>
                            <div className="zmp3-logo">
                            </div>
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Brand;