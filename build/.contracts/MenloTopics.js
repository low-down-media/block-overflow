"use strict";
/* GENERATED BY TYPECHAIN VER. 0.3.1 */
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var typechain_runtime_1 = require("./typechain-runtime");
var MenloTopics = /** @class */ (function (_super) {
    tslib_1.__extends(MenloTopics, _super);
    function MenloTopics(web3, address) {
        var _this = this;
        var abi = [
            {
                constant: false,
                inputs: [{ name: "_token", type: "address" }],
                name: "reclaimToken",
                outputs: [],
                payable: false,
                stateMutability: "nonpayable",
                type: "function"
            },
            {
                constant: false,
                inputs: [],
                name: "renounceOwnership",
                outputs: [],
                payable: false,
                stateMutability: "nonpayable",
                type: "function"
            },
            {
                constant: true,
                inputs: [{ name: "", type: "address" }],
                name: "forums",
                outputs: [
                    { name: "message", type: "bytes32" },
                    { name: "closed", type: "bool" },
                    { name: "payout", type: "uint256" },
                    { name: "votes", type: "int32" },
                    { name: "winner", type: "address" }
                ],
                payable: false,
                stateMutability: "view",
                type: "function"
            },
            {
                constant: true,
                inputs: [],
                name: "owner",
                outputs: [{ name: "", type: "address" }],
                payable: false,
                stateMutability: "view",
                type: "function"
            },
            {
                constant: true,
                inputs: [],
                name: "topicsCount",
                outputs: [{ name: "", type: "uint32" }],
                payable: false,
                stateMutability: "view",
                type: "function"
            },
            {
                constant: true,
                inputs: [{ name: "", type: "address" }],
                name: "alias",
                outputs: [{ name: "", type: "string" }],
                payable: false,
                stateMutability: "view",
                type: "function"
            },
            {
                constant: true,
                inputs: [],
                name: "topicCost",
                outputs: [{ name: "", type: "uint256" }],
                payable: false,
                stateMutability: "view",
                type: "function"
            },
            {
                constant: true,
                inputs: [],
                name: "ACTION_NEWTOPIC",
                outputs: [{ name: "", type: "uint256" }],
                payable: false,
                stateMutability: "view",
                type: "function"
            },
            {
                constant: true,
                inputs: [{ name: "", type: "address" }],
                name: "reputation",
                outputs: [{ name: "", type: "uint256" }],
                payable: false,
                stateMutability: "view",
                type: "function"
            },
            {
                constant: false,
                inputs: [{ name: "_newOwner", type: "address" }],
                name: "transferOwnership",
                outputs: [],
                payable: false,
                stateMutability: "nonpayable",
                type: "function"
            },
            {
                inputs: [
                    { name: "_token", type: "address" },
                    { name: "_topicCost", type: "uint256" }
                ],
                payable: false,
                stateMutability: "nonpayable",
                type: "constructor"
            },
            {
                anonymous: false,
                inputs: [{ indexed: true, name: "previousOwner", type: "address" }],
                name: "OwnershipRenounced",
                type: "event"
            },
            {
                anonymous: false,
                inputs: [
                    { indexed: true, name: "previousOwner", type: "address" },
                    { indexed: true, name: "newOwner", type: "address" }
                ],
                name: "OwnershipTransferred",
                type: "event"
            },
            {
                anonymous: false,
                inputs: [{ indexed: false, name: "_forum", type: "address" }],
                name: "NewTopic",
                type: "event"
            },
            {
                constant: true,
                inputs: [],
                name: "getToken",
                outputs: [{ name: "", type: "address" }],
                payable: false,
                stateMutability: "view",
                type: "function"
            },
            {
                constant: false,
                inputs: [{ name: "_alias", type: "string" }],
                name: "setAlias",
                outputs: [],
                payable: false,
                stateMutability: "nonpayable",
                type: "function"
            },
            {
                constant: false,
                inputs: [
                    { name: "_user", type: "address" },
                    { name: "_rep", type: "uint256" }
                ],
                name: "addReputation",
                outputs: [],
                payable: false,
                stateMutability: "nonpayable",
                type: "function"
            },
            {
                constant: false,
                inputs: [
                    { name: "_from", type: "address" },
                    { name: "_value", type: "uint256" },
                    { name: "_action", type: "uint256" },
                    { name: "_data", type: "bytes" }
                ],
                name: "onTokenReceived",
                outputs: [{ name: "", type: "bytes4" }],
                payable: false,
                stateMutability: "nonpayable",
                type: "function"
            },
            {
                constant: false,
                inputs: [
                    { name: "_forum", type: "address" },
                    { name: "_tokens", type: "uint256" },
                    { name: "_votes", type: "int32" },
                    { name: "_winner", type: "address" }
                ],
                name: "onForumClosed",
                outputs: [],
                payable: false,
                stateMutability: "nonpayable",
                type: "function"
            }
        ];
        var rawBytecode = "0x608060405234801561001057600080fd5b5060405160408061330683398101604052805160209091015160008054600160a060020a03909316600160a060020a03199384161790556001805490921633179091556006556132a1806100656000396000f300608060405260043610620000ea5763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166317ffc3208114620000ef57806321df0da714620001155780636a293d041462000149578063715018a614620001a55780637963382e14620001bd5780638da5cb5b146200021c5780639f0103a61462000234578063a59384101462000265578063a64140d41462000309578063af491cf914620003a5578063b9e9ace214620003cf578063b9f7945114620003e7578063e24f8313146200040b578063f17923261462000432578063f2fde38b1462000467575b600080fd5b348015620000fc57600080fd5b5062000113600160a060020a03600435166200048b565b005b3480156200012257600080fd5b506200012d6200055f565b60408051600160a060020a039092168252519081900360200190f35b3480156200015657600080fd5b506040805160206004803580820135601f8101849004840285018401909552848452620001139436949293602493928401919081908401838280828437509497506200056f9650505050505050565b348015620001b257600080fd5b506200011362000591565b348015620001ca57600080fd5b50620001e1600160a060020a036004351662000600565b60408051958652931515602086015284840192909252600390810b900b6060840152600160a060020a03166080830152519081900360a00190f35b3480156200022957600080fd5b506200012d62000642565b3480156200024157600080fd5b506200024c62000651565b6040805163ffffffff9092168252519081900360200190f35b3480156200027257600080fd5b50604080516020601f606435600481810135928301849004840285018401909552818452620002d494600160a060020a0381351694602480359560443595369560849493019181908401838280828437509497506200065d9650505050505050565b604080517fffffffff000000000000000000000000000000000000000000000000000000009092168252519081900360200190f35b3480156200031657600080fd5b506200032d600160a060020a036004351662000753565b6040805160208082528351818301528351919283929083019185019080838360005b83811015620003695781810151838201526020016200034f565b50505050905090810190601f168015620003975780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b348015620003b257600080fd5b50620003bd620007f0565b60408051918252519081900360200190f35b348015620003dc57600080fd5b50620003bd620007f6565b348015620003f457600080fd5b50620003bd600160a060020a0360043516620007fb565b3480156200041857600080fd5b5062000113600160a060020a03600435166024356200080d565b3480156200043f57600080fd5b5062000113600160a060020a036004358116906024359060443560030b906064351662000896565b3480156200047457600080fd5b5062000113600160a060020a03600435166200090d565b600154600090600160a060020a03163314620004a657600080fd5b604080517f70a082310000000000000000000000000000000000000000000000000000000081523060048201529051600160a060020a038416916370a082319160248083019260209291908290030181600087803b1580156200050857600080fd5b505af11580156200051d573d6000803e3d6000fd5b505050506040513d60208110156200053457600080fd5b50516001549091506200055b90600160a060020a0384811691168363ffffffff6200093316565b5050565b600054600160a060020a03165b90565b33600090815260026020908152604090912082516200055b9284019062001147565b600154600160a060020a03163314620005a957600080fd5b600154604051600160a060020a03909116907ff8df31144d9c2f0f6b59d69b8b98abd5459d07f2742c4df920b25aae33c6482090600090a26001805473ffffffffffffffffffffffffffffffffffffffff19169055565b6004602052600090815260409020805460018201546002830154600393840154929360ff90921692909181900b906401000000009004600160a060020a031685565b600154600160a060020a031681565b60055463ffffffff1681565b60008054819081908190600160a060020a031633146200067c57600080fd5b600186141562000743576200069487600654620009ef565b1515620006eb576040805160e560020a62461bcd02815260206004820152601c60248201527f4e657720746f70696320746f6b656e732073656e74203c20636f737400000000604482015290519081900360640190fd5b620006f8856001620009f4565b9350915062000708858462000d72565b935090506200071a8883898462000ea5565b7f150b7a0300000000000000000000000000000000000000000000000000000000935062000748565b600093505b505050949350505050565b600260208181526000928352604092839020805484516001821615610100026000190190911693909304601f8101839004830284018301909452838352919290830182828015620007e85780601f10620007bc57610100808354040283529160200191620007e8565b820191906000526020600020905b815481529060010190602001808311620007ca57829003601f168201915b505050505081565b60065481565b600181565b60036020526000908152604090205481565b33600090815260046020526040902054151562000874576040805160e560020a62461bcd02815260206004820152601460248201527f53656e646572206d75737420626520666f72756d000000000000000000000000604482015290519081900360640190fd5b600160a060020a03909116600090815260036020526040902080549091019055565b600160a060020a0393841660009081526004602052604090206001818101805460ff19169091179055600281019390935560039283018054919094166401000000000277ffffffffffffffffffffffffffffffffffffffff00000000199290930b63ffffffff1663ffffffff199091161716179055565b600154600160a060020a031633146200092557600080fd5b6200093081620010c8565b50565b82600160a060020a031663a9059cbb83836040518363ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018083600160a060020a0316600160a060020a0316815260200182815260200192505050602060405180830381600087803b158015620009b057600080fd5b505af1158015620009c5573d6000803e3d6000fd5b505050506040513d6020811015620009dc57600080fd5b50511515620009ea57600080fd5b505050565b111590565b815160009081908190819081906003908790031162000a5d576040805160e560020a62461bcd02815260206004820152601460248201527f45787065637465642022307820666f7220766172000000000000000000000000604482015290519081900360640190fd5b865160018701968891811062000a6f57fe5b90602001015160f860020a900460f860020a0260f860020a9004602214151562000ae3576040805160e560020a62461bcd02815260206004820152601260248201527f4578706563746564202220666f72207661720000000000000000000000000000604482015290519081900360640190fd5b865160018701968891811062000af557fe5b90602001015160f860020a900460f860020a0260f860020a9004603014151562000b69576040805160e560020a62461bcd02815260206004820152601260248201527f4578706563746564203020666f72207661720000000000000000000000000000604482015290519081900360640190fd5b865160018701968891811062000b7b57fe5b90602001015160f860020a900460f860020a0260f860020a9004607814151562000bef576040805160e560020a62461bcd02815260206004820152601260248201527f4578706563746564207820666f72207661720000000000000000000000000000604482015290519081900360640190fd5b8593505b86518410801562000c2d5750868481518110151562000c0e57fe5b90602001015160f860020a900460f860020a0260f860020a9004602214155b1562000d6157868481518110151562000c4257fe5b016020015160f860020a9081900481020491506030821080159062000c68575060398211155b1562000c7a5760308203915062000cc1565b6041821015801562000c8d575060468211155b1562000ca0576036199091019062000cc1565b6061821015801562000cb3575060668211155b1562000cc157605619909101905b603f83111562000d40576040805160e560020a62461bcd028152602060048201526024808201527f6279746533322063616e2774206265206c6f6e676572207468616e203332206260448201527f7974657300000000000000000000000000000000000000000000000000000000606482015290519081900360840190fd5b6001938401938301926004603f919091030260020a600f8316021762000bf3565b966002939093019550919350505050565b8151600182019160009182918291869190811062000d8c57fe5b90602001015160f860020a900460f860020a0260f860020a9004602214151562000e00576040805160e560020a62461bcd02815260206004820152601260248201527f4578706563746564202220666f72207661720000000000000000000000000000604482015290519081900360640190fd5b8391505b84518210801562000e3e5750848281518110151562000e1f57fe5b90602001015160f860020a900460f860020a0260f860020a9004602214155b1562000e9757848281518110151562000e5357fe5b016020015160f860020a9081900481020490506030811080159062000e79575060398111155b1562000e8b576030810383600a020192505b60019091019062000e04565b600282019150509250929050565b60008054600160a060020a0316308686674563918244f40000858762000eca620011cc565b600160a060020a0397881681529587166020870152939095166040808601919091526060850192909252608084015260a083019390935260c082015290519081900360e001906000f08015801562000f26573d6000803e3d6000fd5b506040805160a081018252868152600060208083018281528385018381526060850184815260808601858152600160a060020a03808a1680885260048088528a892099518a55955160018a01805491151560ff1990921691909117905593516002890155915160039788018054925184166401000000000277ffffffffffffffffffffffffffffffffffffffff00000000199290990b63ffffffff1663ffffffff19909316929092171696909617909555835486517fa9059cbb00000000000000000000000000000000000000000000000000000000815292830191909152602482018a90529451959650939092169363a9059cbb9360448082019493918390030190829087803b1580156200103b57600080fd5b505af115801562001050573d6000803e3d6000fd5b505050506040513d60208110156200106757600080fd5b50506005805463ffffffff8082166001011663ffffffff1990911617905560408051600160a060020a038316815290517f3a0bb256b01bdbc8c00a886e8e84205244a36a982f331364379dd55e264626059181900360200190a15050505050565b600160a060020a0381161515620010de57600080fd5b600154604051600160a060020a038084169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a36001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200118a57805160ff1916838001178555620011ba565b82800160010185558215620011ba579182015b82811115620011ba5782518255916020019190600101906200119d565b50620011c8929150620011dd565b5090565b60405161207b80620011fb83390190565b6200056c91905b80821115620011c85760008155600101620011e45600608060405234801561001057600080fd5b5060405160e08061207b8339810160408181528251602080850151838601516060870151608088015160a089015160c09099015160008054600160a060020a038916600160a060020a031991821617825560018054821633178155600b8054918201815583527f0175b7a638427703f0dbe7bb9bbf987a2551717b34e79f33b5b1008d1fa01db90180549091169055895296519598939792969195909491927f03e7a48842f450663136c1ad049fef3863e073342ffdaf0058c90228716826a292908290030190a160028054600160a060020a03808916600160a060020a031992831617909255600480548884169216919091178155600386905560058490556006859055600883905542830160075560008054604080517f70a082310000000000000000000000000000000000000000000000000000000081523094810194909452519316926370a08231926024808201936020939283900390910190829087803b15801561017f57600080fd5b505af1158015610193573d6000803e3d6000fd5b505050506040513d60208110156101a957600080fd5b5051600d5550505050505050611eb7806101c46000396000f30060806040526004361061015b5763ffffffff60e060020a6000350416630192dbbf81146101605780630d80fefd1461018757806316f0115b1461019f57806317906c2e146101b457806317ffc320146101c957806319151262146101ec57806334d1892c1461022f57806346808bd0146102635780634c1b8ffd146102915780634e71d92d146102a657806357d775f8146102bb5780635b080f2b146102d05780635fdb3e67146102e5578063715018a6146103065780638778b27d146101b45780638da5cb5b1461031b57806395a2251f14610330578063a593841014610351578063a6c3e6b9146103f2578063a85adeab14610407578063acb315851461041c578063b0b8a8d614610431578063c8461b3914610468578063d330eb8b1461047d578063dfbf53ae14610492578063e834a834146104a7578063edfbf9b0146104d0578063f2fde38b146104fa578063f81c24b31461051b575b600080fd5b34801561016c57600080fd5b50610175610530565b60408051918252519081900360200190f35b34801561019357600080fd5b50610175600435610536565b3480156101ab57600080fd5b50610175610555565b3480156101c057600080fd5b5061017561055b565b3480156101d557600080fd5b506101ea600160a060020a0360043516610562565b005b3480156101f857600080fd5b5061021663ffffffff60043516600160a060020a036024351661061a565b60408051600092830b90920b8252519081900360200190f35b34801561023b57600080fd5b5061024760043561064c565b60408051600160a060020a039092168252519081900360200190f35b34801561026f57600080fd5b50610278610674565b6040805163ffffffff9092168252519081900360200190f35b34801561029d57600080fd5b50610175610688565b3480156102b257600080fd5b506101ea61068e565b3480156102c757600080fd5b506101756108e8565b3480156102dc57600080fd5b506101756108ee565b3480156102f157600080fd5b50610247600160a060020a03600435166108f3565b34801561031257600080fd5b506101ea610bb5565b34801561032757600080fd5b50610247610c23565b34801561033c57600080fd5b50610247600160a060020a0360043516610c32565b34801561035d57600080fd5b50604080516020601f6064356004818101359283018490048402850184019095528184526103bd94600160a060020a038135169460248035956044359536956084949301918190840183828082843750949750610e999650505050505050565b604080517fffffffff000000000000000000000000000000000000000000000000000000009092168252519081900360200190f35b3480156103fe57600080fd5b506102476111a8565b34801561041357600080fd5b506101756111b7565b34801561042857600080fd5b506101756111bd565b34801561043d57600080fd5b5061044f63ffffffff600435166111c3565b60408051600392830b90920b8252519081900360200190f35b34801561047457600080fd5b5061044f6111d8565b34801561048957600080fd5b506101756111e1565b34801561049e57600080fd5b506102476111e6565b3480156104b357600080fd5b506104bc61124c565b604080519115158252519081900360200190f35b3480156104dc57600080fd5b5061021663ffffffff60043516600160a060020a03602435166112db565b34801561050657600080fd5b506101ea600160a060020a03600435166112fa565b34801561052757600080fd5b5061017561131d565b60035481565b600c80548290811061054457fe5b600091825260209091200154905081565b600d5481565b600b545b90565b600154600090600160a060020a0316331461057c57600080fd5b6040805160e060020a6370a082310281523060048201529051600160a060020a038416916370a082319160248083019260209291908290030181600087803b1580156105c757600080fd5b505af11580156105db573d6000803e3d6000fd5b505050506040513d60208110156105f157600080fd5b505160015490915061061690600160a060020a0384811691168363ffffffff61132216565b5050565b63ffffffff82166000908152600a60209081526040808320600160a060020a0385168452909152812054900b92915050565b600b80548290811061065a57fe5b600091825260209091200154600160a060020a0316905081565b600e54640100000000900463ffffffff1681565b60055481565b6106966113c1565b15156106ec576040805160e560020a62461bcd02815260206004820152600d60248201527f466f72756d206973206f70656e00000000000000000000000000000000000000604482015290519081900360640190fd5b6106f46113c1565b151561074a576040805160e560020a62461bcd02815260206004820152601060248201527f466f72756d206e6f7420636c6f73656400000000000000000000000000000000604482015290519081900360640190fd5b6107526111e6565b600160a060020a031633146107b1576040805160e560020a62461bcd02815260206004820152601560248201527f4f6e6c792077696e6e65722063616e20636c61696d0000000000000000000000604482015290519081900360640190fd5b600d5460001061080b576040805160e560020a62461bcd02815260206004820152601760248201527f4e6f20746f6b656e73206c65667420746f20636c61696d000000000000000000604482015290519081900360640190fd5b60008054600d54604080517fa9059cbb000000000000000000000000000000000000000000000000000000008152336004820152602481019290925251600160a060020a039092169263a9059cbb926044808401936020939083900390910190829087803b15801561087c57600080fd5b505af1158015610890573d6000803e3d6000fd5b505050506040513d60208110156108a657600080fd5b5050600d5460408051338152602081019290925280517f5afeca38b2064c23a692c4cf353015d80ab3ecc417b4f893f372690c11fbd9a69281900390910190a1565b60085481565b600181565b6001546000908190600160a060020a0316331461090f57600080fd5b6000809054906101000a9004600160a060020a0316600160a060020a031683600160a060020a031663131519816040518163ffffffff1660e060020a028152600401602060405180830381600087803b15801561096b57600080fd5b505af115801561097f573d6000803e3d6000fd5b505050506040513d602081101561099557600080fd5b5051600160a060020a0316146109aa57600080fd5b600080546040805160e060020a6370a082310281523060048201529051600160a060020a039092169263095ea7b392879285926370a08231926024808401936020939083900390910190829087803b158015610a0557600080fd5b505af1158015610a19573d6000803e3d6000fd5b505050506040513d6020811015610a2f57600080fd5b50516040805160e060020a63ffffffff8616028152600160a060020a03909316600484015260248301919091525160448083019260209291908290030181600087803b158015610a7e57600080fd5b505af1158015610a92573d6000803e3d6000fd5b505050506040513d6020811015610aa857600080fd5b5050604080517f881be8f70000000000000000000000000000000000000000000000000000000081529051600160a060020a0385169163881be8f791600480830192600092919082900301818387803b158015610b0457600080fd5b505af1158015610b18573d6000803e3d6000fd5b5050505082600160a060020a031663d5ce33896040518163ffffffff1660e060020a028152600401602060405180830381600087803b158015610b5a57600080fd5b505af1158015610b6e573d6000803e3d6000fd5b505050506040513d6020811015610b8457600080fd5b50516000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0383161790559392505050565b600154600160a060020a03163314610bcc57600080fd5b600154604051600160a060020a03909116907ff8df31144d9c2f0f6b59d69b8b98abd5459d07f2742c4df920b25aae33c6482090600090a26001805473ffffffffffffffffffffffffffffffffffffffff19169055565b600154600160a060020a031681565b6001546000908190600160a060020a03163314610c4e57600080fd5b6000809054906101000a9004600160a060020a0316600160a060020a031683600160a060020a031663d5ce33896040518163ffffffff1660e060020a028152600401602060405180830381600087803b158015610caa57600080fd5b505af1158015610cbe573d6000803e3d6000fd5b505050506040513d6020811015610cd457600080fd5b5051600160a060020a031614610ce957600080fd5b600080546040805160e060020a6370a082310281523060048201529051600160a060020a039092169263095ea7b392879285926370a08231926024808401936020939083900390910190829087803b158015610d4457600080fd5b505af1158015610d58573d6000803e3d6000fd5b505050506040513d6020811015610d6e57600080fd5b50516040805160e060020a63ffffffff8616028152600160a060020a03909316600484015260248301919091525160448083019260209291908290030181600087803b158015610dbd57600080fd5b505af1158015610dd1573d6000803e3d6000fd5b505050506040513d6020811015610de757600080fd5b5050604080517fbe040fb00000000000000000000000000000000000000000000000000000000081529051600160a060020a0385169163be040fb091600480830192600092919082900301818387803b158015610e4357600080fd5b505af1158015610e57573d6000803e3d6000fd5b5050505082600160a060020a031663131519816040518163ffffffff1660e060020a028152600401602060405180830381600087803b158015610b5a57600080fd5b600080548190819081908190600160a060020a03163314610eb957600080fd5b610ec16113c1565b15610f16576040805160e560020a62461bcd02815260206004820152600f60248201527f466f72756d20697320636c6f7365640000000000000000000000000000000000604482015290519081900360640190fd5b600080546040805160e060020a6370a082310281523060048201529051600160a060020a03909216926370a08231926024808401936020939083900390910190829087803b158015610f6757600080fd5b505af1158015610f7b573d6000803e3d6000fd5b505050506040513d6020811015610f9157600080fd5b5051600d55600287141561106157610fab8860055461158d565b1515611001576040805160e560020a62461bcd02815260206004820152601a60248201527f566f74696e6720746f6b656e732073656e7420213d20636f7374000000000000604482015290519081900360640190fd5b61100c866001611592565b909450925061101b86846116bc565b9350915061102986846116bc565b9350905061103989858484611a25565b7f150b7a0300000000000000000000000000000000000000000000000000000000945061119c565b6003871415611104576110768860055461158d565b15156110cc576040805160e560020a62461bcd02815260206004820152601a60248201527f566f74696e6720746f6b656e732073656e7420213d20636f7374000000000000604482015290519081900360640190fd5b6110d7866001611592565b90945092506110e686846116bc565b935091506110f486846116bc565b9350905061103989858484611a48565b6001871415611197576111198860065461158d565b151561116f576040805160e560020a62461bcd02815260206004820152601b60248201527f506f7374696e6720746f6b656e732073656e7420213d20636f73740000000000604482015290519081900360640190fd5b61117a8660016116bc565b9350915061118886846116bc565b93509050611039898383611a55565b600094505b50505050949350505050565b600454600160a060020a031681565b60075481565b60065481565b60096020526000908152604090205460030b81565b600e5460030b81565b600281565b600e54600090640100000000900463ffffffff1615156112125750600454600160a060020a031661055f565b600e54600b80549091640100000000900463ffffffff1690811061123257fe5b600091825260209091200154600160a060020a0316905090565b600080546040805160e060020a6370a082310281523060048201529051600160a060020a03909216916370a082319160248082019260209290919082900301818787803b15801561129c57600080fd5b505af11580156112b0573d6000803e3d6000fd5b505050506040513d60208110156112c657600080fd5b50511580156112d65750600d5415155b905090565b600a602090815260009283526040808420909152908252812054900b81565b600154600160a060020a0316331461131157600080fd5b61131a81611b1c565b50565b600381565b82600160a060020a031663a9059cbb83836040518363ffffffff1660e060020a0281526004018083600160a060020a0316600160a060020a0316815260200182815260200192505050602060405180830381600087803b15801561138557600080fd5b505af1158015611399573d6000803e3d6000fd5b505050506040513d60208110156113af57600080fd5b505115156113bc57600080fd5b505050565b600e5460009068010000000000000000900460ff16156113e35750600161055f565b6007544211156113f55750600061055f565b600454600160a060020a03166114096111e6565b600160a060020a031614156114b157600254600d54604080517ff17923260000000000000000000000000000000000000000000000000000000081523060048201526024810192909252600060448301819052606483018190529051600160a060020a039093169263f179232692608480820193929182900301818387803b15801561149457600080fd5b505af11580156114a8573d6000803e3d6000fd5b5050505061156a565b600254600d54600e54600160a060020a039092169163f179232691309160030b6114d96111e6565b6040518563ffffffff1660e060020a0281526004018085600160a060020a0316600160a060020a031681526020018481526020018360030b60030b815260200182600160a060020a0316600160a060020a03168152602001945050505050600060405180830381600087803b15801561155157600080fd5b505af1158015611565573d6000803e3d6000fd5b505050505b50600e805468ff0000000000000000191668010000000000000000179055600190565b111590565b815160018201916000918291829186919081106115ab57fe5b90602001015160f860020a900460f860020a0260f860020a9004602214151561161e576040805160e560020a62461bcd02815260206004820152601260248201527f4578706563746564202220666f72207661720000000000000000000000000000604482015290519081900360640190fd5b8391505b84518210801561165a5750848281518110151561163b57fe5b90602001015160f860020a900460f860020a0260f860020a9004602214155b156116ae57848281518110151561166d57fe5b016020015160f860020a90819004810204905060308110801590611692575060398111155b156116a3576030810383600a020192505b600190910190611622565b600282019150509250929050565b8151600090819081908190819060039087900311611724576040805160e560020a62461bcd02815260206004820152601460248201527f45787065637465642022307820666f7220766172000000000000000000000000604482015290519081900360640190fd5b865160018701968891811061173557fe5b90602001015160f860020a900460f860020a0260f860020a900460221415156117a8576040805160e560020a62461bcd02815260206004820152601260248201527f4578706563746564202220666f72207661720000000000000000000000000000604482015290519081900360640190fd5b86516001870196889181106117b957fe5b90602001015160f860020a900460f860020a0260f860020a9004603014151561182c576040805160e560020a62461bcd02815260206004820152601260248201527f4578706563746564203020666f72207661720000000000000000000000000000604482015290519081900360640190fd5b865160018701968891811061183d57fe5b90602001015160f860020a900460f860020a0260f860020a900460781415156118b0576040805160e560020a62461bcd02815260206004820152601260248201527f4578706563746564207820666f72207661720000000000000000000000000000604482015290519081900360640190fd5b8593505b8651841080156118ec575086848151811015156118cd57fe5b90602001015160f860020a900460f860020a0260f860020a9004602214155b15611a145786848151811015156118ff57fe5b016020015160f860020a90819004810204915060308210801590611924575060398211155b1561193457603082039150611976565b60418210158015611946575060468211155b156119575760361990910190611976565b60618210158015611969575060668211155b1561197657605619909101905b603f8311156119f4576040805160e560020a62461bcd028152602060048201526024808201527f6279746533322063616e2774206265206c6f6e676572207468616e203332206260448201527f7974657300000000000000000000000000000000000000000000000000000000606482015290519081900360840190fd5b6001938401938301926004603f919091030260020a600f831602176118b4565b966002939093019550919350505050565b611a3184846001611b9a565b8015611a4257611a42848383611a55565b50505050565b611a318484600019611b9a565b811515611a9c57604080518381526020810183905281517fb65503325a293f52b84a6ae139d03041dcc4f9ada4e525c3a83b19291d133734929181900390910190a16113bc565b6040805182815290517f03e7a48842f450663136c1ad049fef3863e073342ffdaf0058c90228716826a29181900360200190a1600b5463ffffffff166000908152600a60209081526040808320600160a060020a03871684529091529020805460ff19166001179055611b0f8184611dfd565b6008544201600755505050565b600160a060020a0381161515611b3157600080fd5b600154604051600160a060020a038084169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a36001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b63ffffffff82166000908152600a60209081526040808320600160a060020a0387168452909152812054810b9081810b9083900b1415611c4a576040805160e560020a62461bcd02815260206004820152602c60248201527f43616e277420766f746520666f722073616d6520636f6d6d656e74206d6f726560448201527f207468616e20312074696d650000000000000000000000000000000000000000606482015290519081900360840190fd5b63ffffffff8381166000818152600960209081526040808320805463ffffffff19811689860b600392830b8101830b90981617909155600a8352818420600160a060020a038b1685528352818420805460ff191660ff898b0190960b9590951694909417909355600854420160075580519384529390910b9082015281517fd5ff9f761727791b388058ad1b7aab23103d05898ae470d1cb7889300a3798c7929181900390910190a1600e5463ffffffff8416600090815260096020526040902054600391820b820b90820b90910b1315611d695763ffffffff838116600081815260096020526040902054600e805463ffffffff1916600392830b90920b9093161767ffffffff000000001916640100000000909102179055611a42565b600e5463ffffffff8416600090815260096020526040902054600390810b810b91810b900b148015611dae5750600e5463ffffffff6401000000009091048116908416105b15611a425763ffffffff838116600081815260096020526040902054600e805463ffffffff1916600392830b90920b9093161767ffffffff000000001916640100000000909102179055611a42565b600c805460018082019092557fdf6966c971051c3d54ec59162606531493a51404a002842f56009d7e5cf4a8c70192909255600b805492830181556000527f0175b7a638427703f0dbe7bb9bbf987a2551717b34e79f33b5b1008d1fa01db9909101805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a039092169190911790555600a165627a7a72305820cb6c8c546570c8c20565a54b2d5805f2083f7a027f49a7e914889dc63c7f7f920029a165627a7a723058208cde034ef985aa445c1cc169062a330ce8f640ada4f8849769028801241622f90029";
        _this = _super.call(this, web3, address, abi, rawBytecode) || this;
        return _this;
    }
    MenloTopics.createAndValidate = function (web3, address) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var contract, code;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        contract = new MenloTopics(web3, address);
                        return [4 /*yield*/, typechain_runtime_1.promisify(web3.eth.getCode, [address])];
                    case 1:
                        code = _a.sent();
                        if (code === "0x0") {
                            throw new Error("Contract at " + address + " doesn't exist!");
                        }
                        return [2 /*return*/, contract];
                }
            });
        });
    };
    Object.defineProperty(MenloTopics.prototype, "owner", {
        get: function () {
            return typechain_runtime_1.promisify(this.rawWeb3Contract.owner, []);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MenloTopics.prototype, "topicsCount", {
        get: function () {
            return typechain_runtime_1.promisify(this.rawWeb3Contract.topicsCount, []);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MenloTopics.prototype, "topicCost", {
        get: function () {
            return typechain_runtime_1.promisify(this.rawWeb3Contract.topicCost, []);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MenloTopics.prototype, "ACTION_NEWTOPIC", {
        get: function () {
            return typechain_runtime_1.promisify(this.rawWeb3Contract.ACTION_NEWTOPIC, []);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MenloTopics.prototype, "getToken", {
        get: function () {
            return typechain_runtime_1.promisify(this.rawWeb3Contract.getToken, []);
        },
        enumerable: true,
        configurable: true
    });
    MenloTopics.prototype.forums = function (arg0) {
        return typechain_runtime_1.promisify(this.rawWeb3Contract.forums, [arg0.toString()]);
    };
    MenloTopics.prototype.alias = function (arg0) {
        return typechain_runtime_1.promisify(this.rawWeb3Contract.alias, [arg0.toString()]);
    };
    MenloTopics.prototype.reputation = function (arg0) {
        return typechain_runtime_1.promisify(this.rawWeb3Contract.reputation, [arg0.toString()]);
    };
    MenloTopics.prototype.reclaimTokenTx = function (_token) {
        return new typechain_runtime_1.DeferredTransactionWrapper(this, "reclaimToken", [
            _token.toString()
        ]);
    };
    MenloTopics.prototype.renounceOwnershipTx = function () {
        return new typechain_runtime_1.DeferredTransactionWrapper(this, "renounceOwnership", []);
    };
    MenloTopics.prototype.transferOwnershipTx = function (_newOwner) {
        return new typechain_runtime_1.DeferredTransactionWrapper(this, "transferOwnership", [_newOwner.toString()]);
    };
    MenloTopics.prototype.setAliasTx = function (_alias) {
        return new typechain_runtime_1.DeferredTransactionWrapper(this, "setAlias", [
            _alias
        ]);
    };
    MenloTopics.prototype.addReputationTx = function (_user, _rep) {
        return new typechain_runtime_1.DeferredTransactionWrapper(this, "addReputation", [
            _user.toString(),
            _rep.toString()
        ]);
    };
    MenloTopics.prototype.onTokenReceivedTx = function (_from, _value, _action, _data) {
        return new typechain_runtime_1.DeferredTransactionWrapper(this, "onTokenReceived", [
            _from.toString(),
            _value.toString(),
            _action.toString(),
            _data
        ]);
    };
    MenloTopics.prototype.onForumClosedTx = function (_forum, _tokens, _votes, _winner) {
        return new typechain_runtime_1.DeferredTransactionWrapper(this, "onForumClosed", [
            _forum.toString(),
            _tokens.toString(),
            _votes.toString(),
            _winner.toString()
        ]);
    };
    MenloTopics.prototype.OwnershipRenouncedEvent = function (eventFilter) {
        return new typechain_runtime_1.DeferredEventWrapper(this, "OwnershipRenounced", eventFilter);
    };
    MenloTopics.prototype.OwnershipTransferredEvent = function (eventFilter) {
        return new typechain_runtime_1.DeferredEventWrapper(this, "OwnershipTransferred", eventFilter);
    };
    MenloTopics.prototype.NewTopicEvent = function (eventFilter) {
        return new typechain_runtime_1.DeferredEventWrapper(this, "NewTopic", eventFilter);
    };
    return MenloTopics;
}(typechain_runtime_1.TypeChainContract));
exports.MenloTopics = MenloTopics;
//# sourceMappingURL=MenloTopics.js.map