// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Token {
    struct wallet{
        bool check;
      string  name;
      string  symbol;
      uint256  coinValue;
      uint256  coinNumber;
    }
    mapping (address => wallet) public w;
    mapping (address => uint256) public balances;
    // mapping(address => mapping(address => bool)) internal recieverValue;
    event Transfer(address indexed from, address indexed to, uint256 value);
    // event Mint(address indexed to, uint256 coinValue, uint256 coinNumber);
    

    function DepositMoney(address _to, uint256 _amounts) public payable {
        balances[_to] += _amounts; 
    }
    function Account(address _addr) public view returns (wallet memory ) {
        // Mapping always returns a value.
        // If the value was never set, it will return the default value.
       //wallet memory wa =w[_addr];
       //if(balances[_addr]!=0){
         require(balances[_addr] > 0 && w[_addr].check,"wallet not created");  
        return w[_addr];
        //}
        }
    function MintToken(address _addr,string memory _name, string memory _symbol, uint256 _coinValue) public payable{
        // Update the value at this address
        require(balances[_addr] > 0 ,"Money not deposited");
        w[_addr] = wallet({ 
        check: true,
        name : _name,
        symbol : _symbol,
        coinValue : _coinValue,
        coinNumber : balances[_addr] / _coinValue});
    }

    function transfer(address _from, address _to, uint256 _amounts) payable public {
        require(balances[_from] >= _amounts && _amounts > 0 && w[_from].check && w[_to].check, "Transfer failed: insufficient funds");
        balances[_from] -= _amounts;
        balances[_to] += _amounts;
        w[_from].coinNumber -= _amounts/w[_from].coinValue;
        w[_to].coinNumber += _amounts/w[_to].coinValue;   
        
    }
    
}
// pragma solidity >=0.5.0 <0.9.0;

// contract chai {
//     struct Memo {
//         string name;
//         string message;
//         uint256 timestamp;
//         address from;
//     }

//     Memo[] memos;
//     address payable owner;

//     constructor() {
//         owner = payable(msg.sender);
//     }

//     function buyChai(string memory name, string memory message) public payable {
//         require(msg.value > 0, "Please pay greater than 0 ether");
//         owner.transfer(msg.value);
//         memos.push(Memo(name, message, block.timestamp, msg.sender));
//     }

//     function getMemos() public view returns (Memo[] memory) {
//         return memos;
//     }
// }
