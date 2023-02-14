import { useState } from "react";
import { ethers } from "ethers";

const Data= ({ state })=>{const [memos, setMemos] = useState("");
const memosMessage = async (event) => {
  event.preventDefault();
  const { contract } = state;
  const add = document.querySelector("#add23").value;
  
  const element =document.getElementById('parth');
  element.style.display="none";
  const memo = await contract.Account(add);
  //setMemos({memos : memo})
  setMemos(memo);
  console.log(memos)
 if({memos}){
  element.style.display="block";}
  else{
    setMemos()
    element.style.display="none";

      console.log('memo not provided')
      
  }
  };
  return(
    <>
    <h1 style={{justifyContent: "center", textAlign: "center"}}>Get Account Data</h1>
  <form onSubmit={memosMessage}>

    <div className="mb-3">
            <label className="form-label">Address</label>
            <input
              type="text"
              className="form-control"
              id="add23"
              placeholder="Enter Your Address"
              
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
      <p style={{ textAlign: "center", marginTop: "20px" }}>Messages</p>
      
      
        

          
          <div
          id="parth"
          className="container "
          style={{ width: "70%" }}
          
          >
          <table
            style={{
              marginBottom: "10px",
            }}
            >
            <tbody>
            <tr>
                <td
                  style={{
                    backgroundColor: "#00008B",
                    color :"white",
                    border: "1px solid white",
                    borderCollapse: "collapse",
                    padding: "5px",
                    width: "200px",
                    textAlign: "center"
                  }}
                >
                  Name
                </td>
                <td
                  style={{
                    backgroundColor: "#00008B",
                    color :"white",
                    border: "1px solid white",
                    borderCollapse: "collapse",
                    padding: "5px",
                    width: "200px",
                    textAlign: "center"
                  }}
                  >
                  Coin symbol
                </td>
                <td
                  style={{
                    backgroundColor: "#00008B",
                    color :"white",
                    border: "1px solid white",
                    borderCollapse: "collapse",
                    padding: "5px",
                    width: "200px",
                    textAlign: "center"
                  }}
                  >
                  Coin Value
                </td>
                 <td
                  style={{
                    backgroundColor: "#00008B",
                    color :"white",
                    border: "1px solid white",
                    borderCollapse: "collapse",
                    padding: "5px",
                    width: "200px",
                    textAlign: "center"
                  }}
                  >
                  Coin Number
                </td> 
                <td
                  style={{
                    backgroundColor: "#00008B",
                    color :"white",
                    border: "1px solid white",
                    borderCollapse: "collapse",
                    padding: "5px",
                    width: "200px",
                    textAlign: "center"
                  }}
                  >
                  Total Amount
                </td> 
               </tr>
              <tr >
                <td
                  style={{
                    backgroundColor: "#96D4D4",
                    border: "1px solid white",
                    borderCollapse: "collapse",
                    padding: "5px",
                    width: "200px",
                    textAlign: "center"
                  }}
                  >
                  {memos.name}
                </td>
                <td
                  style={{
                    backgroundColor: "#96D4D4",
                    border: "1px solid white",
                    borderCollapse: "collapse",
                    padding: "5px",
                    width: "200px",
                    textAlign: "center"
                  }}
                  >
                  {memos.symbol}
                </td>
                <td
                  style={{
                    backgroundColor: "#96D4D4",
                    border: "1px solid white",
                    borderCollapse: "collapse",
                    padding: "5px",
                    width: "200px",
                    textAlign: "center"
                  }}
                >
                  
                     {String(memos.coinValue)}
                  
                </td>
                 <td
                  style={{
                    backgroundColor: "#96D4D4",
                    border: "1px solid white",
                    borderCollapse: "collapse",
                    padding: "5px",
                    width: "200px",
                    textAlign: "center"
                  }}
                  >
                  {String(memos.coinNumber)}
                </td> 
                <td
                  style={{
                    backgroundColor: "#96D4D4",
                    border: "1px solid white",
                    borderCollapse: "collapse",
                    padding: "5px",
                    width: "200px",
                    textAlign: "center"
                  }}
                  >
                  {String(memos.coinNumber)*String(memos.coinValue)}
                </td> 
               </tr>
           </tbody>
        </table>
       </div>
        
       
    </>
  );
};
export default Data;