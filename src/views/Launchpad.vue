<template>
  <div class="lau-main">
    <div class="def-container">
      <h2 class="tit2">Launchpad</h2>
      <p class="des">Custom-built infrastructure for Arbitrum native public sales</p>
      <router-link to="/launchpadDet">
        <div class="lau-box">
          <div class="left">
            <h3 class="left-tit">
              <img alt="icon" src="../assets/img/image2.png" width="50" height="50" />
              <span>FCTR</span>
            </h3>
            <p class="left-text">Hashflow, A Decentralized Exchange Connecting Traders with Professional Market Makers.</p>
          </div>
          <div class="right">
            <div class="right-item">
              <p class="lab">Type</p>
              <h4 class="con">Fair auction</h4>
            </div>
            <div class="right-item" style="width:160px">
              <p class="lab">Status</p>
              <h4 class="con red">Ended</h4>
            </div>
            <div class="right-item" style="width:228px">
              <p class="lab">Total raised</p>
              <h4 class="con">885,124.102 BUSD</h4>
            </div>
            <div class="right-item">
              <p class="lab">Your allocation</p>
              <h4 class="con">0.0</h4>
            </div>
          </div>
        </div>
      </router-link>
      <router-link to="/launchpadDet">
        <div class="lau-box">
          <div class="left">
            <h3 class="left-tit">
              <img alt="icon" src="../assets/img/image3.png" width="50" height="50" />
              <span>NEU</span>
            </h3>
            <p class="left-text">Anchor protocol, a savings protocol offering low-volatile yields on Terra stablecoin deposits.</p>
          </div>
          <div class="right">
            <div class="right-item">
              <p class="lab">Type</p>
              <h4 class="con">Fair auction</h4>
            </div>
            <div class="right-item" style="width:160px">
              <p class="lab">Status</p>
              <h4 class="con green">Ongoing</h4>
            </div>
            <div class="right-item" style="width:228px">
              <p class="lab">Total raised</p>
              <h4 class="con">109,562 WETH</h4>
            </div>
            <div class="right-item">
              <p class="lab">Your allocation</p>
              <h4 class="con">0.0</h4>
            </div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Launchpad',
  props: {
    
  },
  data() {
    return {
      
    }
  },
  mounted() {
    
  },
  methods: {}
}
</script>

<style lang="stylus" scoped>
.lau-main{
  width: 100%;
  min-height: 88vh;
  background-image: url(../assets/img/r229.png);
  background-size: 100%;
  background-repeat: no-repeat;
}
.tit2{
  padding-top: 56px;
}
.des{
  margin-bottom: 50px;
}
.lau-box{
  height: 180px;
  border: 1px solid rgba(163, 163, 163, 0.12);
  background: rgba(163, 163, 163, 0.05);
  border-radius: 20px;
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  .left{
    padding-left: 36px;
    .left-tit{
      display: flex
      align-items: center
      span{
        font-weight: 600;
        font-size: 24px;
        color: #fff
        padding-left: 12px
      }
    }
    .left-text{
      width: 220px
      font-size: 12px
      padding-top: 12px
    }
  }
  .right{
    height: 100px
    border-left: 1px solid rgba(163, 163, 163, 0.12);
    margin-left: 36px
    display: flex
    align-items: center
    padding: 0 40px 0 48px
    .right-item{
      min-width: 180px
      padding-right: 20px
      .lab{
        font-weight: 500;
      }
      .con{
        font-weight: 600;
        font-size: 16px;
        color: #fff
        margin-top: 12px
      }
      .red{
        color: #DA2929
      }
      .green{
        color: #29B478
      }
    }
  }
}
</style>
