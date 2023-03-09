<template>
  <div class="footer">
    <div class="def-container footer-con">
      <div class="footer-links">
        <a class="link" href="">
          <img alt="logo" src="../assets/img/Vector1.svg" width="24" height="21" />
        </a>
        <a class="link" href="">
          <img alt="logo" src="../assets/img/Vector2.svg" width="26" height="25" />
        </a>
        <a class="link" href="">
          <img alt="logo" src="../assets/img/Vector3.svg" width="22" height="25" />
        </a>
        <a class="link" href="">
          <img alt="logo" src="../assets/img/Vector4.svg" width="25" height="25" />
        </a>
      </div>
      <div class="footer-logo">
        <img alt="logo" src="../assets/img/XMLID_15.svg" width="26" height="30" />
        <span class="logo-text">General</span>
      </div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.footer{
  border-top:  1px solid rgba(163, 163, 163, 0.12)
  .footer-con{
    display: flex
    height: 90px
    justify-content: space-between
    align-items: center
    .footer-links{
      display: flex
      align-items: center
      .link{
        margin-right: 34px
      }
    }
    .footer-logo{
      display: flex
      align-items: center
      .logo-text{
        font-size: 24px
        margin-left: 8px
      }
    }
    
  }
}
</style>
