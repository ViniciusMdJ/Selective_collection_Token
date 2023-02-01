let SelectiveContract;
let CollectorContract;

const Selective_Contract_Address = "0x3Fe2baf011658D8dEc183E5049cA37ecfD9a7052";


const Selective_Contract_ABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "collectors",
		"outputs": [
			{
				"internalType": "contract Collector",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "valeu_glass",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "value_metal",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "value_paper",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "value_plastic",
				"type": "uint256"
			}
		],
		"name": "createCollectorContract",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "subtractedValue",
				"type": "uint256"
			}
		],
		"name": "decreaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getCollectorAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "addedValue",
				"type": "uint256"
			}
		],
		"name": "increaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "mintFromResidue",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];
const Collector_Contract_ABI = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "glass_value",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "metal_value",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "paper_value",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "plastic_value",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "residue",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "residueAmount",
				"type": "uint256"
			}
		],
		"name": "fullStorage",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "FULL",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "amount_glass",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "amount_metal",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "amount_papper",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "amount_plastic",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "valeu",
				"type": "uint256"
			}
		],
		"name": "changeValueGlass",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "valeu",
				"type": "uint256"
			}
		],
		"name": "changeValueMetal",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "valeu",
				"type": "uint256"
			}
		],
		"name": "changeValuePaper",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "valeu",
				"type": "uint256"
			}
		],
		"name": "changeValuePlastic",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "clearGlassStorage",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "clearMetalStorage",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "clearPaperStorage",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "clearPlasticStorage",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "glass_value_per_gram",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "metal_value_per_gram",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "paper_value_per_gram",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "grams",
				"type": "uint256"
			}
		],
		"name": "payToGlass",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "grams",
				"type": "uint256"
			}
		],
		"name": "payToMetal",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "grams",
				"type": "uint256"
			}
		],
		"name": "payToPaper",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "grams",
				"type": "uint256"
			}
		],
		"name": "payToPlastic",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "plastic_value_per_gram",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];


const provider = new ethers.providers.Web3Provider(window.ethereum, "goerli");

provider.send("eth_requestAccounts", []).then(() => {
  provider.listAccounts().then((accounts) => {
    const signer = provider.getSigner(accounts[0]);
    
    /* 3.1 Create instance of Selective smart contract */
    SelectiveContract = new ethers.Contract(
      Selective_Contract_Address,
      Selective_Contract_ABI,
      signer
    );
    
    SelectiveContract.getCollectorAddress().then((addr) => {
      CollectorContract = new ethers.Contract(
        addr,
        Collector_Contract_ABI,
        signer
      );
    });
          
  });
});

function getCollectorInstace(){
  provider.send("eth_requestAccounts", []).then(() => {
    provider.listAccounts().then((accounts) => {
      const signer = provider.getSigner(accounts[0]);

      SelectiveContract.getCollectorAddress().then((addr) => {
        CollectorContract = new ethers.Contract(
          addr,
          Collector_Contract_ABI,
          signer
        );
      });
           
    });
  });
}

