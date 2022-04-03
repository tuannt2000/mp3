import Aside from "./aside/Aside";
import './App.css'

import { useStore } from './store';

import CoolPortal from "./coolPortal/CoolPortal";

function App() {
  const [state] = useStore();
  
  return (
    <>
      <div>
        <div className="zm-section zm-layout has-player">
          <Aside/>
        </div>  
      </div>
      {state.showCoolPortal && <CoolPortal />}
    </>
  );
}

export default App;
