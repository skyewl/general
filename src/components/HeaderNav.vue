<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="header">
    <div class="def-container header-con">
      <h1 class="logo">
        <img alt="logo" src="../assets/img/logo.svg" width="26" height="30" />
        <span class="logo-text">General</span>
      </h1>

      <nav class="top-nav">
        <router-link class="nav-link" to="/">Trade</router-link>
        <router-link class="nav-link" to="/">Pool</router-link>
        <router-link class="nav-link" to="/">Launchpad</router-link>
        <router-link class="nav-link" to="/">DOC</router-link>
      </nav>

      <div class="head-right">
        <img alt="Wallet" src="../assets/img/Frame.svg" width="20" height="20" />
        <div class="wal-btn">Connect Wallet ></div>
      </div>
    </div>
  </div>
</template>

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
