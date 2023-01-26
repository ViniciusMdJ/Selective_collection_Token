let SelectiveContract;
let CollectorContract;

const Selective_Contract_Address = "0xB26834d7180b6b16Eda20D69e85A5f7e4b90E190";


const Selective_Contract_ABI = [];
const Collector_Contract_ABI = [];

// const provider = new ethers.providers.Web3Provider(window.ethereum, "goerli");
// provider.send("eth_requestAccounts", []).then(() => {
//   provider.listAccounts().then((accounts) => {
//     const signer = provider.getSigner(accounts[0]);
    
//     /* 3.1 Create instance of Selective smart contract */
//     SelectiveContract = new ethers.Contract(
//       Selective_Contract_Address,
//       Selective_Contract_ABI,
//       signer
//     );
//     const Collector_Contract_Address = SelectiveContract.getCollectorAddress();
//     if(Collector_Contract_Address != 0x0000000000000000000000000000000000000000){
//       CollectorContract = new ethers.Contract(
//         Collector_Contract_Address,
//         Collector_Contract_ABI,
//         signer
//       );
//     }
    
//     });
// });
  
  const divMainInteraction = document.querySelector("#contractInteraction");
  const divMainGeneration = document.querySelector("#contractGenerator");
  
  divMainGeneration.style.display = 'none';

  const glassvalue = document.querySelector("#glassvalue") ;
  const metalvalue = document.querySelector("#metalvalue");
  const papervalue = document.querySelector("#papervalue");
  const plasticvalue = document.querySelector("#plasticvalue");
  const btnGenerat = document.querySelector("#generat");
  
  const btnCreatContract = document.querySelector("#factory");
  const btnInteractionContract = document.querySelector("#interaction");
  
  
  btnInteractionContract.addEventListener("click", () => {
    divMainGeneration.style.display = 'none';
    divMainInteraction.style.display = 'flex';
  });
  
  btnCreatContract.addEventListener("click", () => {
    divMainGeneration.style.display = 'flex';
    divMainInteraction.style.display = 'none';
  });