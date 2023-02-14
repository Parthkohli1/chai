import { useState } from "react";
import { ethers } from "ethers";
import {useNavigate} from "react-router-dom"
import axios from "axios"
import "./memos.css"
const Memos = ({ state }) => {
  
  let history = useNavigate();

    const [address, setAdd] = useState("");
    const [money, setMoney] = useState("");
  const memosDeposit = async (event) => {
    event.preventDefault();
    const { contract } = state;
    const add1 = document.querySelector("#d_add").value;
    const d_amount = document.querySelector("#d_amount").value;
    const amount = { value: ethers.utils.parseEther("0.001") };
      const d = await contract.DepositMoney(add1,d_amount,amount);
      console.log("Deposit is done");
      await d.wait();
      try{
          await axios.post("http://localhost:8000/",{
            address,money
          }).then(res=>{
            if(res.data=="exists"){
            history('/mint', { replace: true })}
            else if(res.data=="Not exists"){
              alert("Account already exists")
            }
          })
      }catch(e){
        console.log(e);
      }
      
            
    };
   // contract && memosMessage();


  return (
    <>
   <h1 style={{justifyContent: "center", textAlign: "center"}}>Deposit Money</h1>
    <form onSubmit={memosDeposit} >

    <div className="mb-3">
            <label className="form-label">Address</label>
            <input
              type="text"
              className="form-control"
              id="d_add"
              placeholder="Enter Your Address"
              onChange={(e)=>{setAdd(e.target.value)}}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Amount</label>
            <input
              type="text"
              className="form-control"
              id="d_amount"
              placeholder="Enter the amount you want to deposit"
              onChange={(e)=>{setMoney(e.target.value)}}
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
    
        
       
    </>
  );
};
export default Memos;
