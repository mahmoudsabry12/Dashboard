import './App.css'
import MainDash from './components/MainDash/MainDash';
import Right from './components/RightSide/Right';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">

        <div className="AppGlass">
          <Sidebar />
          <MainDash />
          <Right />
        </div>
    </div>
  );
}

export default App;
