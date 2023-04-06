<template>
  <div class="trade-main">
    <div class="center-box">
      <div class="top">
        <div class="tit">
          <h2>Exchange</h2>
          <p>Trade tokens in an instant</p>
        </div>
        <div class="icons">
          <img alt="icon" src="../assets/img/Frame1.svg" width="20" height="20" />
          <img style="margin-left:26px" alt="icon" src="../assets/img/Frame2.svg" width="26" height="26" />
        </div>
      </div>
      <div class="con">
        <div class="con-tit">
          <h3>Swap USDT to receive BTC</h3>
          <div class="con-tit-right" @click="sliOpen">
            <span>Slippage: </span> 
            <span style="color:#fff">0.5%</span>
            <img style="margin-left:4px" alt="icon" src="../assets/img/Frame3.svg" width="16" height="16" />
          </div>
        </div>
        <div class="exc-box" style="margin-top:24px">
          <div class="currency-type" @click="selectTok">
            <img alt="icon" src="../assets/img/USDT.svg" width="25" height="24" />
            <span class="text">USDT</span>
            <img alt="icon" src="../assets/img/Union.svg" width="11" height="7" />
          </div>
          <!-- <input type="text" value="0"> -->
        </div>
        <div class="exc-icon">
          <img alt="icon" src="../assets/img/Group1.svg" width="40" height="41" />
        </div>
        <div class="exc-box">
          <div class="currency-type">
            <img alt="icon" src="../assets/img/BTC.svg" width="25" height="24" />
            <span class="text">BTC</span>
            <img alt="icon" src="../assets/img/Union.svg" width="11" height="7" />
          </div>
          <!-- <input type="text" value="0"> -->
        </div>
        <div class="exc-bot">
          <span>Price</span>
          <span>0 USDT ≈ - BTC</span>
        </div>

        <div class="swap-btn">
          Swap <img alt="icon" src="../assets/img/Union2.svg" width="7" height="11" style="margin-left:8px" />
        </div>

      </div>
      
    </div>

    <el-dialog
      v-model="selTokDiaVis"
      title="Select Token"
      width="500px"
      class="selTokDia"
    >
      <el-input class="sea-ipt" placeholder="Search name or paste address" v-model="address">
        <template #prefix>
          <img alt="icon" src="../assets/img/Frame10.svg" width="20" height="20" style="margin-right:8px">
        </template>
      </el-input>
      <h6 class="tit">Token List</h6>
      <ul class="tok-list">
        <li class="item">
          <span class="tok-name">
            <img alt="icon" src="../assets/img/BTC.svg" width="26" height="26" />
            <b>BTC</b> 
            Bitcoin
          </span>
          <span class="bla">0.18</span>
        </li>
        <li class="item">
          <span class="tok-name">
            <img alt="icon" src="../assets/img/ETH.svg" width="26" height="26" />
            <b>ETH</b> 
            Ethereum
          </span>
          <span class="bla">0.18</span>
        </li>
      </ul>
    </el-dialog>

    <el-dialog
      v-model="sliDiaVis"
      title="Slippage Tolerance"
      width="500px"
      class="selTokDia sli"
    >
      <div class="sli-sels">
        <span class="sel-item cur">0.1%</span>
        <span class="sel-item">0.5%</span>
        <span class="sel-item">1.0%</span>
        <el-input class="sel-ipt" placeholder="1.0" v-model="address">
          <template #suffix>
            <span>%</span>
          </template>
        </el-input>
      </div>
      <p class="sli-tip">Your transaction may fail</p>
      <div class="sli-btn">Confirm <img alt="icon" src="../assets/img/Union2.svg" width="7" height="11" style="margin-left:8px" /></div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'Swap',
  props: {
    
  },
  data() {
    return {
      selTokDiaVis: false,
      address: '',
      sliDiaVis: false
    }
  },
  mounted() {

  },
  methods: {
    selectTok(){
      this.selTokDiaVis = true
    },
    sliOpen(){
      this.sliDiaVis = true
    }
  }
}
</script>

