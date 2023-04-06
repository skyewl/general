import { getNetwork} from "../config/network-config";

const WINDOW = new Proxy(window, {});

function toHexString(num) {
	let v = '0x' + (parseInt(num).toString(16))
	return v
}

function hexStringToNumber(hexstring) {
	return parseInt(hexstring, 16)
}

// https://web3js.readthedocs.io/
// https://docs.metamask.io/guide/rpc-api.html
class iMetamask {

	// 检测是否安装了 metamask
	enabled() {
		try {
            // let web3 = null;
            if (typeof window.ethereum !== 'undefined') {
                return true;
            } 
            return false;
        } catch (err) {
            console.log(err, 'err');
            return false;
        }
	}

	async isUnlocked() {
		return await window.ethereum._metamask.isUnlocked()
	}

	// 返回地址列表
	async accounts() {
		return await window.ethereum.request({ method: 'eth_requestAccounts' });
	}

	// 切换网络
	async switchEthereumNetwork(chainId) {
	    try {
	      await window.ethereum.request({
	        method: 'wallet_switchEthereumChain',
	        params: [{ chainId: toHexString(chainId) }],
	      });
	    } catch (e) {
	      if (e.code === 4902) {
	        const theNetwork = {
	            ...getNetwork(chainId)
	        };
	        theNetwork.chainId = toHexString(chainId);
	        try {
	          await window.ethereum.request({
	            method: 'wallet_addEthereumChain',
	            params: [ theNetwork ],
	          });
	        } catch (addError) {
	          console.error(addError);
	        }
	      }
	    }
	}

	// 监听网络变化
    networkChanged(func) {
        
        window.ethereum.on('chainChanged', chainId => {
          	func('chainChanged', hexStringToNumber(chainId) + "");
        });

        window.ethereum.on('accountsChanged', function (accounts) {
		  	func('accountsChanged', accounts);
		})

        // // if you want to expose yourself to the problems associated
        // // with networkId, listen for 'networkChanged' instead
        // window.ethereum.on('networkChanged', networkId => {
        //   	//func('networkChanged', networkId);
        // });
        
        // // if you want to do as little as possible, these three lines
        // // will emulate existing behavior
        // window.ethereum.on('chainChanged', () => {
        //   	//func('chainChanged');
        // });
    }

    getCurrentNetwork() {
    	return window.ethereum.networkVersion
    }

    personalSign(userAddress, messageToSign, done) {

    	if (!WINDOW.web3.currentProvider.isMetaMask) {
            alert("MetaMask not enable")
        }

        let myWeb3 = new WINDOW.Web3(WINDOW.web3.currentProvider)

        myWeb3.personal.sign(WINDOW.web3.toHex(messageToSign), userAddress, function(err, signature) {
            console.log('signature: ' + signature, "userAddress");
            done(err, signature)
        });

    }

}

export default iMetamask;
