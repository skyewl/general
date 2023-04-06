<template>
  <div class="main-bg">
    <!-- trading -->
    <div class="def-container trading-con">
      <div class="total">
        <div class="inpool">
          <h6 class="volume">TVL(Liquidity pool)</h6>
          <h3 class="money">$95,368.28</h3>
          <p class="des">GER rewards can be withdrawn from liquidity mining pool anytime. After your withdrawal, mining weight remains unchanged</p>
        </div>   
      </div>
      <div class="pool-tit">
        <div class="tab">
          <span class="cur">Processing</span>
          <span>Closed</span>
        </div>
        <div class="select">
          <span class="selected">
            <img src="../assets/img/Frame5.svg" width="20" height="20" alt="icon">
            My Staked
          </span>
          <span>
            <img src="../assets/img/Ellipse30.svg" width="20" height="20" alt="icon">
            Double Pool
          </span>
        </div>
      </div>
      <div class="pool-box">
        <div class="tit">
          <span class="td td1">Pair</span>
          <span class="td td2">TVL</span>
          <span class="td td3">Reward per block</span>
          <span class="td td4">Avg weekly rewards</span>
          <span class="td td5">APY</span>
          <span class="td td6">My unclaimed rewards</span>
        </div>
        <div class="row" v-for="item in poolList" :key="item">
          <span class="td td1 cur">
            <img src="../assets/img/USDT.svg" width="30" height="30" alt="icon">
            <img src="../assets/img/BTC.svg" width="30" height="30" alt="icon" style="margin-left:-8px">
            <b class="cur-t" @click="gotoStake">USDT/BTCK</b>
          </span>
          <span class="td td2">$192,293</span>
          <span class="td td3">12 GER</span>
          <span class="td td4">3,775,341 GER</span>
          <span class="td td5 per">325.02%</span>
          <span class="td td6">50 GER</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pool',
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
    
  },
  methods: {
    gotoStake(){
      this.$router.push({
        path: '/stake'
      })
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
}
.trading-con{
  padding-bottom: 98px
}
.total{
  display: flex;
  align-items: center;
  padding-top: 46px
  .inpool{
    width: 100%;
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
}
.pool-tit{
  display: flex
  justify-content: space-between
  align-items: center
  padding-top: 55px
  .tab{
    font-weight: 500;
    font-size: 16px;
    line-height: 30px;
    color: #A3A3A3;
    display: flex
    span{
      padding: 8px 28px
    }
    .cur{
      background: rgba(0, 0, 0, 0.25);
      border: 1px solid rgba(163, 163, 163, 0.12);
      border-radius: 100px;
      color: #FFFFFF;
    }
  }
  .select{
    display: flex
    span{
      display: flex
      align-items: center
      padding-left: 30px
      img{
        margin-right: 8px
      }
    }
  }
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
    width: 140px
  }
  .td3{
    width: 176px
  }
  .td4{
    width: 206px
  }
  .td5{
    width: 152px
  }
  .cur{
    display: flex
    align-items: center
    .cur-t{
      padding-left: 8px
      text-decoration: underline;
      color: #FFA318;
      cursor: pointer
    }
  }
  .per{
    color: #29B478;
  }
}
</style>
