const web3 = new Web3("http://localhost:8545");
const contract_json = {
    antrian : {}
};

const balance = document.getElementById("balance");

const __initData = async () => {
    const network_id = await web3.eth.net.getId();
    const account = await web3.eth.getAccounts();
    const config = {
        from: account[0]
    }
    // const gasPrice = await web3.eth.getEstimateGas(address);
    // const nonce = await web3.eth.getTransactionCount(account);
    
     let {data} = await axios.get("http://localhost:3000/build/contracts/MyToken.json")
     contract_json.myToken = data

     const myToken = new web3.eth.Contract(
        contract_json.myToken.abi,
        contract_json.myToken.networks[network_id].address
     );

     getBalance = async () => {
        let newBalance = 0;
        newBalance = await myToken.methods.getBalance().call();
        balance.setHTML(newBalance)
     }

     getBalance();
}

__initData()

