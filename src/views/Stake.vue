<template>
  <div class="main-bg">
    <div class="center-box">
      <div class="top">
        <router-link to="/liquidity" class="tit">
          <img alt="icon" src="../assets/img/Union1.svg" width="8" height="14" /> 
          Liquidity
        </router-link>
        <span class="text">LP(USDT/GER)</span>
      </div>
      <div class="con">
        <div class="con-tit">
          <h3>My unclaimed rewards<img alt="icon" src="../assets/img/Frame6.svg" width="16" height="16" /></h3>
          <span class="con-tit-right">
            3606,152.5 GER
          </span>
        </div>
        <div class="con-btn">
          Harvest <img alt="icon" src="../assets/img/Union3.svg" width="6" height="10" />
        </div>
        <div class="con-tit">
          <h3>My staking<img alt="icon" src="../assets/img/Frame6.svg" width="16" height="16" /></h3>
          <span class="con-tit-right">
            1500 USDT
          </span>
        </div>
        <div class="con-btn">
          Withdraw <img alt="icon" src="../assets/img/Union3.svg" width="6" height="10" />
        </div>
        <div class="con-add">
          + Add Liquidity
        </div>
        <div class="con-ipt">
          <input class="ipt" type="text" value="0">
        </div>

        <router-link to="/stakeSwap">
        <div class="stake-btn">
          Stake <img alt="icon" src="../assets/img/Union2.svg" width="6" height="10" />
        </div>
        </router-link>

      </div>
      
    </div>

  </div>
</template>

<script>
export default {
  name: 'Swap',
  props: {
    
  },
  data() {
    return {
      dialogVisible: false
    }
  },
  mounted() {

  },
  methods: {
    handleClose(){

    }
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
  height: 750px;
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
    .text{
      font-size: 14px;
      line-height: 24px;
      color: #A3A3A3;
    }
  }
  .con{
    padding: 0 40px
    .con-tit{
      display: flex
      justify-content: space-between
      align-items: center
      padding: 0 4px
      padding-top: 40px
      font-weight: 500;
      font-size: 16px;
      color: #FFFFFF
      line-height: 20px;
      h3{
        img{
          margin-left: 5px
        }
      }
      .con-tit-right{
        
      }
    }
    .con-btn{
      height: 60px;
      background: rgba(163, 163, 163, 0.12);
      border-radius: 100px;
      display: flex
      justify-content: center
      align-items: center
      margin-top: 30px
      font-weight: 600;
      font-size: 20px;
      img{
        margin-left: 10px
      }
    }
    .con-add{
      font-size: 16px;
      line-height: 20px;
      color: #FFA318;
      margin-top: 40px
    }
    .con-ipt{
      height: 90px;
      background: rgba(0, 0, 0, 0.3);
      border: 1px solid rgba(163, 163, 163, 0.12);
      border-radius: 20px;
      padding: 25px 20px
      margin-top: 28px
      .ipt{
        background: none
        border: none
        outline: none;
        font-size: 32px;
        line-height: 39px;
        color: #FFFFFF;
      }
    }
    .stake-btn{
      height: 60px
      background: linear-gradient(90deg, #FFBE5E 2.94%, #FFA318 91.18%);
      border-radius: 100px;
      font-weight: 600;
      font-size: 20px;
      color: #000000;
      margin-top: 40px
      cursor: pointer
      display: flex
      justify-content: center
      align-items: center
      img{
        margin-left: 10px
      }
    }
  }
}
</style>
