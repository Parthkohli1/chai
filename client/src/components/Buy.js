import {useNavigate} from "react-router-dom"
import { ethers } from "ethers";
const Buy = ({ state }) => {
  let history= useNavigate();
  const buyChai = async (event) => {
    event.preventDefault();
    const { contract } = state;
    const add = document.querySelector("#add").value;
    const name = document.querySelector("#name").value;
    const symbol = document.querySelector("#symbol").value;
    const coin_val = document.querySelector("#coin_val").value;
    
    console.log(add,name, symbol,coin_val, contract);
    const amount = { value: ethers.utils.parseEther("0.001") };
    const transaction = await contract.MintToken(add,name, symbol,coin_val,amount);
    await transaction.wait();
    history('/transfer', { replace: true })     
    
    console.log("Transaction is done");
  };
  return (
    <>
         <h1 style={{justifyContent: "center", textAlign: "center"}}>Mint Token</h1>
      <div className="container-md" style={{ width: "50%", marginTop: "25px" }}>
        <form onSubmit={buyChai} style={{paddingBottom:'25px'}}>
        <div className="mb-3">
            <label className="form-label">Address</label>
            <input
              type="text"
              className="form-control"
              id="add"
              placeholder="Enter Your Address"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter Your Name"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Symbol</label>
            <input
              type="text"
              className="form-control"
              id="symbol"
              placeholder="Enter Your Coin Symbol"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Coin value</label>
            <input
              type="text"
              className="form-control"
              id="coin_val"
              placeholder="Enter Your Coin value"
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={!state.contract}
          >
            submit
          </button>
        </form>
      </div>
    </>
  );
};
export default Buy;
