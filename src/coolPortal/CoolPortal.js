import { useStore} from '../store';

import AddPlaylist from './addPlaylist/AddPlaylist';
import MenuPlaylist from './menuPlaylist/MenuPlaylist';

function CoolPortal(){
    const [state] = useStore();

    return (
        <div id="react-cool-portal">
            {state.showPlaylist && <AddPlaylist/>}
            {state.showMenuPlaylist && <MenuPlaylist/>}
        </div>
    );
}

export default CoolPortal;