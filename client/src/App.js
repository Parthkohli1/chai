import abi from "./contract/Token.json";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import Buy from "./components/Buy";
import Memos from "./components/Memos";
import Transfer from "./components/transfer";
import Data from "./components/data";
import Stock from "./components/Stock"
import Ticker from "./components/ticker"
import chai from "./AT.png";
import "./App.css";

function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });
  const [account, setAccount] = useState("None");
  useEffect(() => {
    const connectWallet = async () => {
      const contractAddress = "0x3F8fA000B9f8b23e023538081B48fC78eD07868d";//to change after deploying contract on hardhat
      const contractABI = abi.abi;
      try {
        const { ethereum } = window;

        if (ethereum) {
          const account = await ethereum.request({
            method: "eth_requestAccounts",
          });

          window.ethereum.on("chainChanged", () => {
            window.location.reload();
          });

          window.ethereum.on("accountsChanged", () => {
            window.location.reload();
          });

          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          const contract = new ethers.Contract(
            contractAddress,
            contractABI,
            signer
          );
          setAccount(account);
          setState({ provider, signer, contract });
        } else {
          alert("Please install metamask");
        }
      } catch (error) {
        console.log(error);
      }
    };
    connectWallet();
  }, []);
  // console.log(state);
  return (
    <div style={{ backgroundColor: "#EFEFEF", height: "100%" }}>

      
      <img src={chai} className="img-fluid" alt=".." width="100%"  />
      <p
        className="text-muted lead "
        style={{ marginTop: "10px", marginLeft: "5px" }}
        >
        <small>Connected Account - {account}</small>
      </p>
      <div className="container-md">
        <Router>
          <Routes>
            <Route exact path="/mint" element={<Buy state={state} />}></Route>
            <Route exact path="/data" element={<Data state={state} />}></Route>
            <Route exact path="/transfer" element={<Transfer state={state} />}></Route>
            <Route exact path="/" element={<Memos state={state} />}></Route>
            <Route exact path="/stock" element={<Stock state={state} />}></Route>
            <Route exact path="/ticker" element={<Ticker state={state} />}></Route>
          </Routes>
          </Router>
          
        {/* <Buy state={state} />
         <Memos state={state} />  */}
      </div>
    </div>
  );
}

export default App;
