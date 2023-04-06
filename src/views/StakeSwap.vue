
<template>
  <div class="main-bg">
    <div class="center-box">
      <div class="top">
        <router-link to="/stake" class="tit">
          <img alt="icon" src="../assets/img/Union1.svg" width="8" height="14" /> 
          Add Liquidity
        </router-link>
      </div>
      <div class="con">
        <p class="con-tip">
          <b>Tip: </b>
          By providing liquidity, you can get your LP tokens. Stake your LP tokens and then get your KST rewards that the amount of rewards is calculated based on your liquidity proportion in the corresponding mining pool, and the user transaction fees will go into the community development fund pool for project development and KST repurchase.
        </p>
        <div class="con-tit">
          <h3>Swap USDT to receive BTC</h3>
          <div class="con-tit-right">
            <span>Slippage: </span> 
            <span style="color:#fff">0.5%</span>
            <img style="margin-left:4px" alt="icon" src="../assets/img/Frame3.svg" width="16" height="16" />
          </div>
        </div>
        <div class="exc-box" style="margin-top:24px">
          <div class="currency-type">
            <img alt="icon" src="../assets/img/USDT.svg" width="25" height="24" />
            <span class="text">USDT</span>
            <img alt="icon" src="../assets/img/Union.svg" width="11" height="7" />
          </div>
          <input class="ipt" type="text" value="10">
        </div>
        <div class="exc-icon">
          <img alt="icon" src="../assets/img/Frame7.svg" width="40" height="40" />
        </div>
        <div class="exc-box">
          <div class="currency-type">
            <img alt="icon" src="../assets/img/BTC.svg" width="25" height="24" />
            <span class="text">BTC</span>
            <img alt="icon" src="../assets/img/Union.svg" width="11" height="7" />
          </div>
          <input class="ipt dis" type="text" disabled value="0.000364833">
        </div>
        <p class="pri">Prices and pool share</p>
        <div class="exc-bot">
          <span>
            <b>0.0000364834</b> <br>
            BTCK / USDT
          </span>
          <span>
            <b>27409.7</b> <br>
            USDT / BTCK
          </span>
          <span>
            <b>0.88%</b> <br>
            Share of Pool
          </span>
        </div>

        <div class="conwal-btn">
          Connect Wallet <img alt="icon" src="../assets/img/Union2.svg" width="6" height="10" />
        </div>

      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'stakeSwap',
  props: {
    
  },
  data() {
    return {
      
    }
  },
  mounted() {

  },
  methods: {
    
  }
}
</script>

<style lang="stylus" scoped>
.main-bg{
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
  height: 930px;
  background: rgba(25, 25, 27, 0.8);
  border: 1px solid rgba(163, 163, 163, 0.15);
  border-radius: 50px;
  margin: 0 auto;
  .top{
    height: 120px
    padding: 0 40px
    display: flex
    align-items: center
    justify-content: space-between
    border-bottom: 1px solid rgba(163, 163, 163, 0.12);
    .tit{
      font-family: 'Lexend';
      font-weight: 500;
      font-size: 24px;
      line-height: 30px;
      color: #FFFFFF;
      display: flex
      align-items: center
      img{
        margin-right: 16px
      }
    }
  }
  .con{
    padding: 0 40px
    .con-tip{
      padding-top: 28px
      line-height: 20px;
      b{
        font-weight: 700;
        color: #FFA318;
      }
    }
    .con-tit{
      display: flex
      justify-content: space-between
      align-items: center
      padding: 0 4px
      padding-top: 36px
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
      align-items: center
      .currency-type{
        display: flex
        align-items: center
        border-right: 1px solid rgba(163, 163, 163, 0.1);
        width: 124px
        height: 88px
        flex-shrink: 0
        .text{
          font-family: 'Lexend';
          font-weight: 500;
          font-size: 18px;
          color: #FFFFFF;
          padding: 0 6px
        }
      }
      .ipt{
        background: none
        border: none
        outline: none;
        font-size: 32px;
        line-height: 39px;
        color: #FFFFFF;
        padding: 0 18px
      }
      .ipt.dis{
        color: rgba(163, 163, 163, 0.5);
      }
    }
    .exc-icon{
      display: flex
      justify-content: center
      padding: 8px 0
    }
    .pri{
      margin-top: 40px
      font-size: 16px;
      line-height: 20px;
      font-weight: 500;
    }
    .exc-bot{
      display: flex
      justify-content: space-around
      align-items: center
      border: 1px solid rgba(163, 163, 163, 0.12);
      border-radius: 20px;
      margin-top: 28px
      height: 120px;
      color: rgba(163, 163, 163, 0.6);
      span{
        text-align: center
      }
      b{
        font-size: 16px;
        font-weight: 600;
        color: #FFFFFF
      }
    }
    .conwal-btn{
      height: 60px
      background: linear-gradient(90deg, #FFBE5E 2.94%, #FFA318 91.18%);
      border-radius: 100px;
      font-weight: 600;
      font-size: 20px;
      color: #000000;
      margin-top: 40px
      cursor: pointer
      display: flex
      align-items: center
      justify-content: center
      img{
        margin-left: 10px
      }
    }
  }
}
</style>
