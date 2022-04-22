/*const {ethers} = require(ethers);
import {ethers} from "ethers";

async function Connect() {
    if(typeof window.ethereum !== "undefined") {
        const ethereumButton = document.querySelector('.enableEthereumButton');
const showAccount = document.querySelector('.showAccount');

ethereumButton.addEventListener('click', () => {
  getAccount();
});

async function getAccount() {
  const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  const account = accounts[0];
  showAccount.innerHTML = account;
}
    }}

    ================================================ */

    const ethereumButton = document.querySelector('.enableEthereumButton');
    const showAccount = document.querySelector('.showAccount');

    ethereumButton.addEventListener('click', () => {
    getAccount();
    });
    

    async function getAccount() {
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    const account = accounts[0];
    showAccount.innerHTML = account;
    document.querySelector(".enableEthereumButton").innerText = "Connected";
    }
    

    import {ethers} from "./ethers.js";
    console.log(ethers);
  
  /*const provider = new ethers.providers.Web3Provider(
    window.ethereum, "any"
  );

  await provider.send("eth_requestAccounts", []);
  const signer = provider.getSigner(); */
  export function connect() {
      if (typeof window.ethereum !== 'undefined') {
          
      }
    /*8let userAddress = await signer.getAddress();
    document.getElementById("wallet").innerText =
      "Your wallet is " + userAddress;*/
  
  };