import './App.css';
import {Routes,Route} from "react-router-dom";
import StartGame from "./Pages/StartGame";
import GamePage from "./Pages/GamePage";
import GameOver from "./Pages/GameOver";

function App() {
  return (
    <div >
        <Routes>
            <Route path="/" element={<StartGame/>}/>
            <Route path="/game" element={<GamePage/>}/>
            <Route path="/gameover" element={<GameOver/>}/>
        </Routes>
    </div>
  );
}

export default App;
