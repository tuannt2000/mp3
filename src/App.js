import Aside from "./aside/Aside";
import './App.css'

import { useStore } from './store';
import AddPlaylist from './addPlaylist/AddPlaylist';

function App() {
  const [state] = useStore();

  return (
    <div>
      <div className="zm-section zm-layout has-player">
        <Aside/>
      </div>
      {state.showPlaylist && <AddPlaylist/>}
    </div>
  );
}

export default App;