function veryfyCollectorAddress(){
  if(CollectorContract.address == 0x0000000000000000000000000000000000000000){
    swal.fire("You need to create a collector contract first!");
    return false;
  }
  return true;
}
    
  const divMainInteraction = document.querySelector("#contractInteraction");
  const divMainGeneration = document.querySelector("#contractGenerator");
  
  divMainInteraction.style.display = 'none';

  const btnGenerat = document.querySelector("#generat");
  const btnPay = document.querySelector("#pay");
  const btnChange = document.querySelector("#change");
  const btnClear = document.querySelector("#clear");
  
  const btnAbaCreatContract = document.querySelector("#factory");
  const btnAbaInteractionContract = document.querySelector("#interaction");
  
  
  btnAbaInteractionContract.addEventListener("click", () => {
    divMainGeneration.style.display = 'none';
    divMainInteraction.style.display = 'flex';

    getCollectorInstace();
	getEventFullStorage();
  });
  
  btnAbaCreatContract.addEventListener("click", () => {
    divMainGeneration.style.display = 'flex';
    divMainInteraction.style.display = 'none';
  });

  btnGenerat.addEventListener("click", () => {
    const glass = document.querySelector("input[id='glassvalue']");
    const metal = document.querySelector("input[id='metalvalue']");
    const paper = document.querySelector("input[id='papervalue']");
    const plastic = document.querySelector("input[id='plasticvalue']");


	if(glass.value == "" || metal.value == "" || paper.value == "" || plastic.value == ""){
		swal.fire("You need to fill all the fields!");
		return;
	}

    SelectiveContract.createCollectorContract(
      glass.value,
      metal.value,
      paper.value,
      plastic.value).then((tx) => {
        tx.wait().then(() => {
          glass.value = "";
          metal.value = "";
          paper.value = "";
          plastic.value = "";
        });
      }).catch((err) => {
		console.log(err);
		swal.fire("You're already a collector");
	});
  });

  btnPay.addEventListener("click", () => {
    if (!veryfyCollectorAddress()) return;

    const residue = document.querySelector("#payResidues");
    const addrTo = document.querySelector("input[id='address_to_pay']");
    const value = document.querySelector("input[id='grams']");

	console.log(residue.value, addrTo.value, value.value);

    switch(residue.value){
      case "glass":
        CollectorContract.payToGlass(addrTo.value, value.value).then((tx) => {
          tx.wait().then(() => {
            addrTo.value = "";
            value.value = "";
          });
        }).catch((err) => {
			console.log(err);
			swal.fire("Deu erro!");
		});
        break;
      case "metal":
        CollectorContract.payToMetal(addrTo.value, value.value).then((tx) => {
          tx.wait().then(() => {
            addrTo.value = "";
            value.value = "";
          });
        }).catch((err) => {
			console.log(err);
			swal.fire("Deu erro!");
		});
        break;
      case "paper":
        CollectorContract.payToPaper(addrTo.value, value.value).then((tx) => {
          tx.wait().then(() => {
            addrTo.value = "";
            value.value = "";
          });
        }).catch((err) => {
			console.log(err);
			swal.fire("Deu erro!");
		});
        break;
      case "plastic":
        CollectorContract.payToPlastic(addrTo.value, value.value).then((tx) => {
          tx.wait().then(() => {
            addrTo.value = "";
            value.value = "";
          });
        }).catch((err) => {
			console.log(err);
			swal.fire("Deu erro!");
		});
        break;
    }
  });


  btnChange.addEventListener("click", () => {
    if (!veryfyCollectorAddress()) return;

    const residue = document.querySelector("#changeResidues");
    const value = document.querySelector("input[id='changeValue']");


    switch(residue.value){
      case "glass":
        CollectorContract.changeValueGlass(value.value).then((tx) => {
          tx.wait().then(() => {
            value.value = "";
          });
        });
        break;
      case "metal":
        CollectorContract.changeValueMetal(value.value).then((tx) => {
          tx.wait().then(() => {
            value.value = "";
          });
        });
        break;
      case "paper":
        CollectorContract.changeValuePaper(value.value).then((tx) => {
          tx.wait().then(() => {
            value.value = "";
          });
        });
        break;
      case "plastic":
        CollectorContract.changeValuePlastic(value.value).then((tx) => {
          tx.wait().then(() => {
            value.value = "";
          });
        });
        break;
    }
  });

  btnClear.addEventListener("click", () => {
    if (!veryfyCollectorAddress()) return;

    const residue = document.querySelector("#clearResidues").value;


    switch(residue){
      case "glass":
        CollectorContract.clearGlassStorage().then((tx) => {
			tx.wait().then(() => {
			  console.log("Glass cleared");
			});
		  }).catch((err) => {
			console.log(err);
			swal.fire("Your storage is empty!");
		});
        break;
      case "metal":
        CollectorContract.clearMetalStorage().then((tx) => {
          tx.wait().then(() => {
            console.log("Metal cleared");
          });
        }).catch((err) => {
			console.log(err);
			swal.fire("Your storage is empty!");
		});
        break;
      case "paper":
        CollectorContract.clearPaperStorage().then((tx) => {
          tx.wait().then(() => {
            console.log("Paper cleared");
          });
        }).catch((err) => {
			console.log(err);
			swal.fire("Your storage is empty!");
		});
        break;
      case "plastic":
        CollectorContract.clearPlasticStorage().then((tx) => {
          tx.wait().then(() => {
            console.log("Plastic cleared");
          });
        }).catch((err) => {
			console.log(err);
			swal.fire("Your storage is empty!");
		});
        break;
    }
  });

async function getEventFullStorage() {

	CollectorContract.on("fullStorage", (residue, amount) => {
		swal.fire("Your storage of " + residue + " is full!");
  	});
}