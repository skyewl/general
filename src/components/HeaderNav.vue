<template>
  <div class="header">
    <div class="def-container header-con">
      <router-link class="nav-link" to="/">
        <h1 class="logo">
          <img alt="logo" src="../assets/img/logo.svg" width="26" height="30" />
          <span class="logo-text">General</span>
        </h1>
      </router-link>
      <nav class="top-nav">
        <router-link class="nav-link" to="/swap">Swap</router-link>
        <router-link class="nav-link" to="/trade">Trading</router-link>
        <router-link class="nav-link" to="/liquidity">Liquidity</router-link>
        <router-link class="nav-link" to="/pool">Pool</router-link>
        <router-link class="nav-link" to="/launchpad">Launchpad</router-link>
        <router-link class="nav-link" to="/doc">DOC</router-link>
      </nav>

      <div class="head-right">
        <img alt="Wallet" src="../assets/img/Frame.svg" width="20" height="20" />
        <div class="wal-btn" @click="selectWal">
          Connect Wallet 
          <img src="../assets/img/Union2.svg" width="4" height="7" alt="icon" style="margin-left:10px">
        </div>
      </div>
    </div>

    <el-dialog v-model="selWalDiaVis" title="Connect a wallet" class="selWalDia" width="360px">
      <ul class="wal-list">
        <li class="item">
          <div class="wal-name">
            <img alt="icon" src="../assets/img/Frame8.svg" width="40" height="40" style="margin-right:12px" />
            Metamask
          </div>
          <img class="arr" alt="icon" src="../assets/img/Union3.svg" width="12" height="12" />
        </li>
        <li class="item">
          <div class="wal-name">
            <img alt="icon" src="../assets/img/Frame9.svg" width="40" height="40" style="margin-right:12px" />
            WalletConnect 
          </div>
          <img class="arr" alt="icon" src="../assets/img/Union3.svg" width="12" height="12" />
        </li>
      </ul>
    </el-dialog>
  </div>
</template>

<script>
import Web3 from 'web3'
import { getNetwork} from '../js/network-config'
// import { getNetwork} from "../config/network-config"

