import "./App.css";
import { Profile } from "./Profile";
import { WagmiConfig, createClient } from "wagmi";
import { getDefaultProvider } from "ethers";

const client = createClient({
  autoConnect: true,
  provider: getDefaultProvider(),
});

function App() {
  return (
    <div className="App">
      <WagmiConfig client={client}>
        <Profile />
      </WagmiConfig>
    </div>
  );
}

export default App;
