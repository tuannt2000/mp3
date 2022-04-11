import { useStore} from '../store';

import AddPlaylist from './addPlaylist/AddPlaylist';
import MenuPlaylist from './menuPlaylist/MenuPlaylist';
import Theme from './theme/Theme'

function CoolPortal(){
    const [state] = useStore();

    return (
        <div id="react-cool-portal">
            {state.showPlaylist && <AddPlaylist/>}
            {state.showMenuPlaylist && <MenuPlaylist/>}
            <Theme />
        </div>
    );
}

export default CoolPortal;