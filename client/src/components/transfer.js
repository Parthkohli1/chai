import { useState } from "react";
import { ethers } from "ethers";
import {useNavigate} from "react-router-dom"
import "./memos.css"
const Transfer = ({ state }) => {
  
  let history= useNavigate();

    const [Transfer, setTranfer] = useState([]);
  const transfer = async (event) => {
    event.preventDefault();
    const { contract } = state;
    const add1 = document.querySelector("#s_add").value;
    const add2 = document.querySelector("#r_add").value;
    const t_amount = document.querySelector("#t_amount").value;
    const amount = { value: ethers.utils.parseEther("0.001") };
      const d = await contract.transfer(add1,add2,t_amount,amount);
      await d.wait();
      console.log("Deposit is done");
      setTranfer(d);
      history('/data', { replace: true }) 
    };
    return(
      <>
      <h1 style={{justifyContent: "center", textAlign: "center"}}>Send Money</h1>
        <div className="container-md" style={{ width: "50%", marginTop: "25px" }}>
        <form onSubmit={transfer} style={{paddingBottom:'25px'}}>
        <div className="mb-3" >
            <label className="form-label">Sender Address</label>
            <input
              type="text"
              className="form-control"
              id="s_add"
              placeholder="Enter Your Address"
              />
          </div>
          <div className="mb-3">
            <label className="form-label">Reciever Address</label>
            <input
              type="text"
              className="form-control"
              id="r_add"
              placeholder="Enter recievrs address"
              />
          </div>
          <div className="mb-3">
            <label className="form-label">Amount</label>
            <input
              type="text"
              className="form-control"
              id="t_amount"
              placeholder="Enter the amount to be tranfered"
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
    );}
    export default Transfer;