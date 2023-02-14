import React, { useState } from "react"
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

class testStocks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            _ticker: [] ,
            _data: [],
            selected:""      
        }
    };
    

  SearchStock=event=>{
    event.preventDefault();
    const tickerToThis = this;
        //console.log(tickerToThis);
        const API_Key = `WFF9A8YU61WSWLSR`;
        const ticker = document.querySelector('#sTick').value ;
        //console.log(ticker)
        let API_Call2 = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${ticker}&apikey=${API_Key}`
        console.log(API_Call2)
        let tickerS = [];
        let f = [];

     
    fetch(API_Call2)
      .then(response => {
        return response.json()
      })
      .then(
        function(data){
        console.log(data);

          for(var key in data['bestMatches']){
            tickerS.push(data['bestMatches'][key]["1. symbol"]);
            //console.log(tickerS)
        }
        for(var key1 in data['bestMatches']){
          f.push(data['bestMatches'][key1]);
          //console.log(f)
      }
      
        // tickerToThis.setState({_ticker: tickerS,_data:f},function(){console.log(this.state._ticker);console.log(this.state._data)});
        tickerToThis.setState({_ticker: tickerS,_data:f});
      })
      
  }
  


         



showStock=event=>{
  event.preventDefault();
    console.log(event.target.value)
    this.setState({selected :event.target.value});
  
  
      
    
    
}

render() {
    const abcd = this;
  return (
    <div>
              <h1>Stock ASSet</h1>
                <h3>Stock Ticker</h3>
         <input id="sTick" 
             type='search' 
              />
             <button onClick={this.SearchStock} type='submit'>Submit</button>
             <div>
             
              <select value={this.state.selected} onChange={this.showStock}>
              
              { this.state._ticker.map((options,index)=>  (<option key={index} value={options}>{options}</option>))
              }

              
              </select>
              <div>
                {this.state._data.map((a)=> {

                    const container={};
                   if(a['1. symbol'] === this.state.selected){
                    return [<div>{a['1. symbol']}</div>,<div>{a['2. name']}</div>,<div>{a['4. region']}</div>,<div>{a['8. currency']}</div>]}
                    return null;
})}
              </div>
             </div>
             {/* <Autocomplete
      id="combo-box-demo"
      options={this.state._ticker}
      value={this.state.selected}
      onChange={this.showStock}
      getOptionLabel={option => option}
      style={{ width: 300 }}
      renderInput={params => <TextField {...params}  label="Combo bo" variant="outlined" onChange={this.SearchStock}/>}
    /> */}
         
    </div>
       )
    }
  }


export default testStocks;