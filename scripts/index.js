const { ethers } = require("ethers");

const showAccount = document.querySelector('.showAccount');

async function connect() {
    if (typeof window.ethereum !== "undefined") {
      try {
        await ethereum.request({ method: "eth_requestAccounts" });
      } catch (error) {
        alert(error);
      }
      const accounts = await ethereum.request({ method: "eth_accounts" });
      const account = accounts[0];
      showAccount.innerHTML = account;
      document.getElementById("connectButton").innerText = "Connected";
    } else {
      document.getElementById("connectButton").innerHTML =
        "Please install MetaMask";
    }
  }

async function execute() {
    // address
    // Contract ABI
    // function
    // node conection
    const contractAddress = "";
    const abi = [];

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner(); // this is going to get the connected account
    const contract = new ethers.Contract(contractAddress, abi, signer);

    await contract.function();
}

module.exports = {
    connect,
    execute,
}