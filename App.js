import './App.css';
import { PeazeSDK, SupportedNetwork } from '@peaze-labs/react';
import { useState } from 'react';
import { ethers, constants, providers } from 'ethers';

const peaze = new PeazeSDK({
  id: '13594200814735e136793d5ae7db2d69b05ad24542c4db1e68b11c93aa99fc64',
  key: '4795e022ae923eb0e670db0d309789e08d55aac57f5237dfd8f5c3a242e6df48',
  network: {
    chainId: SupportedNetwork.PolygonMumbai
    }
});

function App() {
console.log(peaze)
  const [signer, setSigner] = useState();

  // Using Chain ID of 80001 for Polygon Mumbai
  const provider = new providers.AlchemyProvider(80001, "Guv_wE_gl8Up8_BfakHWwBjpl2roO6wh");

  const login = async () => {
    const signer = await peaze.getSigner(provider)
    setSigner(signer)
  }

  const logout = async () => {
    setSigner()
  }

  return (
    <div className="App">
      <button className='button' onClick={!signer ? login : logout}>{!signer ? 'Sign in' : 'Sign out'}</button>
    </div>
  );
}

export default App;
