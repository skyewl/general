<template>
  <div class="main-bg">
    <!-- trading -->
    <div class="def-container trading-con">
      <div class="total">
        <div class="inpool">
          <h6 class="volume">Total volume(In pool)</h6>
          <h3 class="money">$212,406.898</h3>
          <p class="des">After the withdrawal of your rewards, you will lose the transaction mining weight</p>
        </div>
        <div class="with">
          <h6>Your withdrawable rewards</h6>
          <b>1,708,895.2 GER</b>
          <div class="btn">
            Withdraw All
            <img src="../assets/img/Union2.svg" width="7" height="11" alt="icon" style="margin-left:10px">
          </div>
        </div>
      </div>
      <h2 class="pool-tit">Trading Pool</h2>
      <div class="pool-box">
        <div class="tit">
          <span class="td td1">Pair</span>
          <span class="td td2">Rewarded</span>
          <span class="td td3">Reward per block</span>
          <span class="td td4">Total volume</span>
          <span class="td td5">Current</span>
          <span class="td td6">APY</span>
          <span class="td td7">My Transaction</span>
          <span class="td td8">Unclaimed rewards</span>
        </div>
        <div class="row" v-for="item in poolList" :key="item">
          <span class="td td1 cur">
            <img src="../assets/img/USDT.svg" width="30" height="30" alt="icon">
            <img src="../assets/img/BTC.svg" width="30" height="30" alt="icon" style="margin-left:-8px">
            <b class="cur-t">USDT/BTCK</b>
          </span>
          <span class="td td2">3,775,341 GER</span>
          <span class="td td3">0.1 GER</span>
          <span class="td td4">$192,293,909</span>
          <span class="td td5">$22,083,625</span>
          <span class="td td6 per">0.53%</span>
          <span class="td td7">$150.56</span>
          <span class="td td8">50 GER</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Trade',
  props: {
    
  },
  data() {
    const generateData = _ => {
      const data = [];
      for (let i = 1; i <= 10; i++) {
        data.push({
          key: i,
        });
      }
      return data;
    };
    return {
      poolList: generateData()
    }
  },
  mounted() {
    // this.networkChanged(this.changeFunc)
    
  },
  methods: {}
}
</script>

<style lang="stylus" scoped>
.main-bg{
  width: 100%;
  min-height: 88vh;
  background-image: url(../assets/img/r229.png);
  background-size: 100%;
  background-repeat: no-repeat;
}
.trading-con{
  padding-bottom: 98px
}
.total{
  display: flex;
  align-items: center;
  padding-top: 46px
  .inpool{
    width: 750px;
    height: 240px;
    background: linear-gradient(90deg, rgba(163, 163, 163, 0.125) 1.27%, rgba(0, 0, 0, 0) 99.09%);
    border: 1px solid rgba(163, 163, 163, 0.12);
    border-radius: 20px;
    padding: 33px 43px
    .volume{
      font-weight: 500;
      font-size: 18px;
      line-height: 30px;
      color: #FFA318;
    }
    .money{
      font-family: 'Lexend';
      font-weight: 500;
      font-size: 40px;
      line-height: 30px;
      color: #FFFFFF;
      padding-top: 23px
    }
    .des{
      font-size: 14px;
      line-height: 20px;
      color: #A3A3A3;
      margin-top: 68px
    }
  }
  .with{
    width: 360px;
    height: 360px;
    margin-left: 15px
    background-image: url(../assets/img/Polygon6.png);
    background-position: center
    background-repeat: no-repeat;
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    h6{
      font-size: 14px;
      line-height: 17px;
      color: #FFA318;
    }
    b{
      font-family: 'Lexend';
      font-weight: 500;
      font-size: 30px;
      line-height: 38px;
      color: #FFFFFF;
      margin-top: 15px
    }
    .btn{
      width: 170px;
      height: 46px;
      background: linear-gradient(90deg, #FFBE5E 6.16%, #FFA318 91.18%);
      border-radius: 100px;
      display: flex
      justify-content: center
      align-items: center
      font-weight: 700;
      font-size: 16px;
      color: #19191B;
      margin-top: 25px
      cursor pointer
    }
  }
}
.pool-tit{
  font-weight: 500;
  font-size: 18px;
  line-height: 30px;
  color: #FFFFFF;
  padding-top: 15px
}
.pool-box{
  width: 100%
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(163, 163, 163, 0.12);
  border-radius: 20px;
  height: 960px
  margin-top: 20px
  .tit{
    height: 60px
    font-weight: 500;
    font-size: 14px;
    color: #A3A3A3;
    display: flex
    align-items: center
  }
  .row{
    height: 90px
    border-top: 1px solid rgba(163, 163, 163, 0.12);
    display: flex
    align-items: center
    font-weight: 500;
    font-size: 14px;
    line-height: 30px;
    color: #FFFFFF;
  }
  .td{
    padding-left: 20px
    flex-shrink: 0
  }
  .td1{
    width: 206px
  }
  .td2{
    width: 136px
  }
  .td3{
    width: 136px
  }
  .td4{
    width: 136px
  }
  .td5{
    width: 126px
  }
  .td6{
    width: 86px
  }
  .td7{
    width: 124px
  }
  .cur{
    display: flex
    align-items: center
    .cur-t{
      padding-left: 8px
    }
  }
  .per{
    color: rgba(163, 163, 163, 0.6);
  }
}
</style>
