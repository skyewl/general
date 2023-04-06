<template>
  <div class="main-bg">
    <div class="def-container index-main">
      <h3 class="index-tit1">Arbitrum</h3>
      <h2 class="index-tit2">
        Decentralized <br>
        Perpetual Exchange
      </h2>
      <p class="index-des">
        General is adecentralized exchange in service of Arbitrum ecosystem, <br>
        incentivizing each contributor through mining mechanisms.
      </p>
      <div class="lau-btn">
        <span>Launch App</span>
        <img src="../assets/img/Union2.svg" width="7" height="11" alt="icon" style="margin-left:10px">
      </div>
      <div class="num-box box1">
        <span class="text">
          <b>$13.6</b>
          <br>
          GER Price
        </span>
      </div>
      <div class="num-box box2">
        <span class="text">
          <b>$1.26m</b>
          <br>
          Total Liquidity
        </span>
      </div>
      <div class="num-box box3">
        <span class="text">
          <b>1,630,705</b>
          <br>
          Total Transactions
        </span>
      </div>
      <div class="num-box box4">
        <span class="text">
          <b>$2.96B</b>
          <br>
          Total Volume
        </span>
      </div>
      <div class="num-box box5">
        <span class="text">
          <b>208,981</b>
          <br>
          Total Users
        </span>
      </div>
      <div class="num-box box6">
        <span class="text">
          <b>7,853</b>
          <br>
          Total Pairs
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
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
  background-position: 0 -200px 
}
.index-main{
  padding-top: 120px
  height: 820px
  .index-tit1{
    font-weight: 600;
    font-size: 20px;
    line-height: 20px;
    color: #FFA318;
  }
  .index-tit2{
    font-family: 'Lexend';
    font-weight: 500;
    font-size: 50px;
    line-height: 54px;
    color: #FFFFFF;
    padding-top: 10px
  }
  .index-des{
    font-size: 16px;
    line-height: 24px;
    padding-top: 24px
  }
  .lau-btn{
    width: 170px;
    height: 50px;
    background: linear-gradient(90deg, #FFBE5E 2.94%, #FFA318 91.18%);
    border-radius: 100px;
    display: flex
    align-items: center
    justify-content: center
    margin-top: 40px
    cursor: pointer
    span{
      font-weight: 700;
      font-size: 16px;
      color: #000000;
    }
  }
  .num-box{
    position: absolute
    display: flex
    justify-content: center
    align-items: center
    background-image: url(../assets/img/Polygon.png)
    background-repeat: no-repeat;
    background-size: contain
    background-position: center
    .text{
      text-align: center
      b{
        font-family: 'Lexend';
        font-weight: 500;
        font-size: 36px;
        line-height: 40px;
        color: #FFFFFF;
        margin-bottom: 10px
        display: inline-block
      }
    }
  }
  .box1{
    width: 220px
    height: 220px
    left: 575px
    top : 75px
  }
  .box2{
    width: 260px
    height: 260px
    left: 460px
    top : 276px
  }
  .box3{
    width: 320px
    height: 320px
    left: 710px
    top : 218px
  }
  .box4{
    width: 260px
    height: 260px
    left: 328px
    top : 494px
  }
  .box5{
    width: 300px
    height: 300px
    left: 580px
    top : 490px
  }
  .box6{
    width: 220px
    height: 220px
    left: 872px
    top : 508px
  }
}
</style>
