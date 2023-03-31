import logo from "./logo.svg";
import "./App.css";
import { PeazeSDK, SupportedNetwork } from "@peaze-labs/react";

const peaze = new PeazeSDK({
  id: "PROJECT_ID_HERE",
  key: "PROJECT_KEY_HERE",
  network: {
    chainId: SupportedNetwork.PolygonMumbai,
  },
});

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
