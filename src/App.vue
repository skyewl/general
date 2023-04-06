<script setup>
// import Web3 from 'web3'
import HeaderNav from './components/HeaderNav.vue'
import FooterLink from './components/FooterLink.vue'
</script>

<template>
  
  <header>
    <HeaderNav></HeaderNav>
  </header>

  <main>
    <router-view></router-view>
  </main>

  <footer>
    <FooterLink />
  </footer>
</template>

<style scoped>

</style>
