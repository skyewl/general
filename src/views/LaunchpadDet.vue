

<template>
  <div class="det-main">
    <div class="def-container">
      <router-link to="/launchpad">
        <h6 class="top-back">
          <img alt="icon" src="../assets/img/Union1.svg" width="7" height="11" /> 
          <span>Back to Launchpad </span>
        </h6>
      </router-link>
      <div class="det-box">
        <img class="det-icon" alt="icon" src="../assets/img/image6.png" width="120" height="120" />
        <h4 class="det-tit">NEUTRA</h4>
        <p class="det-des">Neutra Finance aims to make risk-hedged, sustainable investment strategies easily accessible for anyone, anywhere through automated strategy vaults. We strive to make this process simple and easy so that anyone who wants to protect their funds and earn stable returns in any market condition can do so. Upon depositing their capital into our vaults, users can sit back and earn APY above market standards on high-performing DeFi products while the strategy will do the rest, such as optimizing returns, rebalancing, and managing liquidation risk.</p>
        <div class="time-box">
          <h5 class="time-tit">Remaining time</h5>
          <div class="time">
            <div class="time-item">
              <b>0</b>
              <span>Days</span>
            </div>
            <b>:</b>
            <div class="time-item">
              <b>5</b>
              <span>Hours</span>
            </div>
            <b>:</b>
            <div class="time-item">
              <b>26</b>
              <span>Minutes</span>
            </div>
            <b>:</b>
            <div class="time-item">
              <b>37</b>
              <span>Seconds</span>
            </div>
          </div>
        </div>
        <div class="bot-buy">
          <ul class="buy-info">
            <li class="info-row">
              <span class="lab">Status:</span>
              <span class="con green">Ongoing</span>
            </li>
            <li class="info-row">
              <span class="lab">Type:</span>
              <span class="con">Fair auction</span>
            </li>
            <li class="info-row">
              <span class="lab">Total raised:</span>
              <span class="con">$10885,124.102</span>
            </li>
            <li class="info-row">
              <span class="lab">$NEU price:</span>
              <span class="con">
                <img src="../assets/img/image7.png" width="20" height="20" alt="icon">$0.65
              </span>
            </li>
            <li class="info-row">
              <span class="lab">Circ. marketcap:</span>
              <span class="con">$569,568.5</span>
            </li>
            <li class="info-row">
              <span class="lab">FDV:</span>
              <span class="con">$61,943,010</span>
            </li>
            <li class="info-row">
              <span class="lab">End time:</span>
              <span class="con">2023-05-01</span>
            </li>
          </ul>
          <div class="buy-box">
            <h5 class="buy-tit">
              <span>Buy</span>
              <router-link class="link" to="">
                <img src="../assets/img/Frame4.svg" width="16" height="16" alt="icon" style="margin-right:10px">
                Referral Link
              </router-link>
            </h5>
            <div class="buy-ipt">
              <span>0</span>
              <b>USDC</b>
            </div>
            <p class="bal">Balance: 1893.08 USDC</p>
            <p class="usdc-row" style="margin-top:4px">
              <span>Spent</span>
              <b>0 USDC</b>
            </p>
            <p class="usdc-row">
              <span>Your referral earnings</span>
              <b>0 USDC</b>
            </p>
            <p class="usdc-row">
              <span>Pending referral earnings</span>
              <b>0 USDC</b>
            </p>            
            <div class="btn buy-btn">
              Buy 
              <img src="../assets/img/Union2.svg" width="7" height="11" alt="icon" style="margin-left:10px">
            </div>
            <div class="btn cla-btn">Claim your referral earnings</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'LacDet',
  props: {
    
  },
  data() {
    return{
      
    }
  },
  mounted() {
    
  },
  methods: {}
}
</script>

