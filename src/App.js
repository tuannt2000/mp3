import Aside from "./aside/Aside";
import './App.css'

function App() {
  return (
      <div className="zm-section zm-layout has-player">
        <div className="zm-sidebar-wrapper">
          <Aside/>
        </div>
      </div>
  );
}

export default App;
