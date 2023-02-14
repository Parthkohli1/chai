import React from 'react';
import Plot from 'react-plotly.js';
class Stock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stockChartXValue: [],
            stockChartYValue: []          
        }
    };
  
    // componentDidMount() {
    //     this.fetchStock();
    // }
    

     fetchStock=event=>{
         event.preventDefault();
        const pointerToThis = this;
        console.log(pointerToThis);
        const API_Key = `WFF9A8YU61WSWLSR`;
        const StockSymbol = document.querySelector('#stock').value ;
        console.log(StockSymbol)
        let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=`+StockSymbol+`&outputsize=compact&apikey=${API_Key}`
        console.log(API_Call)
        let stockChartXValuefunction = [];
        let stockChartYValuefunction = [];

        fetch(API_Call)
            .then(
                function(response){
                    return response.json();
                }
            )
            .then(
                function(data){
                    console.log(data);

                    for(var key in data['Time Series (Daily)']){
                        stockChartXValuefunction.push(key);
                        stockChartYValuefunction.push(data['Time Series (Daily)'][key]['1. open']);
                    }

                    //console.log(stockChartXValuefunction);
                    pointerToThis.setState({
                        stockChartXValue: stockChartXValuefunction,
                        stockChartYValue: stockChartYValuefunction
                    });
                }
            )
        
    }

    
    // inputSubmitHandler = (e) => {
    //     this.setState({
    //         StockSymbol: e.target.value 
    //     })
    // }


    render(){
        return (
            <div>
              <h1>Stock Market</h1>
              <form onSubmit={this.fetchStock}>
                <h3>StockSymbol</h3>
               <input 
                    id='stock' 
                    type="text"
                    className="form-control"/>
               <button type='submit'>Submit</button>
              </form>

              {/* <p>X-values : {this.state.stockChartXValue} </p>
              <p>y-values : {this.state.stockChartYValue} </p> */}
              <Plot
        data={[
          {
            x: this.state.stockChartXValue,
            y: this.state.stockChartYValue,
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'red'},
          },
        ]}
        layout={ {width: 660, height: 400, title: 'Stock chart'} }
      />
            </div>
        )
    }
}

export default Stock;