<style lang="stylus" scoped>
.trade-main{
  width: 100%;
  min-height: 88vh;
  background-image: url(../assets/img/r229.png);
  background-size: 100%;
  background-repeat: no-repeat;
  display: flex
  justify-content: center
  align-items: center
}
.center-box{
  width: 580px;
  height: 610px;
  background: rgba(25, 25, 27, 0.8);
  border: 1px solid rgba(163, 163, 163, 0.15);
  border-radius: 50px;
  margin:0 auto;
  .top{
    height: 120px
    padding: 0 40px
    display: flex
    align-items: center
    justify-content: space-between
    border-bottom: 1px solid rgba(163, 163, 163, 0.12);
    .tit{
      h2{
        font-family: 'Lexend';
        font-weight: 500;
        font-size: 24px;
        color: #FFFFFF;
      }
    }
    .icons{
      display: flex
      align-items: center
    }
  }
  .con{
    padding: 0 40px
    .con-tit{
      display: flex
      justify-content: space-between
      align-items: center
      padding: 0 4px
      padding-top: 24px
      h3{
        font-weight: 500;
        font-size: 16px;
        color: #FFFFFF
      }
      .con-tit-right{
        display: flex
        align-items: center
      }
    }
    .exc-box{
      height: 90px;
      background: rgba(0, 0, 0, 0.3);
      border: 1px solid rgba(163, 163, 163, 0.1);
      border-radius: 20px;
      padding: 0 16px
      display: flex
      .currency-type{
        display: flex
        align-items: center
        border-right: 1px solid rgba(163, 163, 163, 0.1);
        width: 130px
        cursor: pointer
        .text{
          font-family: 'Lexend';
          font-weight: 500;
          font-size: 18px;
          color: #FFFFFF;
          padding: 0 6px
        }
      } 
    }
    .exc-icon{
      display: flex
      justify-content: center
      padding: 8px 0
    }
    .exc-bot{
      display: flex
      justify-content: space-between
      font-weight: 500;
      font-size: 16px;
      color: #FFFFFF
      padding: 0 4px
      padding-top: 24px
    }
    .swap-btn{
      height: 60px
      background: linear-gradient(90deg, #FFBE5E 2.94%, #FFA318 91.18%);
      border-radius: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      color: #000000;
      margin-top: 24px
      cursor: pointer
    }
  }
}
</style>
<style>
.selTokDia{
  border-radius: 50px;
  background: #19191B;
  border: 1px solid rgba(163, 163, 163, 0.15);
  height: 750px;
}
.selTokDia .el-dialog__header{
  height: 82px;
  border-bottom: 1px solid rgba(163, 163, 163, 0.12);
  margin-right: 0;
  padding-top: 30px;
}
.selTokDia .el-dialog__title{
  color: #FFFFFF;
  font-size: 18px;
  padding-left: 10px;
}
.selTokDia .el-dialog__headerbtn{
  top: 16px;
  right: 10px;
}
.selTokDia .el-dialog__body{
  padding: 0;
}
.selTokDia .sea-ipt{
  width: 430px;
  height: 60px;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(163, 163, 163, 0.12);
  border-radius: 20px;
  margin-top: 30px;
  margin-left: 35px;
}
.selTokDia .sea-ipt .el-input__wrapper{
  background: none;
  border: none;
  box-shadow: none;
}
.selTokDia .sea-ipt .el-input__inner{
  color: #fff;
  font-size: 16px;
}
.selTokDia .tit{
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #A3A3A3;
  padding: 22px 0 18px 38px;
  border-bottom: 1px solid rgba(163, 163, 163, 0.12);;
}
.tok-list .item{
  display: flex;
  padding: 0 36px;
  height: 64px;
  justify-content: space-between;
  align-items: center;
  padding: 0 35px;
}
.tok-list .item:hover{
  background: rgba(163, 163, 163, 0.1);
}
.tok-list .item .tok-name{
  display: flex;
  align-items: center;
  font-size: 12px;
}
.tok-list .item .tok-name b{
  color: #FFFFFF;
  font-weight: 600;
  font-size: 18px;
  padding: 0 14px 0 10px;
}
.tok-list .item .bla{
  font-size: 14px;
  font-weight: 500;
}
.sli{
  height: 300px;
}
.sli-sels{
  padding: 32px 0 0 36px;
  display: flex;
}
.sli-sels .sel-item{
  background: #19191B;
  border: 2px solid rgba(163, 163, 163, 0.5);
  border-radius: 10px;
  margin-right: 15px;
  font-weight: 700;
  font-size: 16px;
  color: #fff;
  width: 80px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.sli-sels .sel-item.cur{
  border: 2px solid #FFA318;
  color: #FFA318;
}
.sli-sels .sel-ipt{
  width: 140px;
  height: 50px;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(163, 163, 163, 0.12);
  border-radius: 10px;
}
.sli-sels .sel-ipt .el-input__wrapper{
  background: none;
  border: none;
  box-shadow: none;
}
.sli-sels .sel-ipt .el-input__inner{
  color: #fff;
  font-size: 14px;
}
.sli-tip{
  font-weight: 500;
  color: #DA2929;
  padding-left: 36px;
  padding-top: 14px;
}
.sli-btn{
  width: 170px;
  height: 50px;
  background: linear-gradient(90deg, #FFBE5E 2.94%, #FFA318 91.18%);
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: #000000;
  margin: 0 auto;
  margin-top: 16px;
  cursor: pointer;
}
</style>