<style lang="stylus" scoped>
  .det-main{
    width: 100%;
    min-height: 88vh;
  }
  .top-back{
    display: flex
    align-items: center
    padding-top: 50px
    font-weight: 500;
    font-size: 16px;
    color: rgba(163, 163, 163, 0.5);
    cursor: pointer
    span{
      padding-left: 14px
    }
  }
  .det-box{
    height: 930px
    border: 1px solid rgba(163, 163, 163, 0.12);
    border-radius: 20px;
    margin-top: 100px
    padding: 0 50px
    margin-bottom: 80px
    .det-icon{
      position: absolute
      top: -60px;
    }
    .det-tit{
      font-family: 'Lexend';
      font-weight: 500;
      font-size: 36px;
      color: #FFFFFF;
      margin-top: 90px
    }
    .det-des{
      padding-top: 15px
      line-height: 20px;
    }
    .time-box{
      height: 90px;
      border: 1px solid rgba(163, 163, 163, 0.12);
      border-radius: 20px;
      margin-top: 50px
      display: flex
      align-items: center
      justify-content: space-between
      .time-tit{
        font-weight: 500;
        font-size: 18px;
        color: #FFFFFF;
        padding-left: 26px
      }
      .time{
        display: flex
        padding-right: 24px
        .time-item{
          display: flex
          flex-direction: column
          align-items: center
          padding: 0 24px
        }
        b{
          font-weight: 600;
          font-size: 20px;
          line-height: 30px;
          color: #FFA318;
        }
        span{
          font-weight: 600;
          font-size: 12px;
          line-height: 20px;
        }
      }
    }
    .bot-buy{
      display: flex
      justify-content: space-between
      margin-top: 50px
      .buy-info{
        padding-top: 10px
        .info-row{
          display: flex
          align-items: center
          padding-bottom: 28px
          .lab{
            width: 178px
            font-weight: 500;
            font-size: 16px;
            line-height: 30px;
          }
          .con{
            font-weight: 600;
            font-size: 16px;
            line-height: 30px;
            color: #FFFFFF;
            display: flex
            align-items: center
          }
          .green{
            color: #29B478;
          }
        }
      }
      .buy-box{
        width: 510px;
        height: 440px;
        background: rgba(163, 163, 163, 0.05);
        border: 1px solid rgba(163, 163, 163, 0.12);
        border-radius: 20px;
        padding: 0 36px
        .buy-tit{
          padding-top: 20px
          display: flex
          justify-content: space-between
          align-items: center
          span{
            font-weight: 500;
            font-size: 24px;
            line-height: 30px;
            color: #FFFFFF;
          }
          .link{
            display: flex
            align-items: center
            font-weight: 500;
            font-size: 14px;
            line-height: 17px;
            color: #FFA318;
          }
        }
        .buy-ipt{
          height: 60px
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(163, 163, 163, 0.12);
          border-radius: 10px;
          margin-top: 22px
          display: flex
          justify-content: space-between
          align-items: center
          padding: 0 16px
          span{
            font-weight: 600;
            font-size: 24px;
            line-height: 30px;
            color: rgba(163, 163, 163, 0.5);
          }
          b{
            font-weight: 600;
            font-size: 18px;
            line-height: 30px;
            color: #FFFFFF;
          }
        }
        .bal{
          font-weight: 500;
          font-size: 14px;
          line-height: 30px;
          color: rgba(163, 163, 163, 0.5);
          text-align: right
          padding-top: 2px
        }
        .usdc-row{
          display: flex
          justify-content: space-between
          align-items: center
          line-height: 30px;
          span{
            font-weight: 500;
          }
          b{
            font-weight: 600;
            color: #FFFFFF;
          }
        }
        .btn{
          height: 50px;
          border-radius: 100px;
          display: flex
          justify-content: center
          align-items: center
          margin-top: 20px
          font-weight: 600;
          font-size: 18px;
          cursor: pointer
        }
        .buy-btn{
          background: linear-gradient(90deg, #FFBE5E 2.94%, #FFA318 91.18%);
          color: #000000;
        }
        .cla-btn{
          background: rgba(163, 163, 163, 0.12);
        }
      }
    }
  }
</style>