function hexStringToNumber(hexstring) {
	return parseInt(hexstring, 16)
}
function toHexString(num) {
	let v = '0x' + (parseInt(num).toString(16))
	return v
}
export default {
  name: 'Header',
  props: {
    
  },
  data() {
    return {
      selWalDiaVis: false,
    }
  },
  mounted() {
    // this.networkChanged(this.changeFunc)
  },
  methods: {
    selectWal(){
      this.selWalDiaVis = true
    },

    getData(){
      console.log('first')
    },
    get() {  // open wal
      if (window.ethereum) {
        window.ethereum.enable().then((res) => {
          // alert('walUrl:' + res[0])
          this.getETH()
        });
      } else {
        alert('Please install MetaMask wallet')
      }
    },

    changeFunc(changeType, chainId){
      // debugger
      console.log(changeType, chainId)
      if(changeType=='chainChanged'){
        this.getETH()
      }
      if(changeType=='accountsChanged'){
        this.getETH()
      }
    },

    // Monitor network changes
    networkChanged(func) {
      window.ethereum.on('chainChanged', chainId => {
          func('chainChanged', hexStringToNumber(chainId) + '');
      })
      window.ethereum.on('accountsChanged', function (accounts) {
        func('accountsChanged', accounts)
      })

      // // if you want to expose yourself to the problems associated
      // // with networkId, listen for 'networkChanged' instead
      // window.ethereum.on('networkChanged', networkId => {
      //   	//func('networkChanged', networkId);
      // })
      
      // // if you want to do as little as possible, these three lines
      // // will emulate existing behavior
      // window.ethereum.on('chainChanged', () => {
      //   	//func('chainChanged')
      // })
    },

    // Switch network
    async switchEthereumNetwork(chainId) {
      // debugger
      try {
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: toHexString(chainId) }],
        })
      } catch (e) {
        if (e.code === 4902) {
          const theNetwork = {
              ...getNetwork(chainId)
          };
          theNetwork.chainId = toHexString(chainId)
          try {
            await window.ethereum.request({
              method: 'wallet_addEthereumChain',
              params: [ theNetwork ],
            });
          } catch (addError) {
            // debugger
            console.error(addError)
          }
        }
      }
    },

    async getETH() {
      let web3 = new Web3(window.web3.currentProvider)
      console.log(web3)
      // console.log(web3.eth.getAccounts())
      let fromAddress = await web3.eth.getAccounts()
      console.log(web3.eth.getBalance(fromAddress[0]))
      console.log(fromAddress)
      web3.eth.getBalance(fromAddress[0],(err, res) => {
        if (!err) {
            alert('ETH balance==' + res/Math.pow(10,18))
            //console.log(res)
        }
      })
    },

    //ETH transfer
    async getTransfer(){
      let web3 = new Web3(window.web3.currentProvider)
      let fromAddress = await web3.eth.getAccounts()
      let amount = 0.01*Math.pow(10,18)
      let toAddress = '0x17D98A1c1D4814B03d71a08a07AF4C8CCABb7E2E'
      web3.eth.sendTransaction({
        gas: 21000,
        gasPrice: 5000000000,
        from: fromAddress[0],
        to: toAddress,
        value: amount
      }, (err, result) => {
        console.log('transferHash=',result)
      })
    },
    //Query token balance
    async getTokenBalance(){
      if(window.web3) {
        var web3 = web3 = new Web3(window.web3.currentProvider)
        let fromAddress = '0x394A64e586FC05bD28783351F14dfcc426EFD230'
        let ethContract = new web3.eth.Contract(abi.abi, '0x3d2dd604866d0ec1ddd5e8ef27848a6fc0962018')
        let balance = await ethContract.methods.balanceOf(fromAddress).call()
        alert(balance)
      }
    },
    //Direct transfer charging address
    async getTokenTransfer(){
      if(window.web3) {
        let web3 = new Web3(window.web3.currentProvider)
         let ethContract = new web3.eth.Contract(abi.abi, '0x3d2dd604866d0ec1ddd5e8ef27848a6fc0962018')
        //Transfer quantity
        let amount = 100*Math.pow(10,18)
        let fromAddress = await web3.eth.getAccounts()
        let toAddress = '0xcaD75EADAf24F41d6274E129d7aE54764d7cd8E7'
        ethContract.methods.transfer(toAddress,amount+'').send({ from: fromAddress[0] })
      }
 
    },
    //Query authorized amount
    async getAllowance(){
      if(window.web3) {
        let web3 = new Web3(window.web3.currentProvider)
        let fromAddress = '0x394A64e586FC05bD28783351F14dfcc426EFD230'
         //The ABI of all tokens can be common (ABI, contract address
        let ethContract = new web3.eth.Contract(abi.abi,'0x3d2dd604866d0ec1ddd5e8ef27848a6fc0962018')
        let toAddress = '0xcaD75EADAf24F41d6274E129d7aE54764d7cd8E7'
        let balance = await ethContract.methods.allowance(fromAddress,toAddress).call()
        console.log('Authorized Amount'+balance/Math.pow(10,18))
      }
    },
    // empower
    async getApprove(){
      if(window.web3) {
        let web3 = new Web3(window.web3.currentProvider)
        let ethContract = new web3.eth.Contract(abi.abi,'0x3d2dd604866d0ec1ddd5e8ef27848a6fc0962018')
        let amount = 100*Math.pow(10,18)
        let toAddress = '0xcaD75EADAf24F41d6274E129d7aE54764d7cd8E7'
        let fromAddress = await web3.eth.getAccounts()
        ethContract.methods.approve(toAddress,amount+'').send({ from: fromAddress[0] })
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.header{
  border-bottom: 1px solid rgba(163, 163, 163, 0.12)
  .header-con{
    height: 60px
    display: flex
    align-items: center
    .logo{
      display: flex;
      align-items: center
      .logo-text{
        font-weight: 400
        font-size: 24px
        line-height: 30px
        color: #fff
        margin-left: 8px
        font-family: 'Lexend' 
      }
    }
    .top-nav{
      margin-left: 60px
      .nav-link{
        color: #A3A3A3
        font-size: 14px
        font-weight: 500
        margin-right: 40px
      }
      .router-link-active {
        color: #fff;
      }
    }
    .head-right{
      margin-left: auto
      display: flex
      align-items: center
      .wal-btn{
        width: 126px
        height: 30px
        background: linear-gradient(90deg, #FFBE5E 6.16%, #FFA318 91.18%)
        border-radius: 100px
        color: #19191B
        font-size: 12px
        font-weight: 700
        display: flex
        align-items: center
        justify-content: center
        margin-left: 20px
        cursor: pointer
      }
    }
  }
}
</style>
<style>
.selWalDia{
  border-radius: 50px;
  background: #19191B;
  border: 1px solid rgba(163, 163, 163, 0.15);
  height: 440px;
}
.selWalDia .el-dialog__header{
  height: 82px;
  border-bottom: 1px solid rgba(163, 163, 163, 0.12);
  margin-right: 0;
  padding-top: 30px;
}
.selWalDia .el-dialog__title{
  color: #FFFFFF;
  font-size: 18px;
  padding-left: 10px;
}
.selWalDia .el-dialog__headerbtn{
  top: 16px;
  right: 10px;
}
.selWalDia .el-dialog__body{
  padding: 0;
}
.wal-list .item{
  display: flex;
  padding: 0 36px;
  height: 70px;
  justify-content: space-between;
  align-items: center;
}
.wal-list .item:hover{
  background: rgba(163, 163, 163, 0.1);
}
.wal-list .wal-name{
  display: flex;
  align-items: center;
  color: #FFFFFF;
  font-weight: 600;
  font-size: 18px;
}
.wal-list .item .arr{
  visibility: hidden;
}
.wal-list .item:hover .arr{
  visibility: visible;
}
</style>
