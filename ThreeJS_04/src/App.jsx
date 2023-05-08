import Canvas from "./canvas"
import Customizer from "./pages/Customizer"
import Home from "./pages/Home"
import { lightenColor } from "./config/helpers"
import { useSnapshot } from "valtio";
import state from "./store";

function App() {
  const snap = useSnapshot(state);

  const bgColor = lightenColor(snap.color, 60);
  return (
    <main className="app transition-all ease-in" style={{backgroundColor: bgColor}}>
      <Home />
      <Canvas />
      <Customizer />
    </main>
  )
}

export default App
